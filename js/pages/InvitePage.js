function InvitePage() {
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
    <div className="content">
      <div className="tabs">
         <button className={`tab-btn ${tab==='center'?'active':''}`} onClick={()=>setTab('center')}>邀请中心</button>
         <button className={`tab-btn ${tab==='rebate'?'active':''}`} onClick={()=>setTab('rebate')}>返佣收益</button>
      </div>

      {tab==='center' && (
        <>
          <Card>
             <div className="invite-hero">
               <div className="qr-box">
                 <Icon name="qr" size={80} />
               </div>
               <div className="invite-info-row">
                 <div className="i-label">我的邀请码</div>
                 <div className="i-code" onClick={()=>copy(inviteCode)}>{inviteCode} <Icon name="copy" size={14}/></div>
               </div>
               <div className="invite-link-box">
                 <div className="link-text">{inviteLink}</div>
                 <button className="link-copy" onClick={()=>copy(inviteLink)}>复制</button>
               </div>
               <Button onClick={()=>alert('调用系统分享')} style={{width:'100%', marginTop:'12px'}}>一键分享</Button>
             </div>
          </Card>

          <Card>
            <div className="list-head">邀请统计</div>
            <div className="stat-grid-3">
               <div className="sg-item">
                 <div className="sg-val">12</div>
                 <div className="sg-label">一级人数</div>
               </div>
               <div className="sg-item">
                 <div className="sg-val">35</div>
                 <div className="sg-label">二级人数</div>
               </div>
               <div className="sg-item">
                 <div className="sg-val pos">+2</div>
                 <div className="sg-label">今日新增</div>
               </div>
            </div>
          </Card>

          <Card>
            <div className="list-head">邀请用户列表</div>
            <div className="user-list">
              {users.map((u,i)=>(
                <div key={i} className="u-item">
                   <div className="u-left">
                     <div className="u-name">{u.name}</div>
                     <div className="u-addr">{u.addr}</div>
                   </div>
                   <div className={`u-status ${u.status==='已质押'?'active':''}`}>{u.status}</div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}

      {tab==='rebate' && (
         <>
           <div className="rebate-overview">
              <div className="ro-label">累计返佣 (PNT)</div>
              <div className="ro-total">1,250.50</div>
              <div className="ro-grid">
                <div className="ro-item">
                  <div className="ro-sub-label">可用返佣</div>
                  <div className="ro-sub-val">320.00</div>
                </div>
                <div className="ro-item">
                  <div className="ro-sub-label">今日返佣</div>
                  <div className="ro-sub-val pos">+ 62.50</div>
                </div>
                <div className="ro-item">
                  <div className="ro-sub-label">昨日返佣</div>
                  <div className="ro-sub-val">+ 125.00</div>
                </div>
              </div>
              <div className="ro-actions">
                <Button className="small" onClick={()=>alert('提现流程')}>提现</Button>
                <Button className="small" variant="secondary" onClick={()=>alert('直接质押流程')}>直接用于质押</Button>
              </div>
           </div>

           <Card>
             <div className="list-head">返佣明细</div>
             <div className="rebate-list">
               {rebates.map((r,i)=>(
                 <div key={i} className="r-item">
                   <div className="r-left">
                     <div className="r-source">来自 {r.user} <span className="r-tag">{r.level}</span></div>
                     <div className="r-time">{r.date}</div>
                   </div>
                   <div className="r-right">
                     <div className="r-amt">{r.amt}</div>
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
