import Razorpay from "razorpay";

const KEY_ID="rzp_test_qJEvwm7xnj6UXg";
const KEY_SECRET="bVp0eHtlX4xBLs6voAx9cXnr";


let instance = new Razorpay({
  key_id:KEY_ID,
  key_secret:KEY_SECRET,
});
export async function POST(request, response) {
    const body = await request.json();
    console.log("POST request body", body);
    let amount = body.amount;
    console.log(amount);
    let options = {
      amount: Number(amount) * 100, // amount in the smallest currency unit
      currency: "INR",
    };
    let order = await instance.orders.create(options);
    return new Response(
      JSON.stringify({
        message: "sucessfully created order",
        order
      }),
      {
        headers: {
          "content-type": "application/json",
        },
        status: 201,
      }
    );
  }
