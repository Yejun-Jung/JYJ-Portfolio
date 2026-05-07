import { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

const codeLines = [
  { parts: [{ cls: "kw", text: "const " }, { cls: "fn", text: "developer" }, { cls: "pl", text: " = {" }] },
  { parts: [{ cls: "tx", text: " name" }, { cls: "pl", text: ": " }, { cls: "str", text: "'정예준'" }, { cls: "pl", text: "," }] },
  { parts: [{ cls: "tx", text: " role" }, { cls: "pl", text: ": " }, { cls: "str", text: "'풀스택 개발자'" }, { cls: "pl", text: "," }] },
  { parts: [{ cls: "tx", text: " stack" }, { cls: "pl", text: ": [" }] },
  { parts: [{ cls: "str", text: " 'React'" }, { cls: "pl", text: ", " }, { cls: "str", text: "'Node.js'" }, { cls: "pl", text: "," }] },
  { parts: [{ cls: "str", text: " 'TypeScript'" }, { cls: "pl", text: ", " }, { cls: "str", text: "'Python'" }] },
  { parts: [{ cls: "pl", text: " ]," }] },
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

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.badge}>풀스택 개발자</span>
          <h1 className={styles.title}>
            사용자 경험을 코드로
            <br />
            설계하는
            <br />
            개발자 <span className={styles.name}>정예준</span> 입니다.
          </h1>
          <div className={styles.btns}>
            <a href="#projects" className={styles.btnPrimary}>작업물 보기</a>
            <a href="#contact" className={styles.btnSecondary}>연락하기</a>
          </div>
        </div>

        <div className={styles.right}>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;