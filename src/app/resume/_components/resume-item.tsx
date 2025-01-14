"use client";
import { useRouter } from "next/navigation";
import styles from "./item.module.css";

interface itemprops {
  link: string;
  imglink: string;
  imgname: string;
  title: string;
}

const item: React.FC<itemprops> = ({ link, imglink, imgname, title }) => {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(route);
  };
  return (
    <div className={styles["gallery-item"]} onClick={() => handleClick(link)}>
      <img src={imglink} alt={imgname} />
      <h3>{title}</h3>
    </div>
  );
};

export default item;
