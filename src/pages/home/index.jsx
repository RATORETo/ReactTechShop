import React from "react";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import Products from "../../components/Products";

function Home() {
  return (
    <div>
      <Header />
      <Products />
      <Cart />
    </div>
  );
}

export default Home;
