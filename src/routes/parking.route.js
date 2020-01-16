import express from 'express';
import ParkingsController from '../controller/parkings.controller';
import ParkingValidation from '../middlewares/parkingValidation'

const router = express.Router();

router.get('/', ParkingsController.viewAllParkings);
router.post('/', ParkingValidation.validateParking, ParkingsController.createParking);

export default router;