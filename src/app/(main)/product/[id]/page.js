import ProductOne from "@/component/productdetails";
import React from "react";
// ==========SSG Default===================>>>>>>>
async function getAllData() {
 try {
   const data = await fetch("https://fakestoreapi.com/products");
   const products = await data.json();
   return products;
 } catch (error) {
   console.log(error);
 }
}

async function getOneProduct(id) {
  try {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const productItem = await data.json();
    return productItem;
  } catch (error) {
    console.log(error);
  }
}

// export async function generateStaticParams() {
//   const products = await getAllData();
//   return products.map((product) => ({
//     id: product.id.toString(),
//   }));
// }

async function ProductDetails({ params }) {
  const {id} = await params;
  console.log("id", id);

  const productItem = await getOneProduct(id);

  console.log("dataaaaaaaaaaaaaaaa", productItem);

  return (
    <>
      <ProductOne productItem={productItem} />
    </>
  );
}

export default ProductDetails;
