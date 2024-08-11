import styles from "./styles.module.css";
const PlayerBar = () => {
  return (
    <div className={styles.playerBar}>
      <div className={styles.parallelLines}>
        <div></div>
        <div></div>
      </div>
      <h1 className={styles.fccTitle}>Zack's Player</h1>
      <div className={styles.parallelLines}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PlayerBar;
