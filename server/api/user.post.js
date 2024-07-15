import { getConnection } from '~/server/db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { firstname, lastname, dob, email, age } = body;

  // Ensure the date string is in 'YYYY-MM-DD' format
  const formattedDob = new Date(dob);
  if (isNaN(formattedDob)) {
    return { error: 'Invalid date format' };
  }
  const yyyy = formattedDob.getFullYear();
  const mm = String(formattedDob.getMonth() + 1).padStart(2, '0');
  const dd = String(formattedDob.getDate()).padStart(2, '0');
  const dbFormattedDob = `${yyyy}-${mm}-${dd}`;

  try {
    const connection = await getConnection();
    console.log(body, 'Body');
    const [result] = await connection.execute(
      'INSERT INTO user (firstname, lastname, email, age, dob) VALUES (?, ?, ?, ?, ?)',
      [firstname, lastname, email, age, dbFormattedDob]
    );
    connection.release();
    return result;
  } catch (err) {
    console.error('Error inserting user:', err);
    return { error: 'Failed to insert user' };
  }
});
