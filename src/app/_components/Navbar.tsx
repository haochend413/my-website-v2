"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  // Next useRouter;
  const router = useRouter();
  // State to track the active button
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (route: string) => {
    setActiveButton(route);
    router.push(route);
  };

  //Data
  const buttons = [
    { label: "HOME", route: "/" },
    { label: "ABOUT", route: "/about" },
    { label: "PROJECTS", route: "/projects" },
    { label: "RESUME", route: "/resume" },
  ];

  //maping data to structure
  return (
    <nav className="navT">
      {buttons.map(({ label, route }, index) => (
        <button
          key={index}
          className={`button ${activeButton === route ? "active" : ""}`}
          onClick={() => handleButtonClick(route)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
