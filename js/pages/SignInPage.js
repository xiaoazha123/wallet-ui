function SignInPage({ onSign }) {
  const [signed, setSigned] = useState(false)
  const week = ['一','二','三','四','五','六','日']
  // Mock calendar for current month (30 days)
  // First 3 days checked. Day 4 (index 3) is today.
  const days = Array.from({length:30}, (_,i)=>({
    day: i+1,
    status: i<3 ? 'checked' : (i===3 ? (signed?'checked':'today') : 'future'),
    points: (i+1)%7===0 ? 50 : 10
  }))
  
  const redeemList = [
    { id:1, name:'Planet 限量马克杯', cost: 500, img:'☕' },
    { id:2, name:'10 USDT 抵扣券', cost: 1000, img:'🎟️' },
    { id:3, name:'VIP 身份 (30天)', cost: 2000, img:'👑' },
  ]

  return (
    <div className="content">
      <div className="signin-header">
        <div className="s-stats">
          <div className="s-label">我的积分</div>
          <div className="s-val">1,260</div>
        </div>
        <div className="s-stats">
           <div className="s-label">连续签到</div>
           <div className="s-val">{signed?4:3} <span className="s-unit">天</span></div>
        </div>
      </div>

      <Card>
         <div className="calendar-head">
           <div className="month-title">2025年 12月</div>
           <div className="streak-tip">再签到 {signed?3:4} 天可得大礼包</div>
         </div>
         <div className="week-row">
           {week.map(d=><div key={d} className="w-day">{d}</div>)}
         </div>
         <div className="calendar-grid">
           {days.map(d=>(
             <div key={d.day} className={`c-day ${d.status}`}>
               <div className="d-num">{d.day}</div>
               {d.status==='checked' && <div className="d-badge"><Icon name="yes" size={12} /></div>}
               {d.status!=='checked' && <div className="d-pts">+{d.points}</div>}
             </div>
           ))}
         </div>
         <div className="row" style={{marginTop:'20px'}}>
           <Button onClick={()=>{ setSigned(true); onSign() }} disabled={signed} variant={signed?'secondary':'primary'}>
             {signed ? '今日已签到' : '立即签到'}
           </Button>
         </div>
      </Card>

      <Card>
        <div className="list-head">做任务赚更多</div>
        <div className="task-simple">
           <div className="ts-info">
             <div className="ts-title">浏览行情 30秒</div>
             <div className="ts-reward">+20 积分</div>
           </div>
           <Button className="small" variant="secondary">去浏览</Button>
        </div>
        <div className="task-simple">
           <div className="ts-info">
             <div className="ts-title">邀请一位新用户</div>
             <div className="ts-reward">+100 积分</div>
           </div>
           <Button className="small" variant="secondary">去邀请</Button>
        </div>
      </Card>

      <Card>
        <div className="list-head">积分兑换</div>
        <div className="redeem-grid">
          {redeemList.map(r=>(
            <div key={r.id} className="redeem-item">
               <div className="r-img">{r.img}</div>
               <div className="r-name">{r.name}</div>
               <div className="r-cost">{r.cost} 积分</div>
               <Button className="small" onClick={()=>alert(`兑换 ${r.name} 需要 ${r.cost} 积分`)}>兑换</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
