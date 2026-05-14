import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

const Skills = () => {
  const skillsData = [
    { id: "frontend", title: "FRONTEND", items: ["React.js", "Next.js", "Tailwind CSS", "SCSS"] },
    { id: "tools", title: "TOOLS", items: ["Figma", "Notion"] },
    { id: "backend", title: "BACKEND", items: ["Node.js", "MySQL", "Docker", "DBeaver"] },
    { id: "vcs", title: "VCS", items: ["GitHub"] },
    { id: "deployment", title: "DEPLOYMENT", items: ["Vercel"] }
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
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  return (
    <section className={styles.skills} id="skills">
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px 0px -100px 0px", amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className={styles.header}>
          <motion.h2 className={styles.title} variants={headerVariants}>
            SKILLS
          </motion.h2>
          <motion.div className={styles.line} variants={lineVariants} />
        </div>
        <motion.p className={styles.sub} variants={headerVariants}>
          ㄴ저는 이런 기술들을 다룰 수 있습니다.
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
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5, 
                      rotate: idx % 2 === 0 ? 3 : -3 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
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