import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        totalProducts: state.totalProducts + 1,
      };

    case REMOVE_PRODUCT:
      console.log(action.payload);
      return {
        ...state,
        products: state.products.filter(
          (product) => product.productId !== action.payload.id
        ),
        totalProducts: state.totalProducts - 1,
      };

    default:
      return state;
  }
}
