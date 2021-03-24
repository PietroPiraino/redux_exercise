import { Provider } from "react-redux";
import { store } from "./appState/myStore";
import ProductForm from "./Components/ProductForm";

function App() {
  return (
    <Provider store={store}>
      <ProductForm />
    </Provider>
  );
}

export default App;
