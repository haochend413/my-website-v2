import React from "react";

function Experiencepage() {
  return (
    <>
      <h1 className="section-title">Resume & Websites</h1>
      <p className="box">
        <a
          href="/my-website-v2/Resume.pdf" //why??
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
        <br></br>
        <a
          href="https://github.com/haochend413"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <br></br>
        <a
          href="https://linkedin.com/in/hcd413"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <br></br>
      </p>
    </>
  );
}

export default Experiencepage;
