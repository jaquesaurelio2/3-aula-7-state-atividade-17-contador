import * as React from "react";
import styles from "./app.module.css";

export default function App() {
  return (
    <div className={styles.counter}>
      <button className={styles.button}>-</button>
      <div className={styles.display}>0</div>
      <button className={styles.button}>+</button>
    </div>
  );
}
