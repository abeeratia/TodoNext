import ProductContent from "@/component/ProductContent";
// ===========SSR=====================>>>>>>>
export default async function Product() {
  let products = [];
  try {
    const data = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });
    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }
    products = await data.json();

    console.log("products", products);
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <h2 className="text-3xl text-red-500 mx-auto py-10 mb-10 text-center font-bold">
        products
      </h2>
      {products.length > 0 ? (
        <ProductContent products={products} />
      ) : (
        <div className="mx-auto flex justify-center items-center  h-screen text-center text-4xl font-bold text-green-500">
          No Product Found
        </div>
      )}
    </div>
  );
}
