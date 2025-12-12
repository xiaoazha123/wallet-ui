function GovernancePage({ onBack, onToast }) {
  const [tab, setTab] = useState('voting')
  const [power, setPower] = useState(0)
  const [votedNodes, setVotedNodes] = useState({})
  
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
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>治理</div>
         <div style={{width:'40px'}}></div>
      </div>

      {/* 头部统计卡片 - 纯白风格 */}
      <div className="gov-stats" style={{
        background: '#fff',
        padding: '24px', 
        borderRadius: '20px', 
        marginBottom: '10px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border)',
        display: 'flex',
        gap: '24px',
        margin: '0 20px 10px'
      }}>
        <div className="gov-card" style={{
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between',
        }}>
          <div>
            <h3 style={{fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 8px 0', fontWeight: '500'}}>我的投票权</h3>
            <div className="val" style={{fontSize: '28px', fontWeight: '800', color: 'var(--text-main)', marginBottom: '16px'}}>{power}</div>
          </div>
          <button onClick={()=>{
            setPower(p => p + 1000);
            if(onToast) onToast('质押成功，票权 +1000');
          }} style={{
            width: '100%', 
            background: '#eff6ff', 
            color: '#3b82f6', 
            border: 'none', 
            padding: '10px 0', 
            borderRadius: '12px', 
            fontSize: '13px', 
            fontWeight: '600', 
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>获取票权</button>
        </div>

        {/* 分隔线 */}
        <div style={{width:'1px', background:'var(--border)', margin:'10px 0'}}></div>

        <div className="gov-card" style={{
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
        }}>
          <h3 style={{fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 8px 0', fontWeight: '500'}}>全网总票数</h3>
          <div className="val" style={{fontSize: '28px', fontWeight: '800', color: 'var(--text-main)', marginBottom: '16px'}}>3.2B</div>
          <div style={{display:'flex', alignItems:'center', gap:'6px', fontSize: '12px', color: 'var(--text-muted)', background:'#f9fafb', padding:'8px 12px', borderRadius:'10px'}}>
             <div style={{width:'6px', height:'6px', borderRadius:'50%', background:'#22c55e'}}></div>
             下一轮: 4h 12m
          </div>
        </div>
      </div>

      {/* 合并后的列表卡片 */}
      <Card>
        {/* 内置 Tabs */}
        <div style={{display:'flex', justifyContent:'center', marginBottom:'20px'}}>
           <div style={{background:'#f1f5f9', padding:'4px', borderRadius:'12px', display:'inline-flex'}}>
             <button className={`tab-btn ${tab==='voting'?'active':''}`} onClick={()=>setTab('voting')} style={{
               padding:'8px 24px', borderRadius:'10px', border:'none', 
               background: tab==='voting'?'#fff':'transparent', 
               color: tab==='voting'?'#0f172a':'#64748b', 
               fontWeight:'600', 
               boxShadow: tab==='voting'?'0 2px 4px rgba(0,0,0,0.05)':'none', 
               fontSize:'14px', cursor:'pointer',
               transition: 'all 0.2s'
             }}>节点投票</button>
             <button className={`tab-btn ${tab==='proposals'?'active':''}`} onClick={()=>setTab('proposals')} style={{
               padding:'8px 24px', borderRadius:'10px', border:'none', 
               background: tab==='proposals'?'#fff':'transparent', 
               color: tab==='proposals'?'#0f172a':'#64748b', 
               fontWeight:'600', 
               boxShadow: tab==='proposals'?'0 2px 4px rgba(0,0,0,0.05)':'none', 
               fontSize:'14px', cursor:'pointer',
               transition: 'all 0.2s'
             }}>治理提案</button>
           </div>
        </div>

        {/* 列表内容 */}
         {tab === 'voting' && (
           <div className="node-list">
             {nodes.map((n,i) => {
               const isVoted = votedNodes[n.name];
               return (
               <div key={n.rank} className="node-item" style={{display:'flex', alignItems:'center', padding:'16px 0', borderBottom: i<nodes.length-1 ? '1px solid var(--border)' : 'none'}}>
                 <div className="node-rank" style={{width:'30px', fontSize:'14px', fontWeight:'700', color:n.rank<=3?'var(--primary)':'var(--text-muted)'}}>#{n.rank}</div>
                 <div className="node-info" style={{flex:1}}>
                   <div className="node-name" style={{fontSize:'15px', fontWeight:'600', marginBottom:'4px'}}>{n.name}</div>
                   <div className="node-sub" style={{fontSize:'12px', color:'var(--text-muted)'}}>{n.votes} 票 · APY <span className="node-apr" style={{color:'#16a34a', fontWeight:'600'}}>{n.apy}</span></div>
                 </div>
                 <button className="small" onClick={()=>{
                    if(isVoted) return;
                    if(power<=0) { if(onToast) onToast('票权不足，请先获取票权'); return; }
                    setVotedNodes(prev => ({...prev, [n.name]:true}));
                    if(onToast) onToast(`已投票给 ${n.name}`);
                 }} style={{
                   padding:'8px 20px', 
                   borderRadius:'20px', 
                   background: isVoted ? '#e5e7eb' : (n.status==='超级代表'?'#6366f1':'#f3f4f6'), 
                   color: isVoted ? '#9ca3af' : (n.status==='超级代表'?'#fff':'var(--text-main)'), 
                   border:'none', 
                   fontSize:'13px', 
                   fontWeight:'600',
                   cursor: isVoted ? 'default' : 'pointer',
                   boxShadow: (!isVoted && n.status==='超级代表')?'0 4px 10px rgba(99, 102, 241, 0.3)':'none'
                 }}>{isVoted ? '已投票' : '投票'}</button>
               </div>
             )})}
           </div>
         )}

         {tab === 'proposals' && (
           <div className="proposal-list" style={{display:'flex', flexDirection:'column', gap:'16px'}}>
             {proposals.map(p => (
               <div key={p.id} className="proposal-full" style={{background:'#f9fafb', padding:'16px', borderRadius:'12px', border:'1px solid var(--border)'}}>
                  <div className="prop-head" style={{display:'flex', justifyContent:'space-between', marginBottom:'8px'}}>
                    <div className="prop-title" style={{fontSize:'15px', fontWeight:'600', lineHeight:'1.4', flex:1, marginRight:'12px'}}>{p.title}</div>
                    <span className="prop-id" style={{fontSize:'12px', color:'var(--text-muted)', fontWeight:'600'}}>#{p.id}</span>
                  </div>
                  <div className="prop-meta" style={{display:'flex', gap:'8px', marginBottom:'12px'}}>
                     <span style={{fontSize:'10px', padding:'2px 8px', background:'#e5e7eb', borderRadius:'4px', color:'var(--text-muted)'}}>{p.type}</span>
                     <span className={`p-status ${p.status==='投票中'?'active':''}`} style={{
                       fontSize:'10px', padding:'2px 8px', borderRadius:'4px', 
                       background: p.status==='投票中'?'#dcfce7':'#f3f4f6', 
                       color: p.status==='投票中'?'#16a34a':'var(--text-muted)'
                     }}>{p.status}</span>
                  </div>
                  <div className="prop-meta" style={{fontSize:'12px', color:'var(--text-muted)', marginBottom:'16px'}}>结束时间：{p.end}</div>
                  
                  {p.status === '投票中' && (
                    <div className="prop-vote" style={{display:'flex', gap:'8px'}}>
                      <button className="small" onClick={()=>alert('已投赞成票')} style={{flex:1, background:'#16a34a', color:'#fff', border:'none', padding:'8px', borderRadius:'8px', fontSize:'12px', fontWeight:'600'}}>赞成</button>
                      <button className="small" variant="secondary" onClick={()=>alert('已投反对票')} style={{flex:1, background:'#ef4444', color:'#fff', border:'none', padding:'8px', borderRadius:'8px', fontSize:'12px', fontWeight:'600'}}>反对</button>
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