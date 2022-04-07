import React from "react";
import styles from "./main.module.css";
import ReactPlayer from "react-player";
// import {Video} from 'cloudinary-react'

function Main({dataSent}) {
  // const [data, setdata] = useState([])
  return (
    <div className={styles.main}>
      <div className={styles.video}>
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}
        {/* <Video cloudName={cloudName} publicId=""/> */}
        {/* <SkillBar skills={dataSent}/> */}
      </div>
      <div></div>
    </div>
  );
}

export default Main;
