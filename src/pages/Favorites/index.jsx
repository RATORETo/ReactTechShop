import React from "react";
import Header from "./../../components/Header";
import styles from "./favorites.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorite } from "../../app/features/Favorite/FavoriteSlice";
function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      {favorites.length > 0 ? (
        favorites.map((item) => {
          return (
            <div key={item.id}>
              <div className="inner">
                <img className={styles.images} src={item.images} alt="" />
                <h1>{item.title}</h1>
                <p>{item.id}</p>
                <button onClick={()=> dispatch(removeFromFavorite(item.id))}>Удалить</button>
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.noItem}>
          <div className={styles.container}>
            <div className={styles.title}>
              <img
                onClick={() => navigate(-1)}
                src="https://texnomart.uz/_nuxt/img/angle_left_16.1a20e77.svg"
                alt=""
              />
              <span className="home"></span>
              <span className="favorites"></span>
            </div>
          </div>
          <div className={styles.line}>
            <h1 className={styles.h1}>Избранное</h1>
          </div>
          <div className={styles.container}>
            <div className={styles.emptybox}>
              <img
                src="https://texnomart.uz/_nuxt/img/favourite.fd11bf9.svg"
                alt=""
              />
              <span className={styles.h1}>Ваш список избранного пуст</span>
              <p className={styles.p}>
                Добавляйте понравившиеся товары в избранное, чтобы посмотреть
                или купить их позже
              </p>
              <Link to="/">
                <button>Перейти на главную</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Favorites;
