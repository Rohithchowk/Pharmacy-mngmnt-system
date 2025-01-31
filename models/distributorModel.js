const mongoose = require("mongoose");

const distributorSchema = new mongoose.Schema({
  sNo: { type: Number, required: true },
  name: { type: String, required: true },
  purchasedItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  purchasedDate: { type: Date, required: true },
  totalItemsPurchased: { type: Number, required: true },
  itemsSold: { type: Number, required: true },
  remaining: { type: Number, default: 0 },
});

distributorSchema.pre("save", function (next) {
  this.remaining = this.totalItemsPurchased - this.itemsSold;
  next();
});

module.exports = mongoose.model("Distributor", distributorSchema);
