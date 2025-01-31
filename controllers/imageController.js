const ImageModel = require("../models/ImageModel");

const addImage = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ message: "Image URL is required" });
        }
        const newImage = new ImageModel({ url });
        await newImage.save();
        res.status(201).json(newImage);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const getImages = async (req, res) => {
    try {
        const images = await ImageModel.find();
        res.status(200).json(images.map(image => image.url));
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


module.exports = { addImage, getImages };
