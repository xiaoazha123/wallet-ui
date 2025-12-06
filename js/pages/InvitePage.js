function InvitePage({ onBack }) {
  const [tab, setTab] = useState('center')
  const [copied, setCopied] = useState(false)
  const inviteCode = '888888'
  const inviteLink = 'https://planetwallet.io/i/888888'

  function copy(text) {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(()=>setCopied(false), 2000)
  }

  const users = [
    { name: 'User_9921', addr: '0x12...3456', status: '已质押' },
    { name: 'User_3301', addr: '0xAB...CD99', status: '未质押' },
    { name: 'User_8812', addr: '0x55...6677', status: '已质押' },
  ]

  const rebates = [
    { date: '12-01 14:30', user: 'User_9921', level: '一级', amt: '+ 50.00 PNT' },
    { date: '12-01 09:15', user: 'User_8812', level: '二级', amt: '+ 12.50 PNT' },
    { date: '11-30 22:10', user: 'User_3301', level: '一级', amt: '+ 50.00 PNT' },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>邀请好友</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div className="top-tabs" style={{padding:'0 20px', marginBottom:'16px', display:'flex', justifyContent:'center'}}>
         <div style={{background:'#f3f4f6', padding:'4px', borderRadius:'12px', display:'inline-flex'}}>
           <button className={`tab-btn ${tab==='center'?'active':''}`} onClick={()=>setTab('center')} style={{
             padding:'8px 24px', borderRadius:'10px', border:'none', background: tab==='center'?'#fff':'transparent', color: tab==='center'?'var(--text-main)':'var(--text-muted)', fontWeight:'600', boxShadow: tab==='center'?'var(--shadow-sm)':'none'
           }}>邀请中心</button>
           <button className={`tab-btn ${tab==='rebate'?'active':''}`} onClick={()=>setTab('rebate')} style={{
             padding:'8px 24px', borderRadius:'10px', border:'none', background: tab==='rebate'?'#fff':'transparent', color: tab==='rebate'?'var(--text-main)':'var(--text-muted)', fontWeight:'600', boxShadow: tab==='rebate'?'var(--shadow-sm)':'none'
           }}>返佣收益</button>
         </div>
      </div>

      {tab==='center' && (
        <>
          <div className="invite-card" style={{
            background:'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)', 
            borderRadius:'24px', 
            padding:'32px 24px', 
            color:'#fff', 
            textAlign:'center', 
            marginBottom:'24px',
            boxShadow:'0 10px 25px rgba(168, 85, 247, 0.3)',
            margin:'0 20px 20px'
          }}>
             <div className="qr-box" style={{background:'#fff', padding:'16px', borderRadius:'16px', display:'inline-block', marginBottom:'20px'}}>
               <Icon name="qr" size={140} style={{color:'#000'}} />
             </div>
             <div className="invite-info-row" style={{marginBottom:'20px'}}>
               <div className="i-label" style={{fontSize:'14px', opacity:0.8, marginBottom:'4px'}}>我的邀请码</div>
               <div className="i-code" onClick={()=>copy(inviteCode)} style={{fontSize:'32px', fontWeight:'800', letterSpacing:'2px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px'}}>
                 {inviteCode} 
                 <Icon name="copy" size={24} style={{opacity:0.8}}/>
               </div>
             </div>
             <button onClick={()=>alert('调用系统分享')} style={{width:'100%', background:'#fff', color:'var(--primary)', border:'none', padding:'14px', borderRadius:'24px', fontSize:'16px', fontWeight:'700'}}>一键邀请好友</button>
          </div>

          <div className="stat-grid-3" style={{display:'flex', gap:'12px', padding:'0 20px', marginBottom:'24px'}}>
             <div className="sg-item" style={{flex:1, background:'#fff', padding:'16px', borderRadius:'16px', textAlign:'center', border:'1px solid var(--border)'}}>
               <div className="sg-val" style={{fontSize:'20px', fontWeight:'700', color:'var(--text-main)'}}>12</div>
               <div className="sg-label" style={{fontSize:'12px', color:'var(--text-muted)'}}>一级人数</div>
             </div>
             <div className="sg-item" style={{flex:1, background:'#fff', padding:'16px', borderRadius:'16px', textAlign:'center', border:'1px solid var(--border)'}}>
               <div className="sg-val" style={{fontSize:'20px', fontWeight:'700', color:'var(--text-main)'}}>35</div>
               <div className="sg-label" style={{fontSize:'12px', color:'var(--text-muted)'}}>二级人数</div>
             </div>
             <div className="sg-item" style={{flex:1, background:'#fff', padding:'16px', borderRadius:'16px', textAlign:'center', border:'1px solid var(--border)'}}>
               <div className="sg-val pos" style={{fontSize:'20px', fontWeight:'700', color:'#16a34a'}}>+2</div>
               <div className="sg-label" style={{fontSize:'12px', color:'var(--text-muted)'}}>今日新增</div>
             </div>
          </div>

          <Card>
            <div className="list-head" style={{marginBottom:'16px'}}>邀请用户列表</div>
            <div className="user-list">
              {users.map((u,i)=>(
                <div key={i} className="u-item" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
                   <div className="u-left">
                     <div className="u-name" style={{fontSize:'15px', fontWeight:'600', color:'var(--text-main)'}}>{u.name}</div>
                     <div className="u-addr" style={{fontSize:'12px', color:'var(--text-muted)'}}>{u.addr}</div>
                   </div>
                   <div className={`u-status ${u.status==='已质押'?'active':''}`} style={{
                     fontSize:'12px', 
                     padding:'4px 10px', 
                     borderRadius:'12px', 
                     background: u.status==='已质押' ? '#dcfce7' : '#f3f4f6',
                     color: u.status==='已质押' ? '#16a34a' : 'var(--text-muted)'
                   }}>{u.status}</div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}

      {tab==='rebate' && (
         <>
           <div className="rebate-overview" style={{
             background:'#fff', 
             borderRadius:'24px', 
             padding:'24px', 
             marginBottom:'24px', 
             margin:'0 20px',
             boxShadow:'var(--shadow-sm)',
             border:'1px solid var(--border)',
             marginBottom:'20px',
             margin:'0 20px 20px'
           }}>
              <div className="ro-label" style={{fontSize:'14px', color:'var(--text-muted)', marginBottom:'8px', textAlign:'center'}}>累计返佣 (PNT)</div>
              <div className="ro-total" style={{fontSize:'36px', fontWeight:'800', color:'var(--primary)', textAlign:'center', marginBottom:'24px'}}>1,250.50</div>
              <div className="ro-grid" style={{display:'flex', gap:'12px', marginBottom:'24px'}}>
                <div className="ro-item" style={{flex:1, background:'#f9fafb', padding:'12px', borderRadius:'12px', textAlign:'center'}}>
                  <div className="ro-sub-label" style={{fontSize:'12px', color:'var(--text-muted)', marginBottom:'4px'}}>可用返佣</div>
                  <div className="ro-sub-val" style={{fontSize:'16px', fontWeight:'700'}}>320.00</div>
                </div>
                <div className="ro-item" style={{flex:1, background:'#f9fafb', padding:'12px', borderRadius:'12px', textAlign:'center'}}>
                  <div className="ro-sub-label" style={{fontSize:'12px', color:'var(--text-muted)', marginBottom:'4px'}}>今日返佣</div>
                  <div className="ro-sub-val pos" style={{fontSize:'16px', fontWeight:'700', color:'#16a34a'}}>+ 62.50</div>
                </div>
              </div>
              <div className="ro-actions" style={{display:'flex', gap:'12px'}}>
                <button className="small" onClick={()=>alert('提现流程')} style={{flex:1, background:'var(--primary)', color:'#fff', border:'none', padding:'10px', borderRadius:'20px', fontWeight:'600'}}>提现</button>
                <button className="small" variant="secondary" onClick={()=>alert('直接质押流程')} style={{flex:1, background:'#f3f4f6', color:'var(--text-main)', border:'none', padding:'10px', borderRadius:'20px', fontWeight:'600'}}>直接质押</button>
              </div>
           </div>

           <Card>
             <div className="list-head" style={{marginBottom:'16px'}}>返佣明细</div>
             <div className="rebate-list">
               {rebates.map((r,i)=>(
                 <div key={i} className="r-item" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
                   <div className="r-left">
                     <div className="r-source" style={{fontSize:'14px', fontWeight:'600', marginBottom:'4px'}}>来自 {r.user} <span className="r-tag" style={{fontSize:'10px', background:'#f3f4f6', padding:'2px 6px', borderRadius:'4px', color:'var(--text-muted)'}}>{r.level}</span></div>
                     <div className="r-time" style={{fontSize:'12px', color:'var(--text-muted)'}}>{r.date}</div>
                   </div>
                   <div className="r-right">
                     <div className="r-amt" style={{fontSize:'15px', fontWeight:'700', color:'#16a34a'}}>{r.amt}</div>
                   </div>
                 </div>
               ))}
             </div>
           </Card>
         </>
      )}
    </div>
  )
}
