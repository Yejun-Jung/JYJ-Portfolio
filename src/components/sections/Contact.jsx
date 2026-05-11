import React from 'react';
import styles from './Contact.module.scss';
import { FaGithub } from 'react-icons/fa';
import { SiNotion, SiVercel } from 'react-icons/si';

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            상징적인 결과물을<br />
            함께 만들어<br />
            가고 싶습니다!
          </h2>
          <div className={styles.socialLinks}>
            <a href="https://github.com/Yejun-Jung" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.notion.so/35629815907780ee8180fe6286914640?source=copy_link" target="_blank" rel="noreferrer">
              <SiNotion />
            </a>
            <a href="https://vercel.com/yejun-jungs-projects-6f250d1b" target="_blank" rel="noreferrer">
              <SiVercel />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.formCard}>
            <h3>연락하기</h3>
            <form action="https://formspree.io/f/xjglrlkk" method="POST">
              <div className={styles.row}>
                <input type="text" name="name" placeholder="홍길동" required />
                <input type="email" name="email" placeholder="hello@email.com" required />
              </div>
              <input type="text" name="subject" placeholder="문의 제목을 입력해주세요" required />
              <textarea name="message" placeholder="문의 내용을 입력해주세요" rows="6" required></textarea>
              <button type="submit">보내기</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;