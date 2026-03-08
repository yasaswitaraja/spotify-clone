import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      background: 'rgba(0,0,0,0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => navigate(-1)} style={navBtnStyle}>
          <FaChevronLeft />
        </button>
        <button onClick={() => navigate(1)} style={navBtnStyle}>
          <FaChevronRight />
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '14px' }}>Hi, {user?.username} 👋</span>
        <button onClick={logout} style={{
          background: '#fff',
          color: '#000',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '50px',
          fontWeight: 700,
          cursor: 'pointer',
          fontSize: '12px'
        }}>
          Log out
        </button>
      </div>
    </div>
  );
}

const navBtnStyle = {
  background: 'rgba(0,0,0,0.5)',
  border: 'none',
  color: '#fff',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};