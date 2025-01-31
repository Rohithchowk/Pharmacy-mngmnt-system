const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const testCenterSchema = new mongoose.Schema({
  centerId: { type: String, default: uuidv4, unique: true }, 
  scanningCenter: { type: String, required: true },
  area: { type: String, required: true },

  scantypes:{
    type:String
  },
  address: { type: String, required: true },
  contact: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("TestCenter", testCenterSchema);
