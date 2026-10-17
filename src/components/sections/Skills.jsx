import { motion } from "framer-motion";
import styles from "./Skills.module.scss";
import { FaAws } from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiSass, SiTailwindcss,
  SiOpenjdk, SiSpringboot, SiPython, SiFastapi,
  SiMysql, SiMongodb, SiDocker,
  SiGithub, SiVercel, SiNotion, SiDbeaver,
} from "react-icons/si";

const FigmaLogo = (props) => (
  <svg viewBox="0 0 38 57" {...props}>
    <path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5S19 33.747 19 28.5z" fill="#1ABCFE" />
    <path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5S0 52.747 0 47.5z" fill="#0ACF83" />
    <path d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5S33.747 0 28.5 0H19z" fill="#FF7262" />
    <path d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z" fill="#F24E1E" />
    <path d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z" fill="#A259FF" />
  </svg>
);

const Skills = () => {
  const skillsData = [
    { id: "frontend", title: "FRONTEND", items: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB", used: ["SmartHR", "NexusHub", "SimplePaws", "공공 화장실", "CineLog", "H&M 스타일"] },
      { name: "Next.js", Icon: SiNextdotjs, used: ["SmartHR"] },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", used: ["SmartHR", "NexusHub"] },
      { name: "JavaScript", Icon: SiJavascript, color: "#E5C500", used: ["TimeMate", "CineLog"] },
      { name: "SCSS", Icon: SiSass, color: "#CC6699", used: ["NexusHub", "SimplePaws", "CineLog", "H&M 스타일"] },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", used: ["SmartHR", "SimplePaws", "공공 화장실"] },
    ] },
    { id: "backend", title: "BACKEND", items: [
      { name: "Java", Icon: SiOpenjdk, color: "#ED8B00", used: ["SmartHR", "SimplePaws", "TimeMate"] },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F", used: ["SmartHR", "SimplePaws"] },
      { name: "Python", Icon: SiPython, color: "#3776AB", used: ["지식백과", "Veluna"] },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688", used: ["지식백과"] },
    ] },
    { id: "infra", title: "DATABASE / INFRA", items: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1", used: ["SmartHR", "SimplePaws", "TimeMate"] },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248", used: ["지식백과"] },
      { name: "Docker", Icon: SiDocker, color: "#2496ED", used: ["SmartHR", "SimplePaws"] },
      { name: "AWS", Icon: FaAws, color: "#FF9900", used: ["SimplePaws", "TimeMate"] },
    ] },
    { id: "tools", title: "TOOLS", items: [
      { name: "GitHub", Icon: SiGithub, used: ["모든 프로젝트"] },
      { name: "Vercel", Icon: SiVercel, used: ["NexusHub", "공공 화장실", "지식백과", "CineLog", "H&M 스타일"] },
      { name: "Figma", Icon: FigmaLogo, used: ["SmartHR", "NexusHub", "SimplePaws"] },
      { name: "Notion", Icon: SiNotion, used: ["SmartHR", "NexusHub"] },
      { name: "DBeaver", Icon: SiDbeaver, color: "#8a6a58", used: ["SimplePaws"] },
    ] },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const lineVariants = {
    hidden: { scaleX: 0, transformOrigin: "left" },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className={styles.skills} id="skills">
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className={styles.header}>
          <motion.h2 className={styles.title} variants={headerVariants}>
            SKILLS
          </motion.h2>
          <motion.div className={styles.line} variants={lineVariants} />
        </div>
        <motion.p className={styles.sub} variants={headerVariants}>
          ㄴ 프로젝트에서 사용해 본 기술들입니다.
        </motion.p>

        <div className={styles.content}>
          {skillsData.map((category) => (
            <motion.div
              key={category.id}
              className={`${styles.categoryGroup} ${styles[category.id]}`}
              variants={categoryVariants}
            >
              <div className={styles.categoryHeader}>
                <motion.div className={styles.categoryLine} variants={lineVariants} />
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <motion.div className={styles.badgeList}>
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.badge}
                    variants={badgeVariants}
                    whileHover={{ y: -3 }}
                    tabIndex={0}
                  >
                    {item.Icon && <item.Icon className={styles.logo} style={item.color ? { color: item.color } : undefined} aria-hidden="true" />}
                    {item.name}
                    <span className={styles.tip} role="tooltip">사용: {item.used.join(", ")}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;