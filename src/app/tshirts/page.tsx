"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import withProductList from "@/HOC/WithProductList";
const Tshirts = ({ products }: { products: any[] }) => {
  return (
    <div>
      <Head>
        <title>Buy-tshirts</title>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <h2 className="text-5xl  text-center mt-12">Explore Our Tshirts Collection</h2>
      <p className="p-3 text-sm font-medium text-gray-600 dark:text-gray-400 tracking-tighter mb-3">
        Welcome to Wearthings, your one-stop shop for stylish and unique
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
              return <Product product={product} linkRoute={"tshirts"} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default withProductList("tshirts")(Tshirts);
