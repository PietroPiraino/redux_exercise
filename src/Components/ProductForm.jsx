import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT } from "../appState/actions";
import DisplayProducts from "./DisplayProducts";

export default function ProductForm() {
  const [newProduct, setNewProduct] = useState({});
  const dispatch = useDispatch();
  const { products, totalProducts } = useSelector((state) => state);

  const onInputChange = (e) => {
    setNewProduct((product) => ({
      ...product,
      [e.target.name]: e.target.value,
      productId: new Date().getTime().toString(),
    }));
  };

  const submitProduct = (e) => {
    e.preventDefault();

    if (
      newProduct.productName &&
      newProduct.imageUrl &&
      newProduct.productDesc
    ) {
      dispatch({ type: ADD_PRODUCT, payload: newProduct });
      setNewProduct({});
      e.target.reset();
    }
    console.log(products);
  };

  return (
    <>
      <section className="page">
        <h2>Inserisci nuovo prodotto</h2>

        <form onSubmit={submitProduct}>
          <label htmlFor="productName">Nome prodotto:</label>
          <input
            required
            type="text"
            id="productName"
            name="productName"
            onChange={onInputChange}
          ></input>
          <br />
          <label htmlFor="imageUrl">Link Immagine:</label>
          <input
            required
            type="url"
            id="imageUrl"
            name="imageUrl"
            onChange={onInputChange}
          ></input>
          <br />
          <label htmlFor="productDesc">Descrizione prodotto:</label>
          <input
            required
            type="text"
            name="productDesc"
            id="productDesc"
            onChange={onInputChange}
          ></input>
          <br />
          <label htmlFor="productPrice">Prezzo prodotto:</label>
          <input
            required
            type="number"
            name="productPrice"
            id="productPrice"
            onChange={onInputChange}
            min="1"
          ></input>
          <br />
          <button type="submit">Aggiungi prodotto</button>
        </form>
      </section>
      <br />
      <br />
      <span>{totalProducts}</span>
      <br />
      <br />

      <DisplayProducts products={products}></DisplayProducts>
    </>
  );
}
