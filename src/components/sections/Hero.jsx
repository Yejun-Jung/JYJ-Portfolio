import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

const codeLines = [
  { parts: [{ cls: "kw", text: "const " }, { cls: "fn", text: "developer" }, { cls: "pl", text: " = {" }] },
  { parts: [{ cls: "tx", text: "  name" }, { cls: "pl", text: ": " }, { cls: "str", text: "'정예준'" }, { cls: "pl", text: "," }] },
  { parts: [{ cls: "tx", text: "  role" }, { cls: "pl", text: ": " }, { cls: "str", text: "'풀스택 개발자'" }, { cls: "pl", text: "," }] },
  { parts: [{ cls: "tx", text: "  deployed" }, { cls: "pl", text: ": " }, { cls: "num", text: "6" }, { cls: "pl", text: "," }, { cls: "cm", text: "  // 현재 접속 가능한 서비스" }] },
  { parts: [{ cls: "tx", text: "  projects" }, { cls: "pl", text: ": { " }, { cls: "tx", text: "team" }, { cls: "pl", text: ": " }, { cls: "num", text: "4" }, { cls: "pl", text: ", " }, { cls: "tx", text: "solo" }, { cls: "pl", text: ": " }, { cls: "num", text: "6" }, { cls: "pl", text: " }," }] },
  { parts: [{ cls: "tx", text: "  focus" }, { cls: "pl", text: ": " }, { cls: "str", text: "'기획부터 배포까지'" }] },
  { parts: [{ cls: "pl", text: "}" }] },
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const editorRef = useRef(null);

  const canTilt = () =>
    window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches;

  const handleTilt = (e) => {
    if (!canTilt()) return;
    const el = editorRef.current;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--mx", x);
    el.style.setProperty("--my", y);
  };

  const resetTilt = () => {
    editorRef.current.style.removeProperty("--mx");
    editorRef.current.style.removeProperty("--my");
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 14 } }
  };

  const editorVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.98 },
    visible: {
      opacity: 1, x: 0, scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.3 }
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
          viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.1 }}
        >
          <motion.span variants={itemVariants} className={styles.badge}>
            풀스택 개발자
          </motion.span>
          <motion.h1 variants={itemVariants} className={styles.title}>
            사용자 경험을 코드로
            <br />
            설계하는
            <br />
            개발자 <span className={styles.name}>정예준</span>입니다.
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
          viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.1 }}
          onViewportEnter={() => setVisibleLines(0)}
        >
          <div
            ref={editorRef}
            className={styles.editor}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className={styles.editorBg} />
            <div className={styles.titlebar}>
              <div className={styles.titlebarItems}>
                <span className={styles.dot} style={{ background: "#ff5f57" }} />
                <span className={styles.dot} style={{ background: "#febc2e" }} />
                <span className={styles.dot} style={{ background: "#28c840" }} />
                <span className={styles.filename}>portfolio.js</span>
              </div>
            </div>
            <div className={styles.code}>
              <div className={styles.placeholderBlock} aria-hidden="true">
                {codeLines.map((line, i) => (
                  <div key={`ph-${i}`} className={styles.codeLine}>
                    <span className={styles.ln}>{i + 1}</span>
                    {line.parts.map((part, j) => (
                      <span key={`php-${j}`} className={styles[part.cls]}>{part.text}</span>
                    ))}
                  </div>
                ))}
              </div>

              <div className={styles.typingBlock}>
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className={styles.codeLine}>
                    <span className={styles.ln}>{i + 1}</span>
                    {line.parts.map((part, j) => (
                      <span key={j} className={styles[part.cls]}>{part.text}</span>
                    ))}
                    {visibleLines >= codeLines.length && i === codeLines.length - 1 && (
                      <span className={styles.cursor} />
                    )}
                  </div>
                ))}
                {visibleLines < codeLines.length && (
                  <div className={styles.codeLine}>
                    <span className={styles.ln}>{visibleLines + 1}</span>
                    <span className={styles.cursor} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;