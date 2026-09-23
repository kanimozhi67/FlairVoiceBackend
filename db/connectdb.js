import mongoose from "mongoose";

let cachedConnection = null;
let cachedPromise = null;

const connectdb = async () => {
  // Check environment variable
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL environment variable is not defined");
  }

  // Reuse existing connection
  if (cachedConnection) {
    return cachedConnection;
  }

  // Reuse connection promise if one is already in progress
  if (!cachedPromise) {
    cachedPromise = mongoose.connect(process.env.MONGO_URL);
  }

  try {
    cachedConnection = await cachedPromise;

    console.log("MongoDB Connected");

    return cachedConnection;
  } catch (err) {
    cachedPromise = null;

    console.error("MongoDB connection failed:", err);

    throw err;
  }
};

export default connectdb;


    //import School from "../models/Schools.js";
// import User from "../models/User.js";
// import stripe from "../utils/stripe.js";
//  const school = new School({
//       name: "FLAIR CBSE SCHOOL",
//       address: "Madurai, India",
//       city: "Madurai",
//       state: "Tamil Nadu",
//       zipCode: "625109", 
//     });

//     const savedSchool = await school.save();

//     console.log("School created successfully:", savedSchool);

// console.log("Updated user:", user);

// const email = "anju@gmail.com";

// const user = await User.findOneAndUpdate(
//   { email },
//   { $set: { username: "Anjana" } },
//   { new: true } // returns the updated document
// );

// const level = "kindergarden";

// const user = await User.findAndUpdate(
//   { level },
//   { level: "kindergarten" });
 
// await User.updateMany(
//   { level: "kindergarden" },
//   { $set: { level: "kindergarten" } }
// );

// const product = await stripe.products.create({
//   name: "Premium Plan",
// });

// const price = await stripe.prices.create({
//   unit_amount: 5000, // $50.00
//   currency: "usd",
//   recurring: { interval: "month" },
//   product: product.id,
// });
// const result = await User.updateMany(
//   {
//     isPremium: { $exists: false },
//   },
//   {
//     $set: {
//       isPremium: false,
//       stripeCustomerId: null,
//       subscription: {
//         plan: null,
//         expiresAt: null,
//       },
//     },
//   }
// );

// console.log("Users updated:", result.modifiedCount);
