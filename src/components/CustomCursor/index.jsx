import React, { useEffect } from "react";
import styles from "./custom-cursor.module.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", (e) => {
      const x = e.pageX;
      const y = e.pageY;

      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;
      cursor.style.display = "block";
    });
  }, []);

  return <div id="cursor" className={styles.cursor}></div>;
};

export default CustomCursor;
