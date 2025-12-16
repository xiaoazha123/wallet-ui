function Header({ title, view, onBack, onSettings, onNetwork, onScan, showBack, right }) {
  if (view === 'home') {
    return (
      <header className="header">
        <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
          <button className="icon-btn" onClick={onSettings}><Icon name="user" size={20} /></button>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
          <button className="icon-btn" onClick={onScan}><Icon name="scan" size={20} /></button>
          <button className="icon-btn" onClick={onNetwork}><Icon name="network" size={20} /></button>
        </div>
      </header>
    )
  }
  if (view === 'settings') {
    return (
       <header className="header" style={{justifyContent:'center'}}>
         <div style={{fontSize:'18px', fontWeight:'bold'}}>{title}</div>
       </header>
    )
  }
  
  if (showBack) {
      return (
        <header className="header">
          <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
            <button className="icon-btn" onClick={onBack}><Icon name="back" /></button>
            <h1>{title}</h1>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
            {right}
          </div>
        </header>
      )
  }

  return null
}
