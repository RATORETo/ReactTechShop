import axios from "axios";
import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductItem.scss";

const ProductItem = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const handleChildClick = (event) => {
    alert("Child clicked!");
    event.stopPropagation();
  };

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then((data) => {
      setData(data.data);
    });
  }, []);
  console.log(data);
  return (
    <div>
      <Header />
      <div className="Item">
        <img className="img" src={data.images} alt="" />
        <div className="text">
          <span className="sp1">{data.title}</span>
          <span className="sp2">{data.description}</span>
          <span className="price">Стоимость: {data.price} $</span>
          <div className="addTo">
            <button className="addToCart" onClick={handleChildClick}>
              Добавить в корзину
            </button>
            <button className="addToFavorite">
              <img
                src="https://texnomart.uz/_nuxt/img/like-default-18.cf027f5.svg"
                alt=""
              />
            </button>
          </div>
          <div className="articulId">
            Артикул: <span>{data.id}</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
