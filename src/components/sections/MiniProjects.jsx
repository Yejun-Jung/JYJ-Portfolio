import styles from "./MiniProjects.module.scss";
import MiniProjectCard from "../ui/MiniProjectCard";
import miniProjectsData from "../../data/miniProjectsData";

const MiniProjects = () => {
  return (
    <section className={styles.miniProjects} id="miniprojects">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>MINI-PROJECTS</h2>
          <div className={styles.line} />
        </div>
        <p className={styles.sub}>ㄴ 제가 작업한 미니 프로젝트입니다.</p>

        <div className={styles.grid}>
          {miniProjectsData.map((project) => (
            <MiniProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;