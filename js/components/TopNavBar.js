function TopNavBar({ title }) {
  return (
    <div className="header" style={{
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      padding: '0 30px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{
        fontSize: '20px',
        fontWeight: '700',
        color: 'var(--text-main)',
        letterSpacing: '0.5px'
      }}>
        {title}
      </div>
    </div>
  )
}