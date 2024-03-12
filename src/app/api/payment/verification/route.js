import crypto from "crypto";
import Order from "../../../models/order";
import { connectDB } from "@/util";
import { json } from "stream/consumers";

export async function POST(request, response) {
    await connectDB()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    let body = razorpay_order_id + "|" + razorpay_payment_id;
  
    const expectedSignature = crypto
      .createHmac("sha256",KEY_SECRET)
      .update(body.toString())
      .digest("hex");
  
  let isAutheticate=razorpay_signature===expectedSignature;
  if(isAutheticate){
  let newOrder=await Order.create({
    razorpay_order_id, razorpay_payment_id, razorpay_signature
  })
  }else{
   return new Response (json({
    message: "failed",
   },
  { status:400}))
  }
  }