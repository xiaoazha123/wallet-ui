function FeatureModal({ title, onClose }) {
  return (
    <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') onClose()}} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', zIndex: 999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'fadeIn 0.2s ease'
    }}>
      <div className="modal-box" style={{
        background: '#fff', width: '80%', maxWidth: '320px',
        borderRadius: '24px', padding: '32px 24px',
        textAlign: 'center',
        animation: 'slideUp 0.3s ease',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
        <div style={{
          width: '72px', height: '72px', margin: '0 auto 20px',
          background: '#f3f4f6', borderRadius: '36px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--primary)', 
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <Icon name="time" size={36} />
        </div>
        <div style={{fontSize: '20px', fontWeight: '800', color: 'var(--text-main)', marginBottom: '12px'}}>
          {title || '功能开发中'}
        </div>
        <div style={{fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '32px'}}>
          该功能正在紧锣密鼓开发中<br/>敬请期待...
        </div>
        <button onClick={onClose} style={{
          width: '100%', 
          borderRadius: '30px', 
          padding: '14px', 
          background: 'var(--primary)', 
          color: '#fff', 
          border: 'none', 
          fontSize: '16px', 
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
        }}>我知道了</button>
      </div>
    </div>
  )
}