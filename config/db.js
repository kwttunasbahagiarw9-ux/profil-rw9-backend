const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/rw09-tanjung-mas";
  try {
    await mongoose.connect(uri);
    console.log("Terhubung ke MongoDB");
  } catch (err) {
    console.error("Gagal terhubung ke MongoDB:", err.message);
    process.exit(1);
  }
}

module.exports = connectDB;