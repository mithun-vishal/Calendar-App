import WallCalendar from './components/wall calendar'

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(6px, 2vw, 16px)',
      boxSizing: 'border-box',
      width: '100%',
      backgroundImage: [
        'linear-gradient(135deg, rgba(240,235,228,0.82) 0%, rgba(224,218,210,0.75) 50%, rgba(210,204,196,0.82) 100%)',
        'url(/bg-texture.png)',
      ].join(', '),
      backgroundSize: 'cover, cover',
      backgroundPosition: 'center, center',
      backgroundAttachment: 'fixed, fixed',
    }}>
      <WallCalendar />
    </div>
  )
}