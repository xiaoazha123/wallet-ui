function SearchPage({ onBack, allCoins, onAssetDetail }) {
  const [q, setQ] = useState('')

  let displayCoins = []
  // Default to showing all coins (repeated to mock a list) if query is empty, 
  // or filter if query exists.
  let longList = []
  for(let i=0; i<9; i++) {
     longList = longList.concat(allCoins)
  }

  if (q) {
      displayCoins = longList.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || c.code.toLowerCase().includes(q.toLowerCase()))
  } else {
      displayCoins = longList
  }

  return (
    <div className="content-padded" style={{paddingTop:'12px', height:'100%', display:'flex', flexDirection:'column', overflow:'hidden'}}>
      <div style={{flexShrink: 0}}>
        <div style={{display:'flex', alignItems:'center', gap:'12px', padding:'0 8px 12px'}}>
           <div style={{
             flex: 1,
             background:'#f3f4f6', 
             padding:'10px 16px', 
             borderRadius:'16px', 
             display:'flex', 
             alignItems:'center', 
             gap:'10px'
           }}>
             <Icon name="search" size={18} style={{color:'var(--text-muted)'}} />
             <input 
               value={q} 
               onChange={e=>setQ(e.target.value)} 
               placeholder="搜索代币或其他" 
               autoFocus
               style={{border:'none', outline:'none', width:'100%', fontSize:'14px', background:'transparent'}} 
             />
             <Icon name="copy" size={18} style={{color:'var(--text-main)'}} /> 
           </div>
           <button onClick={onBack} style={{
             background:'none', 
             border:'none', 
             fontSize:'15px', 
             color:'#f59e0b', 
             fontWeight: '600',
             cursor: 'pointer'
           }}>取消</button>
        </div>

        <div style={{padding:'0 20px', fontSize:'14px', color:'var(--text-muted)', marginBottom:'10px'}}>
          {q ? '搜索结果' : '热门搜索'}
        </div>
      </div>

      <div className="scroll-list" style={{ overflowY:'auto', padding:'0 20px', flex: 1}}>
        {displayCoins.map((c,i)=> (
          <div key={i} className="coin-row" onClick={()=>onAssetDetail(c)} style={{padding:'16px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer'}}>
            <div className="coin-left" style={{flex:1, display:'flex', alignItems:'center', gap:'12px'}}>
              <div className="coin-icon" style={{width:'32px', height:'32px', borderRadius:'16px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', fontSize:'12px', color:'#6b7280'}}>{c.name[0]}</div>
              <div>
                <div className="coin-name" style={{fontSize:'15px', fontWeight:'700', color:'var(--text-main)'}}>{c.name}</div>
                <div style={{fontSize:'12px', color:'var(--text-muted)'}}>市值 $200B</div>
              </div>
            </div>
            <div className="coin-right" style={{flex:1, textAlign:'right'}}>
              <div className="coin-price" style={{fontSize:'15px', fontWeight:'700', color:'var(--text-main)'}}>{c.price}</div>
              <div style={{
                 display:'inline-block', 
                 padding:'2px 6px', 
                 borderRadius:'4px', 
                 background: c.chg.startsWith('+') ? '#dcfce7' : '#fee2e2',
                 color: c.chg.startsWith('+') ? '#16a34a' : '#dc2626',
                 fontSize:'12px',
                 fontWeight:'600',
                 marginTop: '4px',
                 textAlign:'center'
               }}>{c.chg}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
