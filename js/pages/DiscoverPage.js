function DiscoverPage({ onGame, onAcademy, onGameDetail, onCourseDetail, onToast, onLottery, onPrediction }) {
  const [tab, setTab] = useState('recommend')
  const [jackpot, setJackpot] = useState(2849203)
  const [lotteryTime, setLotteryTime] = useState(45872) // seconds
  const [btcPrice, setBtcPrice] = useState(42560.50)
  const [priceTrend, setPriceTrend] = useState(1) // 1 up, -1 down

  useEffect(() => {
    const timer = setInterval(() => {
      setLotteryTime(t => t > 0 ? t - 1 : 86400)
      setBtcPrice(p => {
        const change = (Math.random() - 0.5) * 20
        setPriceTrend(change >= 0 ? 1 : -1)
        return p + change
      })
      setJackpot(j => j + Math.floor(Math.random() * 3))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (s) => {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = s % 60
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
  }

  const banners = [
    { id:1, title:'星球争霸 S1', sub:'赢取百万奖池', color:'#4f46e5' },
    { id:2, title:'DeFi 训练营', sub:'小白变大神', color:'#ea580c' },
  ]
  
  const newCourses = [
    { id:1, title:'区块链入门', level:'初级', duration:'15m', author:'Planet 学院' },
    { id:2, title:'DeFi 进阶', level:'中级', duration:'25m', author:'金融社' },
    { id:3, title:'NFT 投资指南', level:'高级', duration:'45m', author:'NFT Lab' },
    { id:4, title:'智能合约开发', level:'专家', duration:'60m', author:'Dev DAO' },
  ]

  const dapps = [
    { id:1, name:'Uniswap', icon:'🦄', color:'#ff007a' },
    { id:2, name:'OpenSea', icon:'🌊', color:'#2081e2' },
    { id:3, name:'Aave', icon:'👻', color:'#b6509e' },
    { id:4, name:'Compound', icon:'🟢', color:'#00d395' },
    { id:5, name:'1inch', icon:'🐴', color:'#13161f' },
    { id:6, name:'Curve', icon:'🌈', color:'#ff0000' },
    { id:7, name:'dYdX', icon:'🟣', color:'#6966ff' },
    { id:8, name:'Maker', icon:'MK', color:'#1aab9b' },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'0', minHeight:'100vh', background:'#f9fafb'}}>
      <TopNavBar title="发现" />
      
      {/* Tab Navigation */}
      <div style={{padding:'0 20px', marginBottom:'16px'}}>
        <div style={{background:'#f3f4f6', padding:'4px', borderRadius:'12px', display:'flex', width: '100%'}}>
          {['recommend', 'game', 'academy'].map(t => (
            <button key={t} 
              onClick={()=>setTab(t)}
              style={{
                flex: 1,
                padding:'8px 0', 
                borderRadius:'10px', 
                border:'none', 
                background: tab===t ? '#fff' : 'transparent', 
                color: tab===t ? 'var(--text-main)' : 'var(--text-muted)', 
                fontWeight:'600', 
                fontSize:'14px',
                boxShadow: tab===t ? 'var(--shadow-sm)' : 'none',
                cursor:'pointer',
                transition:'all 0.2s',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {t === 'recommend' ? '推荐' : (t === 'game' ? '娱乐' : '学院')}
            </button>
          ))}
        </div>
      </div>

      {/* Recommend Tab */}
      {tab === 'recommend' && (
        <div style={{paddingBottom:'20px'}}>
          {/* Banners */}
          <div className="banner-scroll no-scrollbar" style={{display:'flex', gap:'12px', overflowX:'auto', marginBottom:'24px', scrollbarWidth:'none', margin:'0 20px 20px'}}>
             {banners.map(b=>(
               <div key={b.id} onClick={()=>{ if(onToast) onToast('活动即将开始'); }} style={{
                 minWidth:'280px', 
                 height:'140px', 
                 cursor: 'pointer',
                 borderRadius:'20px', 
                 background:b.color, 
                 padding:'20px',
                 color:'#fff',
                 display:'flex',
                 flexDirection:'column',
                 justifyContent:'center',
                 boxShadow:'var(--shadow-sm)'
               }}>
                 <div style={{fontSize:'20px', fontWeight:'800', marginBottom:'8px'}}>{b.title}</div>
                 <div style={{fontSize:'14px', opacity:0.9}}>{b.sub}</div>
                 <div style={{marginTop:'16px', display:'inline-block', background:'rgba(255,255,255,0.2)', padding:'6px 12px', borderRadius:'20px', fontSize:'12px', width:'fit-content', fontWeight:'600'}}>立即参与</div>
               </div>
             ))}
          </div>

          {/* Recommended DApps */}
          <div style={{padding:'0 20px'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px'}}>
              <div style={{fontSize:'18px', fontWeight:'800', color:'var(--text-main)'}}>推荐 DApp</div>
              <div style={{fontSize:'13px', color:'var(--primary)', cursor:'pointer'}}>查看更多</div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'16px'}}>
              {dapps.map(d => (
                <div key={d.id} onClick={()=>onToast(`打开 ${d.name}`)} style={{display:'flex', flexDirection:'column', alignItems:'center', cursor:'pointer'}}>
                  <div style={{
                    width:'56px', height:'56px', borderRadius:'16px', background:'#fff', 
                    display:'flex', alignItems:'center', justifyContent:'center', 
                    fontSize:'24px', marginBottom:'8px', boxShadow:'var(--shadow-sm)',
                    color: d.color, fontWeight:'bold'
                  }}>
                    {d.icon}
                  </div>
                  <div style={{fontSize:'12px', color:'var(--text-muted)', fontWeight:'500'}}>{d.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Game Tab */}
      {tab === 'game' && (
        <div style={{padding:'0 20px', marginBottom:'24px'}}>
          {/* Lottery Card */}
          <div onClick={onLottery} style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            borderRadius: '24px',
            padding: '24px',
            marginBottom: '20px',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(255, 165, 0, 0.25)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}>
            <div style={{position:'relative', zIndex:1}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'16px'}}>
                <div>
                  <div style={{fontSize:'20px', fontWeight:'800', marginBottom:'4px', marginLeft:'20px'}}>哈希夺宝</div>
                  <div style={{fontSize:'13px', opacity:0.9, marginLeft:'20px'}}>每天开奖一次</div>
                </div>
                <div style={{background:'rgba(255,255,255,0.25)', padding:'4px 12px', borderRadius:'12px', fontSize:'12px', fontWeight:'700'}}>
                  进行中
                </div>
              </div>
              
              <div style={{marginBottom:'20px'}}>
                <div style={{fontSize:'12px', opacity:0.8, marginBottom:'4px'}}>本期奖池 (USDT)</div>
                <div style={{fontSize:'32px', fontWeight:'800', fontFamily:'monospace', letterSpacing:'-1px'}}>{jackpot.toLocaleString()}</div>
              </div>
              
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                 <div style={{display:'flex', alignItems:'center', gap:'6px', background:'rgba(0,0,0,0.1)', padding:'6px 12px', borderRadius:'12px'}}>
                   <Icon name="time" size={16} />
                   <span style={{fontSize:'14px', fontWeight:'700', fontFamily:'monospace'}}>{formatTime(lotteryTime)}</span>
                 </div>
                 <div style={{
                   background:'#fff', 
                   color:'#FF8C00', 
                   padding:'8px 20px', 
                   borderRadius:'12px', 
                   fontWeight:'700', 
                   fontSize:'14px',
                   boxShadow:'0 4px 12px rgba(0,0,0,0.1)'
                 }}>立即参与 &gt;</div>
              </div>
            </div>
            {/* Decor */}
            <div style={{position:'absolute', top:'-20px', right:'-30px', fontSize:'140px', opacity:0.15, transform:'rotate(15deg)'}}>🎰</div>
          </div>

          {/* Prediction Card */}
          <div onClick={onPrediction} style={{
            background:'#fff', 
            borderRadius:'24px', 
            padding:'24px', 
            border:'1px solid var(--border-light)',
            boxShadow:'var(--shadow-sm)',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}>
             <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
               <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                 <div style={{background:'#F7931A', width:'40px', height:'40px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:'bold', fontSize:'20px', boxShadow:'0 4px 10px rgba(247, 147, 26, 0.3)'}}>₿</div>
                 <div>
                   <div style={{fontWeight:'800', fontSize:'16px', color:'var(--text-main)', marginLeft:'20px'}}>行情预测</div>
                   <div style={{fontSize:'12px', color:'var(--text-muted)', marginLeft:'20px'}}>BTC/USDT</div>
                 </div>
               </div>
               <div style={{textAlign:'right'}}>
                 <div style={{fontSize:'20px', fontWeight:'800', color: priceTrend > 0 ? '#10b981' : '#ef4444'}}>
                   {btcPrice.toFixed(2)}
                 </div>
                 <div style={{fontSize:'12px', color: priceTrend > 0 ? '#10b981' : '#ef4444', fontWeight:'600'}}>
                   {priceTrend > 0 ? '+0.45%' : '-0.23%'}
                 </div>
               </div>
             </div>

             {/* Mini Chart Visualization */}
             <div style={{height:'80px', marginBottom:'20px', display:'flex', alignItems:'flex-end', gap:'6px'}}>
               {[40, 60, 45, 70, 55, 80, 65, 90, 75, 50, 60, 80, 95, 85, 100].map((h, i) => (
                 <div key={i} style={{
                   flex:1, 
                   background: i > 10 ? (priceTrend > 0 ? '#10b981' : '#ef4444') : '#e5e7eb', 
                   height: `${h}%`, 
                   borderRadius:'4px',
                   opacity: i > 10 ? 1 : 0.5
                 }}></div>
               ))}
             </div>

             <div style={{display:'flex', gap:'12px'}}>
               <div style={{
                 flex:1, 
                 background:'#ecfdf5', 
                 color:'#10b981', 
                 padding:'12px', 
                 borderRadius:'12px', 
                 fontWeight:'700', 
                 display:'flex', 
                 alignItems:'center', 
                 justifyContent:'center', 
                 fontSize:'14px'
               }}>
                 看涨 52%
               </div>
               <div style={{
                 flex:1, 
                 background:'#fef2f2', 
                 color:'#ef4444', 
                 padding:'12px', 
                 borderRadius:'12px', 
                 fontWeight:'700', 
                 display:'flex', 
                 alignItems:'center', 
                 justifyContent:'center', 
                 fontSize:'14px'
               }}>
                 看跌 48%
               </div>
             </div>
          </div>
        </div>
      )}

      {/* Academy Tab */}
      {tab === 'academy' && (
        <div style={{paddingBottom:'20px'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 20px 16px 20px'}}>
             <div style={{fontSize:'18px', fontWeight:'800', color:'var(--text-main)'}}>推荐课程</div>
             <div onClick={onAcademy} style={{fontSize:'13px', color:'var(--primary)', cursor:'pointer'}}>查看更多</div>
          </div>
          <Card style={{margin:'0 20px', boxShadow:'none', background:'transparent', border:'none', padding:0}}>
            <div className="v-list" style={{display:'flex', flexDirection:'column', gap:'12px'}}>
              {newCourses.map(c=>(
                <div key={c.id} className="v-item" onClick={()=>onCourseDetail(c)} style={{padding:'16px', borderRadius:'16px', background:'#fff', display:'flex', justifyContent:'space-between', alignItems:'center', boxShadow:'var(--shadow-sm)'}}>
                   <div className="v-info">
                     <div className="v-title" style={{fontSize:'15px', fontWeight:'700', marginBottom:'6px', color:'var(--text-main)'}}>{c.title}</div>
                     <div className="v-meta" style={{fontSize:'12px', color:'var(--text-muted)'}}>{c.level} · {c.duration} · {c.author}</div>
                   </div>
                   <div style={{width:'32px', height:'32px', borderRadius:'50%', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <Icon name="right" size={16} style={{color:'var(--text-muted)'}} />
                   </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
