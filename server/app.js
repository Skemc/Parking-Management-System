import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route';
import parkingsRoutes from './routes/parking.route';
import bookingRoutes from './routes/booking.route';


dotenv.config();

const app = express();

// extracting body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'this is my default route',
  });
});

app.use('/api/auth', userRoutes);
app.use('/api/parkings', parkingsRoutes);
app.use('/api/bookings', bookingRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status);
  res.json({
    status,
    error: error.message,
  });
});

export default app;
