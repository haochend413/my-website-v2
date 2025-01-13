"use client";

import Navbar from "./Navbar";
import Titlebar from "./Titlebar";
import { useState } from "react";

export default function head() {
  const [activeButton, setActiveButton] = useState("");
  return (
    <div>
      <Titlebar setActiveButton={setActiveButton} />
      <Navbar activeButton={activeButton} setActiveButton={setActiveButton} />
    </div>
  );
}
