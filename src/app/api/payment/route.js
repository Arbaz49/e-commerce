import crypto from "crypto";
import Razorpay from "razorpay";
import Order from "../models/ordersModel.js"


const KEY_ID="rzp_test_qJEvwm7xnj6UXg";
const KEY_SECRET="bVp0eHtlX4xBLs6voAx9cXnr";


let instance = new Razorpay({
  key_id:KEY_ID,
  key_secret:KEY_SECRET,
});

const createOrder = async (req, res) => {
  let amount = req.body.amount;
  // console.log(amount);
  let options = {
    amount: Number(amount) * 100, // amount in the smallest currency unit
    currency: "INR",
  };
  let order = await instance.orders.create(options);
  res.json({
    message: "sucessfully created order",
    order,
  });
}

const paymentVerification = async (req, res) => {
  // console.log(req.body);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  let body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256",KEY_SECRET)
    .update(body.toString())
    .digest("hex");

let isAutheticate=razorpay_signature===expectedSignature;
if(isAutheticate){
let order=await Order.create({
  razorpay_order_id, razorpay_payment_id, razorpay_signature
})

}else{
  res.status(400).json({
message:"failed"
  })
}
}

export { createOrder, paymentVerification };