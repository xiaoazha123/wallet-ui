function TopNavBar({ title, onBack, right, style }) {
  return (
    <div className="header" style={{
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: onBack ? 'center' : 'flex-start', // Center if back button exists, otherwise left align (for main tabs)
      padding: '0 20px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)',
      ...style
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
      {right && (
        <div style={{
          position: 'absolute',
          right: '20px',
          display: 'flex',
          alignItems: 'center'
        }}>
          {right}
        </div>
      )}
    </div>
  )
}