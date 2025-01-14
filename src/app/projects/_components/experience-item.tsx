"use client";
import { useRouter } from "next/navigation";
import styles from "./item.module.css";

interface itemprops {
  link: string;
  align: number;
  imglink: string;
  imgname: string;
  project_title: string;
  project_description: string;
}

const item: React.FC<itemprops> = ({
  link,
  align,
  imglink,
  imgname,
  project_title,
  project_description,
}) => {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(route);
  };
  if (align == 0) {
    return (
      <div className={styles["gallery-item"]} onClick={() => handleClick(link)}>
        <img src={imglink} alt={imgname} />
        <div className={styles.textbox}>
          <h3 className={styles.title}>{project_title}</h3>
          <p>{project_description}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles["gallery-item"]} onClick={() => handleClick(link)}>
        <img src={imglink} alt={imgname} />
        <div className={styles.textbox}>
          <h3 className={styles.title}>{project_title}</h3>
          <p>{project_description}</p>
        </div>
      </div>
    );
  }
};

export default item;
