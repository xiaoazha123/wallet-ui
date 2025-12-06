function ReceiveSelect({ onBack, onSelect, onWalletSelect, onNetworkSelect }) {
  const [q, setQ] = useState('')
  const tokens = [
    { sym:'ETH', name:'Ether', net:'Base', icon:'E', color:'#3b82f6' },
    { sym:'ETH', name:'Ether', net:'Ethereum', icon:'E', color:'#627eea' },
    { sym:'BNB', name:'BNB Chain Native Token', net:'BSC', icon:'B', color:'#f59e0b' },
    { sym:'SOL', name:'Solana', net:'Solana', icon:'S', color:'#10b981' },
    { sym:'SUI', name:'Sui', net:'Sui', icon:'S', color:'#3b82f6' },
    { sym:'BTC', name:'Bitcoin', net:'Bitcoin', icon:'B', color:'#f97316' },
    { sym:'USDT', name:'Tether USDT', net:'多链', icon:'$', color:'#26a17b' },
    { sym:'USDC', name:'USDC Token', net:'多链', icon:'$', color:'#2775ca' },
    { sym:'ETH', name:'Ether', net:'Arbitrum', icon:'E', color:'#28a0f0' },
    { sym:'DOGE', name:'Dogecoin', net:'Dogecoin', icon:'D', color:'#ba9f33' },
  ]

  // Safe click handler to prevent errors if props are undefined
  const handleWalletClick = () => {
    if (onWalletSelect) {
      onWalletSelect();
    } else {
      console.warn('onWalletSelect is not defined');
    }
  };

  return (
    <div className="content-padded" style={{paddingTop:'12px', background:'#fff', minHeight:'100vh'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>选择币种</div>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="close" size={20} /></button>
      </div>

      <div onClick={handleWalletClick} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px', marginBottom:'16px', cursor:'pointer'}}>
         <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
           <div style={{width:'24px', height:'24px', borderRadius:'6px', background:'#f59e0b', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'12px'}}><Icon name="wallet" /></div>
         </div>
         <Icon name="right" size={16} style={{color:'#9ca3af'}} />
      </div>

      <div style={{padding:'0 16px', marginBottom:'20px'}}>
         <div style={{background:'#f3f4f6', borderRadius:'20px', padding:'10px 16px', display:'flex', alignItems:'center', gap:'8px'}}>
           <Icon name="search" size={18} style={{color:'#9ca3af'}} />
           <input 
             value={q} 
             onChange={e=>setQ(e.target.value)} 
             placeholder="搜索代币名称或合约地址" 
             style={{border:'none', background:'transparent', outline:'none', fontSize:'14px', width:'100%', color:'var(--text-main)'}} 
           />
         </div>
      </div>

      <div onClick={onNetworkSelect} style={{padding:'0 16px', marginBottom:'16px', display:'flex', alignItems:'center', gap:'4px', cursor:'pointer'}}>
         <Icon name="network" size={16} style={{color:'#4b5563'}} />
         <span style={{fontSize:'14px', fontWeight:'600', color:'#4b5563'}}>所有网络</span>
         <Icon name="down" size={12} style={{color:'#4b5563'}} />
      </div>

      <div style={{display:'flex', flexDirection:'column'}}>
         {tokens.map((t,i)=>(
           <div key={i} onClick={()=>onSelect(t)} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 20px', borderBottom:'1px solid #f9fafb', cursor:'pointer'}}>
              <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                 <div style={{position:'relative'}}>
                   <div style={{width:'40px', height:'40px', borderRadius:'50%', background:t.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'20px', fontWeight:'700'}}>{t.icon}</div>
                   <div style={{position:'absolute', bottom:'-2px', right:'-4px', background:t.color==='#627eea'?'#627eea':'#3b82f6', borderRadius:'4px', padding:'1px', border:'1px solid #fff'}}>
                     {/* Mini network icon placeholder */}
                     <div style={{width:'12px', height:'12px', background:'#fff', borderRadius:'50%'}}></div>
                   </div>
                 </div>
                 <div>
                   <div style={{fontSize:'16px', fontWeight:'600', display:'flex', alignItems:'center', gap:'6px'}}>
                     {t.sym} <span style={{fontSize:'10px', color:'#6b7280', border:'1px solid #e5e7eb', padding:'1px 4px', borderRadius:'4px'}}>{t.net}</span>
                   </div>
                   <div style={{fontSize:'13px', color:'var(--text-muted)'}}>{t.name}</div>
                 </div>
              </div>
              <div style={{textAlign:'right'}}>
                 <div style={{fontSize:'16px', fontWeight:'600'}}>0</div>
                 <div style={{fontSize:'12px', color:'var(--text-muted)'}}>¥0</div>
              </div>
           </div>
         ))}
      </div>
    </div>
  )
}