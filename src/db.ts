import { createPool } from 'mysql2/promise';

export default async function connect():Promise<any> {
  const connection = await createPool({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'school_db',
    connectionLimit: 10,
  });

  return connection;
}