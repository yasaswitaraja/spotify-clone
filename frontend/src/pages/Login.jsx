import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [form, setForm]   = useState({ email: 'https://spotify-clone-backend.onrender.com/api/auth/login', password: '' });
  const [error, setError] = useState('');
  const { login }         = useAuth();
  const navigate          = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://spotify-clone-b3pm.onrender.com/api/auth/login', form);
      login(data.user, data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#121212',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: '#282828',
        padding: '40px',
        borderRadius: '12px',
        width: '400px'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '24px' }}>
          Log in to Spotify
        </h1>
        <p style={{ textAlign: 'center', color: '#b3b3b3', marginBottom: '32px', fontSize: '14px' }}>
          Welcome back!
        </p>

        {error && (
          <p style={{
            color: '#e74c3c', marginBottom: '16px',
            background: '#2c1810', padding: '10px',
            borderRadius: '4px', fontSize: '14px'
          }}>
            {error}
          </p>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            style={inputStyle}
          />
          <button onClick={handleSubmit} style={btnStyle}>
            Log In
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '24px', color: '#b3b3b3', fontSize: '14px' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#1DB954', textDecoration: 'none', fontWeight: 700 }}>
            Sign up for Spotify
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '12px 16px',
  background: '#3e3e3e',
  border: '1px solid #535353',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '14px',
  outline: 'none',
  width: '100%'
};

const btnStyle = {
  padding: '14px',
  background: '#1DB954',
  border: 'none',
  borderRadius: '50px',
  color: '#000',
  fontSize: '16px',
  fontWeight: 700,
  cursor: 'pointer',
  width: '100%'
};
