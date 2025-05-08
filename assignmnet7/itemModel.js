const mongoose = require("mongoose");

// Define the schema for the product
const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: {type: String},
    locationFound:{type: String},
    dateFound: { type: Date, default: Date.now },
    claimed: { type: Boolean, required: true }
  },
  { timestamps: true }
);

const Item = new mongoose.model("Item", itemSchema);

module.exports = Item;
