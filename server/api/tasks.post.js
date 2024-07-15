import { getConnection } from '~/server/db';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const { task, description, assignTo, taskDate } = body;

        // Set default value if taskDate is not provided
    const validTaskDate = taskDate && !isNaN(Date.parse(taskDate)) ? taskDate : new Date().toISOString().slice(0, 19).replace('T', ' ');


    try {
        const connection = await getConnection();
        const [rows] = await connection.execute( 
            'INSERT INTO task (task, description, assignTo, taskDate) VALUES (?, ?, ?, ?)', [task, description, assignTo,taskDate]
        );

        connection.release();

        return { success: true, message: 'Task created successfully' };
    }
    catch (err)
    {
        console.error('Error registering task:', err);
        return { success: false, error: 'Failed to register task' };
    }
});

