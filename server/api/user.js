import {getConnection} from '~/server/db';

export default defineEventHandler(async (event) => {
    try {
        
        const connection = await getConnection();
        const [rows] = await connection.execute('SELECT * FROM user');
        connection.release();
        console.log('data from server console server folder',rows)
        return rows;

    } catch (err) {
        console.error('Error fetching users:', err);
        return {error: 'Failed to fetch users'};
    }
});
