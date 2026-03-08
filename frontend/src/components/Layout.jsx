import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar />
        <main style={{
          flex: 1,
          overflowY: 'auto',
          background: 'linear-gradient(180deg, #1a1a2e 0%, #121212 40%)',
        }}>
          <Navbar />
          <div style={{ padding: '24px' }}>
            <Outlet />
          </div>
        </main>
      </div>
      <Player />
    </div>
  );
}