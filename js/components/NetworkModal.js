function NetworkModal({ current, onClose, onSelect }) {
  const nets = [
    { id:'all', name:'全部网络', icon:'A' },
    { id:'main', name:'Ethereum Mainnet', icon:'E' },
    { id:'bsc', name:'BNB Smart Chain', icon:'B' },
    { id:'test', name:'Sepolia Testnet', icon:'S' },
    { id:'polygon', name:'Polygon', icon:'P' },
    { id:'btc', name:'Bitcoin', icon:'₿' },
    { id:'sol', name:'Solana', icon:'S' },
  ]
  return (
    <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') onClose()}}>
      <div className="modal-box">
        <div className="modal-title">切换网络</div>
        <div className="net-list" style={{display:'flex', flexDirection:'column', gap:'12px'}}>
          {nets.map(n=>(
            <div key={n.id} 
                 className={`chain-item ${current===n.id?'active':''}`} 
                 onClick={()=>onSelect(n.id)}
                 style={{display:'flex', alignItems:'center', padding:'12px', borderRadius:'12px', background:'var(--card)', border:current===n.id?'1px solid var(--primary)':'1px solid transparent'}}
            >
               <div className="chain-icon" style={{width:'32px', height:'32px', borderRadius:'16px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', marginRight:'12px', fontWeight:'bold'}}>{n.icon}</div>
               <div className="st-label" style={{flex:1}}>{n.name}</div>
               {current===n.id && <div style={{color:'var(--primary)'}}><Icon name="yes" size={16} /></div>}
            </div>
          ))}
        </div>
        <Button variant="ghost" style={{width:'100%', marginTop:'20px'}} onClick={onClose}>取消</Button>
      </div>
    </div>
  )
}
