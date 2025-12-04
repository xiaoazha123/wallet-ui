function SecuritySettings({ onBack }) {
  const [bio, setBio] = useState(true)
  const [autoLock, setAutoLock] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  
  return (
    <div className="content">
      <Card>
        <div className="list-head">安全选项</div>
        <div className="toggle-row">
          <div className="tr-info">
            <div className="tr-title">生物识别</div>
            <div className="tr-desc">使用面容或指纹解锁/支付</div>
          </div>
          <div className={`toggle-switch ${bio?'on':''}`} onClick={()=>setBio(!bio)}><div className="toggle-dot"/></div>
        </div>
        <div className="toggle-row">
          <div className="tr-info">
            <div className="tr-title">自动锁定</div>
            <div className="tr-desc">切后台立即锁定钱包</div>
          </div>
          <div className={`toggle-switch ${autoLock?'on':''}`} onClick={()=>setAutoLock(!autoLock)}><div className="toggle-dot"/></div>
        </div>
        <div className="toggle-row">
          <div className="tr-info">
            <div className="tr-title">隐私模式</div>
            <div className="tr-desc">隐藏首页资产数值</div>
          </div>
          <div className={`toggle-switch ${privacy?'on':''}`} onClick={()=>setPrivacy(!privacy)}><div className="toggle-dot"/></div>
        </div>
        <div className="settings-item" style={{marginTop:'16px', border:'none', padding:'0'}} onClick={()=>alert('修改密码功能')}>
           <div className="st-label">修改密码</div>
           <div className="st-right"><Icon name="right" size={12}/></div>
        </div>
        <div className="settings-item" style={{marginTop:'16px', border:'none', padding:'0'}} onClick={()=>alert('白名单管理')}>
           <div className="st-label">地址白名单</div>
           <div className="st-right"><Icon name="right" size={12}/></div>
        </div>
      </Card>
      <div className="row" style={{marginTop:'24px'}}>
        <Button variant="ghost" onClick={onBack}>返回</Button>
      </div>
    </div>
  )
}
