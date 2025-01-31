const TestCenter = require("../models/TestCenter");

// ✅ Create a new Test Center
exports.createTestCenter = async (req, res) => {
  try {
    const testCenter = new TestCenter(req.body);
    await testCenter.save();
    res.status(201).json({ message: "Test Center added", testCenter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all Test Centers
exports.getAllTestCenters = async (req, res) => {
  try {
    const testCenters = await TestCenter.find();
    res.json(testCenters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get a Single Test Center by centerId
exports.getTestCenter = async (req, res) => {
  try {
    const testCenter = await TestCenter.findOne({ centerId: req.params.centerId });
    if (!testCenter) return res.status(404).json({ error: "Test Center not found" });
    res.json(testCenter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a Test Center by centerId
exports.updateTestCenter = async (req, res) => {
  try {
    const updatedCenter = await TestCenter.findOneAndUpdate(
      { centerId: req.params.centerId },
      req.body,
      { new: true }
    );
    if (!updatedCenter) return res.status(404).json({ error: "Test Center not found" });
    res.json({ message: "Test Center updated", updatedCenter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Test Center by centerId
exports.deleteTestCenter = async (req, res) => {
  try {
    const deletedCenter = await TestCenter.findOneAndDelete({ centerId: req.params.centerId });
    if (!deletedCenter) return res.status(404).json({ error: "Test Center not found" });
    res.json({ message: "Test Center deleted", deletedCenter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
