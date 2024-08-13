import styles from "./styles.module.css";
const Playlist = ({songs, setSongs}) => {

const sortSongs = (songs) => {
  return songs.sort((a, b) => a.title.localeCompare(b.title));
}

const list = sortSongs(songs).map(song => (
  <li key={song.id} id={`song-${song.id}`} className={styles.playlistSong}>
    <button className={styles.playlistSongInfo} onClick={() => playSong(song.id)}>
      <span className={styles.playlistSongTitle}>{song.title}</span>
      <span className={styles.playlistSongArtist}>{song.artist}</span>
      <span className={styles.playlistSongDuration}>{song.duration}</span>
    </button>
    <button onClick={() => deleteSong(song.id)} className="playlist-song-delete" aria-label={`Delete ${song.title}`}>
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
      </svg>
    </button>
  </li>
));


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
      <ul id={styles.playlistSongs}>
        {list}
      </ul>
    </div>
  );
};

export default Playlist;
