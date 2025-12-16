function ScanPage({ onBack }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#000',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        marginTop: '40px' // For status bar area
      }}>
        <button onClick={onBack} style={{
          width: '40px',
          height: '40px',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          cursor: 'pointer'
        }}>
          <Icon name="close" size={20} />
        </button>
        
        <div style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#fff'
        }}>扫描二维码</div>
        
        <button style={{
          width: '40px',
          height: '40px',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          cursor: 'pointer'
        }}>
          <Icon name="lightning" size={20} />
        </button>
      </div>

      {/* Camera Area (Simulated) */}
      <div style={{
        flex: 1,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Background Image/Placeholder */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, #111, #222)',
          opacity: 0.5
        }}></div>

        {/* Scanning Frame */}
        <div style={{
          width: '280px',
          height: '280px',
          border: '2px solid rgba(255,255,255,0.2)',
          borderRadius: '20px',
          position: 'relative',
          zIndex: 10
        }}>
           {/* Corner Markers */}
           <div style={{position:'absolute', top:'-2px', left:'-2px', width:'30px', height:'30px', borderTop:'4px solid #3b82f6', borderLeft:'4px solid #3b82f6', borderTopLeftRadius:'20px'}}></div>
           <div style={{position:'absolute', top:'-2px', right:'-2px', width:'30px', height:'30px', borderTop:'4px solid #3b82f6', borderRight:'4px solid #3b82f6', borderTopRightRadius:'20px'}}></div>
           <div style={{position:'absolute', bottom:'-2px', left:'-2px', width:'30px', height:'30px', borderBottom:'4px solid #3b82f6', borderLeft:'4px solid #3b82f6', borderBottomLeftRadius:'20px'}}></div>
           <div style={{position:'absolute', bottom:'-2px', right:'-2px', width:'30px', height:'30px', borderBottom:'4px solid #3b82f6', borderRight:'4px solid #3b82f6', borderBottomRightRadius:'20px'}}></div>
           
           {/* Scanning Line Animation */}
           <div className="scan-line" style={{
             position: 'absolute',
             left: '10px',
             right: '10px',
             height: '2px',
             background: '#3b82f6',
             boxShadow: '0 0 10px #3b82f6',
             top: '50%',
             animation: 'scan 2s infinite linear'
           }}></div>
        </div>
      </div>

      {/* Bottom Text */}
      <div style={{
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px'
      }}>
        <div style={{
          background: 'rgba(30,30,30,0.8)',
          padding: '16px 24px',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <div style={{fontSize:'16px', fontWeight:'600', color:'#fff', marginBottom:'4px'}}>将二维码放入框内</div>
          <div style={{fontSize:'12px', color:'#9ca3af'}}>自动识别钱包地址或 WalletConnect</div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 10px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 270px; opacity: 0; }
        }
      `}</style>
    </div>
  )
}
