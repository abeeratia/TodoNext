import Homeproduct from "@/component/homeproduct";
import React from "react";
// ===========ISR===================>>>>>>>
export default async function HomePage() {
  const data = await fetch("https://fakestoreapi.com/products", {
    revalidate: 1,
  });
  const products = await data.json();
  console.log("products", products);

  return (
    <div>
      <h2 className="text-3xl text-red-500 mx-auto py-10 mb-10 text-center font-bold">
        Home
      </h2>
      <Homeproduct products={products} />
    </div>
  );
}
