import React, { useEffect } from "react";

import Card from "./components/Card";

import styles from "./app.module.css";
import { mockData } from "./utils/mock-data";

const App = () => {
  // document.addEventListener('mousemove', (e) => {
  //   document.querySelector(".frame").forEach((move)=>{
  //     const movingValue = move.getAttribute('data-value')
  //     const x = e.clientX * movingValue / 250;
  //     const y = e.clientY * movingValue / 250;

  //     move.style.transform = `translateX(${x}px) translateY(${y}px )`
  //   })
  // })

  useEffect(() => {
    const zSpacing = -1000;
    let lastPos = zSpacing / 10;
    const frames = Array.from(
      document.getElementsByClassName("card_frame__tY3RH")
    );
    const zVals = [];

    window.onscroll = function () {
      const top = document.documentElement.scrollTop;
      const delta = lastPos - top;
      lastPos = top;

      frames.forEach(function (frame, i) {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -11.2;

        const transform = `translateZ(${zVals[i]}px)`;
        const opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.style.transform = transform;
        frame.style.opacity = opacity;
      });
    };

    window.scrollTo(0, 1);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.gallery}>
        {mockData.map((data) => {
          return <Card position={data.position} image={data.image} />;
        })}
      </section>
    </div>
  );
};

export default App;
