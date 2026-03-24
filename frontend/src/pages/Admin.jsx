import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function Admin() {
  const { token } = useAuth();
  const [song, setSong] = useState({
    title: '', artist: '', duration: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading]     = useState(false);
  const [message, setMessage]     = useState('');
  const [error, setError]         = useState('');

  const handleUpload = async () => {
    if (!song.title || !song.artist || !song.duration || !imageFile || !audioFile) {
      setError('Please fill all fields and select both files!');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    const formData = new FormData();
    formData.append('title',     song.title);
    formData.append('artist',    song.artist);
    formData.append('duration',  song.duration);
    formData.append('imageFile', imageFile);
    formData.append('audioFile', audioFile);

    try {
      await axios.post('https://spotify-clone-b3pm.onrender.com/api/songs', formData, {
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('✅ Song uploaded successfully!');
      setSong({ title: '', artist: '', duration: '' });
      setImageFile(null);
      setAudioFile(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
        Admin Panel
      </h2>
      <p style={{ color: '#b3b3b3', marginBottom: '32px', fontSize: '14px' }}>
        Upload new songs to the platform
      </p>

      {message && (
        <p style={{
          color: '#1DB954', background: '#0a2e1a',
          padding: '12px', borderRadius: '4px',
          marginBottom: '16px', fontSize: '14px'
        }}>{message}</p>
      )}

      {error && (
        <p style={{
          color: '#e74c3c', background: '#2c1810',
          padding: '12px', borderRadius: '4px',
          marginBottom: '16px', fontSize: '14px'
        }}>{error}</p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={labelStyle}>Song Title</label>
          <input
            type="text"
            placeholder="e.g. Blinding Lights"
            value={song.title}
            onChange={e => setSong({ ...song, title: e.target.value })}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Artist Name</label>
          <input
            type="text"
            placeholder="e.g. The Weeknd"
            value={song.artist}
            onChange={e => setSong({ ...song, artist: e.target.value })}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Duration (in seconds)</label>
          <input
            type="number"
            placeholder="e.g. 200"
            value={song.duration}
            onChange={e => setSong({ ...song, duration: e.target.value })}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={e => setImageFile(e.target.files[0])}
            style={fileStyle}
          />
          {imageFile && (
            <p style={{ color: '#1DB954', fontSize: '12px', marginTop: '4px' }}>
              ✅ {imageFile.name}
            </p>
          )}
        </div>

        <div>
          <label style={labelStyle}>Audio File (MP3)</label>
          <input
            type="file"
            accept="audio/*"
            onChange={e => setAudioFile(e.target.files[0])}
            style={fileStyle}
          />
          {audioFile && (
            <p style={{ color: '#1DB954', fontSize: '12px', marginTop: '4px' }}>
              ✅ {audioFile.name}
            </p>
          )}
        </div>

        <button
          onClick={handleUpload}
          disabled={loading}
          style={{
            padding: '14px',
            background: loading ? '#535353' : '#1DB954',
            border: 'none',
            borderRadius: '50px',
            color: '#000',
            fontSize: '16px',
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            marginTop: '8px'
          }}>
          {loading ? 'Uploading...' : 'Upload Song'}
        </button>
      </div>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: 600,
  marginBottom: '8px',
  color: '#fff'
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: '#242424',
  border: '1px solid #535353',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '14px',
  outline: 'none'
};

const fileStyle = {
  width: '100%',
  padding: '12px',
  background: '#242424',
  border: '1px solid #535353',
  borderRadius: '4px',
  color: '#b3b3b3',
  fontSize: '14px',
  cursor: 'pointer'
};