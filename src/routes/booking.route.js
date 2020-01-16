import express from 'express';
import BookingController from '../controller/booking.controller';

const router = express.Router();

router.post('/', BookingController.createBooking);
router.get('/', BookingController.viewAllBookings);


export default router;