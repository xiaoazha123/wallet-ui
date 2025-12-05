function RedeemFlow({ onConfirm, onCancel }) {
  const [amt,setAmt] = useState('')
  return (
    <div className="content-padded" style={{paddingTop:'24px'}}>
      <div style={{marginBottom:'32px', margin:'0 20px 32px'}}>
        <h1 style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>赎回资产</h1>
        <div style={{fontSize:'14px', color:'var(--text-muted)'}}>赎回后本金和收益将退回至余额</div>
      </div>

      <Card>
        <div style={{padding:'20px 0'}}>
           <Input label="赎回数量" value={amt} onChange={setAmt} placeholder="0.00" />
           <div style={{display:'flex', justifyContent:'space-between', marginTop:'12px', fontSize:'12px'}}>
             <span style={{color:'var(--text-muted)'}}>可赎回: 500.00 USDT</span>
             <span style={{color:'var(--primary)', fontWeight:'600', cursor:'pointer'}} onClick={()=>setAmt('500.00')}>全部赎回</span>
           </div>
        </div>
        
        <div style={{background:'#fff7ed', padding:'16px', borderRadius:'16px', fontSize:'13px', color:'#c2410c', marginTop:'16px', display:'flex', gap:'10px'}}>
           <Icon name="info" size={16} style={{marginTop:'2px'}} />
           <div>
             <div style={{fontWeight:'600', marginBottom:'4px'}}>赎回规则</div>
             <div style={{opacity:0.8, lineHeight:'1.5'}}>赎回申请提交后，资金将在 T+1 日到账，期间不产生收益。</div>
           </div>
        </div>
      </Card>

      <div className="row" style={{marginTop:'40px', gap:'12px'}}>
        <Button onClick={()=>onConfirm(amt)} style={{flex:1, height:'50px', borderRadius:'25px'}}>确认赎回</Button>
        <Button variant="secondary" onClick={onCancel} style={{flex:1, height:'50px', borderRadius:'25px', background:'#f3f4f6', color:'var(--text-muted)'}}>取消</Button>
      </div>
    </div>
  )
}