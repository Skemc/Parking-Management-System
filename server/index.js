import express from 'express';

const app = express();

const port = 5000;
app.get('/', (req, res) => {
  res.send('hey G');
})

app.listen(port, () => console.log(`Server is running on port ${port}`) );
export default app;
