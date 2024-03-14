import Link from "next/link";
import React from "react";

const AboutPAge = () => {
  return (
    <>
      <div className="mx-auto mt-6" style={{ width: "70%" }}>
        <h1 className="mx-auto text-pink-500 mt-6 my-6 text-center title-font sm:text-4xl text-3xl mb-2 font-medium">
          WearThings
        </h1>
        <h1 className="text-center title-font sm:text-4xl text-3xl mb-2 font-medium">
          Welcome to WearThings.com
        </h1>
        <p className="mt-4 mb-8 leading-relaxed">
          Introducing WearThings, a revolutionary e-commerce platform that
          delivers amazing products at unbeatable prices. Built on a foundation
          of NextJs and MongoDB, our website offers a seamless shopping
          experience powered by server-side rendering. Whether you're a tech
          enthusiast or simply looking for a stylish geek T-shirt, CodesWear has
          something for everyone. And for those curious about the development
          process, be sure to check out the CodeWithHarry NextJs playlist on
          YouTube. Shop now at CodesWear and experience the future of online
          shopping.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            className="mx-auto my-4 bg-pink-500 text-white p-2 rounded"
            href={"/tshirts"}
          >
            Start Shopping
          </Link>
        </div>
      </div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              Testimonials
            </h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    I recently discovered this site and I am so impressed with
                    the quality and selection of hoodies and sweatshirts they
                    offer. Not only are the prices incredibly affordable, but
                    the quality of the clothing is top-notch. I have received
                    many compliments on the items I've purchased and have been
                    asked where I got them. The customer service is also
                    excellent - they were very helpful with a question I had. I
                    highly recommend this site to anyone looking for
                    high-quality clothing at unbeatable prices.
                  </p>
                  <a className="inline-flex items-center">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Abash Sharma
                      </span>
                      <span className="text-gray-500 text-sm">CUSTOMER</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    I recently purchased a hoodie and t-shirt from this online
                    E-commerce site and I couldn't be happier with my purchase!
                    The quality of the clothing is top-notch and the designs are
                    unique and stylish. The ordering process was easy and the
                    shipping was fast. I also appreciate the wide variety of
                    sizes available. I highly recommend this site to anyone
                    looking for high-quality, fashionable clothing at a great
                    price.
                  </p>
                  <a className="inline-flex items-center">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        john Kumar
                      </span>
                      <span className="text-gray-500 text-sm">CUSTOMER</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPAge;
