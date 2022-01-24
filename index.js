const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;
const trip = require('./routes/trip');
const location = require('./routes/location');
const category = require('./routes/category');
const user = require('./routes/user');
const trips_location_relationship = require('./routes/trips_location_relationship');
const user_category_relationship = require('./routes/user_category_relationship');
const categories_location_relationship = require('./routes/categories_location_relationship.js');

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
app.use('/trips_location_relationship', trips_location_relationship);
app.use('/user_category_relationship', user_category_relationship);
app.use('/categories_location_relationship', categories_location_relationship);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
