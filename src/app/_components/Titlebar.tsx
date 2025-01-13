"use client";
import styles from "./components.module.css";
import { useRouter } from "next/navigation";

type TitleBarProps = {
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
};

function TitleBar({ setActiveButton }: TitleBarProps) {
  const router = useRouter();

  /* this is not the best way; the best implementation, 
  since I want to influence the state of Navbar with TitleBar, 
  the best way is to set them up with a common parent who controlls the states. 
  but I am lazy. */

  const title_onclick_redirect = () => {
    setActiveButton("none");
    router.push("/");
  };

  return (
    <div>
      <h1 className={styles.title} onClick={title_onclick_redirect}>
        Haochen Ding's Website
      </h1>
    </div>
  );
}

export default TitleBar;
