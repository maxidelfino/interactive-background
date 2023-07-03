import React from "react";
import styles from "./card.module.css";
import { Tilt } from "react-tilt";
import { tiltConfig } from "../../config/tilt-config";

const Card = ({ position, image }) => {
  return (
    <div className={styles.frame}>
      <Tilt
        options={tiltConfig}
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
      ></Tilt>
    </div>
  );
};

export default Card;
