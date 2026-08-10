import { motion } from "framer-motion";
import styles from "./Projects.module.scss";
import ProjectCard from "../ui/ProjectCard";
import projectsData from "../../data/projectsData";

const Projects = () => {
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

    const cardVariants = {
        hidden: (index) => ({
            opacity: 0,
            y: 30,
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 14,
                mass: 1,
            },
        },
    };

    return (
        <section className={styles.projects} id="projects">
            <motion.div
                className={styles.inner}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "0px 0px -100px 0px", amount: 0.1 }}
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

                <div className={styles.list}>
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            custom={index}
                            variants={cardVariants}
                            whileHover={{ y: -5, scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;