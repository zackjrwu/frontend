const playerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SONG':
      return {
        ...state,
        currentSong: action.payload,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        isPlaying: action.payload,
      };
    case 'SET_CURRENT_TIME':
      return { ...state, songCurrentTime: action.payload };
    default:
      return state;
  }
}

export default playerReducer;
