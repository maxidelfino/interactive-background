import React from "react";
import styles from "./card.module.css";

const Card = ({ position, image }) => {
  return (
    <div className={styles.frame} >
      <div>
        <div
          className={`${styles.frameMedia} ${
            position === "left"
              ? styles.frameMediaLeft
              : position === "right"
              ? styles.frameMediaRight
              : ""
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
