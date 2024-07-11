import { getConnection } from '~/server/db';

export default defineEventHandler(async (event) => {

  const body = await readBody(event);

  const { id, firstname, lastname, email, age, dob } = body;

    console.log( id, firstname, lastname, email, age, dob,'data')

  try {
    const connection = await getConnection();
    const [result] = await connection.execute(`UPDATE user SET firstname = ?, lastname = ?, email = ?, age = ? WHERE user_id = ?`,
      [firstname, lastname, email, age, id] ); 

    //const [result] = await connection.execute(`INSERT INTO user (firstname,lastname,email,age,dob) VALUES ('${body.firstname}','${body.lastname}','${body.email}','${body.age}','${body.dob}')`);
        

    //  `UPDATE user SET firstname = '${body.firstname}', lastname = '${body.lastname}', email = '${body.email}', age = '${body.age}', dob = '${body.dob}' 

    //   WHERE user_id = '${body.id}'`);
    
    connection.release();
    console.log('Data from server console server folder:', result);
    return result;

  } catch (err) {
    console.error('Error updating user:', err);
    return { error: 'Failed to update user' };
  }
});
