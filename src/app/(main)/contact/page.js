"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// =============CSR======================>>>>
async function contact() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  async function getAllData() {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();

      setData(products);
    } catch (error) {
      console.log(error);
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
 useEffect(() => {
  
      getAllData();
   
 }, []);

  return (
    <>
      <div className="container mx-auto text-center">
        <div className="grid sm:grid-cols-3 gap-4 ">
          {data.map((product) => (
            <div className="bg-slate-100  p-5 rounded-md" key={product.id}>
              <Image
                width={200}
                height={200}
                className="w-32 mx-auto text-center"
                src={product.image}
                alt={product.title}
              />
              <h2 className="text-2xl font-bold py-5 text-amber-600">
                {product.title.length > 10
                  ? product.title.slice(0, 10)
                  : product.title}
              </h2>
              <p className="text-sm text-gray-500 py-2">
                {product.description.length > 50
                  ? product.description.slice(0, 50) + "..."
                  : product.description}
              </p>
              <p className="font-bold text-red-400">{product.price}</p>
              <Link href={`/product/${product.id}`}>
                <button className="cursor-pointer btn p-2 my-5 rounded-md bg-amber-500 text-amber-100  ">
                  Show Details
                </button>
              </Link>{" "}
            </div>
          ))}

        </div>
        {data.length === 0 && (
          <div className="mx-auto flex justify-center items-center  h-screen text-center text-4xl font-bold text-green-500">
            No Product Found
          </div>
        )}
      </div>
    </>
  );
}

export default contact;
