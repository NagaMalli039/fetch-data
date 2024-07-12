import {getConnection} from '~/server/db';

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const connection = await getConnection();

        const [result] = await connection.execute(`INSERT INTO user (firstname,lastname,email,age,dob) VALUES ('${body.firstname}','${body.lastname}','${body.email}','${body.age}','${body.dob}')`);
        connection.release();
        // console.log(rows)
        return result;

    } catch (err) {
        
        console.error('Error fetching users:', err );

        return {error: 'Failed to fetch users'};
    }
});