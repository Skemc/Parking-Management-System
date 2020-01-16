const viewParkings = 'SELECT * FROM PARKING';
const createParking = `INSERT INTO PARKING (name, location, status) 
    VALUES ($1, $2, $3) RETURNING *`;

export default {
    viewParkings,
    createParking
}