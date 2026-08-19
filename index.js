require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const connectDB = require("./config/db");
const { ensureAdmin } = require("./models/Admin");
const contentRoutes = require("./routes/contentRoutes");
const { router: adminRoutes, uploadDir } = require("./routes/adminRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

const clientUrls = (process.env.CLIENT_URL || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      const isLocal = origin && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
      if (!origin || clientUrls.length === 0 || clientUrls.includes(origin) || isLocal) {
        cb(null, true);
      } else {
        cb(new Error("Not allowed by CORS"));
      }
    }
  })
);
app.use(express.json({ limit: "20mb" }));

app.get("/api", (req, res) => {
  res.json({
    message: "Selamat datang di API website profil RW 09 Tanjung Mas",
    endpoints: [
      "/api/site",
      "/api/stats",
      "/api/visi",
      "/api/misi",
      "/api/services",
      "/api/programs",
      "/api/leadership",
      "/api/gallery",
      "/api/faq",
      "/api/messages",
      "/api/admin/login",
      "/api/admin/upload"
    ]
  });
});

app.use("/api/admin", adminRoutes);
app.use("/api/uploads", express.static(uploadDir));
app.use("/api", contentRoutes);

const clientDist = path.join(__dirname, "..", "frontend", "dist");

if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

async function start() {
  await connectDB();
  await ensureAdmin();

  app.listen(PORT, () => {
    console.log(`Server API RW 09 Tanjung Mas berjalan di http://localhost:${PORT}`);
    if (!fs.existsSync(clientDist)) {
      console.log("Mode API saja. Jalankan 'npm run build' untuk mengaktifkan antarmuka web.");
    }
  });
}

start();