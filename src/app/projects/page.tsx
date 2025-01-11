"use client";

import Item from "./_components/experience-item";

function Experiencepage() {
  return (
    <>
      <h1 className="section-title"> Statement </h1>
      <p className="box">
        I am keen on participating in projects, academic researches and
        internships to improve my skills and widen my horizon. I am currently
        seeking for opportunities in ECE related fields.
      </p>
      <h1 className="section-title"> Projects </h1>
      {/* align, imglink, imgname, project_title, project_description, Project_link */}
      {/* this can be done with .map() function; */}
      <Item
        onClick={() => 1}
        align={0}
        imglink={"_images/PID_HGV_1.png"}
        imgname={"PID_HGV"}
        project_title={"PID AGV"}
        project_description={
          "Using hardware components to achieve obstacle sensing and smooth speed change. (ECE 198)"
        }
        Project_link={"_files/ECE_198_Final_Report.pdf"}
      />
      <Item
        onClick={() => 1}
        align={1}
        imglink={"_images/FFT_Calculator_1.png"}
        imgname={"FFT"}
        project_title={"FFT Calculator"}
        project_description={
          "Rust-based FFT calculator with SIMD and multithread optimization (CS 199-128)"
        }
        Project_link={"https://github.com/haochend413/FFT-Calculator"}
      />
      <Item
        onClick={() => 1}
        align={0}
        imglink={"_images/MBSe MTT.jpg"}
        imgname={"MTT"}
        project_title={
          "Synthesis of MBSe and Application in Photodynamic Therapy"
        }
        project_description={
          "synthesized MBSe photosensitizer and studied its therapeutic effects on cancer cells and simulated tumor organisms."
        }
        Project_link={
          "_files/Synthesis of Selenomethylene Blue and its Application in Type I, II Photodynamic Therapy.pdf"
        }
      />
    </>
  );
}

export default Experiencepage;
