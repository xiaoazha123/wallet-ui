
function LotteryPage({ onBack, onToast }) {
  const [jackpot, setJackpot] = useState(2849366)
  const [timeLeft, setTimeLeft] = useState(600)
  const [myTickets, setMyTickets] = useState([])
  const [selectedAmount, setSelectedAmount] = useState(1)
  
  useEffect(() => {
    const t = setInterval(() => {
      setJackpot(j => j + Math.floor(Math.random() * 5))
      setTimeLeft(l => l > 0 ? l - 1 : 600)
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const formatTime = (s) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
  }

  const handleBuy = () => {
    if(onToast) onToast('购票成功！祝您中奖')
    const newTickets = Array(selectedAmount).fill(0).map(() => ({
        id: Date.now().toString().slice(-6) + Math.floor(Math.random()*100),
        nums: [1,2,3,4].map(()=>Math.floor(Math.random()*9))
    }))
    setMyTickets(prev => [...prev, ...newTickets])
  }

  return (
    <div className="content-padded" style={{paddingTop:0, minHeight:'100vh', background:'#FFF8F0', color:'#333'}}>
      <TopNavBar title="ChainLotto 链上夺宝" onBack={onBack} style={{background:'#FFF8F0', color:'#000'}} />
      
      {/* Hero Section - Golden Wealth Style */}
      <div style={{
        background: 'linear-gradient(135deg, #FFD700 0%, #FDB931 30%, #FF8C00 100%)',
        borderRadius: '24px',
        padding: '30px 20px',
        color: '#fff',
        textAlign: 'center',
        marginBottom: '24px',
        boxShadow: '0 10px 30px rgba(255, 140, 0, 0.4)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.4)',
        margin: '20px 20px 10px'
      }}>
        {/* Shine Effects */}
        <div style={{position:'absolute', width:'300px', height:'300px', background:'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)', top:'-100px', left:'-50px', opacity:0.8}}></div>
        <div style={{position:'absolute', width:'200px', height:'200px', background:'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%)', bottom:'-50px', right:'-50px', opacity:0.6}}></div>

        <div style={{
            fontSize:'13px', 
            fontWeight:'800', 
            letterSpacing:'1px', 
            textTransform:'uppercase', 
            marginBottom:'12px', 
            background:'rgba(0,0,0,0.15)', 
            color:'#fff',
            display:'inline-block', 
            padding:'6px 16px', 
            borderRadius:'20px',
            backdropFilter: 'blur(4px)'
        }}>
          ⏱️ 下期开奖: {formatTime(timeLeft)}
        </div>
        
        <div style={{fontSize:'14px', fontWeight:'600', opacity:0.95, marginBottom:'4px', color:'#FFFBE6'}}>当前奖池总额 (USDT)</div>
        <div style={{
            fontSize:'46px', 
            fontWeight:'900', 
            fontFamily:'monospace', 
            textShadow:'0 2px 10px rgba(184, 134, 11, 0.4)',
            marginBottom:'24px',
            color: '#fff',
            letterSpacing: '-1px'
        }}>
          {jackpot.toLocaleString()}
        </div>
        
        <div style={{display:'flex', justifyContent:'center', gap:'12px'}}>
             <div style={{background:'rgba(255,255,255,0.25)', padding:'10px 20px', borderRadius:'16px', border:'1px solid rgba(255,255,255,0.3)', flex:1}}>
                 <div style={{fontSize:'12px', opacity:0.9, color:'#FFFBE6'}}>参与人数</div>
                 <div style={{fontWeight:'800', fontSize:'16px'}}>12,458</div>
             </div>
             <div style={{background:'rgba(255,255,255,0.25)', padding:'10px 20px', borderRadius:'16px', border:'1px solid rgba(255,255,255,0.3)', flex:1}}>
                 <div style={{fontSize:'12px', opacity:0.9, color:'#FFFBE6'}}>累计派奖</div>
                 <div style={{fontWeight:'800', fontSize:'16px'}}>$3.2M</div>
             </div>
        </div>

        {/* Floating Coins Decor */}
        <div style={{position:'absolute', top:'10px', right:'10px', fontSize:'80px', opacity:0.2, transform:'rotate(15deg)'}}>💰</div>
        <div style={{position:'absolute', bottom:'-20px', left:'-20px', fontSize:'60px', opacity:0.2, transform:'rotate(-15deg)'}}>🎰</div>
      </div>

      {/* Action Area */}
      <div style={{background:'#fff', borderRadius:'24px', padding:'24px', margin: '0 20px 10px', boxShadow:'0 4px 20px rgba(0,0,0,0.05)'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
          <div style={{fontSize:'18px', fontWeight:'800', color:'#1f2937'}}>选择注数</div>
          <div style={{fontSize:'14px', color:'#FF8C00', cursor:'pointer', fontWeight:'600'}}>玩法说明</div>
        </div>
        
        <div style={{display:'flex', gap:'12px', marginBottom:'24px'}}>
          {[1, 5, 10].map(num => (
            <div key={num} onClick={()=>setSelectedAmount(num)} style={{
              flex: 1,
              padding: '16px',
              borderRadius: '16px',
              border: selectedAmount === num ? '2px solid #FF8C00' : '2px solid #f3f4f6',
              background: selectedAmount === num ? '#FFF7ED' : '#F9FAFB',
              textAlign: 'center',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s',
              position: 'relative'
            }}>
              {selectedAmount === num && (
                  <div style={{position:'absolute', top:'-8px', right:'-8px', background:'#FF8C00', color:'#fff', borderRadius:'50%', width:'20px', height:'20px', fontSize:'12px', display:'flex', alignItems:'center', justifyContent:'center'}}>✓</div>
              )}
              <div style={{fontSize:'22px', marginBottom:'4px'}}>{num} <span style={{fontSize:'14px'}}>注</span></div>
              <div style={{fontSize:'13px', color: selectedAmount === num ? '#EA580C' : '#6B7280', fontWeight:'700'}}>{num * 2} USDT</div>
            </div>
          ))}
        </div>

        <button onClick={handleBuy} style={{
          width: '100%',
          padding: '18px',
          borderRadius: '16px',
          background: 'linear-gradient(to right, #FF8C00, #F59E0B)',
          color: '#fff',
          fontSize: '18px',
          fontWeight: '800',
          border: 'none',
          boxShadow: '0 8px 20px rgba(255, 140, 0, 0.3)',
          cursor: 'pointer',
          transform: 'translateY(0)',
          transition: 'transform 0.1s'
        }}>
          立即投注
        </button>
      </div>

      {/* My Tickets */}
      {myTickets.length > 0 && (
        <div style={{background:'#fff', borderRadius:'24px', padding:'24px', margin: '0 20px 10px', boxShadow:'0 4px 20px rgba(0,0,0,0.05)'}}>
          <div style={{fontSize:'18px', fontWeight:'800', marginBottom:'16px', color:'#1f2937'}}>我的彩票 ({myTickets.length})</div>
          <div style={{display:'flex', flexDirection:'column', gap:'12px', maxHeight:'200px', overflowY:'auto'}}>
            {myTickets.map((t, i) => (
              <div key={i} style={{
                background: '#FFFBEB',
                border: '1px solid #FEF3C7',
                borderRadius: '16px',
                padding: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{fontFamily:'monospace', fontSize:'18px', fontWeight:'700', color:'#D97706', letterSpacing:'2px'}}>
                  {t.nums.join(' ')}
                </div>
                <div style={{fontSize:'12px', color:'#92400E', background:'rgba(245, 158, 11, 0.1)', padding:'4px 8px', borderRadius:'8px'}}>#{t.id}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* History */}
      <div style={{background:'#fff', borderRadius:'24px', padding:'24px', boxShadow:'0 4px 20px rgba(0,0,0,0.05)', marginBottom:'30px', margin: '0 20px 30px'}}>
        <div style={{fontSize:'18px', fontWeight:'800', marginBottom:'16px', color:'#1f2937'}}>近期大奖</div>
        <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          {[
            { user: '0x12...8A92', prize: '50,000 USDT', time: '10分钟前' },
            { user: '0x34...1B2C', prize: '12,500 USDT', time: '20分钟前' },
            { user: '0x56...9F8E', prize: '2,000 USDT', time: '30分钟前' },
          ].map((w, i) => (
            <div key={i} style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingBottom: i<2?'16px':'0', borderBottom: i<2?'1px solid #f3f4f6':'none'}}>
              <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                <div style={{width:'40px', height:'40px', borderRadius:'50%', background:'#FFF7ED', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', color:'#EA580C'}}>🏆</div>
                <div>
                  <div style={{fontSize:'15px', fontWeight:'700', color:'#1f2937'}}>{w.user}</div>
                  <div style={{fontSize:'12px', color:'#6B7280'}}>{w.time}</div>
                </div>
              </div>
              <div style={{color:'#059669', fontWeight:'800', fontFamily:'monospace', fontSize:'16px'}}>{w.prize}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}