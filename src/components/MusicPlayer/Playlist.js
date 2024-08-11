import styles from "./styles.module.css";
const Playlist = () => {
  return (
    <div className={styles.playlist}>
      <div className={styles.playlistBar}>
        <div className={styles.parallelLines}>
          <div></div>
          <div></div>
        </div>
        <h2 className={styles.playlistTitle} id="playlist">
          Playlist
        </h2>
        <div className={styles.parallelLines}>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul id={styles.playlistSongs}></ul>
    </div>
  );
};

export default Playlist;
