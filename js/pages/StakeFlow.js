function StakeFlow({ onConfirm, onCancel }) {
  const [amt,setAmt] = useState('')
  return (
    <div className="content-padded" style={{paddingTop:'24px'}}>
      <div style={{marginBottom:'32px', margin:'0 20px 32px'}}>
        <h1 style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>存入资产</h1>
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

      <div className="row" style={{marginTop:'40px', gap:'12px'}}>
        <Button onClick={()=>onConfirm(amt)} style={{flex:1, height:'50px', borderRadius:'25px'}}>确认存入</Button>
        <Button variant="secondary" onClick={onCancel} style={{flex:1, height:'50px', borderRadius:'25px', background:'#f3f4f6', color:'var(--text-muted)'}}>取消</Button>
      </div>
    </div>
  )
}