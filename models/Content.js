const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true }
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentSchema);

async function getContent(key, fallback) {
  const doc = await Content.findOne({ key }).lean();
  return doc ? doc.data : fallback;
}

async function setContent(key, data) {
  return Content.findOneAndUpdate(
    { key },
    { $set: { data } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  ).lean();
}

module.exports = { Content, getContent, setContent };