function WalletSelect({ onSelect, onBack }) {
  const wallets = [
    { id:1, name:'My Wallet', type:'无私钥', balance:'¥0', selected:true, color:'#f59e0b' },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'12px', background:'#fff', minHeight:'100vh'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'14px', fontWeight:'700'}}>选择钱包</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div style={{display:'flex', flexDirection:'column'}}>
         {wallets.map((w,i)=>(
           <div key={i} onClick={()=>onSelect(w)} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 20px', cursor:'pointer'}}>
              <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                 <div style={{width:'40px', height:'40px', borderRadius:'10px', background:w.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'20px'}}><Icon name="wallet" /></div>
                 <div>
                   <div style={{fontSize:'16px', fontWeight:'600', display:'flex', alignItems:'center', gap:'6px'}}>
                     {w.name} <span style={{fontSize:'10px', color:'#6b7280', border:'1px solid #e5e7eb', padding:'1px 4px', borderRadius:'4px'}}>{w.type}</span>
                   </div>
                   <div style={{fontSize:'13px', color:'var(--text-muted)'}}>{w.balance}</div>
                 </div>
              </div>
              {w.selected && <div style={{background:'#000', borderRadius:'50%', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}><Icon name="check" size={12} style={{color:'#fff'}} /></div>}
           </div>
         ))}
      </div>
    </div>
  )
}