const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./userModel");
const Wallet = require("./walletModel"); // Ensure Wallet model is imported
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // Uncommented for token generation

dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

const PORT = process.env.PORT || 6000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
  });

// User registration endpoint
app.post("/sign-up", async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Validate email and password
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Validate password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Create wallet for the user
    const wallet = new Wallet({
      user: newUser._id,
      balance: 0,
    });
    await wallet.save();

    

    res.status(201).json({
      message: "User created successfully",
      newuser: { userName, email },
      wallet: { userId: wallet._id, balance: wallet.balance },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  //check if password is correct

  const isMatch = await bcrypt.compare(password, user?.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  //fetch user wallet
  const wallet = await Wallet.findOne({ user: user._id });

  //generate token
  const accessToken = jwt.sign({ id: user?._id }, process.env.ACCESS_TOKEN, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign({ id: user?._id }, process.env.REFRESH_TOKEN, {
    expiresIn: "7d",
  });

  res.status(200).json({
    message: "Login successful",
    accessToken,
    refreshToken,
    user: {
      userName: user.userName,
      email: user.email,
    
    },
    wallet: {
      userId: wallet._id,
      balance: wallet.balance,
    },
   
  });
});
