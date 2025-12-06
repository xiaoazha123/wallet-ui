function DepositUSDT({ address, onCopy, onBack }) {
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>充值 USDT</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div style={{marginBottom:'32px', margin:'0 20px 32px'}}>
        <div style={{fontSize:'14px', color:'var(--text-muted)'}}>仅支持 TRC20 网络充值</div>
      </div>

      <Card>
        <div style={{textAlign:'center', padding:'30px 0'}}>
           <div className="qr-box" style={{
              width:'200px', 
              height:'200px', 
              margin:'0 auto 24px', 
              background:'#fff', 
              borderRadius:'24px', 
              display:'flex', 
              alignItems:'center', 
              justifyContent:'center',
              border:'1px solid var(--border)',
              boxShadow:'var(--shadow-sm)'
           }}>
             <Icon name="qr" size={160} style={{color:'#000'}} />
           </div>

           <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'8px'}}>充值地址 (TRC20)</div>
           <div className="addr-box" style={{
             background:'#f9fafb', 
             padding:'16px', 
             borderRadius:'16px', 
             marginBottom:'24px',
             wordBreak:'break-all',
             fontSize:'15px',
             color:'var(--text-main)',
             fontFamily:'monospace',
             fontWeight:'600',
             textAlign:'center'
           }}>
             {address}
           </div>
           
           <Button onClick={()=>onCopy(address)} style={{height:'44px', borderRadius:'22px', padding:'0 32px', display:'inline-flex', alignItems:'center', gap:'8px'}}>
              <Icon name="copy" size={16} /> 复制地址
           </Button>
        </div>
        
        <div style={{borderTop:'1px dashed var(--border)', paddingTop:'16px', marginTop:'16px'}}>
           <div style={{fontSize:'13px', color:'#ef4444', lineHeight:'1.5', background:'#fee2e2', padding:'12px', borderRadius:'12px'}}>
              <span style={{fontWeight:'700'}}>重要提示：</span> 请勿向此地址充值任何非 USDT (TRC20) 资产，否则资产将无法找回。
           </div>
        </div>
      </Card>
    </div>
  )
}