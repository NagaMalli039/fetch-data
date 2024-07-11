import {getConnection} from '~/server/db';

export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    try {
        
        const connection = await getConnection();
        // const [rows] = await connection.execute(`DELETE FROM user where user_id='${body.id}'`);
        const [rows] = await connection.execute('DELETE FROM user WHERE user_id = ?', [body.id]);

        console.log(user_id, 'id')

        connection.release();
        
        console.log('data from server console server folder',rows)
        return rows;

    } catch (err) {
        console.error('Error fetching users:', err);
        return {error: 'Failed to fetch users'};
    }

});