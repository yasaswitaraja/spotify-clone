import { NavLink } from 'react-router-dom';
import { FaHome, FaSearch, FaBook, FaUpload } from 'react-icons/fa';
import { SiSpotify } from 'react-icons/si';

const links = [
  { to: '/',       icon: <FaHome />,   label: 'Home'    },
  { to: '/search', icon: <FaSearch />, label: 'Search'  },
  { to: '/admin',  icon: <FaUpload />, label: 'Admin'   },
];

export default function Sidebar() {
  return (
    <div style={{
      width: '240px',
      background: '#000',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px'
      }}>
        <SiSpotify size={32} color="#1DB954" />
        <span style={{ fontSize: '20px', fontWeight: 700 }}>Spotify</span>
      </div>

      {links.map(({ to, icon, label }) => (
        <NavLink key={to} to={to} end={to === '/'}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '12px 16px',
            borderRadius: '6px',
            textDecoration: 'none',
            color: isActive ? '#fff' : '#b3b3b3',
            background: isActive ? '#282828' : 'transparent',
            fontWeight: isActive ? 700 : 400,
            transition: '0.2s'
          })}>
          {icon} {label}
        </NavLink>
      ))}
    </div>
  );
}