function DepositUSDT({ address, onCopy }) {
  return (
    <div className="content">
      <Card>
        <div className="list-head">充值地址</div>
        <div className="addr">{address}</div>
        <div className="qr">
          <div className="qr-ghost"><Icon name="qr" size={120} /></div>
        </div>
        <div className="row">
          <Button onClick={()=>onCopy(address)}><Icon name="copy" /> 复制地址</Button>
        </div>
        <div className="tip">请从交易所向此地址转入 USDT</div>
      </Card>
    </div>
  )
}
