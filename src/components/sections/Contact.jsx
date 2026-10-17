import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Contact.module.scss';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const sending = status === 'sending';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xjglrlkk', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className={styles.contactSection} id="contact">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className={styles.left} variants={leftVariants}>
          <h2>
            다음 프로젝트를<br />
            함께 만들고 싶습니다.
          </h2>
          <p className={styles.lead}>
            궁금한 점이나 제안이 있으시면 편하게 남겨 주세요. 확인하는 대로 답변드리겠습니다.
          </p>
          <div className={styles.direct}>
            <a href="mailto:once6474@naver.com">
              <span className={styles.directIcon}><FaEnvelope /></span>
              once6474@naver.com
            </a>
            <a href="tel:01064743243">
              <span className={styles.directIcon}><FaPhone /></span>
              010-6474-3243
            </a>
          </div>
          <motion.div className={styles.socialLinks} variants={containerVariants}>
            <motion.a href="https://github.com/Yejun-Jung" target="_blank" rel="noreferrer" variants={iconVariants} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaGithub />
            </motion.a>
            <motion.a href="https://app.notion.com/p/Full-stack-Developer-ef2298159077826aaab181a3ea59cfc2?source=copy_link" target="_blank" rel="noreferrer" variants={iconVariants} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <SiNotion />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className={styles.right} variants={rightVariants}>
          <div className={styles.formCard}>
            <h3>연락하기</h3>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  className={styles.successMsg}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className={styles.successIcon}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </div>
                  <p className={styles.successTitle}>메시지가 전송되었습니다!</p>
                  <p className={styles.successDesc}>빠른 시일 내에 답변 드리겠습니다.</p>
                  <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
                    다시 보내기
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20 }}
                  variants={containerVariants}
                >
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className={styles.hp} aria-hidden="true" />
                  <motion.div className={styles.row} variants={formItemVariants}>
                    <div className={styles.field}>
                      <label htmlFor="contact-name">이름</label>
                      <input id="contact-name" type="text" name="name" placeholder="이름" autoComplete="name" required disabled={sending} />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="contact-email">답장 받을 이메일</label>
                      <input id="contact-email" type="email" name="email" placeholder="name@company.com" autoComplete="email" required disabled={sending} />
                    </div>
                  </motion.div>
                  <motion.div className={styles.field} variants={formItemVariants}>
                    <label htmlFor="contact-subject">제목</label>
                    <input id="contact-subject" type="text" name="subject" placeholder="문의 제목" required disabled={sending} />
                  </motion.div>
                  <motion.div className={styles.field} variants={formItemVariants}>
                    <label htmlFor="contact-message">내용</label>
                    <textarea id="contact-message" name="message" placeholder="문의 내용을 입력해 주세요" rows="6" required disabled={sending}></textarea>
                  </motion.div>
                  <motion.button type="submit" disabled={sending} variants={formItemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    {sending ? '전송 중...' : '보내기'}
                  </motion.button>
                  {status === 'error' && (
                    <motion.p className={styles.errorMsg} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>전송에 실패했습니다. 다시 시도하거나 이메일로 직접 보내 주세요.</motion.p>
                  )}
                  <p className={styles.note}>전송이 안 되면 once6474@naver.com으로 직접 보내 주세요.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;