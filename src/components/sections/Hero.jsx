import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

const codeLines = [
  { parts: [{ cls: "kw", text: "const " }, { cls: "fn", text: "developer" }, { cls: "pl", text: " = {" }] },
  { parts: [{ cls: "tx", text: " name" }, { cls: "pl", text: ": " }, { cls: "str", text: "'정예준'" }, { cls: "pl", text: "," }] },
  { parts: [{ cls: "tx", text: " role" }, { cls: "pl", text: ": " }, { cls: "str", text: "'풀스택 개발자'" }, { cls: "pl", text: "," }] },
  { parts: [{ cls: "tx", text: " stack" }, { cls: "pl", text: ": [" }] },
  { parts: [{ cls: "str", text: " 'React'" }, { cls: "pl", text: ", " }, { cls: "str", text: "'SCSS'" }, { cls: "pl", text: ", " }, { cls: "str", text: "'TailWind CSS'" }, { cls: "pl", text: "," }, { cls: "str", text: "'JavaScript'" }] }, 
  { parts: [{ cls: "pl", text: "," }, { cls: "str", text: "'SpringBoot'" }, { cls: "pl", text: ", " }, { cls: "str", text : "'Node.js'" }, { cls: "str", text: " 'Next.js'" }, { cls: "pl", text: ", " }, { cls: "str", text: "'MySQL'" }] },
  { parts: [{ cls: "pl", text: ", " }, { cls: "str", text: "'DBeaver'" }, { cls: "pl", text: ", " }, { cls: "str", text: "'Python'" },  { cls: "pl", text: " ]," }] },
  { parts: [{ cls: "tx", text: " passion" }, { cls: "pl", text: ": " }, { cls: "str", text: "'UX & 클린코드'" }] },
  { parts: [{ cls: "pl", text: "}" }] },
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 180);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 12 } }
  };

  const editorVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1, x: 0, scale: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8, delay: 0.4 }
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px 0px -100px 0px", amount: 0.1 }}
        >
          <motion.span variants={itemVariants} className={styles.badge}>
            풀스택 개발자
          </motion.span>
          <motion.h1 variants={itemVariants} className={styles.title}>
            사용자 경험을 코드로
            <br />
            설계하는
            <br />
            개발자 <span className={styles.name}>정예준</span> 입니다.
          </motion.h1>
          <motion.div variants={itemVariants} className={styles.btns}>
            <a href="#projects" className={styles.btnPrimary}>작업물 보기</a>
            <a href="#contact" className={styles.btnSecondary}>연락하기</a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          variants={editorVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px 0px -100px 0px", amount: 0.1 }}
          onViewportEnter={() => setVisibleLines(0)}
        >
          <div className={styles.editor}>
            <div className={styles.titlebar}>
              <span className={styles.dot} style={{ background: "#ff5f57" }} />
              <span className={styles.dot} style={{ background: "#febc2e" }} />
              <span className={styles.dot} style={{ background: "#28c840" }} />
              <span className={styles.filename}>portfolio.js</span>
            </div>
            <div className={styles.code}>
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className={styles.codeLine}>
                  <span className={styles.ln}>{i + 1}</span>
                  {line.parts.map((part, j) => (
                    <span key={j} className={styles[part.cls]}>{part.text}</span>
                  ))}
                </div>
              ))}
              {visibleLines < codeLines.length && (
                <div className={styles.codeLine}>
                  <span className={styles.ln}>{visibleLines + 1}</span>
                  <span className={styles.cursor}>|</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;