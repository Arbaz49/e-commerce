"use client";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Tshirts = () => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    getAllProducts()
  }, []);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/products");
      setProducts(data.data);
      console.log(data)
    } catch (e:any) {
      console.error(e);
    }
  };
  return (
    <div>
      <Head>
        <title>Buy-tshirts</title>
      </Head>
      <h2 className="text-5xl  text-center">Explore Our Tshirts Collection</h2>
      <p className="m-4 font-semibold">
        Welcome to WearThings.com, your one-stop shop for stylish and unique
        tshirts. Buy T-Shirts at the best price in India. We offer a wide range
        of tshirts for all interests, including coding tshirts, anime tshirts,
        and casual tshirts for everyday wear. All of our tshirts are made with
        high-quality materials and are designed to be comfortable and durable.
        Shop now and find the perfect tshirt for you!
      </p>
      <section className="text-gray-600 body-font flex justify-center m-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products?.map((product: any) => {
              return (
                <Link
                  href={`/tshirts/${product?.slug}`}
                  className="m-3 lg:w-1/4 md:w-1/2 p-4 w-96 shadow-xl mt-2 cursor-pointer"
                >
                  <a className="relative  rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="h-[36vh] m-auto  block"
                      src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
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
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
// export async function getServerSideProps(context:any) {

//   return {
//     props: { products: [] }, // will be passed to the page component as props
//   }
// }
export default Tshirts;
