import React from "react";
import styles from "./card.module.css";

const Card = ({ position, image, frameBg }) => {
  return (
    <div className={`${styles.frame} ${frameBg && styles.frameBg}`}>
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
