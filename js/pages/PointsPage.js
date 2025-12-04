function PointsPage() {
  const redeemList = [
    { id:1, name:'Planet 限量马克杯', cost: 500, img:'☕' },
    { id:2, name:'10 USDT 抵扣券', cost: 1000, img:'🎟️' },
    { id:3, name:'VIP 身份 (30天)', cost: 2000, img:'👑' },
    { id:4, name:'随机代币盲盒', cost: 100, img:'🎁' },
    { id:5, name:'硬件钱包抵扣券', cost: 5000, img:'🔐' },
    { id:6, name:'纪念 NFT', cost: 3000, img:'🖼️' },
  ]
  const history = [
    { desc: '每日签到', time: '12-03 09:00', amt: '+10' },
    { desc: '邀请好友 User_9921', time: '12-02 14:30', amt: '+100' },
    { desc: '兑换代币盲盒', time: '12-01 10:00', amt: '-100' },
    { desc: '每日签到', time: '12-01 08:30', amt: '+10' },
  ]

  return (
    <div className="content">
      <Card>
        <div className="points-hero" style={{textAlign:'center', padding:'20px 0'}}>
           <div style={{color:'var(--muted)', fontSize:'14px'}}>当前积分</div>
           <h1 style={{fontSize:'36px', margin:'10px 0', color:'var(--primary)'}}>1,250</h1>
           <Button className="small" variant="secondary" onClick={()=>alert('去签到')}>去签到赚积分</Button>
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

      <Card>
        <div className="list-head">积分明细</div>
        <div className="point-history-list">
           {history.map((h,i)=>(
             <div key={i} className="ph-item" style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
               <div>
                 <div style={{fontSize:'14px', fontWeight:'600'}}>{h.desc}</div>
                 <div style={{fontSize:'12px', color:'var(--muted)'}}>{h.time}</div>
               </div>
               <div style={{fontWeight:'700', color:h.amt.startsWith('+')?'#16a34a':'#dc2626'}}>{h.amt}</div>
             </div>
           ))}
        </div>
      </Card>
    </div>
  )
}
