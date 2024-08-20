import mongooseConnect from "@/lib/mongoose";
import userModel from "@/model/user";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { method } = req;

  // Connect to the database
  try {
    await mongooseConnect();
  } catch (error) {
    console.error('Database connection error:', error);
    return res.status(500).json({ message: "Database connection error", error: error.message });
  }

  if (method === "POST") {
    try {
      const { name, email, subject, comment } = req.body;
      if (!name || !email || !subject || !comment) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Create a new user document
      const user = await userModel.create({ name, email, subject, comment });
      return res.status(201).json({ message: "The message was saved successfully" });
    } catch (err) {
      console.error('Error creating user:', err);
      return res.status(500).json({ message: "An unexpected error occurred", error: err.message });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
