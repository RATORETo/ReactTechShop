import "./style.scss";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import ProductItem from "./pages/ProductItem";
import Favorites from "./pages/favorites";
import SignUp from "./pages/SignUp";
import Bascet from "./pages/Bascet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bascet" element={<Bascet />} />
        <Route path="/product/:id" element={<ProductItem />} />
      </Routes>
    </>
  );
}

export default App;
