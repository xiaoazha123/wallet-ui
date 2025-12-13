function TopNavBar({ title, onBack }) {
  return (
    <div className="header" style={{
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 30px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid var(--border)'
    }}>
      {onBack && (
        <button onClick={onBack} style={{
          position: 'absolute', 
          left: '20px', 
          background: 'none', 
          border: 'none', 
          padding: '8px', 
          cursor: 'pointer', 
          color: 'var(--text-main)',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Icon name="back" size={24} />
        </button>
      )}
      <div style={{
        fontSize: '18px',
        fontWeight: '700',
        color: 'var(--text-main)',
        letterSpacing: '0.5px'
      }}>
        {title}
      </div>
    </div>
  )
}