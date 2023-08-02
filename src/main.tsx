import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ThemeProvider from "./context/ThemeProvider.tsx";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <ThemeProvider> */}
    <App />
    {/* </ThemeProvider> */}
  </Provider>
);
