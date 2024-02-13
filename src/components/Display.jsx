import styles from "./Display.module.css";

const Display = ({ expression }) => {
  return (
    <>
      <input
        type="text"
        id="display"
        className={
          styles.display + " " + (expression === "ERROR" && styles.errMsg)
        }
        readOnly
        value={expression}
      />
    </>
  );
};

export default Display;
