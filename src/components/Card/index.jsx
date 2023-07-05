import React from "react";
import styles from "./card.module.css";
import { Tilt } from "react-tilt";
import { tiltConfig } from "../../config/tilt-config";

const Card = ({ position, image, dataValue }) => {
  return (
    <div className={styles.frame} data-value={dataValue}>
      <Tilt
        options={tiltConfig}
        className={`${styles.frameMedia} ${
          position === "left"
            ? styles.frameMediaLeft
            : position === "right"
            ? styles.frameMediaRight
            : position === "top"
            ? styles.frameMediaTop
            : position === "bottom"
            ? styles.frameMediaBottom
            : position === "bottom-left"
            ? styles.frameMediaBottomLeft
            : position === "bottom-right"
            ? styles.frameMediaBottomRight
            : position === "top-left"
            ? styles.frameMediaTopLeft
            : position === "top-right"
            ? styles.frameMediaTopRight
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
