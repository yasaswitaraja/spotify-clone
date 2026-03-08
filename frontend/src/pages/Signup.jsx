import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [form, setForm]   = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate          = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://spotify-clone-backend.onrender.com/api/auth/signup', form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
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
          Sign up for free
        </h1>
        <p style={{ textAlign: 'center', color: '#b3b3b3', marginBottom: '32px', fontSize: '14px' }}>
          Create your Spotify account
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
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
            style={inputStyle}
          />
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
            Create Account
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '24px', color: '#b3b3b3', fontSize: '14px' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#1DB954', textDecoration: 'none', fontWeight: 700 }}>
            Log in here
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
