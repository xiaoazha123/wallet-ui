function NetworkSelect({ current, onSelect, onBack }) {
  const [q, setQ] = useState('')
  const hot = [
    { id:'bsc', name:'BSC', sub:'BNB Smart Chain', icon:'B', color:'#f59e0b' },
    { id:'eth', name:'Ethereum', sub:'Ethereum', icon:'E', color:'#627eea' },
    { id:'sol', name:'Solana', sub:'Solana', icon:'S', color:'#10b981' },
    { id:'btc', name:'Bitcoin', sub:'Bitcoin', icon:'B', color:'#f97316' },
    { id:'base', name:'Base', sub:'Base', icon:'B', color:'#0052ff' },
  ]
  const all = [
    { id:'arb', name:'Arbitrum', sub:'Arbitrum One', icon:'A', color:'#28a0f0' },
    { id:'avax', name:'Avalanche', sub:'Avalanche C-Chain', icon:'A', color:'#e84142' },
    { id:'bevm', name:'BEVM', sub:'BEVM', icon:'B', color:'#fbbf24' },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'12px', background:'#fff', minHeight:'100vh'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'16px', position:'relative', padding:'0 8px'}}>
         <div style={{fontSize:'18px', fontWeight:'700'}}>选择网络</div>
         {/* <button onClick={onBack} style={{position:'absolute', right:0, background:'none', border:'none', padding:'8px', cursor:'pointer'}}><Icon name="close" size={20} /></button> */}
      </div>

      <div style={{padding:'0 16px', marginBottom:'20px'}}>
         <div style={{background:'#f3f4f6', borderRadius:'12px', padding:'10px 16px', display:'flex', alignItems:'center', gap:'8px'}}>
           <Icon name="search" size={18} style={{color:'#9ca3af'}} />
           <input 
             value={q} 
             onChange={e=>setQ(e.target.value)} 
             placeholder="" 
             style={{border:'none', background:'transparent', outline:'none', fontSize:'14px', width:'100%', color:'var(--text-main)'}} 
           />
         </div>
      </div>

      <div onClick={()=>onSelect({id:'all', name:'所有网络'})} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 20px', borderBottom:'1px solid #f9fafb', cursor:'pointer', background:'#fff'}}>
         <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
            <Icon name="network" size={24} style={{color:'#000'}} />
            <div style={{fontSize:'16px', fontWeight:'600'}}>所有网络</div>
         </div>
         {current==='all' && <Icon name="check" size={20} style={{color:'#000'}} />}
      </div>

      <div style={{padding:'16px 20px 8px', fontSize:'13px', color:'var(--text-muted)'}}>热门网络</div>
      
      {hot.map((n,i)=>(
        <div key={n.id} onClick={()=>onSelect(n)} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 20px', cursor:'pointer'}}>
           <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
              <div style={{width:'36px', height:'36px', borderRadius:'50%', background:n.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'18px', fontWeight:'700'}}>{n.icon}</div>
              <div>
                <div style={{fontSize:'16px', fontWeight:'600'}}>{n.name}</div>
                <div style={{fontSize:'12px', color:'var(--text-muted)'}}>{n.sub}</div>
              </div>
           </div>
           {current===n.id && <Icon name="check" size={20} style={{color:'#000'}} />}
        </div>
      ))}

      <div style={{padding:'16px 20px 8px', fontSize:'13px', color:'var(--text-muted)'}}>A</div>
      {all.map((n,i)=>(
        <div key={n.id} onClick={()=>onSelect(n)} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 20px', cursor:'pointer'}}>
           <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
              <div style={{width:'36px', height:'36px', borderRadius:'10px', background:n.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'18px', fontWeight:'700'}}>{n.icon}</div>
              <div>
                <div style={{fontSize:'16px', fontWeight:'600'}}>{n.name}</div>
                <div style={{fontSize:'12px', color:'var(--text-muted)'}}>{n.sub}</div>
              </div>
           </div>
           {current===n.id && <Icon name="check" size={20} style={{color:'#000'}} />}
        </div>
      ))}
      
      {/* Handle close via drag or parent in real app, here we might need a back button if it's a full page */}
      <div style={{height:'40px'}}></div>
    </div>
  )
}