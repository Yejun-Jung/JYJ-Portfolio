import { motion } from "framer-motion";
import styles from "./MiniProjects.module.scss";
import MiniProjectCard from "../ui/MiniProjectCard";
import miniProjectsData from "../../data/miniProjectsData";

const MiniProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const lineVariants = {
    hidden: { scaleX: 0, transformOrigin: "left" },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <section className={styles.miniProjects} id="miniprojects">
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px 0px -100px 0px", amount: 0.1 }}
        variants={containerVariants}
      >
        <div className={styles.header}>
          <motion.h2 className={styles.title} variants={itemVariants}>
            MINI-PROJECTS
          </motion.h2>
          <motion.div className={styles.line} variants={lineVariants} />
        </div>
        <motion.p className={styles.sub} variants={itemVariants}>
          ㄴ 제가 작업한 미니 프로젝트입니다.
        </motion.p>

        <motion.div className={styles.grid} variants={containerVariants}>
          {miniProjectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <MiniProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MiniProjects;