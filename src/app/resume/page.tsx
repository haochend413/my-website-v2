"use client";
import Item from "./_components/resume-item";
import styles from "./resume.module.css";
function Experiencepage() {
  return (
    <>
      {/* this can be done with .map() function; */}
      <div className={styles["gallery-container"]}>
        <Item
          link="/Resume.pdf"
          imglink={"/cv.png"}
          imgname={"cv"}
          title={"CV"}
        />
        <Item
          link="https://github.com/haochend413/"
          imglink={"/github.png"}
          imgname={"github"}
          title={"Github"}
        />
        <Item
          link="https://www.linkedin.com/in/hcd413/"
          imglink={"/linkedin.png"}
          imgname={"linkedin"}
          title={"LinkedIn"}
        />
      </div>
    </>
  );
}

export default Experiencepage;
