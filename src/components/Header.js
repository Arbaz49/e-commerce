"use client"
import Link from 'next/link'
import React from 'react'
import CartDrawer from './CartDrawer'


const Header = () => {
 
  return (
    <div>
      <header className="z-30 text-white body-font  bg-black shadow-lg">
        <div className="p-3 w-full flex flex-wrap bg-white text-black flex-col md:flex-row items-center">
          <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

            <span className="ml-3 text-pink-500 text-xl">WearThings</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/tshirts"} className="mr-5 hover:text-gray-900 cursor-pointer">T-shirts</Link>
            <Link href={"/tshirts"} className="mr-5 hover:text-gray-900 cursor-pointer">Hoodies</Link>
            <Link href={"/tshirts"} className="mr-5 hover:text-gray-900 cursor-pointer">Mugs</Link>
            <Link href={"/about"} className="mr-5 hover:text-gray-900 cursor-pointer">About Us</Link>
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