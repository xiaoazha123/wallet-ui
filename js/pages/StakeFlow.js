function StakeFlow({ onConfirm, onCancel }) {
  const [amt,setAmt] = useState('')
  const [showPwdModal, setShowPwdModal] = useState(false)
  const [pwd, setPwd] = useState('')

  function doStake() {
    // Check password logic here (simple check for prototype)
    if (!pwd) return alert('请输入密码')
    setShowPwdModal(false) // Close modal
    onConfirm(amt)
  }

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onCancel} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>存入资产</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div style={{marginBottom:'32px', margin:'0 20px 32px'}}>
        <div style={{fontSize:'14px', color:'var(--text-muted)'}}>请输入您要存入的金额，开始赚取收益</div>
      </div>

      <Card>
        <div style={{padding:'20px 0'}}>
           <Input label="存入数量" value={amt} onChange={setAmt} placeholder="0.00" />
           <div style={{display:'flex', justifyContent:'space-between', marginTop:'12px', fontSize:'12px'}}>
             <span style={{color:'var(--text-muted)'}}>可用余额: 1,250.00 USDT</span>
             <span style={{color:'var(--primary)', fontWeight:'600', cursor:'pointer'}} onClick={()=>setAmt('1250.00')}>全部存入</span>
           </div>
        </div>
        
        <div style={{background:'#f9fafb', padding:'16px', borderRadius:'16px', fontSize:'13px', color:'var(--text-muted)', marginTop:'16px'}}>
           <div style={{display:'flex', justifyContent:'space-between', marginBottom:'8px'}}>
             <span>预计每日收益</span>
             <span style={{color:'#10b981', fontWeight:'600'}}>+0.35 USDT</span>
           </div>
           <div style={{display:'flex', justifyContent:'space-between'}}>
             <span>到期自动赎回</span>
             <span>是</span>
           </div>
        </div>
      </Card>

      <div className="row" style={{marginTop:'40px', gap:'180px'}}>
        <Button onClick={()=>setShowPwdModal(true)} style={{flex:1, height:'50px', borderRadius:'25px'}}>确认存入</Button>
        <Button variant="secondary" onClick={onCancel} style={{flex:1, height:'50px', borderRadius:'25px', background:'#f3f4f6', color:'var(--text-muted)'}}>取消</Button>
      </div>

      {showPwdModal && (
        <div className="modal-overlay" style={{alignItems:'center', justifyContent:'center'}}>
          <div className="modal-box" style={{margin:'20px', borderRadius:'24px', padding:'24px', width:'85%'}}>
            <div style={{textAlign:'center', fontSize:'18px', fontWeight:'700', marginBottom:'20px'}}>安全验证</div>
            <div style={{fontSize:'14px', color:'var(--text-muted)', marginBottom:'20px', textAlign:'center'}}>请输入交易密码以确认支付</div>
            
            <input 
              type="password" 
              autoFocus
              className="pwd-input" 
              placeholder="请输入交易密码" 
              value={pwd} 
              onChange={e=>setPwd(e.target.value)} 
              style={{width:'100%', padding:'14px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', marginBottom:'24px', background:'#f9fafb'}} 
            />
            
            <div style={{display:'flex', gap:'140px'}}>
              <Button onClick={doStake} style={{flex:1}}>确认</Button>
              <Button variant="ghost" onClick={()=>setShowPwdModal(false)} style={{flex:1}}>取消</Button>
            </div>
            
            <div className="bio-hint" style={{marginTop:'20px', textAlign:'center', color:'var(--primary)', fontSize:'14px', cursor:'pointer'}}> 使用生物识别</div>
          </div>
        </div>
      )}
    </div>
  )
}