import styles from "./ProjectCard.module.scss";
import hmThumb from "../../assets/images/hm-thumb.png";
import spThumb from "../../assets/images/sp-thumb.png";
import nxThumb from "../../assets/images/nx-thumb.png";

const ProjectCard = ({ project }) => {
  const { category, title, description, tags, githubUrl, notionUrl, liveUrl, thumbType, direction } = project;

  const Thumb = () => (
    <div className={styles.thumb}>
      {thumbType === "hm" && (
        <img src={hmThumb} alt="H&M Project" className={styles.thumbImg} />
      )}
      {thumbType === "sp" && (
        <img src={spThumb} alt="SimplePaws Project" className={styles.thumbImg} />
      )}
      {thumbType === "nx" && (
        <img src={nxThumb} alt="NexusHub Project" className={`${styles.thumbImg} ${styles.nxThumb}`} />
      )}
    </div>
  );

  const Info = () => (
    <div className={styles.info}>
      <div className={styles.tags}>
        {tags.map((tag, i) => (
          <span key={i} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <h3 className={styles.projTitle}>{title}</h3>
      <p className={styles.desc}>
        {description.map((line, i) => (
          <span key={i}>
            {line}
            {i < description.length - 1 && <br />}
          </span>
        ))}
      </p>
      <div className={styles.linkRow}>
  <a href={liveUrl} className={styles.viewLink}>VIEW PROJECT →</a>
  <a href={githubUrl} className={styles.iconLink} title="GitHub">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  </a>
  <a href={notionUrl} className={styles.iconLink} title="Notion">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
    </svg>
  </a>
</div>
    </div>
  );

  return (
    <div className={styles.card}>
      {direction === "left" ? (
        <>
          <Info />
          <Thumb />
        </>
      ) : (
        <>
          <Thumb />
          <Info />
        </>
      )}
    </div>
  );
};

export default ProjectCard;