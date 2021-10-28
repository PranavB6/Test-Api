import express, { response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 8000;
const data = {
  labels: [
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
  ],
  datasets: [
    {
      label: 'British Columbia ',
      backgroundColor: '#f87979',
      data: [
        { x: '2021-10-01', y: 5 },
        { x: '2021-11-01', y: 8 },
        { x: '2021-12-01', y: 10 },
      ],
      borderColor: '#36495d',
      borderWidth: 1,
    },
    {
      label: 'Edmonton',
      backgroundColor: '#f8449',
      data: [
        { x: '2021-10-01', y: 9 },
        { x: '2021-11-01', y: 5 },
        { x: '2021-12-01', y: 1 },
      ],
      borderColor: '#36495d',
      borderWidth: 1,
    },
  ],
};

const logger = (request, response, next) => {
  console.log(`Got Request: ${JSON.stringify(request.url)}`);
  next();
};
app.use(logger);

app.get('/', logger, (request, response) => {
  console.log('Hello World');
  response.send('Hello World');
});

app.get('/api/data', (request, response) => {
  response.send(data);
});

app.listen(PORT, () => {
  console.log(`Starting Server on http://localhost:${PORT}`);
});
