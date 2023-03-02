import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
  res.send('Домой');
});

app.listen(process.env.PORT, () => {
  console.log('Start Server', process.env.PORT);
});
