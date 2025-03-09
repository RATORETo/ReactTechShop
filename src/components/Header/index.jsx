import React from "react";
import "./header.module.scss";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <header>
        <div className="headerTop">
          <div className="container">
            <div className="header-top">
              <div className="header-left">
                <img
                  className="leftImg"
                  style={{
                    marginRight: "4px",
                    marginTop: "5px",
                    width: "20px",
                    height: "20px",
                  }}
                  src="https://texnomart.uz/_nuxt/img/header-location.c6b9bf0.svg"
                  alt="Geo"
                />
                <div className="Geo" style={{ cursor: "pointer" }}>
                  <span>Ташкент </span>
                </div>
                <div className="Markets" style={{ cursor: "pointer" }}>
                  Наши магазины
                </div>
                <div className="legal" style={{ cursor: "pointer" }}>
                  Юридическим лицам
                </div>
                <div className="Pays" style={{ cursor: "pointer" }}>
                  Способы оплаты
                </div>
              </div>
              <div className="header-right">
                <div className="contact">
                  <a style={{ color: "#fff" }} href="tel:+998712099944">
                    Контакт центр : +99871 209 99 44
                  </a>
                </div>
                <div className="language" style={{ cursor: "pointer" }}>
                  <span>Ру</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="middleHeader">
              <Link to="/">
                <img
                  className="logo"
                  src="https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"
                  alt="logo"
                />
              </Link>
              <div className="headerSearch">
                <input
                  type="text"
                  style={{ fontSize: "16px", paddingLeft: "16px" }}
                  placeholder="Поиск..."
                />
              </div>
              <div className="headerMidRight">
                <Link to={"/signup"}>
                  <div className="Order">
                    <img
                      src="https://texnomart.uz/_nuxt/img/login-user.330bc91.svg"
                      alt="OrderLogo"
                    />
                    <span style={{ textDecoration: "none", color: "#333" }}>
                      Вход
                    </span>
                  </div>
                </Link>
                <Link to={"/favorites"}>
                  <div className="favorites">
                    <img
                      src="https://texnomart.uz/_nuxt/img/header-like.213624c.svg"
                      alt="Favorites"
                    />
                    <span style={{ color: "black" }}>Избранные</span>
                  </div>
                </Link>
                <Link to={"/bascet"}>
                  <div className="carts">
                    <img
                      src="https://texnomart.uz/_nuxt/img/header-basket.04697d5.svg"
                      alt="Carts"
                    />
                    <span style={{color:"#333"}}>корзина</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="headerBottom">
          <div className="container">
            <div className="cotygory">
              <div className="shares">АКЦИЙ</div>
              <div className="math">1+1</div>
              <div className="conditioner">КОНДИЦИАНЕРЫ</div>
              <div className="smartphones">СМАРТФОНЫ</div>
              <div className="hoover">ПЫЛЕСОСЫ</div>
              <div className="laptop">НОУТБУКИ</div>
              <div className="tv">ТЕЛЕВИЗОРЫ</div>
              <div className="allCategories">Все категории</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
