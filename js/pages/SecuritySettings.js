function SecuritySettings({ onBack, onChangePassword }) {
  const [bio, setBio] = useState(true)
  const [autoLock, setAutoLock] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>安全设置</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div className="list-head" style={{padding:'0 4px', marginBottom:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 20px 12px'}}>
        <div style={{fontSize:'16px', fontWeight:'700'}}>基础安全</div>
      </div>

      <Card>
        <div className="toggle-row" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
          <div className="tr-info">
            <div className="tr-title" style={{fontSize:'15px', fontWeight:'600', marginBottom:'4px'}}>生物识别</div>
            <div className="tr-desc" style={{fontSize:'12px', color:'var(--text-muted)'}}>使用面容或指纹解锁/支付</div>
          </div>
          <div className={`toggle-switch ${bio?'on':''}`} onClick={()=>setBio(!bio)}><div className="toggle-dot"/></div>
        </div>
        <div className="toggle-row" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
          <div className="tr-info">
            <div className="tr-title" style={{fontSize:'15px', fontWeight:'600', marginBottom:'4px'}}>自动锁定</div>
            <div className="tr-desc" style={{fontSize:'12px', color:'var(--text-muted)'}}>切后台立即锁定钱包</div>
          </div>
          <div className={`toggle-switch ${autoLock?'on':''}`} onClick={()=>setAutoLock(!autoLock)}><div className="toggle-dot"/></div>
        </div>
        <div className="toggle-row" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0'}}>
          <div className="tr-info">
            <div className="tr-title" style={{fontSize:'15px', fontWeight:'600', marginBottom:'4px'}}>隐私模式</div>
            <div className="tr-desc" style={{fontSize:'12px', color:'var(--text-muted)'}}>隐藏首页资产数值</div>
          </div>
          <div className={`toggle-switch ${privacy?'on':''}`} onClick={()=>setPrivacy(!privacy)}><div className="toggle-dot"/></div>
        </div>
      </Card>

      <div className="list-head" style={{padding:'0 4px', marginBottom:'12px', marginTop:'24px', display:'flex', justifyContent:'space-between', alignItems:'center', margin:'24px 20px 12px'}}>
        <div style={{fontSize:'16px', fontWeight:'700'}}>更多设置</div>
      </div>

      <div style={{display:'flex', flexDirection:'column', gap:'12px', margin:'0 20px 20px'}}>
        <div className="settings-item-card" onClick={onChangePassword} style={{
           background:'#fff', 
           padding:'16px', 
           borderRadius:'16px', 
           display:'flex', 
           alignItems:'center', 
           justifyContent:'space-between',
           boxShadow:'var(--shadow-sm)',
           border:'1px solid var(--border)'
        }}>
           <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
             <div style={{width:'36px', height:'36px', borderRadius:'10px', background:'#eff6ff', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary)'}}><Icon name="lock" size={18} /></div>
             <div className="st-label" style={{fontWeight:'600', fontSize:'15px'}}>修改安全密码</div>
           </div>
           <div className="st-right"><Icon name="right" size={16} style={{color:'#9ca3af'}}/></div>
        </div>
      </div>
    </div>
  )
}