function NetworkSettings({ onBack }) {
  const [net, setNet] = useState('main')
  const [rpcLatency, setRpcLatency] = useState({ main: '24ms', test: '120ms', bsc: '45ms', polygon: '68ms', sol: '32ms', trx: '56ms' })
  
  const networks = [
    { id:'main', name:'Ethereum Mainnet', type:'Layer 1', rpc:'https://mainnet.infura.io/v3...', color:'#627eea', icon:'M' },
    { id:'bsc', name:'BNB Smart Chain', type:'Layer 1', rpc:'https://bsc-dataseed.binance.org', color:'#f3ba2f', icon:'B' },
    { id:'trx', name:'TRON Mainnet', type:'Layer 1', rpc:'https://api.trongrid.io', color:'#ef0027', icon:'T' },
    { id:'polygon', name:'Polygon', type:'Layer 2', rpc:'https://polygon-rpc.com', color:'#8247e5', icon:'P' },
    { id:'sol', name:'Solana', type:'Layer 1', rpc:'https://api.mainnet-beta.solana.com', color:'#14f195', icon:'S' },
    { id:'test', name:'Sepolia Testnet', type:'Testnet', rpc:'https://rpc.sepolia.org', color:'#000000', icon:'T' },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      {/* 顶部导航 */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'24px', padding:'0 8px'}}>
         <div style={{display:'flex', alignItems:'center'}}>
           <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)', marginRight:'4px'}}><Icon name="back" size={24} /></button>
           <div style={{fontSize:'18px', fontWeight:'700'}}>节点管理</div>
         </div>
      </div>

      {/* 当前连接状态卡片 */}
      <div style={{margin:'0 20px 24px'}}>
         <div style={{fontSize:'14px', fontWeight:'600', color:'var(--text-muted)', marginBottom:'12px'}}>当前连接</div>
         <div style={{
           background:'#fff', padding:'20px', borderRadius:'20px', 
           border:'1px solid var(--border)', boxShadow:'var(--shadow-sm)',
           display:'flex', alignItems:'center', justifyContent:'space-between'
         }}>
            <div style={{display:'flex', alignItems:'center', gap:'16px'}}>
               <div style={{
                 width:'48px', height:'48px', borderRadius:'24px', 
                 background: networks.find(n=>n.id===net)?.color, 
                 color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', 
                 fontWeight:'700', fontSize:'20px'
               }}>
                 {networks.find(n=>n.id===net)?.icon}
               </div>
               <div>
                 <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)', marginBottom:'4px'}}>
                   {networks.find(n=>n.id===net)?.name}
                 </div>
                 <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                   <span style={{fontSize:'12px', color:'var(--text-muted)'}}>{networks.find(n=>n.id===net)?.type}</span>
                   <div style={{width:'4px', height:'4px', borderRadius:'50%', background:'#d1d5db'}}></div>
                   <span style={{fontSize:'12px', color:'#16a34a', display:'flex', alignItems:'center', gap:'4px'}}>
                     <div style={{width:'6px', height:'6px', borderRadius:'50%', background:'#16a34a'}}></div>
                     {rpcLatency[net]}
                   </span>
                 </div>
               </div>
            </div>
            <div style={{background:'#f3f4f6', padding:'8px 12px', borderRadius:'12px', fontSize:'12px', fontWeight:'600', color:'var(--text-main)'}}>
              已连接
            </div>
         </div>
      </div>

      {/* 节点列表 */}
      <div style={{margin:'0 20px'}}>
        <div style={{fontSize:'14px', fontWeight:'600', color:'var(--text-muted)', marginBottom:'12px'}}>可用网络</div>
        <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
          {networks.filter(n => n.id !== net).map(n => (
            <div key={n.id} onClick={()=>setNet(n.id)} style={{
              background:'#fff', padding:'16px 20px', borderRadius:'16px',
              border:'1px solid var(--border)', cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'space-between',
              transition: 'all 0.2s'
            }}>
               <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                 <div style={{
                   width:'40px', height:'40px', borderRadius:'20px', 
                   background:n.color, color:'#fff', 
                   display:'flex', alignItems:'center', justifyContent:'center', 
                   fontWeight:'700', fontSize:'16px'
                 }}>{n.icon}</div>
                 <div>
                   <div style={{fontSize:'15px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>{n.name}</div>
                   <div style={{fontSize:'12px', color:'var(--text-muted)'}}>RPC 延迟: <span style={{color: parseInt(rpcLatency[n.id])<100?'#16a34a':'#eab308'}}>{rpcLatency[n.id]}</span></div>
                 </div>
               </div>
               <button style={{
                 padding:'8px 16px', borderRadius:'20px', border:'1px solid var(--border)',
                 background:'transparent', fontSize:'13px', fontWeight:'600', color:'var(--text-main)'
               }}>切换</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}