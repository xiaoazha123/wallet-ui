function PointsPage({ onBack }) {
  const redeemList = [
    { id:1, name:'Planet 限量马克杯', cost: 500, img:'☕' },
    { id:2, name:'10 USDT 抵扣券', cost: 1000, img:'🎟️' },
    { id:3, name:'VIP 身份 (30天)', cost: 2000, img:'👑' },
    { id:4, name:'随机代币盲盒', cost: 100, img:'🎁' },
    { id:5, name:'硬件钱包抵扣券', cost: 5000, img:'🔐' },
    { id:6, name:'纪念 NFT', cost: 3000, img:'🖼️' },
  ]
  const history = [
    { desc: '每日签到', time: '12-03 09:00', amt: '+10', icon:'📅' },
    { desc: '邀请好友 User_9921', time: '12-02 14:30', amt: '+100', icon:'👥' },
    { desc: '兑换代币盲盒', time: '12-01 10:00', amt: '-100', icon:'🎁' },
    { desc: '每日签到', time: '12-01 08:30', amt: '+10', icon:'📅' },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>我的积分</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div className="points-hero" style={{
        background:'#fff', 
        borderRadius:'24px', 
        padding:'32px 24px', 
        color:'var(--text-main)', 
        textAlign:'center',
        marginBottom:'24px',
        boxShadow:'var(--shadow-md)',
        margin:'0 20px 10px',
        border: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden'
      }}>
         <div style={{fontSize:'13px', opacity:0.8, marginBottom:'8px', color:'var(--text-muted)', letterSpacing:'1px', textTransform:'uppercase'}}>当前积分余额</div>
         <h1 style={{fontSize:'56px', fontWeight:'800', margin:'0 0 24px 0', letterSpacing:'-1px', color:'var(--primary)'}}>1,250</h1>
         
         <div style={{display:'flex', justifyContent:'center', gap:'16px'}}>
           <button className="small" style={{
             flex: 1,
             background:'var(--primary)', 
             border:'none', 
             padding:'12px 0', 
             borderRadius:'30px', 
             color:'#fff', 
             fontWeight:'700', 
             fontSize:'15px',
             boxShadow:'0 4px 12px rgba(99, 102, 241, 0.3)'
           }} onClick={()=>alert('去签到')}>签到</button>
           
           <button className="small" style={{
             flex: 1,
             background:'#f3f4f6', 
             border:'none', 
             padding:'12px 0', 
             borderRadius:'30px', 
             color:'var(--text-main)', 
             fontWeight:'600', 
             fontSize:'15px'
           }} onClick={()=>alert('积分规则')}>规则</button>
         </div>
      </div>

      <Card>
        <div className="list-head" style={{marginBottom:'16px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{fontSize:'18px', fontWeight:'700'}}>积分兑换</div>
          <div style={{fontSize:'13px', color:'var(--primary)'}}>查看全部</div>
        </div>
        <div className="redeem-grid" style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'12px'}}>
          {redeemList.map(r=>(
            <div key={r.id} className="redeem-item" style={{
              background:'#fff', 
              padding:'16px', 
              borderRadius:'16px', 
              textAlign:'center', 
              border:'1px solid var(--border)',
              boxShadow:'var(--shadow-sm)'
            }}>
               <div className="r-img" style={{fontSize:'40px', marginBottom:'12px'}}>{r.img}</div>
               <div className="r-name" style={{fontSize:'14px', fontWeight:'600', marginBottom:'4px', color:'var(--text-main)', height:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>{r.name}</div>
               <div className="r-cost" style={{fontSize:'13px', color:'#f59e0b', fontWeight:'700', marginBottom:'12px'}}>{r.cost} 积分</div>
               <button className="small" onClick={()=>alert(`兑换 ${r.name} 需要 ${r.cost} 积分`)} style={{width:'100%', padding:'8px', background:'#f3f4f6', color:'var(--text-main)', border:'none', borderRadius:'12px', fontSize:'12px', fontWeight:'600'}}>兑换</button>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="list-head" style={{marginBottom:'16px'}}>积分明细</div>
        <div className="point-history-list" style={{display:'flex', flexDirection:'column', gap:'12px'}}>
           {history.map((h,i)=>(
             <div key={i} className="ph-item" style={{display:'flex', alignItems:'center', padding:'12px', borderRadius:'12px', background:'#f9fafb'}}>
               <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', marginRight:'12px', boxShadow:'var(--shadow-sm)'}}>{h.icon}</div>
               <div style={{flex:1}}>
                 <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'2px'}}>{h.desc}</div>
                 <div style={{fontSize:'12px', color:'var(--text-muted)'}}>{h.time}</div>
               </div>
               <div style={{fontWeight:'700', fontSize:'15px', color:h.amt.startsWith('+')?'#16a34a':'#dc2626'}}>{h.amt}</div>
             </div>
           ))}
        </div>
      </Card>
    </div>
  )
}
