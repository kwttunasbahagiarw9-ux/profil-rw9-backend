const express = require("express");
const router = express.Router();
const { getContent } = require("../models/Content");
const Message = require("../models/Message");
const DEFAULT_DATA = require("../defaults");

const PUBLIC_KEYS = Object.keys(DEFAULT_DATA);

router.post("/messages", async (req, res) => {
  const { name, message } = req.body || {};
  if (!name || !message || typeof name !== "string" || typeof message !== "string") {
    return res.status(400).json({ error: "Nama dan pesan wajib diisi." });
  }
  if (!name.trim() || !message.trim()) {
    return res.status(400).json({ error: "Nama dan pesan wajib diisi." });
  }
  try {
    const saved = await Message.create({
      name: name.trim().slice(0, 200),
      message: message.trim().slice(0, 5000)
    });
    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    res.status(500).json({ error: "Gagal menyimpan pesan", detail: err.message });
  }
});

router.get("/:key", async (req, res) => {
  const { key } = req.params;
  if (!PUBLIC_KEYS.includes(key)) {
    return res.status(404).json({ error: "Endpoint tidak ditemukan" });
  }
  try {
    const data = await getContent(key, DEFAULT_DATA[key]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data", detail: err.message });
  }
});

module.exports = router;