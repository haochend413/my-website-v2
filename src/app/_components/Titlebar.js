"use client";

import { React } from "react";
import { useRouter } from "next/navigation";

function TitleBar() {
  const router = useRouter();

  /* this is not the best way; the best implementation, 
  since I want to influence the state of Navbar with TitleBar, 
  the best way is to set them up with a common parent who controlls the states. 
  but I am lazy. */

  const title_onclick_redirect = () => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    router.push("/");
  };
  return (
    <div className="navContainer">
      <h1 className="pagetitle" onClick={title_onclick_redirect}>
        Haochen Ding's Website
      </h1>
    </div>
  );
}

export default TitleBar;
