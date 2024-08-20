import mongooseConnect from "@/lib/mongoose";
import userModel from "@/model/user";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { method } = req;
     await mongooseConnect();

        if(method==="POST"){
          try{
        const {name,email,subject,comment}=req.body;
        const user = await userModel.create({ name, email, subject, comment });
        res.status(201).json({message:"the message was saved successfully"})
          }catch (err) {
            res.status(500).json({ message: "An unexpected error occurred", error: err.message });
          }
        } else {
          res.status(405).json({ message: "Method Not Allowed" });
        }
        }