import { useState } from "react";
import "./App.css";

function App() {

  const [calc, setCalc] = useState("")


  // stoping from re enter the operator values in input display

  const ops = ["-", "+", "%", "/", "*", "."]

  const updateCalc = value => {
    if (ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return;
    }

    setCalc(calc + value)
  }
  // calculation of total

  const calculate = () => {
    setCalc(eval(calc).toString())
  }
  // delete function

  const deleteLastDigit = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1)
    setCalc(value)
  }

  return (

    <div className="App">
      <div className="outputdisplaylayout">
        {/* output */}

        {calc || <span className="bigDisplay">0</span>}
      </div>
      <div className="buttonsLayout">
        {/* first portion */}

        <div className="first-portion">
          {/* clear button */}

          <button onClick={deleteLastDigit} className="ACTile">Del</button>
          {/* buttons */}

          <button onClick={() => updateCalc("%")} className="Moduler">%</button>
          <button onClick={() => updateCalc("/")}>/</button>
        </div>
        {/* second portion */}

        <div className="second-portion">
          <button onClick={() => updateCalc("7")}>7</button>
          <button onClick={() => updateCalc("8")}>8</button>
          <button onClick={() => updateCalc("9")}>9</button>
          <button onClick={() => updateCalc("*")}>*</button>
        </div>
        {/* third portion */}

        <div className="third-portion">
          <button onClick={() => updateCalc("4")}>4</button>
          <button onClick={() => updateCalc("5")}>5</button>
          <button onClick={() => updateCalc("6")}>6</button>
          <button onClick={() => updateCalc("-")}>-</button>
        </div>
        {/* forth portion */}

        <div className="forth-portion">
          <button onClick={() => updateCalc("1")}>1</button>
          <button onClick={() => updateCalc("2")}>2</button>
          <button onClick={() => updateCalc("3")}>3</button>
          <button onClick={() => updateCalc("+")}>+</button>
        </div>
        {/* fifth portion */}

        <div className="fifth-portion">
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          {/* equal section */}

          <button onClick={calculate} value="=">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
