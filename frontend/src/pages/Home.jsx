import { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../components/SongCard';
import { usePlayer } from '../context/PlayerContext';

export default function Home() {
  const [songs, setSongs]   = useState([]);
  const [loading, setLoading] = useState(true);
  const { playSong }        = usePlayer();

  useEffect(() => {
    axios.get('http://localhost:5000/api/songs')
      .then(res => {
        setSongs(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <p style={{ color: '#b3b3b3' }}>Loading songs...</p>
    </div>
  );

  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
        Good evening 👋
      </h2>
      <p style={{ color: '#b3b3b3', marginBottom: '32px', fontSize: '14px' }}>
        What do you want to listen to?
      </p>

      <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>
        All Songs
      </h3>

      {songs.length === 0 ? (
        <p style={{ color: '#b3b3b3' }}>No songs available yet.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '16px'
        }}>
          {songs.map(song => (
            <SongCard
              key={song._id}
              song={song}
              onClick={() => playSong(song, songs)}
            />
          ))}
        </div>
      )}
    </div>
  );
}