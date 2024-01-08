import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import 'semantic-ui-css/semantic.min.css'
// import styles bundle
import 'swiper/css/bundle';
import "swiper/css";
import "swiper/css/navigation";



import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
