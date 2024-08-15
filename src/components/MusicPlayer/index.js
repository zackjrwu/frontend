import { useState, useRef, useEffect, useReducer } from "react";
import styles from "./styles.module.css";
import PlayerBar from "./PlayerBar";
import PlayerContent from "./PlayerContent";
import Playlist from "./Playlist";
import songsList from "./data";
import playerReducer from "./playerReducer";

const MusicPlayer = () => {
  const [songs, setSongs] = useState(songsList);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);

  const [playerState, dispatch] = useReducer(playerReducer, {
    currentSong: null,
    songCurrentTime: 0,
    isPlaying: false,
  });

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

    dispatch({ type: 'SET_CURRENT_SONG', payload: song });
    dispatch({ type: 'SET_PLAYING', payload: true });

    audioRef.current.play();
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio();
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.container}>
        <div className={styles.player}>
          <PlayerBar />
          <PlayerContent
            songs={songs}
            playSong={playSong}
            setSongs={setSongs}
            playerDispatch={dispatch}
            playerState={playerState}
            audio={audioRef.current}
            volume={volume}
            onVolumeChange={handleVolumeChange}
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
