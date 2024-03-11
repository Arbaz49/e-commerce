"use client";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import LoadingBar from "react-top-loading-bar";
const Tshirts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = async () => {
    setShowLoader(true);
    setProgress(20);
    try {
    setProgress(50);

      const { data } = await axios.get("http://localhost:3000/api/products");
      setProgress(70);

      await setProducts(data.data);
      setShowLoader(false);
      setProgress(100);

      console.log(data);
    } catch (e: any) {
      setShowLoader(true);
      console.error(e);
    }
  };
  return showLoader ? (
    <Loader />
  ) : (
    <div>
      <LoadingBar
      style={{height:"4px"}}
        color="rgb(236 72 153)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Head>
        <title>Buy-tshirts</title>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

      </Head>
      <h2 className="text-5xl  text-center">Explore Our Tshirts Collection</h2>
      <p className="p-3 text-sm font-medium text-gray-600 dark:text-gray-400 tracking-tighter mb-3">
      Welcome to Wearthings, your one-stop shop for stylish and unique tshirts. Buy T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts, and casual tshirts for everyday wear. All of our tshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect tshirt for you!
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
