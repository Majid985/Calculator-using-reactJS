import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const operators = ["+", "-", "*", "/"];
  const [operator, setOperator] = useState(false);
  const [expression, setExpression] = useState("");
  const handleButtonClick = (buttonName) => {
    try {
      if (buttonName === "C") {
        setExpression("");
      } else if (expression === "ERROR" || expression === Infinity) {
        setExpression(buttonName);
      } else if (buttonName === "=" && !operator) {
        setExpression(eval(expression));
        setOperator(false);
      } else if (buttonName === "=" && operator) {
        setExpression("ERROR");
        setOperator(false);
      } else {
        if (operators.includes(buttonName) && operator) {
          let newExpression = expression.replace(/.$/, buttonName);
          setExpression(newExpression);
        } else if (operators.includes(buttonName) && !operator) {
          setOperator(true);
          setExpression(expression + buttonName);
        } else {
          setExpression(expression + buttonName);
          setOperator(false);
        }
      }
    } catch (err) {
      setExpression("ERROR");
    }
  };

  return (
    <div style={{ alignItems: "center" }}>
      <div className={styles.calculator} id="calculator">
        <Display expression={expression} />
        <ButtonsContainer handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
