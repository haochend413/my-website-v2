import React from "react";
import styles from "./about.module.css";

function Aboutpage() {
  return (
    <>
      <p className="box">
        My name is Haochen Ding. I am a Sophomore in University of Illinois,
        Urbana-Champaign. I am currently pursuing a Bachelor's Degree in
        Computer Engineering. Nice to meet you all!
      </p>
      <img src="/Homepage_Background.jpg" alt="me" className={styles.image} />
    </>
  );
}

export default Aboutpage;
