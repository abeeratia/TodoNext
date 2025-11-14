/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

function ProductOne({ productItem }) {
  return (
    <>
      <div className="container mx-auto ">
        <h2 className="text-3xl text-red-500 mx-auto py-10 mb-10 text-center font-bold">
          ProductDetails
        </h2>
        <div className="mx-auto py-10 w-1/2 rounded-lg  my-20 text-center bg-slate-200">
          <Image
            className="mx-auto w-25"
            src={productItem.image}
            width={200}
            height={200}
          ></Image>

          <h2 className="text-2xl font-bold py-5 text-amber-600">
            {productItem.title.length > 10
              ? productItem.title.slice(0, 10)
              : productItem.title}
          </h2>
          <p className="text-sm text-gray-500 py-2">
            {productItem.description.length > 50
              ? productItem.description.slice(0, 50) + "..."
              : productItem.description}
          </p>
        </div>
        {productItem.length === 0 && (
          <div className="mx-auto flex justify-center items-center  h-screen text-center text-4xl font-bold text-green-500">
            No Product Found
          </div>
        )}
      </div>
    </>
  );
}

export default ProductOne;
