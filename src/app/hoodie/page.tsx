"use client"
import withProductList from '@/HOC/WithProductList';
import Product from '@/components/Product';
const HoodiePage = ({ products}: { products: any[] }) => {
  
  
  
  return   <>
    
     <h2 className="text-5xl  text-center">Explore Our Hoodie Collection</h2>
      <p className="p-3 text-sm font-medium text-gray-600 dark:text-gray-400 tracking-tighter mb-3">
      Stay warm and stylish with the wide selection of hoodies available at Codeswear.com. Our hoodies are perfect for every occasion, whether you're looking for a casual everyday hoodie or something to wear to the gym. We have a variety of styles to choose from, including coding hoodies, anime hoodies, and casual hoodies for everyday wear. All of our hoodies are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect hoodie for you!
      </p>
  <section className="text-gray-600 body-font flex justify-center m-auto">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
      {products?.map((product: any) => {
        return (
          <Product product={product} linkRoute={"hoodie"} />
        );
      })}
    </div>
  </div>
</section>
</>

}
export default withProductList('hoodie')(HoodiePage);

