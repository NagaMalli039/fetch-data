import { getConnection } from '~/server/db';

export default defineEventHandler(async (event) => {

    // readBody - data by default 
  const body = await readBody(event);

  console.log(body, 'body data');

  const { email, password } = body;

  try {
    const connection = await getConnection();
    
    const [rows] = await connection.execute(
      'SELECT * FROM patients WHERE email = ? AND password = ?', 
      [email, password]
    );
                                             
    connection.release();

    if (rows.length > 0) {
    //   return { success: true, message: 'Login successful', user: rows[0] };
    return { success: true, message: 'Login successful', name: rows[0].name, email: rows[0].email };

    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  } catch (err) 
  {
    console.error('Error logging in:', err);
    return { success: false, error: 'Failed to login' };
  }
});
