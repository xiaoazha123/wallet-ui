function BuyFlow({ onConfirm, onCancel }) {
  const [usdt,setUsdt] = useState('')
  const getQty = amt => amt ? (parseFloat(amt)/2.34).toFixed(2) : '0'
  return (
    <div className="content">
      <Card>
        <Input label="USDT 金额" value={usdt} onChange={setUsdt} placeholder="0" />
        <div className="meta">可得数量：{getQty(usdt)} PNT</div>
        <div className="risk">风险提示：代币价格波动较大，请谨慎投资</div>
        <div className="row">
          <Button onClick={()=>onConfirm(usdt)}>确认购买</Button>
          <Button variant="ghost" onClick={onCancel}>取消</Button>
        </div>
      </Card>
    </div>
  )
}
