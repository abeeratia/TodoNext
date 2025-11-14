import Image from "next/image";
import Link from "next/link";
import React from "react";

function Homeproduct({ products }) {
  return (
    <div className="container mx-auto text-center">
      <div className="grid sm:grid-cols-3 gap-4 ">
        {products.map((product) => (
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
    </div>
  );
}

export default Homeproduct;
