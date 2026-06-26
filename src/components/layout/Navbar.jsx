import { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = ({ theme, toggleTheme, activeMenu, setActiveMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const smoothScrollTo = (targetPosition) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 600;
    const startTime = performance.now();

    const easeInOutQuart = (t) => {
      return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };

    const scroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuart(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  const handleMenuClick = (e, label, href) => {
    e.preventDefault();
    setActiveMenu(label);
    setMenuOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navHeight = 90;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
      smoothScrollTo(targetPosition);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.logo} onClick={() => {
          smoothScrollTo(0);
          setActiveMenu('');
          setMenuOpen(false);
        }}>
          JYJ's Portfolio
        </div>

        <div className={styles.right}>
          <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
            {[
              { label: "소개", href: "#about" },
              { label: "기술 스택", href: "#skills" },
              { label: "프로젝트", href: "#projects" },
              { label: "연락처", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href}
                  className={activeMenu === item.label ? styles.active : ""}
                  onClick={(e) => handleMenuClick(e, item.label, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileResumeItem}>
              <a href="#" className={styles.mobileResumeBtn}>이력서</a>
            </li>
          </ul>

          <div className={styles.actions}>
            <button className={styles.themeToggle} onClick={toggleTheme}>
              {theme === "light" ? "D" : "L"}
            </button>
            <a href="#" className={styles.resumeBtn}>이력서</a>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;