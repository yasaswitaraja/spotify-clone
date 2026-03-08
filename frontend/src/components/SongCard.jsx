import { FaPlay } from 'react-icons/fa';

export default function SongCard({ song, onClick }) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={e => e.currentTarget.style.background = '#282828'}
      onMouseLeave={e => e.currentTarget.style.background = '#181818'}
      style={{
        background: '#181818',
        padding: '16px',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: '0.2s',
        position: 'relative'
      }}>

      <div style={{ position: 'relative', marginBottom: '12px' }}>
        <img
          src={song.imageUrl}
          alt={song.title}
          style={{
            width: '100%',
            aspectRatio: '1',
            borderRadius: '4px',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          background: '#1DB954',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <FaPlay color="#000" size={14} />
        </div>
      </div>

      <div style={{ fontSize: '14px', fontWeight: 600 }}>
        {song.title}
      </div>
      <div style={{ fontSize: '12px', color: '#b3b3b3', marginTop: '4px' }}>
        {song.artist}
      </div>

    </div>
  );
}