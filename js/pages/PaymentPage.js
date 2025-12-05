function PaymentPage() {
  const txs = [
    { id:1, name:'星巴克咖啡', time:'今天 10:23', amt:'-32.00', icon:'☕' },
    { id:2, name:'7-11 便利店', time:'昨天 18:45', amt:'-15.50', icon:'🏪' },
    { id:3, name:'Apple Store', time:'2025-11-01', amt:'-648.00', icon:'🍎' },
  ]
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div className="payment-card" style={{
        background:'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
        borderRadius:'24px', 
        padding:'32px 24px', 
        color:'#fff', 
        textAlign:'center',
        marginBottom:'24px',
        boxShadow:'0 10px 25px rgba(16, 185, 129, 0.3)',
        margin:'0 20px 20px'
      }}>
         <div style={{fontSize:'16px', opacity:0.9, marginBottom:'8px'}}>付款码</div>
         <div style={{background:'#fff', padding:'16px', borderRadius:'16px', display:'inline-block', marginBottom:'24px'}}>
            <Icon name="qr" size={160} style={{color:'#000'}} />
         </div>
         <div style={{fontSize:'14px', opacity:0.8, marginBottom:'24px'}}>每分钟自动更新</div>
         
         <div className="pay-actions" style={{display:'flex', gap:'16px'}}>
           <button style={{flex:1, background:'rgba(255,255,255,0.2)', border:'none', padding:'12px', borderRadius:'16px', color:'#fff', fontSize:'15px', fontWeight:'600', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px'}}>
             <Icon name="scan" size={20} /> 扫一扫
           </button>
           <button style={{flex:1, background:'rgba(255,255,255,0.2)', border:'none', padding:'12px', borderRadius:'16px', color:'#fff', fontSize:'15px', fontWeight:'600', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px'}}>
             <Icon name="qr" size={20} /> 收款码
           </button>
         </div>
      </div>

      <Card>
         <div className="list-head" style={{marginBottom:'16px'}}>最近支付</div>
         <div className="pay-history">
           {txs.map(t=>(
             <div key={t.id} style={{display:'flex', alignItems:'center', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
               <div style={{width:'40px', height:'40px', borderRadius:'20px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', marginRight:'12px'}}>{t.icon}</div>
               <div style={{flex:1}}>
                 <div style={{fontSize:'15px', fontWeight:'600', marginBottom:'4px'}}>{t.name}</div>
                 <div style={{fontSize:'12px', color:'var(--text-muted)'}}>{t.time}</div>
               </div>
               <div style={{fontSize:'16px', fontWeight:'700', color:'#1f2937'}}>{t.amt}</div>
             </div>
           ))}
         </div>
      </Card>
    </div>
  )
}
