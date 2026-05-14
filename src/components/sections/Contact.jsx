import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Contact.module.scss';
import { FaGithub } from 'react-icons/fa';
import { SiNotion, SiVercel } from 'react-icons/si';

const Contact = () => {
  const [status, setStatus] = useState('idle');

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
        viewport={{ once: false, margin: "0px 0px -100px 0px", amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className={styles.left} variants={leftVariants}>
          <h2>
            상징적인 결과물을<br />
            함께 만들어<br />
            가고 싶습니다!
          </h2>
          <motion.div className={styles.socialLinks} variants={containerVariants}>
            <motion.a href="https://github.com/Yejun-Jung" target="_blank" rel="noreferrer" variants={iconVariants} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaGithub />
            </motion.a>
            <motion.a href="https://www.notion.so/35629815907780ee8180fe6286914640?source=copy_link" target="_blank" rel="noreferrer" variants={iconVariants} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <SiNotion />
            </motion.a>
            <motion.a href="https://vercel.com/yejun-jungs-projects-6f250d1b" target="_blank" rel="noreferrer" variants={iconVariants} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <SiVercel />
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
                  <motion.div className={styles.row} variants={formItemVariants}>
                    <input type="text" name="name" placeholder="홍길동" required />
                    <input type="email" name="email" placeholder="hello@email.com" required />
                  </motion.div>
                  <motion.input type="text" name="subject" placeholder="문의 제목을 입력해주세요" required variants={formItemVariants} />
                  <motion.textarea name="message" placeholder="문의 내용을 입력해주세요" rows="6" required variants={formItemVariants}></motion.textarea>
                  <motion.button type="submit" disabled={status === 'sending'} variants={formItemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    {status === 'sending' ? '전송 중...' : '보내기'}
                  </motion.button>
                  {status === 'error' && (
                    <motion.p className={styles.errorMsg} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>전송에 실패했습니다. 다시 시도해주세요.</motion.p>
                  )}
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