import React, { useEffect } from "react";

import Card from "./components/Card";

import styles from "./app.module.css";
import { mockData } from "./utils/mock-data";

const App = () => {
  useEffect(() => {
    let zSpacing = -1000;
    let lastPos = zSpacing / 5;
    let frames = Array.from(
      document.getElementsByClassName("card_frame__tY3RH")
    );
    let zVals = [];

    window.onscroll = function () {
      let top = document.documentElement.scrollTop;
      let delta = lastPos - top;
      lastPos = top;

      frames.forEach(function (frame, i) {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5.5;

        let transform = `translateZ(${zVals[i]}px)`;
        let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.style.transform = transform;
        frame.style.opacity = opacity;
      });
    };

    window.scrollTo(0, 1);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.gallery}>
        <div className="card_frame__tY3RH"></div>
        {mockData.map((data) => {
          return (
            <>
              <Card
                position={data.position}
                image={data.image}
                frameBg={data.frameBg}
              />
              {/* <div className="card_frame__tY3RH"></div> */}
            </>
          );
        })}
      </section>
    </div>
  );
};

export default App;
