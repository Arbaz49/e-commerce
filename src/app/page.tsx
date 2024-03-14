"use client";
import { Inter } from "next/font/google";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import Head from "next/head";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const images = [
    <img src="/img1.webp" role="presentation" />,
    <img src="/img2.webp" role="presentation" />,
    <img src="/img3.webp" role="presentation" />,
    <img src="/img4.webp" role="presentation" />,
    <img src="/img5.webp" role="presentation" />,
  ];
  return (
    <div>
      <Head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <title>WearThings.com-wear the code</title>
        <link rel="shortcut icon" href="/tshirt.png" type="image/x-icon" />
      </Head>
      <div>
        <AliceCarousel
          animationDuration={1500}
          autoPlay={true}
          autoPlayControls={false}
          disableDotsControls={false}
          infinite={true}
          disableButtonsControls={true}
          items={images}
        />
      </div>

      <section className="text-gray-600 body-font">

      <h1 className="text-3xl mt-12 mx-auto text-center text-black font-bold">Collections</h1>
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <Link
                href={"/hoodie"}
                className="rounded-lg h-full overflow-hidden"
              >
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/hoodie.webp"
                />
              </Link>
            </div>

            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <Link
                href={"/tshirts"}
                className="rounded-lg h-full overflow-hidden"
              >
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/tshirt.webp"
                />
              </Link>
            </div>

            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <Link
                href={"/mugs"}
                className="rounded-lg h-full overflow-hidden"
              >
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/mugs.webp"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
         
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-pink-400 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-pink-500 text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Premium Tshirts
                </h2>
                <p className="leading-relaxed text-base">
                  T-Shirts are 100% made of cotton.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-pink-400 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    className="text-pink-500 text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Free Shipping
                </h2>
                <p className="leading-relaxed text-base">
                  We ship all over India for FREE.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-pink-400 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 320 512"
                    className="text-pink-500 text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Exciting Offers
                </h2>
                <p className="leading-relaxed text-base">
                  We provide amazing offers & discounts on our products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
