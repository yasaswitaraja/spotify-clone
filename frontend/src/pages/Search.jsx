import { useState } from 'react';
import axios from 'axios';
import SongCard from '../components/SongCard';
import { usePlayer } from '../context/PlayerContext';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  const [query, setQuery]   = useState('');
  const [songs, setSongs]   = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const { playSong }        = usePlayer();

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const { data } = await axios.get(`http://localhost:5000/api/songs/search?q=${query}`);
      setSongs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>
        Search
      </h2>

      {/* Search Bar */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <FaSearch style={{
            position: 'absolute', left: '14px',
            top: '50%', transform: 'translateY(-50%)',
            color: '#b3b3b3'
          }} />
          <input
            type="text"
            placeholder="Search songs or artists..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            style={{
              width: '100%',
              padding: '12px 16px 12px 40px',
              background: '#242424',
              border: '1px solid #535353',
              borderRadius: '50px',
              color: '#fff',
              fontSize: '14px',
              outline: 'none'
            }}
          />
        </div>
        <button onClick={handleSearch} style={{
          padding: '12px 24px',
          background: '#1DB954',
          border: 'none',
          borderRadius: '50px',
          color: '#000',
          fontWeight: 700,
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          Search
        </button>
      </div>

      {/* Results */}
      {loading && (
        <p style={{ color: '#b3b3b3' }}>Searching...</p>
      )}

      {!loading && searched && songs.length === 0 && (
        <p style={{ color: '#b3b3b3' }}>No results found for "{query}"</p>
      )}

      {!loading && songs.length > 0 && (
        <>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>
            Results for "{query}"
          </h3>
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
        </>
      )}
    </div>
  );
}