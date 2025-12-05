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
    <div className="content-padded" style={{paddingTop:'24px'}}>
      <div className="swap-container" style={{position:'relative', margin:'0 20px 20px'}}>
        <div className="swap-card top" style={{
          background:'#fff', 
          borderRadius:'20px', 
          padding:'16px', 
          marginBottom:'8px', 
          boxShadow:'var(--shadow-sm)',
          border:'1px solid var(--border)'
        }}>
          <div className="swap-label" style={{color:'var(--text-muted)', fontSize:'13px', marginBottom:'8px'}}>支付</div>
          <div className="swap-input-row" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
             <input type="number" className="swap-input" placeholder="0" value={payAmt} onChange={e=>setPayAmt(e.target.value)} style={{
               border:'none', 
               fontSize:'28px', 
               fontWeight:'700', 
               color:'var(--text-main)', 
               width:'60%', 
               outline:'none'
             }} />
             <button className="token-sel" style={{
               background:'#f3f4f6', 
               border:'none', 
               padding:'6px 12px', 
               borderRadius:'20px', 
               display:'flex', 
               alignItems:'center', 
               gap:'6px', 
               fontWeight:'600',
               cursor:'pointer'
             }}>
               <div style={{width:'20px', height:'20px', borderRadius:'10px', background:'#ccc'}}></div>
               {payToken} <Icon name="down" size={12}/>
             </button>
          </div>
          <div className="swap-bal" style={{fontSize:'12px', color:'var(--text-muted)', marginTop:'8px'}}>余额: 1,200.00</div>
        </div>

        <div className="swap-divider" style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)', zIndex:10}}>
           <button className="swap-switch-btn" onClick={switchTokens} style={{
             width:'40px', 
             height:'40px', 
             borderRadius:'20px', 
             background:'#fff', 
             border:'4px solid var(--bg)', 
             display:'flex', 
             alignItems:'center', 
             justifyContent:'center', 
             color:'var(--primary)',
             cursor:'pointer'
           }}><Icon name="swap" size={20} /></button>
        </div>

        <div className="swap-card bottom" style={{
          background:'#fff', 
          borderRadius:'20px', 
          padding:'16px', 
          paddingTop:'24px', 
          boxShadow:'var(--shadow-sm)',
          border:'1px solid var(--border)'
        }}>
          <div className="swap-label" style={{color:'var(--text-muted)', fontSize:'13px', marginBottom:'8px'}}>获得</div>
          <div className="swap-input-row" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
             <input type="text" className="swap-input" placeholder="0" value={rxAmt} readOnly style={{
               border:'none', 
               fontSize:'28px', 
               fontWeight:'700', 
               color:'var(--text-main)', 
               width:'60%', 
               outline:'none'
             }} />
             <button className="token-sel" style={{
               background:'#f3f4f6', 
               border:'none', 
               padding:'6px 12px', 
               borderRadius:'20px', 
               display:'flex', 
               alignItems:'center', 
               gap:'6px', 
               fontWeight:'600',
               cursor:'pointer'
             }}>
               <div style={{width:'20px', height:'20px', borderRadius:'10px', background:'#ccc'}}></div>
               {rxToken} <Icon name="down" size={12}/>
             </button>
          </div>
          <div className="swap-bal" style={{fontSize:'12px', color:'var(--text-muted)', marginTop:'8px'}}>余额: 0.00</div>
        </div>
      </div>

      <Card>
        <div className="swap-info" style={{padding:'4px 0'}}>
           <div className="si-row" style={{display:'flex', justifyContent:'space-between', fontSize:'13px', marginBottom:'8px', color:'var(--text-muted)'}}>
             <span>汇率</span>
             <span style={{color:'var(--text-main)'}}>1 {payToken} ≈ {rate} {rxToken}</span>
           </div>
           <div className="si-row" style={{display:'flex', justifyContent:'space-between', fontSize:'13px', marginBottom:'8px', color:'var(--text-muted)'}}>
             <span>网络费</span>
             <span style={{color:'var(--text-main)'}}>$0.01</span>
           </div>
           <div className="si-row" style={{display:'flex', justifyContent:'space-between', fontSize:'13px', color:'var(--text-muted)'}}>
             <span>滑点容差</span>
             <span style={{color:'var(--text-main)'}}>0.5%</span>
           </div>
        </div>
      </Card>

      <div className="row" style={{marginTop:'24px'}}>
        <Button onClick={doSwap} style={{width:'100%', height:'50px', fontSize:'16px'}}>立即兑换</Button>
      </div>
    </div>
  )
}
