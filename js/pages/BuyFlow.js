function BuyFlow({ onConfirm, onCancel }) {
  const [usdt,setUsdt] = useState('')
  const getQty = amt => amt ? (parseFloat(amt)/2.34).toFixed(2) : '0'
  
  return (
    <div className="content-padded" style={{paddingTop:'24px'}}>
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
      
      <div className="risk-tip" style={{fontSize:'12px', color:'#b91c1c', background:'#fee2e2', padding:'12px', borderRadius:'12px', marginTop:'24px'}}>
        风险提示：加密货币价格波动较大，请理性投资，注意风险控制。
      </div>

      <div className="row" style={{marginTop:'40px', gap:'12px'}}>
        <Button onClick={()=>onConfirm(usdt)} style={{flex:1, height:'50px', borderRadius:'25px'}}>确认购买</Button>
        <Button variant="secondary" onClick={onCancel} style={{flex:1, height:'50px', borderRadius:'25px', background:'#f3f4f6', color:'var(--text-muted)'}}>取消</Button>
      </div>
    </div>
  )
}