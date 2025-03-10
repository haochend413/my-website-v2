"use client";

import Item from "./_components/experience-item";
import styles from "./projects.module.css";
import { useRouter } from "next/navigation";

function Experiencepage() {
  return (
    <>
      <div className={styles["sizing"]}>
        <div className={styles["textbox"]}>
          <p className={styles["typewriter"]}>
            : &nbsp; I am keen on participating in projects, academic research
            and internships to improve my skills and widen my horizon.
          </p>
          <p className={styles["typewriter"]}>
            : &nbsp; I am currently seeking for opportunities in ECE related
            fields.
          </p>
        </div>
      </div>

      {/* align, imglink, imgname, project_title, project_description, link*/}
      {/* this can be done with .map() function; */}
      <div className={styles["gallery-container"]}>
        <Item
          link="https://github.com/haochend413/Particle_Filter"
          align={1}
          imglink={"/particle_filter.png"}
          imgname={"Particle_filter"}
          project_title={"Particle Filter"}
          project_description={
            "Applications based on particle filter algorithm. (SP 2025 URAP)"
          }
        />
        <Item
          link="/ECE_198_Final_Report.pdf"
          align={0}
          imglink={"/PID_HGV_1.png"}
          imgname={"PID_HGV"}
          project_title={"PID AGV"}
          project_description={
            "Using hardware components to achieve obstacle sensing and smooth speed change. (ECE 198)"
          }
        />
        <Item
          link="https://github.com/haochend413/FFT-Calculator"
          align={1}
          imglink={"/FFT_Calculator_1.png"}
          imgname={"FFT"}
          project_title={"FFT Calculator"}
          project_description={
            "Rust-based FFT calculator with SIMD and multithread optimization (CS 199-128)"
          }
        />
        <Item
          link="/Synthesis of Selenomethylene Blue and its Application in Type I, II Photodynamic Therapy.pdf"
          align={0}
          imglink={"/MBSe MTT.png"}
          imgname={"MTT"}
          project_title={"MBSe Synthesis & Appl"}
          project_description={
            "Synthesized MBSe photosensitizer and studied its therapeutic effects."
          }
        />
        <Item
          link="https://github.com/haochend413/personal_website"
          align={1}
          imglink={"/website-v1.png"}
          imgname={"website-v1"}
          project_title={"Personal Website V1"}
          project_description={"V1 website with React & JS"}
        />
        <Item
          link="https://github.com/haochend413/my-website-v2"
          align={0}
          imglink={"/website-v2.png"}
          imgname={"website-v2"}
          project_title={"Personal Website V2"}
          project_description={"V2 website with Next.js, React and Vercel"}
        />
        <Item
          link="https://github.com/haochend413/PathForms"
          align={1}
          imglink={"/pathforms.png"}
          imgname={"PathForms"}
          project_title={"PathForms"}
          project_description={
            "Visualization of Nielson Transformation in group theory"
          }
        />
      </div>
    </>
  );
}

export default Experiencepage;
