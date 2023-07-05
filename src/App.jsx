import React, { useEffect } from "react";
import Card from "./components/Card";
import styles from "./app.module.css";
import { mockData } from "./utils/mock-data";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  useEffect(() => {
    const zSpacing = -500;
    let lastPos = zSpacing / 55;
    const frames = Array.from(
      document.getElementsByClassName("card_frame__tY3RH")
    );
    const zVals = [];

    window.onscroll = function () {
      const top = document.documentElement.scrollTop;
      const delta = lastPos - top;

      frames.forEach(function (frame, i) {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5.9;

        const transform = `translateZ(${zVals[i]}px)`;
        const opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.style.transform = transform;
        frame.style.opacity = opacity;
        if (top > lastPos) {
          setTimeout(() => {
            frame.style.display = `${opacity === 0 ? "none" : ""}`;
          }, 500);
        } else {
          frame.style.display = "flex";
        }
      });
      lastPos = top;
    };

    window.scrollTo(0, 1);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className={styles.container}>
        <section className={styles.gallery}>
          {mockData.map((data) => {
            return <Card position={data.position} image={data.image} />;
          })}
        </section>
      </div>
    </>
  );
};

export default App;
