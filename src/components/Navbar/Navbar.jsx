import React from "react";
import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";
import ProfileUi from "react-profile-card";
import subhanu from "../../assets/subhanu.jpeg";
import chethan from "../../assets/chethan.jpeg";

function Navbar() {
  return (
    <div className={styles.nav}>
      <img className={styles.logo} src={logo} alt="AIOverflow" />
      <div className={styles.aboutDiv}>
        <h2 className={styles.title}>About the Devs</h2>
        {/* <select className={styles.aboutSelect} name="About Us" id="about" onchange="location = this.value;">
          <option value="https://www.linkedin.com/in/chethan-reddy-0201791ba/">
            <a href="https://www.linkedin.com/in/chethan-reddy-0201791ba/">
              Chethan
            </a>
          </option>
          <option value="Subhanu Sankar Roy">
            <a href="https://www.linkedin.com/in/subhanu-sankar-roy/">
              Subhanu
            </a>
          </option>
        </select> */}
        <div className={styles.aboutBox}>
          <div className={styles.profContainer}>
            <div className={styles.box}>
              <img className={styles.imgBox} src={subhanu} alt="profile-img" />
              <h2 className={styles.name}>Subhanu</h2>
              <a
                className={styles.des}
                href="https://www.linkedin.com/in/subhanu-sankar-roy/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className={styles.profContainer}>
            <div className={styles.box}>
              <img className={styles.imgBox} src={chethan} alt="profile-img" />
              <h2 className={styles.name}>Chethan</h2>
              <a
                className={styles.des}
                href="https://www.linkedin.com/in/chethan-reddy-0201791ba/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* <ProfileUi imgUrl={subhanu} name="Subhanu" designation="Developer" /> */}
      </div>
    </div>
  );
}

export default Navbar;
