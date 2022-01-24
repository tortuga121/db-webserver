const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;
const trip = require('./routes/trip');
const location = require('./routes/location');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/trip', trip);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
