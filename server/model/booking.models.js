import Database from '../db/db';
import query from '../db/queries';

class Booking {
    static async addBooking({email, username, parkingId, arrival_time, depature_time}) {
        const addedBooking = await Database.createQuery(query.addBooking,
            [email, username, parkingId, arrival_time, depature_time]);
        return addedBooking.rows[0];
    }
    static async viewAllBooking() {
        const bookings = await Database.createQuery(query.viewAllBookings);
        return bookings.rows;
    }
  }
    
export default Booking;