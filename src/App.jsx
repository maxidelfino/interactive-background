import React, { useEffect } from "react";

import Card from "./components/Card";

import styles from "./app.module.css";

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

        <div className='card_frame__tY3RH'></div>

        <Card
          position={"left"}
          image={"https://wallpapercave.com/wp/wp7742996.jpg"}
          frameBg={true}
        />
        <Card
          position={"right"}
          image={
            "https://c4.wallpaperflare.com/wallpaper/758/592/32/amoled-dark-vertical-hd-wallpaper-preview.jpg"
          }
          frameBg={true}
        />

        <Card
          position={"left"}
          image={
            "data:image/jpeg;base64,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"
          }
          frameBg={true}
        />
        <Card
          position={"right"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7cWByLWSDYNmGBlyH_k9_AwqDHaRjAQSqEZXEY3qn8BXKszl0qdmfPM9WXfM-iJiUSE&usqp=CAU"
          }
          frameBg={true}
        />

        <Card
          position={"left"}
          image={"https://wallpaperaccess.com/full/1975618.jpg"}
          frameBg={true}
        />
        <Card
          position={"right"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7cWByLWSDYNmGBlyH_k9_AwqDHaRjAQSqEZXEY3qn8BXKszl0qdmfPM9WXfM-iJiUSE&usqp=CAU"
          }
          frameBg={true}
        />

        <Card
          position={"left"}
          image={"https://wallpaperaccess.com/full/1975618.jpg"}
          frameBg={true}
        />
        <Card
          position={"right"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7cWByLWSDYNmGBlyH_k9_AwqDHaRjAQSqEZXEY3qn8BXKszl0qdmfPM9WXfM-iJiUSE&usqp=CAU"
          }
          frameBg={true}
        />

        <Card
          position={"left"}
          image={"https://wallpaperaccess.com/full/1975618.jpg"}
          frameBg={true}
        />
        <Card
          position={"right"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7cWByLWSDYNmGBlyH_k9_AwqDHaRjAQSqEZXEY3qn8BXKszl0qdmfPM9WXfM-iJiUSE&usqp=CAU"
          }
          frameBg={true}
        />

        <Card
          position={"left"}
          image={"https://wallpaperaccess.com/full/1975618.jpg"}
          frameBg={true}
        />
        <Card
          position={"right"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7cWByLWSDYNmGBlyH_k9_AwqDHaRjAQSqEZXEY3qn8BXKszl0qdmfPM9WXfM-iJiUSE&usqp=CAU"
          }
          frameBg={true}
        />

        <Card
          position={"left"}
          image={"https://wallpaperaccess.com/full/1975618.jpg"}
          frameBg={true}
        />
        <Card
          position={"right"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7cWByLWSDYNmGBlyH_k9_AwqDHaRjAQSqEZXEY3qn8BXKszl0qdmfPM9WXfM-iJiUSE&usqp=CAU"
          }
          frameBg={true}
        />
      </section>
    </div>
  );
};

export default App;
