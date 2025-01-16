import React from "react";
import styles from "./about.module.css";

function Aboutpage() {
  return (
    <>
      <div className={styles["textbox"]}>
        <p className={styles["typewriter"]}>: &nbsp;My name is Haochen Ding.</p>
        <p className={styles["typewriter"]}>
          : &nbsp;I am a Sophomore in University of Illinois, Urbana-Champaign.
        </p>
        <p className={styles["typewriter"]}>
          : &nbsp;I am currently pursuing a Bachelor's Degree in Computer
          Engineering.
        </p>
        <p className={styles["typewriter"]}>: &nbsp;Nice to meet you all!</p>
      </div>

      <img src="/Homepage_Background.jpg" alt="me" className={styles.image} />
    </>
  );
}

export default Aboutpage;
