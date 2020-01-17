const viewParkings = 'SELECT * FROM PARKING';
const createParking = `INSERT INTO PARKING (name, location, status) 
    VALUES ($1, $2, $3) RETURNING *`;
const addBooking = `INSERT INTO BOOKING (email, username, parkingId, arrival_time, depature_time) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
const viewAllBookings = 'SELECT * FROM BOOKING';
const viewParking = 'SELECT * FROM PARKING WHERE id = $1';
const findUser = 'SELECT * FROM ADMIN WHERE email = $1 AND password = $2';
const searchParking = 'SELECT * FROM PARKING WHERE name = $1 OR location = $1 OR status = $1';

export default {
    viewParkings,
    createParking,
    addBooking,
    viewAllBookings,
    viewParking,
    findUser,
    searchParking,
}