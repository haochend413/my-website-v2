"use client";
import Item from "./_components/resume-item";
import styles from "./resume.module.css";
function Experiencepage() {
  return (
    <>
      <p className="box">
        I am keen on participating in projects, academic researches and
        internships to improve my skills and widen my horizon. I am currently
        seeking for opportunities in ECE related fields.
      </p>

      {/* align, imglink, imgname, project_title, project_description, link*/}
      {/* this can be done with .map() function; */}
      <div className={styles["gallery-container"]}>
        <Item
          link="/Resume.pdf"
          imglink={"/PID_HGV_1.png"}
          imgname={"PID_HGV"}
          title={"CV"}
        />
        <Item
          link="https://github.com/haochend413/"
          imglink={"/FFT_Calculator_1.png"}
          imgname={"FFT"}
          title={"Github"}
        />
        <Item
          link="https://www.linkedin.com/in/hcd413/"
          imglink={"/MBSe MTT.jpg"}
          imgname={"MTT"}
          title={"LinkedIn"}
        />
      </div>
    </>
  );
}

export default Experiencepage;
