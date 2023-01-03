// import { useEffect, useState } from "react";
// import axios from "axios";
// import useFetch from "../../hooks/useFetch";
// import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import GlobalSpinner from "../../components/common/GlobalSpinner";
import useProduct from "../../hooks/products/useProduct";


const ProductDetail = () => {
  const { productId } = useParams();
  const { data, isLoading } = useProduct(productId);

  //   const {data, isLoading} = useFetch(`products/${productId}`)
  // const { data, isLoading } = useQuery({
  //   queryKey: ["products", productId],
  //   queryFn: () => getProductById(productId),
  //   // {return axios.get(`products/${productId}`)},
  // });

  if (isLoading) return <GlobalSpinner />;

  //   const data phải để dưới if (isLoading)
  const { data: product } = data; // === const product = data.data

  return (
    <section>
      {/* Container */}
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        {/* Layout */}
        <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* img */}
          <div className="grid">
            <img
              src={product.imageUrl}
              alt=""
              className="aspect-1/2 w-full rounded-xl"
            />
          </div>
          {/* content */}
          <div>
            <button className="px-3 py-0.5 border border-blue-600 rounded-full bg-gray-100 text-xs font-medium text-blue-700 ">
              {product.category}
            </button>
            <div className="flex justify-between my-4">
              <div className="max-w-[35ch]">
                <h1 className="text-2xl font-bold">{product.title}</h1>
              </div>
              <p className="text-lg font-bold">${product.price}</p>
            </div>
            <div className="pb-6">
              <div>
                <h5 className="font-bold">Description</h5>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
