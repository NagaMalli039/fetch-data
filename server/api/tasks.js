import {getConnection} from '~/server/db';

export default defineEventHandler(async (event) => {
    try {
        
        const connection = await getConnection();
        const [rows] = await connection.execute(`
            SELECT 
            task.task_id,
            task.task,
            task.description,
            task.taskDate,
            task.assignTo,
            user.user_id,
            user.email,
            user.firstName,
            user.lastName
    
        FROM task
        JOIN user ON task.assignTo = user.user_id `);

        connection.release();
        console.log('data from server for tasks',rows)

        return rows;

    } catch (err) 
    {
        console.error('Error fetching users:', err);
        return {error: 'Failed to fetch users'};
    }
});