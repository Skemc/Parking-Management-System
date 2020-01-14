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
        userId SERIAL,
        email VARCHAR(250),
        username VARCHAR(250),
        password VARCHAR(250),
        PRIMARY KEY(userId)
      );
          CREATE TABLE IF NOT EXISTS BOOKING (
            bookingId SERIAL,
            parkingId INT,
            email VARCHAR(250),
            username VARCHAR(250),
            arrival_time VARCHAR(250),
            depature_time VARCHAR (30),
            PRIMARY KEY(bookingId)
          );
          
          CREATE TABLE IF NOT EXISTS PARKING (
            parkingId SERIAL,
            createdOn TIMESTAMP NOT NULL DEFAULT NOW(),
            name VARCHAR (200),
            location VARCHAR(300),
            status VARCHAR(250),
            PRIMARY KEY (parkingId)
          );
      `);
    const result = await con.query(
      "SELECT COUNT(1) FROM admin WHERE email = 'admin@gmail.com';",
    );
    if (result.rows[0].count === '0') {
      const user = new User(
        '',
        'admin@gmail.com',
        'fantastic7',
        '1234567890',
      );
      await con.query(`Insert into admin(
        email,
        username,
        password,
      ) values(
        '${user.email}',
        '${user.username}',
        '${user.password}'
      ) returning *`);
    }
    await con.end();
  }


  static async deleteTables() {
    const con = Database.connection();
    await con.query('DROP TABLE IF EXISTS ADMIN,BOOKING,PARKING CASCADE;');
    await con.end();
  }
}

export default Database;
