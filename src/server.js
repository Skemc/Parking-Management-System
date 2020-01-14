import app from './app';

const PORT = process.env.PORT || 6000;

const server = app.listen(PORT, () => console.log(`Server is live on port: ${PORT}`));

export default server;
