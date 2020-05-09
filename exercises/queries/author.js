const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        bio: {
            type: String,
            required: true,
        },
        social: {
            twitter: {
                type: String,
                unique: true,
                sparse: true,
            },
            linkedin: {
                type: String,
                unique: true,
                sparse: true,
            },
            author: {
                type: mongoose.SchemaTypes.ObjectId,
                require: true,
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("author", authorSchema);
