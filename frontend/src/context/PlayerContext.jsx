import { createContext, useContext, useRef, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying]     = useState(false);
  const [volume, setVolume]           = useState(1);
  const [progress, setProgress]       = useState(0);
  const [queue, setQueue]             = useState([]);

  const playSong = (song, songList = []) => {
    setCurrentSong(song);
    setQueue(songList);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = song.audioUrl;
      audioRef.current.play();
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const skipNext = () => {
    const idx = queue.findIndex(s => s._id === currentSong?._id);
    if (idx < queue.length - 1) playSong(queue[idx + 1], queue);
  };

  const skipPrev = () => {
    const idx = queue.findIndex(s => s._id === currentSong?._id);
    if (idx > 0) playSong(queue[idx - 1], queue);
  };

  return (
    <PlayerContext.Provider value={{
      audioRef, currentSong, isPlaying,
      volume, setVolume, progress, setProgress,
      playSong, togglePlay, skipNext, skipPrev, queue
    }}>
      <audio
        ref={audioRef}
        onTimeUpdate={() => {
          if (audioRef.current)
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }}
        onEnded={skipNext}
      />
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);