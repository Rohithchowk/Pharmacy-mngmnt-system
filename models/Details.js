const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const detailsSchema = new mongoose.Schema({
  detailId: { type: String, default: uuidv4, unique: true }, // Unique identifier for CRUD
  text: { type: String, required: true },
  count: { type: Number, required: true, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Details", detailsSchema);
