const { default: mongoose } = require("mongoose");

const Crime = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})