import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.scss";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/categories`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <div className="asd">
        {data.map((item) => (
          <div
            key={item.id}
            className="container"
            style={{ margin: "60px 12px 12px 20px" }}
          >
            <div className="CartItem">
              <div className="img" key={item.id}>
                <img
                  key={item.id}
                  style={{ borderRadius: "10px" }}
                  width={140}
                  height={140}
                  src={item.image}
                  alt="Images"
                />
                <div className="description">
                  <span className="span">{item.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
