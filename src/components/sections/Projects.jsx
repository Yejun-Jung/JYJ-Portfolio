import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.scss";
import ProjectCard from "../ui/ProjectCard";
import projectsData from "../../data/projectsData";

const Projects = () => {
    const [selected, setSelected] = useState(0);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const lineVariants = {
        hidden: { scaleX: 0, transformOrigin: "left", opacity: 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
        },
    };

    const subVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const tabsVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 70, damping: 14 },
        },
    };

    return (
        <section className={styles.projects} id="projects">
            <motion.div
                className={styles.inner}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.1 }}
                variants={containerVariants}
            >
                <div className={styles.header}>
                    <motion.h2 className={styles.title} variants={titleVariants}>
                        PROJECTS
                    </motion.h2>
                    <motion.div className={styles.line} variants={lineVariants} />
                </div>
                <motion.p className={styles.sub} variants={subVariants}>
                    ㄴ 제가 작업한 주요 프로젝트입니다.
                </motion.p>

                <div className={styles.showcase}>
                    <motion.div className={styles.tabs} role="tablist" variants={tabsVariants}>
                        {projectsData.map((project, index) => (
                            <button
                                key={project.id}
                                type="button"
                                role="tab"
                                aria-selected={selected === index}
                                className={`${styles.tab} ${selected === index ? styles.active : ""}`}
                                onClick={() => setSelected(index)}
                            >
                                <span className={styles.tabNum}>{String(index + 1).padStart(2, "0")}</span>
                                <span className={styles.tabText}>
                                    <span className={styles.tabTitle}>{project.title}</span>
                                    <span className={styles.tabCat}>{project.category}</span>
                                </span>
                            </button>
                        ))}
                    </motion.div>

                    <div className={styles.panel} role="tabpanel">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={projectsData[selected].id}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                <ProjectCard project={projectsData[selected]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;