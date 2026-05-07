import styles from "./About.module.scss";

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.inner}>

                <div className={styles.header}>
                    <h2 className={styles.title}>ABOUT ME</h2>
                    <div className={styles.line} />
                </div>
                <p className={styles.sub}>ㄴ 저에 대해 소개합니다.</p>

                <div className={styles.content}>
                    <div className={styles.grid}>

                        <div className={styles.card}>
                            <div className={styles.iconBox}>
                                <svg className={styles.svg} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <div className={styles.cardInfo}>
                                <p className={styles.label}>이름</p>
                                <p className={styles.value}>정예준</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.iconBox}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </div>
                            <div className={styles.cardInfo}>
                                <p className={styles.label}>생년월일</p>
                                <p className={styles.value}>03.10.16</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.iconBox}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div className={styles.cardInfo}>
                                <p className={styles.label}>위치</p>
                                <p className={styles.value}>경기도 구리시</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.iconBox}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.34 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div className={styles.cardInfo}>
                                <p className={styles.label}>연락처</p>
                                <p className={styles.value}>010-6474-3243</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.iconBox}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div className={styles.cardInfo}>
                                <p className={styles.label}>이메일</p>
                                <p className={styles.value}>once6474@naver.com</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.iconBox}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                            <div className={styles.cardInfo}>
                                <p className={styles.label}>학력</p>
                                <p className={styles.value}>경북대학교 (소프트웨어융합과)</p>
                            </div>
                        </div>

                    </div>

                    <div className={styles.links}>

                        <a href="https://github.com/Yejun-Jung" target="_blank" rel="noreferrer" className={styles.linkCard}>
                            <div className={styles.linkHeader}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                <span className={styles.linkTitle}>GitHub</span>
                            </div>
                            <p className={styles.linkDesc}>진행 중인 모든 프로젝트의 소스 코드와 커밋 히스토리를 <br />확인하실 수 있습니다. <br />오픈소스 기여와 개인 학습 로그가 담겨있습니다.</p>
                        </a>

                        <a href="https://www.notion.so/2ff298159077803b9cdfc46e090d7e15" target="_blank" rel="noreferrer" className={styles.linkCard}>
                            <div className={styles.linkHeader}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                                </svg>
                                <span className={styles.linkTitle}>Notion</span>
                            </div>
                            <p className={styles.linkDesc}>기술 블로그, 회고록, 업무 툴킷 및 학습 자료를 정리한 개인 위키입니다. 개발 철학과 문제 해결 과정을 상세히 기록합니다.</p>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;