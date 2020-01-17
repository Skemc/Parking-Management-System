import Booking from '../model/booking.models'

class BookingController {
    static async createBooking(req, res) {
        try {
          const createdBooking = await Booking.addBooking(req.body);
          res.status(201).json({
            status: 201,
            data: [{
              id: createdBooking.id,
              message: 'Created booking record',
            }],
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({
            status: 500,
            error: 'Internal Server Error!',
          });
        }
      }
    static async viewAllBookings(req, res) {
      try {
        const bookings = await Booking.viewAllBooking();
        if (bookings.length == 0) {
          return res.status(404).json({
            status: 404,
            error: 'No data available',
          });
        }
        return res.status(200).json({
          status: 200,
          data: bookings,
        });
      } catch (error) {
          console.log(error);
          res.status(500).json({
            status: 500,
            error: 'Internal Server Error!',
          });
      }
    }
  }
  
  export default BookingController;
