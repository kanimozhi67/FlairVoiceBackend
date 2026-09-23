import app from "../server.js";
import connectdb from "../db/connectdb.js";

export default async function handler(req, res) {
  try {
    /*
    |--------------------------------------------------------------------------
    | MongoDB
    |--------------------------------------------------------------------------
    */

    await connectdb();

    /*
    |--------------------------------------------------------------------------
    | Express
    |--------------------------------------------------------------------------
    */

    return app(req, res);
  } catch (error) {
    console.error("Vercel Function Error:", error);

    /*
    |--------------------------------------------------------------------------
    | CORS fallback
    |--------------------------------------------------------------------------
    */

    const origin = req.headers.origin;

    const allowedOrigins = [
      "http://localhost:3000",
      "https://flair-olympiad-science-frontend.vercel.app",
      "https://flair-voice-frontend.vercel.app",
      "https://www.flairolympiad.com",
      "https://flairolympiad.com",
    ];

    if (origin && allowedOrigins.includes(origin)) {
      res.setHeader(
        "Access-Control-Allow-Origin",
        origin
      );
    }

    res.setHeader(
      "Access-Control-Allow-Credentials",
      "true"
    );

    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );

    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    return res.status(500).json({
      success: false,
      message: "Server error",
      error:
        process.env.NODE_ENV === "production"
          ? "Database connection failed"
          : error.message,
    });
  }
}