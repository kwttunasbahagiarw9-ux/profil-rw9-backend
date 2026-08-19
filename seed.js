require("dotenv").config();
const connectDB = require("./config/db");
const { setContent } = require("./models/Content");
const { Admin, ensureAdmin } = require("./models/Admin");
const DEFAULT_DATA = require("./defaults");

async function seed() {
  await connectDB();
  await ensureAdmin();

  for (const [key, data] of Object.entries(DEFAULT_DATA)) {
    await setContent(key, data);
    console.log(`Tersimpan: ${key}`);
  }

  console.log("Seeding selesai. Data awal berhasil disimpan ke MongoDB.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding gagal:", err);
  process.exit(1);
});