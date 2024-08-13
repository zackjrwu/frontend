import { useState, useRef } from "react";
import styles from "./styles.module.css";
import PlayerBar from "./PlayerBar";
import PlayerContent from "./PlayerContent";
import Playlist from "./Playlist";
import songsList from "./data";

const MusicPlayer = () => {
  const [songs, setSongs] = useState(songsList);
  const audioRef = typeof window !== "undefined" ? useRef(new Audio()) : null;

  const [playerState, setPlayerState] = useState({
    currentSong: null,
    songCurrentTime: 0,
    isPlaying: false,
  });

  const updatePlayerState = (newState) => {
    setPlayerState((prevState) => ({ ...prevState, ...newState }));
  };

  const playSong = (id) => {
    const song = songs.find((song) => song.id === id);
    audioRef.current.src = song.src;
    audioRef.current.title = song.title;

    if (
      playerState.currentSong === null ||
      playerState.currentSong.id !== song.id
    ) {
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.currentTime = playerState.songCurrentTime;
    }

    updatePlayerState({
      currentSong: song,
      isPlaying: true,
    });
    audioRef.current.play();
  };

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.container}>
        <div className={styles.player}>
          <PlayerBar />
          <PlayerContent
            songs={songs}
            playSong={playSong}
            setSongs={setSongs}
            updatePlayerState={updatePlayerState}
            playerState={playerState}
            audio={audioRef.current}
          />
        </div>
        <Playlist
          songs={songs}
          setSongs={setSongs}
          playSong={playSong}
          currentSongId={playerState.currentSong?.id}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
