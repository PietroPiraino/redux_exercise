import { useDispatch } from "react-redux";
import { REMOVE_PRODUCT } from "./../appState/actions";

export default function CreatedProduct({ product }) {
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    dispatch({ type: REMOVE_PRODUCT, payload: { id } });
  };
  return (
    <>
      <article style={{ background: "grey" }}>
        <div>
          <div>
            <img src={product.imageUrl} alt={product.productName} />
          </div>
          <div>
            <span>{product.productName}</span>
            <p>{product.productDesc}</p>
            <span>{product.productPrice}$</span>
          </div>
        </div>
        <button
          onClick={() => {
            removeProduct(product.productId);
          }}
        >
          Rimuovi
        </button>
      </article>
    </>
  );
}
