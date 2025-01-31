const Distributor = require("../models/distributorModel");

// Create Distributor
exports.createDistributor = async (req, res) => {
  try {
    const distributor = new Distributor(req.body);
    await distributor.save();
    res.status(201).json(distributor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Distributors
exports.getAllDistributors = async (req, res) => {
  try {
    const distributors = await Distributor.find();
    res.status(200).json(distributors);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Distributor by ID
exports.getDistributorById = async (req, res) => {
  try {
    const distributor = await Distributor.findById(req.params.id);
    if (!distributor) {
      return res.status(404).json({ message: "Distributor not found" });
    }
    res.status(200).json(distributor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Distributor
exports.updateDistributor = async (req, res) => {
  try {
    const distributor = await Distributor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!distributor) {
      return res.status(404).json({ message: "Distributor not found" });
    }
    res.status(200).json(distributor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Distributor
exports.deleteDistributor = async (req, res) => {
  try {
    const distributor = await Distributor.findByIdAndDelete(req.params.id);
    if (!distributor) {
      return res.status(404).json({ message: "Distributor not found" });
    }
    res.status(200).json({ message: "Distributor deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
