import { Pool } from 'pg';
import { config } from 'dotenv';
import User from '../model/user.model';

config();

class Database {
  static connection() {
    if (process.env.NODE_ENV === 'production') {
      return new Pool({
        connectionString: process.env.DATABASE_URL,
      });
    }

    if (process.env.NODE_ENV === 'testing') {
      return new Pool({
        connectionString: process.env.TEST_DB_URL,
      });
    }

  }

  static async createScripts() {
    const con = Database.connection();
    await con.query(`
    CREATE TABLE IF NOT EXISTS ADMIN (
      id SERIAL PRIMARY KEY,
      email VARCHAR(250) UNIQUE NOT NULL,
      username VARCHAR(250) UNIQUE NOT NULL,
      password VARCHAR(250) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS BOOKING (
      id SERIAL PRIMARY KEY,
      parkingId INT,
      email VARCHAR(250) NOT NULL,
      username VARCHAR(250),
      arrival_time VARCHAR(250) NOT NULL,
      depature_time VARCHAR (30) NOT NULL
    );
          
    CREATE TABLE IF NOT EXISTS PARKING (
      id SERIAL PRIMARY KEY,
      name VARCHAR (200) NOT NULL,
      location VARCHAR(300) NOT NULL,
      status VARCHAR(250)
    );

    INSERT INTO PARKING (name, location, status) values ('Makuzaparking', 'nyarugenge', 'available');
  `);
    const result = await con.query(
      "SELECT COUNT(1) FROM admin WHERE email = 'admin@gmail.com';",
    );
    if (result.rows[0].count === '0') {
      await con.query(`Insert into admin(
        email,
        username,
        password
      ) values(
        'admin@gmail.com',
        'fantastic7',
        '1234567890'
      ) returning *;`);
    }
    await con.end();
  }


  static async deleteTables() {
    const con = Database.connection();
    await con.query('DROP TABLE IF EXISTS ADMIN,BOOKING,PARKING CASCADE;');
    await con.end();
  }

  static async createQuery(queryText, params) {
    const con = Database.connection();
    const result = await con.query(queryText, params)
    await con.end();

    return result;
  } 
}

export default Database;