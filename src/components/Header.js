"use client"
import Link from 'next/link'
import React from 'react'
import CartDrawer from './CartDrawer'
import axios from 'axios'
import Head from 'next/head'

const Header = () => {

  // const handlePurchase = async () => {
  //   // console.log(purchaseInfo);
  //   try {
  //     // let authToken = localStorage.getItem("token");
  //     const order = await axios.post(
  //       "http://localhost:3000/api/payment/checkout",
  //       { amount:200 },
  //       // {
  //       //   headers: { token: `Bearer ${authToken}` },
  //       // }
  //     );
  //     console.log(order.data.order.amount);
  //     const options = {
  //       key: "rzp_test_qJEvwm7xnj6UXg",
  //       amount: 200,
  //       currency: "INR",
  //       name: "WearThings",
  //       description: "WearThings",
  //       image: "image",
  //       // redirect:true,
  //       order_id: order.data.order.id,
  //       // callback_url:"http://localhost:8000/payment/verification",
  //       handler: function (response) {
  //         axios
  //           .post("http://localhost:3000/api/payment/verification", response)
  //           .then((res) => {
  //             console.log(res);
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       },
  //       prefill: {
  //         name: "Arbaz Solkar",
  //         email: "arbaz@example.com",
  //         contact: "8691846098",
  //       },
  //       notes: {
  //         address: "Razorpay Corporate Office",
  //       },
  //       theme: {
  //         color: "#000000",
  //       },
  //     };
  //     let rzp1 = new window.Razorpay(options);
  //     rzp1.open();

  //     const data = await axios.post(
  //       "http://localhost:3000/api/purchase",
  //       "body",
  //     );
  //   } catch (e) {
  //     console.log(e);
  //     // toast.error(e.message);
  //   }
  // };
 
  return (
    <div>
        <Head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <header className="z-30 text-white body-font  bg-black shadow-lg">
        <div className="p-3 w-full flex flex-wrap bg-white text-black flex-col md:flex-row items-center">
          <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

            <span className="ml-3 text-pink-500 text-xl">WearThings</span>
          </Link>
          <nav className="md:ml-auto gap-3 flex flex-wrap items-center text-base justify-center">
            {/* <button onClick={handlePurchase}>razorpay</button> */}
            <Link href={"/tshirts"} className="text-lg my-2 font-semibold hover:text-pink-400 transition duration-150 ease-out hover:ease-in">T-shirts</Link>
            <Link href={"/tshirts"} className="mr-5text-lg my-2 font-semibold hover:text-pink-400 transition duration-150 ease-out hover:ease-in">Hoodies</Link>
            <Link href={"/tshirts"} className="mr-5text-lg my-2 font-semibold hover:text-pink-400 transition duration-150 ease-out hover:ease-in">Mugs</Link>
            <Link href={"/about"} className="mr-5text-lg my-2 font-semibold hover:text-pink-400 transition duration-150 ease-out hover:ease-in">About Us</Link>
            <Link href={"/login"} className="mr-5 p-1 rounded px-2 bg-pink-500 text-white hover:text-gray-900 cursor-pointer">Log In</Link>
          </nav>
          <span className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-white mt-4 md:mt-0">
            <CartDrawer />
            {/* <span>dbjk</span> */}
          </span>
        </div>
      </header>
    </div>
  )
}

export default Header