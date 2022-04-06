import React from "react";
import styles from "./main.module.css";
import ReactPlayer from "react-player";
function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.video}>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </div>
      <div></div>
    </div>
  );
}

export default Main;
