import express from 'express';
import ParkingsController from '../controller/parkings.controller';

const router = express.Router();

router.get('/', ParkingsController.viewAllParkings);

export default router;