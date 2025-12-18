
function PredictionPage({ onBack, onToast }) {
  const [price, setPrice] = useState(42566.62)
  const [history, setHistory] = useState(
    Array(20).fill(0).map((_,i) => 42500 + Math.random() * 200 + i*10)
  )
  
  useEffect(() => {
    const t = setInterval(() => {
      setPrice(p => {
        const change = (Math.random() - 0.5) * 50
        const newPrice = p + change
        setHistory(h => [...h.slice(1), newPrice])
        return newPrice
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const maxPrice = Math.max(...history)
  const minPrice = Math.min(...history)
  const range = maxPrice - minPrice

  return (
    <div className="content-padded" style={{paddingTop:0, minHeight:'100vh', background:'#f5f5f5'}}>
      <TopNavBar title="行情预测" onBack={onBack} />

      {/* Price Header */}
      <div style={{background:'#fff', padding:'20px', borderRadius:'0 0 24px 24px', boxShadow:'var(--shadow-sm)', marginBottom:'16px'}}>
        <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'8px'}}>
          <div style={{background:'#F7931A', width:'24px', height:'24px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:'bold', fontSize:'14px'}}>₿</div>
          <span style={{fontSize:'16px', fontWeight:'700'}}>BTC/USDT</span>
        </div>
        <div style={{fontSize:'32px', fontWeight:'800', color: price >= history[history.length-2] ? '#10b981' : '#ef4444'}}>
          {price.toFixed(2)}
        </div>
      </div>

      {/* Chart Area */}
      <Card>
        <div style={{height:'200px', display:'flex', alignItems:'flex-end', gap:'4px', marginBottom:'20px', padding:'10px 0', borderBottom:'1px solid #f3f4f6'}}>
          {history.map((h, i) => {
            const heightPercent = ((h - minPrice) / range) * 80 + 10
            const isUp = i > 0 && h >= history[i-1]
            return (
              <div key={i} style={{
                flex: 1,
                background: isUp ? '#10b981' : '#ef4444',
                height: `${heightPercent}%`,
                borderRadius: '2px 2px 0 0',
                transition: 'height 0.3s ease'
              }}></div>
            )
          })}
        </div>
        
        <div style={{display:'flex', gap:'16px'}}>
          <button onClick={()=>onToast('看涨下注成功')} style={{
            flex: 1,
            padding: '16px',
            borderRadius: '16px',
            background: '#10b981',
            color: '#fff',
            border: 'none',
            fontSize: '18px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
          }}>
            <Icon name="up" size={24} /> 看涨
          </button>
          <button onClick={()=>onToast('看跌下注成功')} style={{
            flex: 1,
            padding: '16px',
            borderRadius: '16px',
            background: '#ef4444',
            color: '#fff',
            border: 'none',
            fontSize: '18px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)'
          }}>
            <div style={{transform:'rotate(180deg)'}}><Icon name="up" size={24} /></div> 看跌
          </button>
        </div>
      </Card>

      {/* Rounds History */}
      <Card>
        <div style={{fontSize:'16px', fontWeight:'700', marginBottom:'16px'}}>历史战绩</div>
        <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
          {[
            { id: 1024, result: 'Win', profit: '+50 USDT', type: 'up' },
            { id: 1023, result: 'Loss', profit: '-10 USDT', type: 'down' },
            { id: 1022, result: 'Win', profit: '+20 USDT', type: 'up' },
          ].map((r, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px',
              background: '#f9fafb',
              borderRadius: '12px'
            }}>
              <div>
                <div style={{fontSize:'14px', fontWeight:'600'}}>Round #{r.id}</div>
                <div style={{fontSize:'12px', color: r.type==='up'?'#10b981':'#ef4444', fontWeight:'600'}}>
                  {r.type==='up' ? '看涨' : '看跌'}
                </div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:'14px', fontWeight:'700', color: r.result==='Win'?'#10b981':'var(--text-muted)'}}>
                  {r.result}
                </div>
                <div style={{fontSize:'12px', opacity:0.8}}>{r.profit}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
