function StakingHome({ onDetail, onStakeNow }) {
  const [seg,setSeg] = useState('灵活存钱')
  const products = [
    { code:'USDT', apy:'8.5%', lock:'灵活', min:'100' },
    { code:'USDT', apy:'10%', lock:'7天', min:'100' },
    { code:'USDT', apy:'12%', lock:'30天', min:'100' },
    { code:'USDT', apy:'15%', lock:'90天', min:'100' },
  ]
  const featured = { code:'USDT', apy:'12%', lock:'30天', min:'100' }
  return (
    <div className="content">
      <Card>
        <div className="staking-summary">
          <div className="metric">
            <div className="m-label">总存钱金额</div>
            <div className="m-value">¥ 0.00</div>
          </div>
          <div className="metric">
            <div className="m-label">累计收益</div>
            <div className="m-value">¥ 0.00</div>
          </div>
          <div className="metric">
            <div className="m-label">今日收益</div>
            <div className="m-value">¥ 0.00</div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="featured">
          <div className="f-left">
            <div className="f-title">主打年化</div>
            <div className="f-apy">APY {featured.apy}</div>
            <div className="f-meta">{featured.code} · 锁定 {featured.lock} · 起投 {featured.min}</div>
          </div>
          <div className="f-right">
            <Button onClick={()=>onStakeNow(featured)}>立即存入</Button>
          </div>
        </div>
      </Card>
      <Card>
        <div className="prod-tabs">
          {['灵活存钱','7天','30天','90天'].map(t=> (
            <button key={t} className={`tab-btn ${seg===t?'active':''}`} onClick={()=>setSeg(t)}>{t}</button>
          ))}
        </div>
        <div className="prod-list">
          {products.filter(p=> (seg==='灵活存钱' && p.lock==='灵活') || p.lock===seg).map((p,i)=> (
            <div key={i} className="prod-item">
              <div className="prod-info">
                <div className="p-code">{p.code}</div>
                <div className="p-meta">APY {p.apy} · 锁定 {p.lock} · 起投 {p.min}</div>
              </div>
              <div className="prod-actions">
                <Button variant="secondary" onClick={()=>onDetail(p)}>详情</Button>
                <Button onClick={()=>onStakeNow(p)}>立即存入</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
