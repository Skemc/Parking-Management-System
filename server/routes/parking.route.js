import express from 'express';
import ParkingsController from '../controller/parkings.controller';
import ParkingValidation from '../middlewares/parkingValidation'

const router = express.Router();

router.get('/', ParkingsController.viewAllParkings);
router.post('/', ParkingValidation.validateParking, ParkingsController.createParking);
router.get('/:parkingId', ParkingValidation.parkingId, ParkingsController.viewSpecificParking);
router.post('/search', ParkingsController.searchParking);
export default router;