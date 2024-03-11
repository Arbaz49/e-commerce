"use client"
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { Key, useState } from "react";
import {BsBagCheck} from "react-icons/bs"
import { useSelector } from "react-redux";
interface checkOutType {
  email:string,
  phone:string,
  address:string,
  name:string,
  pinCode:string,
  state:string,
  district:string
}
const Checkout = () => {
  const cartLength = useSelector((state:any) => state.cart.cartArray.length)
  const cartArray = useSelector((state:any) => state.cart.cartArray)
  const [checkOutDetails,setCheckOutDetails]=useState<checkOutType>({
    email:"",
    phone:"",
    address:"",
    name:"",
    pinCode:"",
    state:"",
    district:""
  })
  const isAnyFieldEmpty = (details:any) => {
    for (const key in details) {
      if (details[key]  === "") {
        return true; // Return true if any field is empty
      }
    }
    return false; // Return false if no field is empty
  };
  const calculateTotal = () => {
    return cartArray.reduce((total:number, product:any) => total + product.price * product.quantity, 0);
  };
  const router=useRouter()
  const handlePurchase = async () => {
    // console.log(purchaseInfo);
    const isformInvalid=isAnyFieldEmpty(checkOutDetails)
    if(!isformInvalid){
      try {
        // let authToken = localStorage.getItem("token");
        const order = await axios.post(
          "http://localhost:3000/api/payment/checkout",
          { amount:calculateTotal() },
          // {
          //   headers: { token: `Bearer ${authToken}` },
          // }
        );
        console.log(order.data.order.amount);
        const options = {
          key: "rzp_test_qJEvwm7xnj6UXg",
          amount: calculateTotal(),
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
            name: checkOutDetails.name,
            email: checkOutDetails.email,
            contact:checkOutDetails.phone,
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
          checkOutDetails,
        );
 
  
      } catch (e) {
        console.log(e);
        // toast.error(e.message);
      }
    }else{
      alert("Please add details to purchase")
    }
    // router.push("/")
  };
  const handleFieldChange=(e:any)=>{
    setCheckOutDetails({...checkOutDetails,[e.target.name]:e.target.value});
console.log("event",e.target.name,e.target.value);
  }
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
              onChange={(e)=>handleFieldChange(e)}
              value={checkOutDetails.email}
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
              onChange={(e)=>handleFieldChange(e)}

              value={checkOutDetails.name}
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
            value={checkOutDetails.address}
            onChange={(e)=>handleFieldChange(e)}

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
              value={checkOutDetails.phone}
              onChange={(e)=>handleFieldChange(e)}

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
            value={checkOutDetails.pinCode}
            onChange={(e)=>handleFieldChange(e)}

              type="number"
              id="pinCode"
              name="pinCode"
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
              value={checkOutDetails.state}
              onChange={(e)=>handleFieldChange(e)}

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
              value={checkOutDetails.district}
              onChange={(e)=>handleFieldChange(e)}

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
