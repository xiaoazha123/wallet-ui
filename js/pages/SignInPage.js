function SignInPage({ onSign, onBack }) {
  const [signed, setSigned] = useState(false)
  const week = ['一','二','三','四','五','六','日']
  // Mock calendar for current month (30 days)
  // First 3 days checked. Day 4 (index 3) is today.
  const days = Array.from({length:30}, (_,i)=>({
    day: i+1,
    status: i<3 ? 'checked' : (i===3 ? (signed?'checked':'today') : 'future'),
    points: (i+1)%7===0 ? 50 : 10
  }))
  
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>每日签到</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div className="signin-header" style={{
        background:'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', 
        padding:'24px', 
        borderRadius:'24px', 
        color:'#fff', 
        marginBottom:'24px',
        boxShadow:'0 8px 20px rgba(99, 102, 241, 0.25)',
        margin:"0 20px 20px"
      }}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px'}}>
           <div>
             <div style={{fontSize:'14px', opacity:0.8, marginBottom:'4px'}}>我的积分</div>
             <div style={{fontSize:'32px', fontWeight:'800'}}>1,260</div>
           </div>
           <div style={{textAlign:'right'}}>
              <div style={{fontSize:'14px', opacity:0.8, marginBottom:'4px'}}>连续签到</div>
              <div style={{fontSize:'24px', fontWeight:'700'}}>{signed?4:3} <span style={{fontSize:'14px', fontWeight:'400'}}>天</span></div>
           </div>
        </div>
        
        <div className="streak-bar" style={{background:'rgba(255,255,255,0.2)', borderRadius:'12px', padding:'12px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
           <div style={{fontSize:'13px'}}>再签到 {signed?3:4} 天可得大礼包</div>
           <Icon name="info" size={16} />
        </div>
      </div>

      <Card>
         <div className="calendar-head" style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px'}}>
           <div className="month-title" style={{fontSize:'16px', fontWeight:'700'}}>2025年 12月</div>
         </div>
         <div className="week-row" style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)', textAlign:'center', marginBottom:'12px', fontSize:'12px', color:'var(--text-muted)'}}>
           {week.map(d=><div key={d} className="w-day">{d}</div>)}
         </div>
         <div className="calendar-grid" style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:'8px', textAlign:'center'}}>
           {days.map(d=>(
             <div key={d.day} className={`c-day ${d.status}`} style={{
               aspectRatio:'1/1', 
               display:'flex', 
               flexDirection:'column', 
               alignItems:'center', 
               justifyContent:'center', 
               borderRadius:'10px', 
               background: d.status==='checked' ? '#dcfce7' : (d.status==='today' ? '#eff6ff' : '#f9fafb'),
               border: d.status==='today' ? '1px solid var(--primary)' : '1px solid transparent',
               position:'relative'
             }}>
               <div className="d-num" style={{fontSize:'12px', fontWeight:'600', color: d.status==='checked'?'#16a34a':'var(--text-main)'}}>{d.day}</div>
               {d.status==='checked' && <div className="d-badge" style={{fontSize:'10px', color:'#16a34a'}}>✓</div>}
               {d.status!=='checked' && <div className="d-pts" style={{fontSize:'9px', color:'#f59e0b'}}>+{d.points}</div>}
             </div>
           ))}
         </div>
         <div className="row" style={{marginTop:'24px'}}>
           <Button onClick={()=>{ setSigned(true); onSign() }} disabled={signed} style={{
             width:'100%', 
             height:'50px', 
             borderRadius:'25px', 
             background: signed ? '#e5e7eb' : 'var(--primary)',
             color: signed ? '#9ca3af' : '#fff',
             fontSize:'16px',
             fontWeight:'600',
             border:'none'
           }}>
             {signed ? '今日已签到' : '立即签到'}
           </Button>
         </div>
      </Card>

      <Card>
        <div className="list-head" style={{marginBottom:'16px'}}>做任务赚更多</div>
        <div className="task-simple" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
           <div className="ts-info">
             <div className="ts-title" style={{fontSize:'14px', fontWeight:'600', marginBottom:'4px'}}>浏览行情 30秒</div>
             <div className="ts-reward" style={{fontSize:'12px', color:'#eab308'}}>+20 积分</div>
           </div>
           <button style={{padding:'6px 16px', borderRadius:'16px', background:'#eff6ff', color:'var(--primary)', border:'none', fontSize:'12px', fontWeight:'600'}}>去浏览</button>
        </div>
        <div className="task-simple" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0'}}>
           <div className="ts-info">
             <div className="ts-title" style={{fontSize:'14px', fontWeight:'600', marginBottom:'4px'}}>邀请一位新用户</div>
             <div className="ts-reward" style={{fontSize:'12px', color:'#eab308'}}>+100 积分</div>
           </div>
           <button style={{padding:'6px 16px', borderRadius:'16px', background:'#eff6ff', color:'var(--primary)', border:'none', fontSize:'12px', fontWeight:'600'}}>去邀请</button>
        </div>
      </Card>
    </div>
  )
}
