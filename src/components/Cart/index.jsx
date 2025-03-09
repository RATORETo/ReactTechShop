import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./cart.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/features/Cart/CartSlice";
import { addToFavorite } from "../../app/features/Favorite/FavoriteSlice";

const Cart = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 12;
  const maxOffset = 36;

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [offset]);

  const handleNext = () => {
    if (offset + limit <= maxOffset) {
      setOffset((prevOffset) => prevOffset + limit); // Увеличиваем offset на 12
    }
  };

  const handlePrev = () => {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  };

  // useEffect(() => {
  //   axios
  //     .get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=12`)
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // }, []);

  const onClickAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const onClickAddToFavorite = (product) => {
    dispatch(addToFavorite(product));
  };

  const addToFavorites = (item) => {
    dispatch(addToFavorite(item));
  };

  return (
    <>
      <div className={styles.Card} key={data.id}>
        {data.map((items) => (
          <div key={items.id} className={styles.CartOne}>
            <button onClick={() => addToFavorites(items)}>favor</button>
            <Link to={`/product/${items.id}`}>
              <div className={styles.cart}>
                <img className={styles.images} src={items.images} alt="" />
                <div
                  onClick={() => dispatch(onClickAddToFavorite(items))}
                  className={styles.addToFavorite}
                >
                  <img
                    src={
                      "https://texnomart.uz/_nuxt/img/like-default-18.cf027f5.svg"
                    }
                  />
                </div>
                <div className={styles.title}>{items.title}</div>
                <div className={styles.price}>{items.price} $</div>
              </div>
            </Link>
            <div className={styles.addToCard}>
              <button onClick={() => dispatch(onClickAddToCart(items))}>
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonNavigate}>
        <button className={styles.buttPrev} onClick={handlePrev}>
          Prev
        </button>
        <button className={styles.buttNext} onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default Cart;
