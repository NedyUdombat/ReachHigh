import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

// enable use of dotenv config file.
dotenv.config();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to ReachHigh!' });
});

app.all('*', (req, res) =>
  res.status(404).json({
    status: 404,
    message: 'The page you are looking for does not exist',
  }),
);

app.listen(port, () => {
  console.log(`app is live at http://127.0.0.1:${port}`);
});

export default app;
