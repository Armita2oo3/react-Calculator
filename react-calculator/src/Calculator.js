import React, { useState } from "react";
import "./Calculator.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Calculator() {
  const [result, setResult] = useState("");
  function handleClick(props) {
    setResult(result.concat(props.target.name));
  }
  function del() {
    setResult(result.slice(0, result.length - 1));
  }

  function equal() {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  }

  function showDigits() {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={handleClick} name={i} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="top">
          <form>
            <input type="text" placeholder="0" value={result} />
          </form>
        </div>

        <div className="operators ">
          <button name="/" onClick={handleClick}>
            ÷
          </button>
          <button name="*" onClick={handleClick}>
            x
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>

          <button onClick={del}>DEL</button>
        </div>

        <div className="digits">
          {showDigits()}
          <button name="0" onClick={handleClick}>
            0
          </button>

          <button name="." onClick={handleClick}>
            .
          </button>
          <button onClick={equal}>=</button>
        </div>
      </div>
    </div>
  );
}
