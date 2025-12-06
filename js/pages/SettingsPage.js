function SettingsPage({ onWallets, onSecurity, onNetwork, onLang, onBack }) {
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>设置</div>
         <div style={{width:'40px'}}></div>
      </div>

       <div className="card-white" style={{padding:'0'}}>
         <div className="settings-list">
           <div className="settings-item" onClick={onWallets} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)'}}>
             <div className="st-left" style={{flex:1, display:'flex', alignItems:'center', gap:'12px'}}>
               <div className="st-icon" style={{width:'32px', height:'32px', borderRadius:'50%', background:'#e0e7ff', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary)'}}><Icon name="wallet" /></div>
               <div className="st-label" style={{fontWeight:'600', fontSize:'15px'}}>钱包管理</div>
             </div>
             <div className="st-right" style={{color:'var(--text-muted)'}}><Icon name="right" size={16}/></div>
           </div>
           <div className="settings-item" onClick={onSecurity} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)'}}>
             <div className="st-left" style={{flex:1, display:'flex', alignItems:'center', gap:'12px'}}>
               <div className="st-icon" style={{width:'32px', height:'32px', borderRadius:'50%', background:'#dcfce7', display:'flex', alignItems:'center', justifyContent:'center', color:'#16a34a'}}><Icon name="lock" /></div>
               <div className="st-label" style={{fontWeight:'600', fontSize:'15px'}}>安全设置</div>
             </div>
             <div className="st-right" style={{color:'var(--text-muted)'}}><Icon name="right" size={16}/></div>
           </div>
           <div className="settings-item" onClick={onNetwork} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)'}}>
             <div className="st-left" style={{flex:1, display:'flex', alignItems:'center', gap:'12px'}}>
               <div className="st-icon" style={{width:'32px', height:'32px', borderRadius:'50%', background:'#ffedd5', display:'flex', alignItems:'center', justifyContent:'center', color:'#ea580c'}}><Icon name="settings" /></div>
               <div className="st-label" style={{fontWeight:'600', fontSize:'15px'}}>多链设置</div>
             </div>
             <div className="st-right" style={{color:'var(--text-muted)', display:'flex', alignItems:'center', gap:'4px', fontSize:'13px'}}>Mainnet <Icon name="right" size={16}/></div>
           </div>
           <div className="settings-item" onClick={onLang} style={{padding:'16px', display:'flex', alignItems:'center'}}>
             <div className="st-left" style={{flex:1, display:'flex', alignItems:'center', gap:'12px'}}>
               <div className="st-icon" style={{width:'32px', height:'32px', borderRadius:'50%', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#4b5563'}}><Icon name="user" /></div>
               <div className="st-label" style={{fontWeight:'600', fontSize:'15px'}}>语言 / Language</div>
             </div>
             <div className="st-right" style={{color:'var(--text-muted)', display:'flex', alignItems:'center', gap:'4px', fontSize:'13px'}}>中文 <Icon name="right" size={16}/></div>
           </div>
         </div>
       </div>
    </div>
  )
}
