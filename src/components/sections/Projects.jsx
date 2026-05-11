import styles from "./Projects.module.scss";
import ProjectCard from "../ui/ProjectCard";
import projectsData from "../../data/projectsData";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>PROJECTS</h2>
          <div className={styles.line} />
        </div>
        <p className={styles.sub}>ㄴ 제가 작업한 주요 프로젝트입니다.</p>

        <div className={styles.list}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;