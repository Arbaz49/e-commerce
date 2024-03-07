"use client"
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChange = (e: any) => {
    e.preventDefault();
    setFields({ ...fields, [e.target.name]: e.target.value });
    console.log("onChange", 111);
  };
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("form submitted");
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/signup",
        fields
      );
      setFields({
        name: "",
        email: "",
        password: "",
      });
    } catch (e: any) {
      console.log("Error", e.message);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="ml-3 text-pink-700 text-center  text-2xl m-auto">WearThings</h2>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-1">
            <input onChange={(e)=>onChange(e)} placeholder='Enter Your Name' id="name" value={fields.name} name="name" type="text"  required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-1">
            <input  value={fields.email} onChange={(e)=>onChange(e)} id="email" name="email" type="email"  required className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            {/* <div className="text-sm">
              <a href="#" className="font-semibold text-pink-700 hover:text-pink-700">Forgot password?</a>
            </div> */}
          </div>
          <div className="mt-1">
            <input value={fields.password}  onChange={(e)=>onChange(e)} id="password" name="password" type="password"  required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:text-pink-700 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-pink-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:text-pink-500">Sign Up</button>
        </div>
      </form>
  
       <p className="mt-5 text-center text-sm text-gray-500">
        Already Have An Account?
        <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Log In</Link>
      </p> 
    </div>
  </div>
  )
}

export default page
