const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;
const trip = require('./routes/trip');
const location = require('./routes/location');
const category = require('./routes/category');
const user = require('./routes/user');

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
app.use('/location', location);
app.use('/category', category);
app.use('/user', user);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
