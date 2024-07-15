import { getConnection } from '~/server/db';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const { name, email, password } = body;

    try {
        const connection = await getConnection();
        const [rows] = await connection.execute(
            'INSERT INTO patients (name, email, password) VALUES (?, ?, ?)', 
            [name, email, password]
        );

        connection.release();

        return { success: true, message: 'User registered successfully' };
    }
    catch (err)
    {
        console.error('Error registering user:', err);
        return { success: false, error: 'Failed to register user' };
    }
});

