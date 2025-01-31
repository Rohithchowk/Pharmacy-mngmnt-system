const Details = require("../models/Details");

// ✅ Create a new Detail
exports.createDetail = async (req, res) => {
  try {
    const detail = new Details(req.body);
    await detail.save();
    res.status(201).json({ message: "Detail added", detail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all Details
exports.getAllDetails = async (req, res) => {
  try {
    const details = await Details.find();
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get a Single Detail by detailId
exports.getDetail = async (req, res) => {
  try {
    const detail = await Details.findOne({ detailId: req.params.detailId });
    if (!detail) return res.status(404).json({ error: "Detail not found" });
    res.json(detail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a Detail by detailId
exports.updateDetail = async (req, res) => {
  try {
    const updatedDetail = await Details.findOneAndUpdate(
      { detailId: req.params.detailId },
      req.body,
      { new: true }
    );
    if (!updatedDetail) return res.status(404).json({ error: "Detail not found" });
    res.json({ message: "Detail updated", updatedDetail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Detail by detailId
exports.deleteDetail = async (req, res) => {
  try {
    const deletedDetail = await Details.findOneAndDelete({ detailId: req.params.detailId });
    if (!deletedDetail) return res.status(404).json({ error: "Detail not found" });
    res.json({ message: "Detail deleted", deletedDetail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
