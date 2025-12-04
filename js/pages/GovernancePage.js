function GovernancePage() {
  const [tab, setTab] = useState('voting')
  const [power, setPower] = useState(0)
  
  const nodes = [
    { rank: 1, name: '星球基金会', votes: '1.2B', apy: '5.2%', status: '超级代表' },
    { rank: 2, name: '币安质押', votes: '980M', apy: '4.8%', status: '超级代表' },
    { rank: 3, name: '社区节点 1', votes: '500M', apy: '6.1%', status: '候选' },
    { rank: 4, name: '科技公会', votes: '320M', apy: '5.5%', status: '候选' },
  ]

  const proposals = [
    { id: 12, title: '将区块大小增加到 2MB', type: '网络参数', status: '投票中', end: '2d', for: '120M', against: '5M' },
    { id: 11, title: '新增 USDT 为手续费代币', type: '新特性', status: '已通过', end: 'Ended', for: '450M', against: '20M' },
  ]

  return (
    <div className="content">
       <div className="gov-stats">
         <div className="gov-card">
           <h3>我的投票权</h3>
           <div className="val">{power}</div>
           <div className="gov-action">
             <Button className="small" variant="secondary" onClick={()=>alert('质押 TRX/PNT 以获取投票权')}>获取票权</Button>
           </div>
         </div>
         <div className="gov-card">
           <h3>全网总票数</h3>
           <div className="val">3.2B</div>
           <h3>下一轮: 4h 12m</h3>
         </div>
       </div>

       <Card>
         <div className="tabs">
           <button className={`tab-btn ${tab==='voting'?'active':''}`} onClick={()=>setTab('voting')}>超级代表投票</button>
           <button className={`tab-btn ${tab==='proposals'?'active':''}`} onClick={()=>setTab('proposals')}>治理提案</button>
         </div>

         {tab === 'voting' && (
           <div className="node-list">
             {nodes.map(n => (
               <div key={n.rank} className="node-item">
                 <div className="node-rank">#{n.rank}</div>
                 <div className="node-info">
                   <div className="node-name">{n.name}</div>
                   <div className="node-sub">{n.votes} 票 · APY <span className="node-apr">{n.apy}</span></div>
                 </div>
                 <Button className="small" onClick={()=>alert(`已投票给 ${n.name}`)}>投票</Button>
               </div>
             ))}
           </div>
         )}

         {tab === 'proposals' && (
           <div className="proposal-list">
             {proposals.map(p => (
               <div key={p.id} className="proposal-full">
                  <div className="prop-head">
                    <div className="prop-title">{p.title}</div>
                    <span className="prop-id">#{p.id}</span>
                  </div>
                  <div className="prop-meta">
                     <span>{p.type}</span>
                     <span className={`p-status ${p.status==='投票中'?'active':''}`}>{p.status}</span>
                  </div>
                  <div className="prop-meta">结束时间：{p.end}</div>
                  
                  {p.status === '投票中' && (
                    <div className="prop-vote">
                      <Button className="small" onClick={()=>alert('已投赞成票')}>赞成</Button>
                      <Button className="small" variant="secondary" onClick={()=>alert('已投反对票')}>反对</Button>
                    </div>
                  )}
               </div>
             ))}
           </div>
         )}
       </Card>
    </div>
  )
}
