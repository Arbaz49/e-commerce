"use client"
import axios from "axios";
import Head from "next/head";
import React from "react";
import {BsBagCheck} from "react-icons/bs"
const Checkout = () => {
  const handlePurchase = async () => {
    // console.log(purchaseInfo);
    try {
      // let authToken = localStorage.getItem("token");
      const order = await axios.post(
        "http://localhost:3000/api/payment/checkout",
        { amount:200 },
        // {
        //   headers: { token: `Bearer ${authToken}` },
        // }
      );
      console.log(order.data.order.amount);
      const options = {
        key: "rzp_test_qJEvwm7xnj6UXg",
        amount: 200,
        currency: "INR",
        name: "WearThings",
        description: "WearThings",
        image: "image",
        // redirect:true,
        order_id: order.data.order.id,
        // callback_url:"http://localhost:8000/payment/verification",
        handler: function (response:any) {
          axios
            .post("http://localhost:3000/api/payment/verification", response)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        },
        prefill: {
          name: "Arbaz Solkar",
          email: "arbaz@example.com",
          contact: "8691846098",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#000000",
        },
      };
      let rzp1 = new window.Razorpay(options);
      rzp1.open();

      const data = await axios.post(
        "http://localhost:3000/api/purchase",
        "body",
      );
    } catch (e) {
      console.log(e);
      // toast.error(e.message);
    }
  };
  return (
    <div className="container m-auto">
       <Head>
        <title>Buy-tshirts</title>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

      </Head>
      <h1 className="font-bold text-3xl text-center my-8">Checkout page</h1>
      <h2 className="font-bold text-xl">1. Delivery details</h2>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>

          <textarea
            id="address"
            name="address"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>

      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              PinCode(India)
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label
              htmlFor="district"
              className="leading-7 text-sm text-gray-600"
            >
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <button
        // onClick={()=>{}}
        className="p-2 flex justify-center rounded-lg bg-pink-500 text-white font-bold hover:bg-black m-1"
        style={{alignItems:"center", gap:"5px"}}
      >
        <BsBagCheck/>
        <span onClick={handlePurchase}>

        Pay
        </span>
      </button>
    </div>
  );
};

export default Checkout;
