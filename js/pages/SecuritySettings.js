function SecuritySettings({ onBack }) {
  const [bio, setBio] = useState(true)
  const [autoLock, setAutoLock] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div className="security-header" style={{
        background:'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
        borderRadius:'24px', 
        padding:'24px', 
        color:'#fff', 
        marginBottom:'24px',
        boxShadow:'0 10px 25px rgba(16, 185, 129, 0.3)',
        margin:'0 20px 24px'
      }}>
         <div style={{fontSize:'14px', opacity:0.9, marginBottom:'4px'}}>安全中心</div>
         <div style={{fontSize:'28px', fontWeight:'800', marginBottom:'8px'}}>账户安全保护</div>
         <div style={{fontSize:'13px', opacity:0.8}}>上次安全检测：刚刚</div>
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
        <div className="settings-item-card" onClick={()=>alert('修改密码功能')} style={{
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

        <div className="settings-item-card" onClick={()=>alert('白名单管理')} style={{
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
             <div style={{width:'36px', height:'36px', borderRadius:'10px', background:'#fff7ed', display:'flex', alignItems:'center', justifyContent:'center', color:'#ea580c'}}><Icon name="list" size={18} /></div>
             <div className="st-label" style={{fontWeight:'600', fontSize:'15px'}}>地址白名单</div>
           </div>
           <div className="st-right"><Icon name="right" size={16} style={{color:'#9ca3af'}}/></div>
        </div>
      </div>

      <div className="row" style={{marginTop:'32px'}}>
        <Button variant="ghost" onClick={onBack}>返回</Button>
      </div>
    </div>
  )
}