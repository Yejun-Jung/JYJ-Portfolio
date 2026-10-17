import styles from "./MiniProjectCard.module.scss";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import {
  PiCarProfileDuotone,
  PiListChecksDuotone,
  PiChatsCircleDuotone,
  PiTimerDuotone,
  PiSmileyDuotone,
  PiToiletDuotone,
  PiMagnifyingGlassDuotone,
  PiFilmSlateDuotone,
} from "react-icons/pi";

const icons = {
  car: PiCarProfileDuotone,
  check: PiListChecksDuotone,
  chat: PiChatsCircleDuotone,
  clock: PiTimerDuotone,
  diary: PiSmileyDuotone,
  restroom: PiToiletDuotone,
  search: PiMagnifyingGlassDuotone,
  movie: PiFilmSlateDuotone,
};

const MiniProjectCard = ({ project }) => {
  const { category, title, description, tags, liveUrl, githubUrl, notionUrl, icon, iconColor } = project;
  const Icon = icons[icon];

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.iconBox} style={{ "--tile": iconColor }}>
          <Icon className={styles.icon} aria-hidden="true" />
        </div>
        <div className={styles.info}>
          <p className={styles.category}>{category}</p>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>

      <p className={styles.desc}>{description}</p>

      <div className={styles.tags}>
        {tags.map((tag, i) => (
          <span key={i} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <div className={styles.linkRow}>
        {liveUrl ? (
          <a href={liveUrl} target="_blank" rel="noreferrer" className={styles.viewLink}>배포 사이트 →</a>
        ) : (
          <span className={styles.noDeploy}>배포 없음</span>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer" className={styles.iconLink} title="GitHub">
            <FaGithub />
          </a>
        )}
        {notionUrl && (
          <a href={notionUrl} target="_blank" rel="noreferrer" className={styles.iconLink} title="Notion">
            <SiNotion />
          </a>
        )}
      </div>
    </div>
  );
};

export default MiniProjectCard;
