import Database from '../db/db';
import query from '../db/queries';

class Booking {
    static async addBooking() {
        const addedBooking = await Database.createQuery(query.addBooking,
            [email, username, arrival_time, depature_time]);
        return addedBooking.rows[0];
    }
    static async ViewAllBooking() {
        const bookings = await Database.createQuery(query.viewAllBookings);
        return bookings.rows;
    }
  }
    
export default Booking;