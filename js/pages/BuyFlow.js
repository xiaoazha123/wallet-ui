function BuyFlow({ onConfirm, onCancel }) {
  const [usdt,setUsdt] = useState('')
  const getQty = amt => amt ? (parseFloat(amt)/2.34).toFixed(2) : '0'
  const [showPwdModal, setShowPwdModal] = useState(false)
  const [pwd, setPwd] = useState('')

  function doBuy() {
    // Check password logic here (simple check for prototype)
    if (!pwd) return alert('请输入密码')
    setShowPwdModal(false) // Close modal
    onConfirm(usdt)
  }
  
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onCancel} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>购买代币</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div style={{marginBottom:'32px', margin:'0 20px 32px'}}>
        <h1 style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>购买 PNT</h1>
        <div style={{fontSize:'14px', color:'var(--text-muted)'}}>使用 USDT 快速兑换 PNT 代币</div>
      </div>

      <Card>
        <div style={{padding:'20px 0'}}>
           <Input label="支付 USDT" value={usdt} onChange={setUsdt} placeholder="0.00" />
           <div style={{textAlign:'center', margin:'16px 0', color:'var(--text-muted)'}}>
              <Icon name="down" size={20} />
           </div>
           <div className="input-like" style={{
             background:'#f9fafb', 
             padding:'16px', 
             borderRadius:'16px', 
             border:'1px solid var(--border)',
             display:'flex',
             justifyContent:'space-between',
             alignItems:'center'
           }}>
              <div>
                <div style={{fontSize:'12px', color:'var(--text-muted)', marginBottom:'4px'}}>获得 PNT</div>
                <div style={{fontSize:'18px', fontWeight:'700', color:'var(--text-main)'}}>{getQty(usdt)}</div>
              </div>
              <div style={{fontSize:'14px', fontWeight:'600'}}>PNT</div>
           </div>
        </div>
        
        <div style={{fontSize:'12px', color:'var(--text-muted)', marginTop:'8px', display:'flex', justifyContent:'space-between'}}>
           <span>当前汇率</span>
           <span>1 PNT ≈ 2.34 USDT</span>
        </div>
      </Card>
      
      <div className="risk-tip" style={{fontSize:'12px', color:'#b91c1c', background:'#fee2e2', padding:'12px', borderRadius:'12px', marginTop:'24px',margin:'0 20px'}}>
        风险提示：加密货币价格波动较大，请理性投资，注意风险控制。
      </div>

      <div className="row" style={{marginTop:'40px', gap:'12px'}}>
        <Button onClick={()=>setShowPwdModal(true)} style={{flex:1, height:'50px', borderRadius:'25px'}}>确认购买</Button>
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
              <Button onClick={doBuy} style={{flex:1}}>确认</Button>
              <Button variant="ghost" onClick={()=>setShowPwdModal(false)} style={{flex:1}}>取消</Button>
            </div>
            
            <div className="bio-hint" style={{marginTop:'20px', textAlign:'center', color:'var(--primary)', fontSize:'14px', cursor:'pointer'}}> 使用生物识别</div>
          </div>
        </div>
      )}
    </div>
  )
}