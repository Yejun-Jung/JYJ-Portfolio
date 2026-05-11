import styles from "./Skills.module.scss";

const Skills = () => {
  const skillsData = [
    { id: "frontend", title: "FRONTEND", items: ["React.js", "Next.js", "Tailwind CSS", "SCSS"] },
    { id: "tools", title: "TOOLS", items: ["Figma", "Notion"] },
    { id: "backend", title: "BACKEND", items: ["Node.js", "MySQL", "Docker"] },
    { id: "vcs", title: "VCS", items: ["GitHub"] },
    { id: "deployment", title: "DEPLOYMENT", items: ["Vercel"] }
  ];

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>SKILLS</h2>
          <div className={styles.line} />
        </div>
        <p className={styles.sub}>ㄴ저는 이런 기술들을 다룰 수 있습니다.</p>

        <div className={styles.content}>
          {skillsData.map((category) => (
            <div key={category.id} className={`${styles.categoryGroup} ${styles[category.id]}`}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryLine} />
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.badgeList}>
                {category.items.map((item, idx) => (
                  <div key={idx} className={styles.badge}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;