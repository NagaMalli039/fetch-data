import mysql from 'mysql2/promise';

let pool;


export async function connect() 
{
    pool = await mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        database: 'user',
        port: 3306,
        password: '1234'
    });
}

export async function getConnection() {

    // if not initialized, it will call the connect method
    if (!pool) {
        await connect();
    }
    return pool.getConnection();
    console.log('Connection got created')
}