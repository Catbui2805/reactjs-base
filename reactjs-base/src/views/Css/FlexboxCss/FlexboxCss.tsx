import React from "react";
import styles from "./FlexboxCss.module.scss";

export default function FlexboxCss() {
  return (
    <div>
      <h6>Flexbox CSS</h6>
      <div className={styles.note}>
        <h6>Note: </h6>
        <p>* Container</p>
        <p>flex-direction: row and flex-wrap: wrap = flex-flow: row wrap;</p>
        <p>justify-content: flex-start align-items: flex-start</p>
        <p>* Item</p>
        <p>flex-basis: auto; flex-grow: 1; flex-shrink: 1;</p>
      </div>
      <div className={styles.container}>
        <div className={`${styles.box} ${styles.box1}`}>
          <p>Box 1</p>
          <p>Flex item</p>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <p>Box 1</p>
          <p>Flex item</p>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <p>Box 1</p>
          <p>Flex item</p>
        </div>
      </div>
    </div>
  );
}
