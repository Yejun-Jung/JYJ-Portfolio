import { motion } from "framer-motion";
import styles from "./Projects.module.scss";
import ProjectCard from "../ui/ProjectCard";
import projectsData from "../../data/projectsData";

const Projects = () => {
    // 전체 컨테이너 (자식 요소들 순차적 실행)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // 0.2초 간격으로 자식 애니메이션 실행
            },
        },
    };

    // 타이틀 애니메이션 (왼쪽에서 오른쪽으로 슬라이드)
    const titleVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    // 구분선 애니메이션 (길이가 길어지는 효과)
    const lineVariants = {
        hidden: { scaleX: 0, transformOrigin: "left", opacity: 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
        },
    };

    // 서브 텍스트 애니메이션
    const subVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    // 카드 애니메이션 (자연스럽고 과하지 않은 등장)
    const cardVariants = {
        hidden: (index) => ({
            opacity: 0,
            y: 30,
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring", // 부드러운 스프링
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
                            whileHover={{ y: -5, scale: 1.01 }} // 과하지 않게 살짝 떠오르는 효과
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