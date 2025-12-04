function EarnDetail({ product, onStake, onRedeem, onDeposit }) {
  return (
    <div className="content">
      <Card>
        <div className="asset-head">
          <div className="code">{product.code} 质押</div>
          <div className="change">APY {product.apy}</div>
        </div>
        <div className="meta">锁定 {product.lock} · 计息按日</div>
        <div className="position">已质押 0 · 累计收益 0</div>
        <div className="row">
          <Button onClick={onStake}>质押</Button>
          <Button variant="secondary" onClick={onRedeem}>赎回</Button>
          <Button variant="ghost" onClick={onDeposit}>USDT 直充</Button>
        </div>
      </Card>
    </div>
  )
}
