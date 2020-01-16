const viewParkings = 'SELECT * FROM PARKING';
const createParking = `INSERT INTO PARKING (name, location, status) 
    VALUES ($1, $2, $3) RETURNING *`;
    const addBooking = `INSERT INTO BOOKING (email, username, arrival_time, depature_time) 
    VALUES ($1, $2,$3, $4) RETURNING *`;
const viewAllBookings = 'SELECT * FROM BOOKING';

export default {
    viewParkings,
    createParking,
    addBooking,
    viewAllBookings
}