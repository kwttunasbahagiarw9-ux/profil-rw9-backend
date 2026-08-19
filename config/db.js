const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/rw09-tanjung-mas";
  await mongoose.connect(uri);
  console.log("Terhubung ke MongoDB");
}

module.exports = connectDB;