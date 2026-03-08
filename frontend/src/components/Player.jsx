import { usePlayer } from '../context/PlayerContext';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp } from 'react-icons/fa';

export default function Player() {
  const { currentSong, isPlaying, togglePlay, skipNext, skipPrev, progress, volume, setVolume, audioRef } = usePlayer();

  const seek = (e) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = (e.target.value / 100) * audioRef.current.duration;
  };

  return (
    <div style={{
      height: '90px',
      background: '#181818',
      borderTop: '1px solid #282828',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px'
    }}>

      {/* Song Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '30%' }}>
        {currentSong ? (
          <>
            <img src={currentSong.imageUrl} alt=""
              style={{ width: '56px', height: '56px', borderRadius: '4px' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>{currentSong.title}</div>
              <div style={{ fontSize: '12px', color: '#b3b3b3' }}>{currentSong.artist}</div>
            </div>
          </>
        ) : (
          <span style={{ color: '#b3b3b3', fontSize: '14px' }}>No song selected</span>
        )}
      </div>

      {/* Controls */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', width: '40%', gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <FaStepBackward
            style={{ cursor: 'pointer', color: '#b3b3b3' }}
            onClick={skipPrev} />
          <button onClick={togglePlay} style={{
            background: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>
          <FaStepForward
            style={{ cursor: 'pointer', color: '#b3b3b3' }}
            onClick={skipNext} />
        </div>
        <input type="range" min="0" max="100" value={progress || 0}
          onChange={seek}
          style={{ width: '100%', accentColor: '#1DB954' }} />
      </div>

      {/* Volume */}
      <div style={{
        display: 'flex', alignItems: 'center',
        gap: '8px', width: '30%', justifyContent: 'flex-end'
      }}>
        <FaVolumeUp color="#b3b3b3" />
        <input type="range" min="0" max="1" step="0.01" value={volume}
          onChange={e => {
            setVolume(+e.target.value);
            if (audioRef.current) audioRef.current.volume = +e.target.value;
          }}
          style={{ width: '100px', accentColor: '#1DB954' }} />
      </div>

    </div>
  );
}