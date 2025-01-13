import styles from "./item.module.css";

interface itemprops {
  onClick: () => void;
  align: number;
  imglink: string;
  imgname: string;
  project_title: string;
  project_description: string;
  Project_link: string;
}

const item: React.FC<itemprops> = ({
  onClick,
  align,
  imglink,
  imgname,
  project_title,
  project_description,
  Project_link,
}) => {
  if (align == 0) {
    return (
      <div className={styles["gallery-item"]} onClick={onClick}>
        <img src={imglink} alt={imgname} />
        <h3>{project_title}</h3>
        <p>{project_description}</p>
        <a href={Project_link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    );
  } else {
    return (
      <div className={styles["gallery-item"]} onClick={onClick}>
        <img src={imglink} alt={imgname} />
        <h3>{project_title}</h3>
        <p>{project_description}</p>
        <a href={Project_link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    );
  }
};

export default item;
