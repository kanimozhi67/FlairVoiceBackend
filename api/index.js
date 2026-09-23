import app from "../server.js";
import connectdb from "../db/connectdb.js";

let isConnected = false;

const allowedOrigins = [
  "http://localhost:3000",
  "https://flair-olympiad-science-frontend.vercel.app",
  "https://www.flairolympiad.com",
  "https://flairolympiad.com",
];

export default async function handler(req, res) {
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  try {
    if (!isConnected) {
      await connectdb();
      isConnected = true;

      console.log("MongoDB connected");
    }

    return app(req, res);

  } catch (error) {
    console.error("Vercel function error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
}