import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./MiniProjects.module.scss";
import MiniProjectCard from "../ui/MiniProjectCard";
import miniProjectsData from "../../data/miniProjectsData";

const MiniProjects = () => {
  const [filter, setFilter] = useState("전체");

  const filteredProjects = miniProjectsData.filter((project) => 
    filter === "전체" ? true : project.difficulty === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 14 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
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
          <div className={styles.titleWrapper}>
            <motion.h2 className={styles.title} variants={itemVariants}>
              MINI-PROJECTS
            </motion.h2>
            <motion.div className={styles.line} variants={lineVariants} />
          </div>
          <div className={styles.filters}>
            {["전체", "상", "중", "하"].map(level => (
              <button 
                key={level} 
                className={`${styles.filterBtn} ${filter === level ? styles.active : ""}`}
                onClick={() => setFilter(level)}
              >
                {level === "전체" ? "전체" : `난이도: ${level}`}
              </button>
            ))}
          </div>
        </div>
        <motion.p className={styles.sub} variants={itemVariants}>
          ㄴ 제가 작업한 미니 프로젝트입니다.
        </motion.p>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MiniProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MiniProjects;