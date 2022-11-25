import React, { useState } from "react";

function Counter(props) {
  const [count, setcount] = useState(0);

  function decrement() {
    if (count === 0) {
    } else {
      setcount(count - 1);
    }
  }

  function increment() {
    setcount(count + 1);
  }

  return (
    <div className="grid-right-last-row">
      <div className="counter">
        <button className="inc button-style" onClick={decrement}>
          -
        </button>
        <h4 className="val">{count}</h4>
        <button className="dec button-style" onClick={increment}>
          +
        </button>
      </div>

      <button className="cart">
        <h4 className="cart-text">Add to cart</h4>
      </button>
    </div>
  );
}
export default Counter;
