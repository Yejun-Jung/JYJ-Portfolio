import styles from "./Hero.module.scss";

const Hero = () => {
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
            <a href="#projects" className={styles.btnPrimary}>
              작업물 보기
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              연락하기
            </a>
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
              <div>
                <span className={styles.ln}>1</span>
                <span className={styles.kw}>const </span>
                <span className={styles.fn}>developer</span>
                <span className={styles.pl}> = {"{"}</span>
              </div>
              <div>
                <span className={styles.ln}>2</span>
                <span className={styles.tx}> name</span>
                <span className={styles.pl}>: </span>
                <span className={styles.str}>'정예준'</span>
                <span className={styles.pl}>,</span>
              </div>
              <div>
                <span className={styles.ln}>3</span>
                <span className={styles.tx}> role</span>
                <span className={styles.pl}>: </span>
                <span className={styles.str}>'풀스택 개발자'</span>
                <span className={styles.pl}>,</span>
              </div>
              <div>
                <span className={styles.ln}>4</span>
                <span className={styles.tx}> stack</span>
                <span className={styles.pl}>: [</span>
              </div>
              <div>
                <span className={styles.ln}>5</span>
                <span className={styles.str}> 'React'</span>
                <span className={styles.pl}>, </span>
                <span className={styles.str}>'Node.js'</span>
                <span className={styles.pl}>,</span>
              </div>
              <div>
                <span className={styles.ln}>6</span>
                <span className={styles.str}> 'TypeScript'</span>
                <span className={styles.pl}>, </span>
                <span className={styles.str}>'Python'</span>
              </div>
              <div>
                <span className={styles.ln}>7</span>
                <span className={styles.pl}> ],</span>
              </div>
              <div>
                <span className={styles.ln}>8</span>
                <span className={styles.tx}> passion</span>
                <span className={styles.pl}>: </span>
                <span className={styles.str}>'UX & 클린코드'</span>
              </div>
              <div>
                <span className={styles.ln}>9</span>
                <span className={styles.pl}>{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
