import React, { useEffect } from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import video from "./media/video_optimized.mp4";
import styles from "./app.module.css";

const App = () => {
  useEffect(() => {
    let zSpacing = -1000;
    let lastPos = zSpacing / 5;
    let frames = Array.from(document.getElementsByClassName("app_frame__ne+7C"));
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

        <div className={styles.frame}></div>

        <div className={styles.frame}>
          <div>
            <div
              className={`${styles.frameMedia} ${styles.frameMediaRight}`}
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D&w=1000&q=80)`,
              }}
            ></div>
          </div>
        </div>

        <div className={styles.frame}>
          <div>
            <div
              className={`${styles.frameMedia} ${styles.frameMediaLeft}`}
              style={{
                backgroundImage: `url(${img1})`,
              }}
            ></div>
          </div>
        </div>

        <div className={`${styles.frame} ${styles.frameBg}`}>
          <div>
            <video
              className={`${styles.frameMedia} ${styles.frameMediaRight}`}
              src={video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        <div className={styles.frame}></div>

        <div className={styles.frame}>
          <div>
            <div
              className={`${styles.frameMedia} ${styles.frameMediaRight}`}
              style={{
                backgroundImage: `url(https://www.pexels.com/photo/842711/download/)`,
              }}
            ></div>
          </div>
        </div>

        <div className={`${styles.frame} ${styles.frameBg}`}>
          <div>
            <div
              className={`${styles.frameMedia} ${styles.frameMediaLeft}`}
              style={{
                backgroundImage: `url(${img2})`,
              }}
            ></div>
          </div>
        </div>

        <div className={styles.frame}></div>

        <div className={`${styles.frame} ${styles.frameBg}`}>
          <div>
            <div
              className={`${styles.frameMedia} ${styles.frameMediaRight}`}
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
          </div>
        </div>

        <div className={styles.frame}></div>

        <div className={`${styles.frame} ${styles.frameBg}`}>
          <div>
            <div
              className={`${styles.frameMedia} ${styles.frameMediaLeft}`}
              style={{
                backgroundImage: `url(https://c0.wallpaperflare.com/preview/1/703/828/fighter-jet-airshow.jpg)`,
              }}
            ></div>
          </div>
        </div>

        <div className={`${styles.frame} ${styles.frameBg}`}>
          <div>
            <div
              className={`${styles.frameMedia} ${styles.frameMediaRight}`}
              style={{ backgroundImage: `url(${img4})` }}
            ></div>
          </div>
        </div>

        <div className={`${styles.frame} ${styles.frameBg}`}>
          <div>
            <video
              className={`${styles.frameMedia} ${styles.frameMediaLeft}`}
              src={video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        <div className={styles.frame}></div>
        <div className={styles.frame}></div>

        <div className={styles.frame}>
          <div className={styles.frameBg}>
            <div
              className={`${styles.frameMedia} ${styles.frameMediaRight}`}
              style={{ backgroundImage: `url(${img5})` }}
            ></div>
          </div>
        </div>

        <div className={styles.frame}>
          <div>
            <video
              className={styles.frameMedia}
              src={video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        <div className={styles.frame}></div>
        <div className={styles.frame}></div>

        <div className={styles.frame}>
          <div className={styles.frameBg}>
            <div
              className={`${styles.frameMedia} ${styles.frameMediaRight}`}
              style={{ backgroundImage: `url(${img5})` }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
