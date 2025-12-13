function GovernancePage({ onBack, onToast }) {
  const [tab, setTab] = useState('voting')
  const [power, setPower] = useState(0)
  const [votedNodes, setVotedNodes] = useState({})
  
  const [showPowerModal, setShowPowerModal] = useState(false)
  const [stakeAmount, setStakeAmount] = useState('')
  const [stakePwd, setStakePwd] = useState('')
  
  const [showUnstakeModal, setShowUnstakeModal] = useState(false)
  const [unstakeAmount, setUnstakeAmount] = useState('')
  const [unstakePwd, setUnstakePwd] = useState('')

  const openUnstakeModal = () => {
      setUnstakeAmount('')
      setUnstakePwd('')
      setShowUnstakeModal(true)
  }

  const confirmUnstake = () => {
      if (!unstakeAmount || parseFloat(unstakeAmount) <= 0) return onToast && onToast('请输入有效的赎回数量');
      if (parseFloat(unstakeAmount) > power) return onToast && onToast('可赎回票权不足');
      if (!unstakePwd) return onToast && onToast('请输入密码');

      // Simulate unstaking
      setPower(p => p - parseFloat(unstakeAmount));
      setShowUnstakeModal(false);
      if(onToast) onToast(`成功赎回 ${unstakeAmount} H，票权已释放`);
  }

  const openPowerModal = () => {
    setStakeAmount('')
    setStakePwd('')
    setShowPowerModal(true)
  }

  const confirmStake = () => {
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) return onToast && onToast('请输入有效的质押数量');
    if (!stakePwd) return onToast && onToast('请输入密码');
    
    // Simulate staking
    setPower(p => p + parseFloat(stakeAmount));
    setShowPowerModal(false);
    if(onToast) onToast(`成功质押 ${stakeAmount} H，获得 ${stakeAmount} 票权`);
  }

  // Voting Modal State
  const [showVoteModal, setShowVoteModal] = useState(false)
  const [voteTarget, setVoteTarget] = useState(null) // Proposal ID or Node Name
  const [voteType, setVoteType] = useState('') // 'approve', 'oppose', 'node'
  const [voteAmount, setVoteAmount] = useState('')
  const [votePwd, setVotePwd] = useState('')

  const openVoteModal = (target, type) => {
    setVoteTarget(target)
    setVoteType(type)
    setVoteAmount('')
    setVotePwd('')
    setShowVoteModal(true)
  }

  const confirmVote = () => {
    if (!voteAmount || parseFloat(voteAmount) <= 0) {
       if(onToast) onToast('请输入有效的票数');
       return;
    }
    if (parseFloat(voteAmount) > power) {
       if(onToast) onToast('票权不足');
       return;
    }
    if (!votePwd) {
       if(onToast) onToast('请输入密码');
       return;
    }
    
    // Simulate API call / Logic
    setShowVoteModal(false);
    if (voteType === 'node') {
        setVotedNodes(prev => ({...prev, [voteTarget.name]: true}));
        if(onToast) onToast(`已为节点 ${voteTarget.name} 投票 ${voteAmount} 票`);
    } else {
        // Proposal vote
        if(onToast) onToast(`提案 #${voteTarget.id} ${voteType==='approve'?'赞成':'反对'}投票成功`);
    }
  }

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
          <div style={{display:'flex', gap:'8px'}}>
            <button onClick={openPowerModal} style={{
              flex: 1, 
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
            <button onClick={openUnstakeModal} style={{
              flex: 1, 
              background: '#f3f4f6', 
              color: '#4b5563', 
              border: 'none', 
              padding: '10px 0', 
              borderRadius: '12px', 
              fontSize: '13px', 
              fontWeight: '600', 
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>赎回</button>
          </div>
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
                 <div className="node-info" style={{flex:1}}>
                   <div className="node-name" style={{fontSize:'15px', fontWeight:'600', marginBottom:'4px'}}>{n.name}</div>
                   <div className="node-sub" style={{fontSize:'12px', color:'var(--text-muted)'}}>{n.votes} 票 · APY <span className="node-apr" style={{color:'#16a34a', fontWeight:'600'}}>{n.apy}</span></div>
                 </div>
                 <button className="small" onClick={()=>{
                    if(isVoted) return;
                    if(power<=0) { if(onToast) onToast('票权不足，请先获取票权'); return; }
                    openVoteModal(n, 'node');
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
                      <button className="small" onClick={()=>openVoteModal(p, 'approve')} style={{flex:1, background:'#16a34a', color:'#fff', border:'none', padding:'8px', borderRadius:'8px', fontSize:'12px', fontWeight:'600'}}>赞成</button>
                      <button className="small" variant="secondary" onClick={()=>openVoteModal(p, 'oppose')} style={{flex:1, background:'#ef4444', color:'#fff', border:'none', padding:'8px', borderRadius:'8px', fontSize:'12px', fontWeight:'600'}}>反对</button>
                    </div>
                  )}
               </div>
             ))}
           </div>
         )}
       </Card>

       {showVoteModal && (
         <div className="modal-overlay" style={{alignItems:'center', justifyContent:'center'}}>
            <div className="modal-box" style={{margin:'20px', borderRadius:'24px', padding:'24px', width:'85%'}}>
               <div style={{textAlign:'center', fontSize:'18px', fontWeight:'700', marginBottom:'20px'}}>
                  {voteType==='node' ? '为节点投票' : (voteType==='approve' ? '投赞成票' : '投反对票')}
               </div>
               
               {voteTarget && (
                 <div style={{background:'#f9fafb', padding:'12px', borderRadius:'12px', marginBottom:'20px', textAlign:'center'}}>
                    <div style={{fontSize:'14px', fontWeight:'600'}}>{voteTarget.name || voteTarget.title}</div>
                    {voteTarget.id && <div style={{fontSize:'12px', color:'var(--text-muted)'}}>#{voteTarget.id}</div>}
                 </div>
               )}

               <div style={{marginBottom:'16px'}}>
                 <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'8px'}}>投票数量 (可用: {power})</div>
                 <input 
                   type="number" 
                   value={voteAmount} 
                   onChange={e=>setVoteAmount(e.target.value)} 
                   placeholder="请输入票数" 
                   style={{width:'100%', padding:'12px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'16px'}} 
                 />
               </div>

               <div style={{marginBottom:'24px'}}>
                 <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'8px'}}>交易密码</div>
                 <input 
                   type="password" 
                   value={votePwd} 
                   onChange={e=>setVotePwd(e.target.value)} 
                   placeholder="请输入密码" 
                   style={{width:'100%', padding:'12px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'16px'}} 
                 />
               </div>

               <div style={{display:'flex', gap:'12px'}}>
                 <Button onClick={confirmVote} style={{flex:1}}>确认</Button>
                 <Button variant="ghost" onClick={()=>setShowVoteModal(false)} style={{flex:1}}>取消</Button>
               </div>
            </div>
         </div>
       )}

       {showPowerModal && (
         <div className="modal-overlay" style={{alignItems:'center', justifyContent:'center'}}>
            <div className="modal-box" style={{margin:'20px', borderRadius:'24px', padding:'24px', width:'85%'}}>
               <div style={{textAlign:'center', fontSize:'18px', fontWeight:'700', marginBottom:'20px'}}>获取票权</div>
               <div style={{textAlign:'center', fontSize:'13px', color:'var(--text-muted)', marginBottom:'20px'}}>
                  质押 H 代币以获取等量投票权。质押期间代币将被冻结，可随时赎回。
                </div>
                
                <div style={{marginBottom:'16px'}}>
                  <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'8px'}}>质押数量</div>
                  <input 
                    type="number" 
                    value={stakeAmount} 
                    onChange={e=>setStakeAmount(e.target.value)} 
                    placeholder="输入 H 数量" 
                    style={{width:'100%', padding:'12px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'16px'}} 
                  />
                </div>

               <div style={{marginBottom:'24px'}}>
                 <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'8px'}}>交易密码</div>
                 <input 
                   type="password" 
                   value={stakePwd} 
                   onChange={e=>setStakePwd(e.target.value)} 
                   placeholder="请输入密码" 
                   style={{width:'100%', padding:'12px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'16px'}} 
                 />
               </div>

               <div style={{display:'flex', gap:'12px'}}>
                 <Button onClick={confirmStake} style={{flex:1}}>确认质押</Button>
                 <Button variant="ghost" onClick={()=>setShowPowerModal(false)} style={{flex:1}}>取消</Button>
               </div>
            </div>
         </div>
       )}
       {showUnstakeModal && (
         <div className="modal-overlay" style={{alignItems:'center', justifyContent:'center'}}>
            <div className="modal-box" style={{margin:'20px', borderRadius:'24px', padding:'24px', width:'85%'}}>
               <div style={{textAlign:'center', fontSize:'18px', fontWeight:'700', marginBottom:'20px'}}>赎回代币</div>
               <div style={{textAlign:'center', fontSize:'13px', color:'var(--text-muted)', marginBottom:'20px'}}>
                  释放选票并赎回质押的 H 代币。赎回后票权将相应减少。
                </div>
               
               <div style={{marginBottom:'16px'}}>
                 <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'8px'}}>赎回数量 (可赎回: {power})</div>
                 <input 
                   type="number" 
                   value={unstakeAmount} 
                   onChange={e=>setUnstakeAmount(e.target.value)} 
                   placeholder="输入数量" 
                   style={{width:'100%', padding:'12px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'16px'}} 
                 />
               </div>

               <div style={{marginBottom:'24px'}}>
                 <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'8px'}}>交易密码</div>
                 <input 
                   type="password" 
                   value={unstakePwd} 
                   onChange={e=>setUnstakePwd(e.target.value)} 
                   placeholder="请输入密码" 
                   style={{width:'100%', padding:'12px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'16px'}} 
                 />
               </div>

               <div style={{display:'flex', gap:'12px'}}>
                 <Button onClick={confirmUnstake} style={{flex:1}}>确认赎回</Button>
                 <Button variant="ghost" onClick={()=>setShowUnstakeModal(false)} style={{flex:1}}>取消</Button>
               </div>
            </div>
         </div>
       )}
    </div>
  )
}