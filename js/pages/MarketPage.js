function MarketPage({ onAssetDetail, initialTab, onNewsDetail }) {
  const [seg,setSeg] = useState('市场')
  const [q,setQ] = useState('')
  const [tab,setTab] = useState(initialTab || '自选')
  useEffect(()=>{ if(initialTab) setTab(initialTab) }, [initialTab])
  const coins = [
    { name:'BTC', price:'¥205,432', chg:'+1.24%' },
    { name:'ETH', price:'¥12,450', chg:'-0.56%' },
    { name:'BNB', price:'¥2,340', chg:'+0.12%' },
    { name:'SOL', price:'¥145', chg:'+5.32%' },
    { name:'ASTER', price:'¥0.45', chg:'+12.4%' },
    { name:'HYPE', price:'¥1.20', chg:'-3.21%' },
  ]
  
  const filteredCoins = coins.filter(c => c.name.toLowerCase().includes(q.toLowerCase()))
  const displayCoins = q ? filteredCoins : Array.from({length:30}, (_,i)=> coins[i % coins.length])

  const newsList = [
    { id: 1, title: '以太坊上海升级即将启动，质押提款将开放', source: 'ETH Foundation', time: '10分钟前', tags: ['技术','升级'] },
    { id: 2, title: '警惕：新型钓鱼攻击针对 Web3 用户', source: '慢雾安全', time: '1小时前', tags: ['安全','防骗'] },
    { id: 3, title: 'DeFi 协议总锁仓量突破 500 亿美元', source: 'DeFi Pulse', time: '2小时前', tags: ['DeFi','市场'] },
    { id: 4, title: '某交易所发布新一期资产储备证明', source: 'CEX News', time: '3小时前', tags: ['交易所','合规'] },
    { id: 5, title: 'Layer2 网络日交易量超过主网', source: 'L2 Beat', time: '5小时前', tags: ['Layer2','技术'] },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'0'}}>
      <TopNavBar title="行情" />
      <div className="market-header" style={{padding:'0px 20px', marginBottom:'10px'}}>
        <div className="top-tabs" style={{background:'#f3f4f6', padding:'4px', borderRadius:'12px', display:'flex', width: '100%'}}>
          {['市场','新闻'].map(t=> (
            <button key={t} 
              onClick={()=>setSeg(t)}
              style={{
                flex: 1,
                padding:'6px 20px', 
                borderRadius:'10px', 
                border:'none', 
                background: seg===t ? '#fff' : 'transparent', 
                color: seg===t ? 'var(--text-main)' : 'var(--text-muted)', 
                fontWeight:'600', 
                fontSize:'14px',
                boxShadow: seg===t ? 'var(--shadow-sm)' : 'none',
                cursor:'pointer',
                transition:'all 0.2s',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >{t}</button>
          ))}
        </div>
      </div>

      {seg==='市场' && (
        <>
          <div className="market-search" style={{padding:'0 20px', marginBottom:'10px'}}>
             <div style={{background:'#fff', padding:'10px 16px', borderRadius:'16px', display:'flex', alignItems:'center', gap:'10px', boxShadow:'var(--shadow-sm)', border:'1px solid var(--border)'}}>
               <Icon name="search" size={18} style={{color:'var(--text-muted)'}} />
               <input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索代币" style={{border:'none', outline:'none', width:'100%', fontSize:'14px'}} />
             </div>
          </div>

          <div className="card-white" style={{padding:'0', marginBottom:'100px'}}>
             <div className="market-tabs" style={{padding:'16px 20px 0'}}>
               {['自选','热门','最新'].map(t=> (
                 <button key={t} className={`m-tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
               ))}
             </div>
             
             <div style={{padding:'12px 20px 8px', display:'flex', justifyContent:'space-between', fontSize:'12px', color:'var(--text-muted)'}}>
                <span style={{flex:1}}>资产名称</span>
                <span style={{flex:1, textAlign:'right'}}>最新价 / 24h涨跌</span>
             </div>

             <div className="scroll-list" style={{ overflowY:'auto', padding:'0 20px'}}>
              {displayCoins.map((c,i)=> (
                <div key={i} className="coin-row" onClick={()=>onAssetDetail({code:c.name})} style={{padding:'16px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer'}}>
                  <div className="coin-left" style={{flex:1, display:'flex', alignItems:'center', gap:'12px'}}>
                    <div className="coin-icon" style={{width:'32px', height:'32px', borderRadius:'16px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', fontSize:'12px', color:'#6b7280'}}>{c.name[0]}</div>
                    <div>
                      <div className="coin-name" style={{fontSize:'15px', fontWeight:'700', color:'var(--text-main)'}}>{c.name}</div>
                      <div style={{fontSize:'12px', color:'var(--text-muted)'}}>Rank {i+1}</div>
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
        </>
      )}

      {seg==='新闻' && (
         <div className="news-list" style={{padding:'0 20px', paddingBottom:'100px'}}>
           {newsList.map(n => (
             <div key={n.id} className="news-card" onClick={()=>onNewsDetail(n)} style={{background:'#fff', borderRadius:'16px', padding:'16px', marginBottom:'10px', boxShadow:'var(--shadow-sm)', border:'1px solid var(--border)'}}>
               <div style={{display:'flex', justifyContent:'space-between', marginBottom:'8px'}}>
                  <div className="news-tags" style={{display:'flex', gap:'6px'}}>
                    {n.tags.map(t=><span key={t} style={{fontSize:'10px', padding:'2px 6px', background:'#f3f4f6', borderRadius:'4px', color:'var(--text-muted)'}}>{t}</span>)}
                  </div>
                  <span style={{fontSize:'12px', color:'var(--text-muted)'}}>{n.time}</span>
               </div>
               <div className="news-title" style={{fontSize:'15px', fontWeight:'600', lineHeight:'1.5', marginBottom:'12px', color:'var(--text-main)'}}>{n.title}</div>
               <div className="news-meta" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                 <span style={{fontSize:'12px', color:'var(--text-muted)'}}>{n.source}</span>
                 <span style={{fontSize:'12px', color:'var(--primary)'}}>查看详情 </span>
               </div>
             </div>
           ))}
           
           {/* Mock more news */}
           {[1,2,3].map(i=>(
              <div key={'mock'+i} className="news-card" style={{background:'#fff', borderRadius:'16px', padding:'16px', marginBottom:'16px', boxShadow:'var(--shadow-sm)', border:'1px solid var(--border)'}}>
                 <div style={{height:'16px', width:'60%', background:'#f3f4f6', borderRadius:'4px', marginBottom:'12px'}}></div>
                 <div style={{height:'20px', width:'100%', background:'#f3f4f6', borderRadius:'4px', marginBottom:'8px'}}></div>
                 <div style={{height:'20px', width:'80%', background:'#f3f4f6', borderRadius:'4px', marginBottom:'12px'}}></div>
              </div>
           ))}
         </div>
      )}
    </div>
  )
}
