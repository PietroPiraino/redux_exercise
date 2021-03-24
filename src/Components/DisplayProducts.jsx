import CreatedProduct from "./CreatedProduct";

export default function DisplayProducts({ products }) {
  return (
    <>
      {products.map((product) => {
        return <CreatedProduct product={product} key={product.productId} />;
      })}
    </>
  );
}
