const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect('mongodb://mongo:27017');

  mongoose.connection.once('open', () => {
    console.log('connected to database with success');
  });

}

module.exports = initDB;