import express from 'express';
import ParkingsController from '../controller/parkings.controller';
import ParkingValidation from '../middlewares/parkingValidation';
import checkAuth from '../middlewares/check-auth';

const router = express.Router();

router.get('/', ParkingsController.viewAllParkings);
router.post('/', checkAuth, ParkingValidation.validateParking, ParkingsController.createParking);
router.get('/:parkingId', ParkingValidation.parkingId, ParkingsController.viewSpecificParking);
router.post('/search', ParkingsController.searchParking);
export default router;