import React from "react";
import styles from "./bascet.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../app/features/Cart/CartSlice";

const Basket = () => {
  const baskets = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalAmount = baskets.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className={styles.bascet}>
        <Header />
        <div className={styles.inner}>
          <h1 className={styles.TitleBascet}>Корзина</h1>
          <div className={styles.Order}>
            <div className={styles.list}>
              {baskets.items.length > 0 ? (
                <div className="mapItem">
                  {baskets.items.map((items) => (
                    <div key={items.id} className={styles.item}>
                      <img
                        className={styles.imgItem}
                        src={items.images}
                        alt="img"
                      />
                      <div className={styles.info}>
                        <h1 className={styles.Title}>{items.title}</h1>
                        <span className={styles.price}>
                          Цена: {items.price}
                        </span>
                        <div className={styles.counter}>
                          <button
                            onClick={() => dispatch(decrementQuantity(items.id))}
                            disabled={items.quantity === 1}
                          >
                            -
                          </button>
                          <span>{items.quantity}</span>
                          <button
                            onClick={() => dispatch(incrementQuantity(items.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className={styles.remouveItem}><button onClick={() => dispatch(removeFromCart(items.id))}>Удалить</button></div>
                    </div>
                  ))}
                  <h1>сумма всех товаров: {totalAmount}$</h1>
                  <button className={styles.orderButton} >Оформить заказ</button>
                </div>
              ) : (
                <h1>У вас в корзине нет товаров.</h1>
              )}
            </div>
            <div className={styles.priceList}>
              {/* {baskets.items.map((item) =>(
                <div key={item.id}>
                  <ul>
                    <li style={{display:"flex", flexDirection:"column"}}><span>{item.title}</span>
                    <span>Цена: {item.price}</span></li>
                  </ul>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
