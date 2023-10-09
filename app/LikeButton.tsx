"use client";

import styles from "./LikeButton.module.css";
import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  function handleClick(){
  setCount(count+1)  
  }
  return (
    <div className={styles.LikeButton}>
      <button id="like-button" onClick={handleClick}>Like</button>
      <span id="like-count">{count}</span>
    </div>
  );
}
