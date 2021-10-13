const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});



/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return pool.query(
    `SELECT * FROM users 
    WHERE users.email = $1;`, [email])
    .then(res => {
      return res.rows[0];
    });
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
 const getUserWithId = function(id) {
  let user = pool.query(
    `SELECT * FROM users 
    WHERE users.id = $1;`, [id])
    .then(res => {
      return res.rows[0];
    });
  return Promise.resolve(user);
};
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
 const addUser =  function(user) {
  pool.query(
    `INSERT INTO users (name, email, password)
    VALUES($1, $2, $3) RETURNING id;`, [user.name, user.email, user.password]
  )
    .then(res => res.rows);
  return Promise.resolve(user);
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
 const getAllReservations = function(guest_id, limit = 10) {
  let reservations = pool.query(`
  SELECT reservations.*, properties.*, AVG(property_reviews.rating) AS average_rating
  FROM reservations
  JOIN properties ON reservations.property_id = properties.id
  JOIN property_reviews ON properties.id = property_reviews.property_id
  WHERE reservations.guest_id = $1 AND reservations.end_date < now()::DATE
  GROUP BY properties.id, reservations.id
  ORDER BY reservations.start_date DESC
  LIMIT $2;`, [guest_id, limit])
    .then(res =>  res.rows);
  return Promise.resolve(reservations);
};
exports.getAllReservations = getAllReservations;


/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
 const getAllProperties = function(options, limit = 10) {
  const qryParams = [];
  let qryStr = `SELECT properties.*, AVG(property_reviews.rating) AS average_rating
  FROM properties
  JOIN property_reviews ON property_id = properties.id
  `;

  if (options.city) {
    qryParams.push(`%${options.city}%`);
    qryStr += `WHERE city LIKE $${qryParams.length}
    `;
  }

  if (options.owner_id) {
    qryParams.push(`${options.owner_id}`);
    qryStr += `WHERE owner_id = $${qryParams.length}
    `;
  }

  if (options.minimum_price_per_night) {
    qryParams.push(parseInt(`${options.minimum_price_per_night * 100}`));
    qryStr += `AND cost_per_night >= $${qryParams.length}
    `;
  }

  if (options.maximum_price_per_night) {
    qryParams.push(parseInt(`${options.maximum_price_per_night * 100}`));
    qryStr += `AND cost_per_night <= $${qryParams.length}
    `;
  }

  
  qryParams.push(limit);
  qryStr += `
  GROUP BY properties.id
  ORDER BY cost_per_night
  LIMIT $${qryParams.length};
  `;
  if (options.minimum_rating) {
    qryParams.push(`${options.minimum_rating}`);
    qryStr = qryStr.replace('GROUP BY properties.id', `GROUP BY properties.id
    HAVING AVG(property_reviews.rating) >= $${qryParams.length}`);
    
  }
  console.log(qryStr, qryParams);
  return pool.query(qryStr, qryParams)
    .then(res => res.rows);

};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
 const addProperty = function(property) {
  const qryStr = `INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code)
  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;`;
  
  const propertyValues = [property.owner_id, property.title, property.description, property.thumbnail_photo_url, property.cover_photo_url, property.cost_per_night, property.parking_spaces, property.number_of_bathrooms, property.number_of_bedrooms, property.country, property.street, property.city, property.province, property.post_code];
  
  return pool.query(qryStr, propertyValues)
    .then(res => res.rows);
};
exports.addProperty = addProperty;
