import styles from "./styles.module.css";
import PlayerBar from "./PlayerBar";
import PlayerContent from "./PlayerContent";
import Playlist from "./Playlist";

const MusicPlayer = () => {
  return (
    <div className={styles.musicPlayer}>
      <div className={styles.container}>
        <div className={styles.player}>
          <PlayerBar />
          <PlayerContent />
        </div>
        <Playlist />
      </div>
    </div>
  );
};

export default MusicPlayer;
