function EarnList({ onDetail }) {
  const products = [
    { code:'USDT', apy:'8.5%', lock:'30 天', min:'100' },
    { code:'H', apy:'15%', lock:'60 天', min:'50' },
  ]
  return (
    <div className="content">
      <Card>
        <div className="list-head">质押产品</div>
        <div className="products">
          {products.map((p,i)=>(
            <button key={i} className="product" onClick={()=>onDetail(p)}>
              <div className="p-code">{p.code}</div>
              <div className="p-meta">APY {p.apy} · 锁定 {p.lock} · 起投 {p.min}</div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  )
}
