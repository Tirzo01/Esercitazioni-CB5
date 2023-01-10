import { useEffect } from "react";
import { useState } from "react";

import "./layout.css";

export function Layout(props) {
  const [numbers, setNumber] = useState([]);

  const newRandomNumber = () => {
    setNumber(() => {
      return [...numbers, Math.floor(Math.random() * 90) + 1];
    });
  };

  return (
    <div className="container">
      <h1>Estrai 6 numeri</h1>
      <ul>
        <li></li>
        {numbers.map((number) => (
          <li>{number}</li>
        ))}
      </ul>
      <button
        className="extract-btn"
        onClick={newRandomNumber}
        disabled={numbers.length == 6 ? true : false}
      >
        Genera un numero
      </button>
    </div>
  );
}
