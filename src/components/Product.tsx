import Link from 'next/link'
import React from 'react'

const Product = ({product,linkRoute}:any) => {
  return (
       <Link
                  href={`/${linkRoute}/${product?.slug}`}
                  className="m-3 lg:w-1/4 md:w-1/2 p-4 w-96 shadow-xl mt-2 cursor-pointer"
                >
                  <a className="relative  rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="h-[40vh] m-auto  block w-full"
                      src={product?.img}
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product?.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product?.title}
                    </h2>
                    <p className="mt-1">₹{product?.price}</p>
                    <p className="text-black capitalize">s,m,l,xl,xxl</p>
                  </div>
                </Link>
  )
}

export default Product
