function MarketPage({ onAssetDetail, initialTab, onNewsDetail }) {
  const [seg,setSeg] = useState('市场')
  const [q,setQ] = useState('')
  const [tab,setTab] = useState(initialTab || '自选')
  useEffect(()=>{ if(initialTab) setTab(initialTab) }, [initialTab])
  const coins = [
    { name:'BTC', price:'¥120000', chg:'+0.38%' },
    { name:'ETH', price:'¥120000', chg:'+0.38%' },
    { name:'BNB', price:'¥120000', chg:'+0.38%' },
    { name:'SOL', price:'¥120000', chg:'+0.38%' },
    { name:'ASTER', price:'¥120000', chg:'+0.38%' },
    { name:'HYPE', price:'¥120000', chg:'+0.38%' },
  ]
  const longCoins = Array.from({length:30}, (_,i)=> coins[i % coins.length])

  const newsList = [
    { id: 1, title: '以太坊上海升级即将启动，质押提款将开放', source: 'ETH Foundation', time: '10分钟前', tags: ['技术','升级'] },
    { id: 2, title: '警惕：新型钓鱼攻击针对 Web3 用户', source: '慢雾安全', time: '1小时前', tags: ['安全','防骗'] },
    { id: 3, title: 'DeFi 协议总锁仓量突破 500 亿美元', source: 'DeFi Pulse', time: '2小时前', tags: ['DeFi','市场'] },
    { id: 4, title: '某交易所发布新一期资产储备证明', source: 'CEX News', time: '3小时前', tags: ['交易所','合规'] },
    { id: 5, title: 'Layer2 网络日交易量超过主网', source: 'L2 Beat', time: '5小时前', tags: ['Layer2','技术'] },
  ]

  return (
    <div className="content">
      <div className="top-tabs">
        {['市场','新闻','牛人榜'].map(t=> (
          <button key={t} className={`tab-btn ${seg===t?'active':''}`} onClick={()=>setSeg(t)}>{t}</button>
        ))}
      </div>

      {seg==='市场' && (
        <>
          <div className="market-search">
            <input className="search-input" value={q} onChange={e=>setQ(e.target.value)} placeholder="代币名称或合约地址" />
            <button className="copy-btn" onClick={()=>navigator.clipboard.writeText(q)}><Icon name="copy" /></button>
          </div>
          <Card>
            <div className="tabs">
              {['自选','热门','最新'].map(t=> (
                <button key={t} className={`tab-btn ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
              ))}
            </div>
            <div className="coin-list scroll-list">
              {longCoins.map((c,i)=> (
                <button key={i} className="coin-item" onClick={()=>onAssetDetail({code:c.name})}>
                  <div className="coin-info">
                    <span className="coin-dot" />
                    <span className="coin-name">{c.name}</span>
                  </div>
                  <div className="coin-right">
                    <span className="coin-price">{c.price}</span>
                    <span className={`coin-change ${c.chg.startsWith('+')?'up':'down'}`}>{c.chg}</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </>
      )}

      {seg==='新闻' && (
         <div className="news-list">
           {newsList.map(n => (
             <div key={n.id} className="news-item" onClick={()=>onNewsDetail(n)}>
               <div className="news-title">{n.title}</div>
               <div className="news-meta">
                 <span>{n.source} · {n.time}</span>
               </div>
               <div className="news-tags">
                 {n.tags.map(t=><span key={t} className="n-tag">{t}</span>)}
               </div>
             </div>
           ))}
         </div>
      )}

      {seg==='牛人榜' && (
         <Card>
           <div style={{textAlign:'center', padding:'40px', color:'var(--muted)'}}>功能开发中...</div>
         </Card>
      )}
    </div>
  )
}
