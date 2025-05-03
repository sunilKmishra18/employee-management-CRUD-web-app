const mongoose = require('mongoose');

const connectDB = async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Database Connected Successfully');
};
module.exports = connectDB;
