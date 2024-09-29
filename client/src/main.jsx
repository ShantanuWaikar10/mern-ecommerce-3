import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Toaster } from "./components/ui/toaster.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>
);

//backend url
//store -> auth-slice -> index.js
//store -> admin -> products-slice -> auth-slice -> index.js
// components -> admin-view -> image-upload.jsx

// server File
// frontend URL

// shop/order-controller.js