function NetworkSettings({ onBack }) {
  const [net, setNet] = useState('main')
  const networks = [
    { id:'main', name:'Ethereum Mainnet', icon:'M', color:'#6366f1' },
    { id:'test', name:'Sepolia Testnet', icon:'T', color:'#f59e0b' },
    { id:'bsc', name:'BNB Smart Chain', icon:'B', color:'#eab308' },
    { id:'polygon', name:'Polygon Mainnet', icon:'P', color:'#8b5cf6' },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>多链设置</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div className="network-header" style={{
        background:'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', 
        borderRadius:'24px', 
        padding:'24px', 
        color:'#fff', 
        marginBottom:'24px',
        boxShadow:'0 10px 25px rgba(234, 88, 12, 0.3)',
        margin:'0 20px 24px'
      }}>
         <div style={{fontSize:'14px', opacity:0.9, marginBottom:'4px'}}>多链管理</div>
         <div style={{fontSize:'28px', fontWeight:'800', marginBottom:'8px'}}>网络节点设置</div>
         <div style={{fontSize:'13px', opacity:0.8}}>当前连接：{networks.find(n=>n.id===net)?.name}</div>
      </div>

      <div className="list-head" style={{padding:'0 4px', marginBottom:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 20px 12px'}}>
        <div style={{fontSize:'16px', fontWeight:'700'}}>可用网络</div>
      </div>

      <Card>
        {networks.map((n,i)=>(
          <div key={n.id} className={`chain-item ${net===n.id?'active':''}`} onClick={()=>setNet(n.id)} style={{
             display:'flex', 
             alignItems:'center', 
             padding:'16px 0', 
             borderBottom: i<networks.length-1 ? '1px solid var(--border)' : 'none',
             cursor:'pointer'
          }}>
            <div className="chain-icon" style={{
               width:'40px', 
               height:'40px', 
               borderRadius:'50%', 
               background:n.color, 
               color:'#fff', 
               display:'flex', 
               alignItems:'center', 
               justifyContent:'center', 
               fontSize:'18px', 
               fontWeight:'700',
               marginRight:'16px'
            }}>{n.icon}</div>
            <div className="st-label" style={{flex:1, fontSize:'16px', fontWeight:'600', color:'var(--text-main)'}}>{n.name}</div>
            {net===n.id && <div style={{color:'var(--primary)', fontSize:'14px'}}><Icon name="check" size={20} /></div>}
          </div>
        ))}
      </Card>
    </div>
  )
}