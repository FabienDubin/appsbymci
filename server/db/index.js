// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const connectDB = async (uri) => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(
      `Connected to Mongo! Database name: "${conn.connections[0].name}"`
    );
  } catch (err) {
    console.error("Error connecting to mongo:", err);
    throw err;
  }
};

module.exports = connectDB;
