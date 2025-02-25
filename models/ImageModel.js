const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const ImageModel = mongoose.model("Image", ImageSchema);
module.exports = ImageModel;