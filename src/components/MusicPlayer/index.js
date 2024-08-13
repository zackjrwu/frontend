import { useState } from "react";
import styles from "./styles.module.css";
import PlayerBar from "./PlayerBar";
import PlayerContent from "./PlayerContent";
import Playlist from "./Playlist";
import songsList from "./data";

const MusicPlayer = () => {
  const [songs, setSongs] = useState(songsList);

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.container}>
        <div className={styles.player}>
          <PlayerBar />
          <PlayerContent songs={songs} setSongs={setSongs} />
        </div>
        <Playlist songs={songs} setSongs={setSongs} />
      </div>
    </div>
  );
};

export default MusicPlayer;
