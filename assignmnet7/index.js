// set up server

const express = require("express");
const mongoose = require("mongoose");
const Item = require("./itemModel");

const app = express();

//middleware to parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 8000;

// mongoDB connection
const MONGO_URL =
  "mongodb+srv://lamido:luffy123@cluster0.heeeu6i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(MONGO_URL).then(() => {
  console.log("MongoDB connected successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// api to get all items
app.get("/all-items", async (req, res) => {
  const allItems = await Item.find();

  res.status(200).json({
    message: "success",
    allItems,
  });
});

// api to create an item
app.post("/create-item", async (req, res) => {
  const { name, description, locationFound, dateFound, claimed } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: "Name and description are required" });
  }

  const newitem = new Item({
    name,
    description,
    locationFound,
    dateFound,
    claimed,
  });
  await newitem.save();

  res.status(201).json({
    message: "Item created successfully",
    newitem,
  });
});

// api to get a single item
app.get("/one-item/:id", async (req, res) => {
  const { id } = req.params;

  const item = await Item.findById(id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.status(200).json({
    message: "success",
    item,
  });
});

// api to edit an item
app.put("/edit-item/:id", async (req, res) => {
  const { id } = req.params;

  const { name, description, locationFound, dateFound, claimed } = req.body;

  const updatedItem = await Item.findByIdAndUpdate(
    id,
    {name, description, locationFound, dateFound, claimed },
    { new: true }
  );

  res.status(201).json({
    message: "Item updated successfully",
    updatedItem,
  });
});

// api to update an item
app.patch("/update-item/:id", async (req, res) => {
  const { id } = req.params;
  const { locationFound } = req.body;

  try {
    // Check if the item exists
    const existingItem = await Item.findById(id);

    if (!existingItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Update the item's name
    if (locationFound) {
      existingItem.locationFound = locationFound;
    }

    // Save the updated item
    await existingItem.save();

    return res.status(200).json({
      message: "Item updated successfully",
      updatedItem: existingItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while updating the item",
      error: error.message,
    });
  }
});

// api to delete an item
app.delete("/delete-item", async (req, res) => {
  const { id } = req.body;

  const deletedItem = await Item.findByIdAndDelete(id);

  res.status(200).json({
    message: "Item deleted successfully",
  });
});
