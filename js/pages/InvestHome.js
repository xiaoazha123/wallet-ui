function InvestHome({ onBuy }) {
  const [tab, setTab] = useState('earn')
  
  const holdings = [
    { name: 'PNT', amount: '1,200', val: '¥ 2,808', profit: '+12.5%' },
    { name: 'USDT 活期', amount: '500', val: '¥ 3,500', profit: '+0.05%' },
  ]

  const defiList = [
    { name: 'USDT 活期宝', tags: ['保本','灵活'], apy: '5.2%', icon: '$' },
    { name: 'ETH 2.0 质押', tags: ['热门'], apy: '3.8%', icon: 'E' },
    { name: 'TRX 超级节点', tags: ['高收益'], apy: '8.1%', icon: 'T' },
    { name: 'BTC 定投计划', tags: ['稳健'], apy: '15.2%', icon: 'B' },
  ]

  const rwaList = [
    { title: '新加坡商业地产基金 I 期', desc: '持有核心商业区写字楼收益权', apy: '8.5%', progress: 65, raised: '6.5M / 10M' },
    { title: '绿色能源债券 2025', desc: '投资太阳能发电站项目', apy: '6.2%', progress: 30, raised: '300K / 1M' },
  ]

  return (
    <div className="content">
      <div className="invest-overview">
        <div className="invest-label">总投资资产 (CNY)</div>
        <div className="invest-total">¥ 6,308.00</div>
        <div className="invest-stats">
           <div className="stat-item">
             <div className="invest-label">累计收益</div>
             <div className="stat-val pos">+ ¥ 128.50</div>
           </div>
           <div className="stat-item">
             <div className="invest-label">昨日收益</div>
             <div className="stat-val pos">+ ¥ 12.30</div>
           </div>
        </div>
      </div>

      <div className="invest-grid">
        <div className="invest-menu-item" onClick={()=>alert('定投功能开发中')}>
          <div className="invest-menu-icon"><Icon name="chart" /></div>
          <div className="invest-label">定投</div>
        </div>
        <div className="invest-menu-item" onClick={()=>setTab('earn')}>
          <div className="invest-menu-icon"><Icon name="earn" /></div>
          <div className="invest-label">理财</div>
        </div>
        <div className="invest-menu-item" onClick={()=>setTab('rwa')}>
          <div className="invest-menu-icon"><Icon name="invest" /></div>
          <div className="invest-label">RWA</div>
        </div>
        <div className="invest-menu-item" onClick={onBuy}>
          <div className="invest-menu-icon"><Icon name="plus" /></div>
          <div className="invest-label">买币</div>
        </div>
      </div>

      <Card>
        <div className="tabs">
          {['earn','holdings','rwa'].map(t=> (
            <button key={t} className={`tab-btn ${tab===t?'active':''}`} onClick={()=>setTab(t)}>
              {t==='earn'?'理财推荐':t==='holdings'?'我的持仓':'RWA/新币'}
            </button>
          ))}
        </div>

        {tab === 'holdings' && (
          <div className="asset-list">
            {holdings.map((h,i) => (
              <div key={i} className="asset-item">
                <div className="asset-left">
                  <div className="coin-dot" />
                  <div className="asset-info">
                    <div className="a-name">{h.name}</div>
                    <div className="a-amt">{h.amount}</div>
                  </div>
                </div>
                <div className="asset-right">
                  <div className="a-val">{h.val}</div>
                  <div className="a-chg up">{h.profit}</div>
                </div>
              </div>
            ))}
            <div className="row">
               <Button variant="secondary" className="small" onClick={onBuy}>+ 添加资产</Button>
            </div>
          </div>
        )}

        {tab === 'earn' && (
          <div className="list-col">
            {defiList.map((d,i) => (
              <div key={i} className="defi-item">
                <div className="defi-icon">{d.icon}</div>
                <div className="defi-info">
                  <div className="defi-name">{d.name}</div>
                  <div className="defi-tags">
                    {d.tags.map(t=><span key={t} className={`tag ${t==='热门'||t==='高收益'?'hot':''}`}>{t}</span>)}
                  </div>
                </div>
                <div className="defi-apy">
                  <div className="apy-val">{d.apy}</div>
                  <div className="apy-label">预计年化</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'rwa' && (
          <div className="list-col">
            {rwaList.map((r,i) => (
              <div key={i} className="rwa-card">
                <div className="rwa-badge">进行中</div>
                <div className="rwa-title">{r.title}</div>
                <div className="rwa-desc">{r.desc}</div>
                <div className="progress-bar"><div className="progress-fill" style={{width:`${r.progress}%`}}></div></div>
                <div className="rwa-meta">
                   <span>已募 {r.raised}</span>
                   <span>{r.progress}%</span>
                </div>
                <div className="rwa-meta" style={{marginTop:'8px', borderTop:'1px dashed #f3f4f6', paddingTop:'8px'}}>
                   <span>目标年化</span>
                   <span className="rwa-apy">{r.apy}</span>
                </div>
                <div style={{marginTop:'8px'}}>
                  <Button className="small" onClick={()=>alert('RWA 详情页')}>立即参与</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
