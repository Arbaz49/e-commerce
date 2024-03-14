"use client";
import withProductList from "@/HOC/WithProductList";
import Product from "@/components/Product";
import Head from "next/head";
const HoodiePage = ({ products }: { products: any[] }) => {
  return (
    <>
      <Head>
        <title>Buy-Mugs</title>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <h2 className="text-5xl  text-center mt-10">Explore Our Mugs Collection</h2>
      <p className="p-3 text-sm font-medium text-gray-600 dark:text-gray-400 tracking-tighter mb-3">
        Get stylish hoodies Mugs at WearThings.com. All of our
        Mugs are made with high-quality materials and are designed to be
        comfortable and durable. Shop now and find the perfect hoodie for you!
      </p>
      <section className="text-gray-600 body-font flex justify-center m-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products?.map((product: any) => {
              return <Product product={product} linkRoute={"hoodie"} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default withProductList("mugs")(HoodiePage);
