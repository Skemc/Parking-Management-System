import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


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

export default app;
