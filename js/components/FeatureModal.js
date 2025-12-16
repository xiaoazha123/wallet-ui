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
        borderRadius: '16px', padding: '24px',
        textAlign: 'left',
        animation: 'slideUp 0.3s ease',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
        <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
          <Icon name="info" size={24} style={{color:'#3b82f6'}} />
          <div style={{fontSize:'18px', fontWeight:'700', color:'#1f2937'}}>提示</div>
        </div>
        
        <div style={{fontSize: '15px', color: '#4b5563', lineHeight: '1.5', marginBottom: '24px', paddingLeft: '4px'}}>
          {title || '功能开发中'}
        </div>

        <div style={{display:'flex', gap:'12px'}}>
          <button onClick={onClose} style={{
            flex: 1,
            borderRadius: '8px', 
            padding: '10px', 
            background: '#fff', 
            color: '#6b7280', 
            border: '1px solid #e5e7eb', 
            fontSize: '15px', 
            fontWeight: '600',
            cursor: 'pointer'
          }}>取消</button>
          <button onClick={onClose} style={{
            flex: 1,
            borderRadius: '8px', 
            padding: '10px', 
            background: '#3b82f6', 
            color: '#fff', 
            border: 'none', 
            fontSize: '15px', 
            fontWeight: '600',
            cursor: 'pointer'
          }}>确认</button>
        </div>
      </div>
    </div>
  )
}