const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Admin } = require("../models/Admin");
const { setContent } = require("../models/Content");
const authMiddleware = require("../middleware/auth");

const JWT_SECRET = process.env.JWT_SECRET || "ganti-dengan-sandi-rahasia-panjang";

router.post("/login", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "Username dan password wajib diisi" });
  }
  try {
    const admin = await Admin.findOne({ username });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ error: "Username atau password salah" });
    }
    const token = jwt.sign({ username: admin.username, id: admin._id }, JWT_SECRET, {
      expiresIn: "7d"
    });
    res.json({ token, username: admin.username });
  } catch (err) {
    res.status(500).json({ error: "Gagal masuk", detail: err.message });
  }
});

router.get("/me", authMiddleware, (req, res) => {
  res.json({ username: req.admin.username });
});

router.put("/content/:key", authMiddleware, async (req, res) => {
  const { key } = req.params;
  if (typeof req.body?.data === "undefined") {
    return res.status(400).json({ error: "Body harus berisi field `data`" });
  }
  try {
    const doc = await setContent(key, req.body.data);
    res.json({ success: true, key, data: doc && doc.data });
  } catch (err) {
    res.status(500).json({ error: "Gagal menyimpan konten", detail: err.message });
  }
});

const uploadDir = path.join(__dirname, "..", "uploads");
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const name = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, name);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif"];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) cb(null, true);
    else cb(new Error("Hanya file gambar yang diperbolehkan (jpg, png, webp, gif, svg, avif)"));
  }
});

router.post("/upload", authMiddleware, (req, res) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ error: "Ukuran file terlalu besar. Maksimal 20MB." });
      }
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: `Gagal mengunggah: ${err.message}` });
      }
      return res.status(400).json({ error: err.message || "Gagal mengunggah" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Tidak ada file yang diunggah" });
    }
    res.json({
      success: true,
      url: `/api/uploads/${req.file.filename}`
    });
  });
});

module.exports = { router, uploadDir };