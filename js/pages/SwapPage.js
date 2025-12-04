function SwapPage({ onSwap }) {
  const [payAmt, setPayAmt] = useState('')
  const [rxAmt, setRxAmt] = useState('')
  const [payToken, setPayToken] = useState('USDT')
  const [rxToken, setRxToken] = useState('PNT')
  const rate = 12.5 // 1 USDT = 12.5 PNT

  useEffect(() => {
    if (!payAmt) { setRxAmt(''); return }
    const val = parseFloat(payAmt)
    if (!isNaN(val)) {
      setRxAmt((val * rate).toFixed(2))
    }
  }, [payAmt])

  function doSwap() {
    if (!payAmt) return
    onSwap()
  }

  function switchTokens() {
    setPayToken(rxToken)
    setRxToken(payToken)
    setPayAmt('')
  }

  return (
    <div className="content">
      <div className="swap-container">
        <div className="swap-card top">
          <div className="swap-label">支付</div>
          <div className="swap-input-row">
             <input type="number" className="swap-input" placeholder="0" value={payAmt} onChange={e=>setPayAmt(e.target.value)} />
             <button className="token-sel">{payToken} <Icon name="down" size={12}/></button>
          </div>
          <div className="swap-bal">余额: 1,200.00</div>
        </div>

        <div className="swap-divider">
           <button className="swap-switch-btn" onClick={switchTokens}><Icon name="down" /></button>
        </div>

        <div className="swap-card bottom">
          <div className="swap-label">获得</div>
          <div className="swap-input-row">
             <input type="text" className="swap-input" placeholder="0" value={rxAmt} readOnly />
             <button className="token-sel">{rxToken} <Icon name="down" size={12}/></button>
          </div>
          <div className="swap-bal">余额: 0.00</div>
        </div>
      </div>

      <div className="swap-info">
         <div className="si-row">
           <span>汇率</span>
           <span>1 {payToken} ≈ {rate} {rxToken}</span>
         </div>
         <div className="si-row">
           <span>网络费</span>
           <span>$0.01</span>
         </div>
         <div className="si-row">
           <span>滑点容差</span>
           <span>0.5%</span>
         </div>
      </div>

      <div className="row" style={{marginTop:'24px'}}>
        <Button onClick={doSwap}>立即兑换</Button>
      </div>
    </div>
  )
}
