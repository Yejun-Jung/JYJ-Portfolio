import { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = ({ theme, toggleTheme }) => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (e, label, href) => {
    e.preventDefault();
    setActiveMenu(label);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navHeight = 90;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.logo} onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          JYJ's Portfolio
        </div>

        <div className={styles.right}>
          <ul className={styles.menu}>
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
          </ul>

          <div className={styles.actions}>
            <button className={styles.themeToggle} onClick={toggleTheme}>
              {theme === "light" ? "D" : "L"}
            </button>
            <a href="#" className={styles.resumeBtn}>
              이력서
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;