import React, { useState, useEffect } from "react";
import "./Coin.css";

const Coin = ({ name, symbol, price, pricepercent }) => {
  const [savearr, setsavearr] = useState("");

  let array = [
    {
      name: { name },
      symbol: { symbol },
      price: { price },
      pricepercent: { pricepercent },
    },
  ];
  let [arrnew, setarr] = useState([array]);
  const handle = () => {
    console.log(setarr([...arrnew, array]));
    setsavearr("");
  };
  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(arrnew));
  }, [arrnew]);
  console.log(arrnew);

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <h3> {name}</h3>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price.toLocaleString()}</p>

          {pricepercent < 0 ? (
            <p className="coin-percent red">{pricepercent}%</p>
          ) : (
            <p className="coin-percent green">{pricepercent}%</p>
          )}
          <button className="btn" onClick={handle}>
            Save data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coin;
