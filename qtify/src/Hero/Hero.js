import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <div>
        <img
          src={require("../assets/vibrating-headphone 1.png")}
          width={212}
          alt="headphones"
        ></img>
      </div>
    </div>
  );
}

export default Hero;