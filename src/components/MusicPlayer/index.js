import { useState, useRef, useEffect, useReducer, useCallback } from "react";
import styles from "./styles.module.css";
import PlayerBar from "./PlayerBar";
import PlayerContent from "./PlayerContent";
import Playlist from "./Playlist";
import songsList from "./data";
import playerReducer from "./playerReducer";

const MusicPlayer = () => {
  const [songs, setSongs] = useState(() => [...songsList].sort((a, b) => a.title.localeCompare(b.title)));
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(50);

  const [playerState, dispatch] = useReducer(playerReducer, {
    currentSong: null,
    songCurrentTime: 0,
    isPlaying: false,
  });

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume / 100;
  }, []);

  useEffect(() => {
    console.log("playerState updated:", playerState);
  }, [playerState]);

  const playSong = useCallback((id) => {
    console.log(id)
    if (!id) return;
    const song = songs.find((song) => song.id === id);
    if (!song) return;

    if (audioRef.current) {
      audioRef.current.src = song.src;
      audioRef.current.title = song.title;

      if (playerState.currentSong === null || playerState.currentSong.id !== song.id) {
        audioRef.current.currentTime = 0;
      } else {
        audioRef.current.currentTime = playerState.songCurrentTime;
      }

      dispatch({ type: 'SET_CURRENT_SONG', payload: song });
      dispatch({ type: 'SET_PLAYING', payload: true });

      audioRef.current.play().catch(error => console.error("播放失敗:", error));
    }
  }, [songs, playerState.currentSong, playerState.songCurrentTime]);

  const handleVolumeChange = useCallback((newVolume) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  }, []);

  const shuffleSongs = useCallback(() => {
    setSongs(prevSongs => {
      const shuffled = [...prevSongs];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  }, []);

  const deleteSong = useCallback((id) => {
    console.log("Deleting song with id:", id);
    console.log("Current playerState:", playerState);
    if(playerState.isPlaying && playerState.currentSong && playerState.currentSong.id === id) {
      console.log('Stopping currently playing song');
      audioRef.current.pause();
      dispatch({ type: 'SET_PLAYING', payload: false });
      dispatch({ type: 'SET_CURRENT_SONG', payload: null });
    }
    setSongs(prevSongs => prevSongs.filter(song => song.id !== id));
  }, [playerState]);

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.container}>
        <div className={styles.player}>
          <PlayerBar playerState={playerState} />
          <PlayerContent
            songs={songs}
            playSong={playSong}
            setSongs={setSongs}
            playerDispatch={dispatch}
            playerState={playerState}
            audio={audioRef.current}
            volume={volume}
            onVolumeChange={handleVolumeChange}
            shuffleSongs={shuffleSongs}
          />
        </div>
        <Playlist
          songs={songs}
          setSongs={setSongs}
          playSong={playSong}
          deleteSong={deleteSong}
          currentSongId={playerState.currentSong?.id}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;