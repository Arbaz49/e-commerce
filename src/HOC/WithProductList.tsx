import React, { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';

// Higher Order Component to handle loading logic and API calls
const withProductList = (category: string) => (WrappedComponent: React.ComponentType<any>) => {
  return () => {
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
        const { data } = await axios.get(`http://localhost:3000/api/products?category=${category}`);
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

    return (
      <>
        {showLoader ? <Loader /> : (
          <>
            <LoadingBar
              style={{ height: "4px" }}
              color="rgb(236 72 153)"
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
            <WrappedComponent products={products} />
          </>
        )}
      </>
    );
  };
};

export default withProductList;
