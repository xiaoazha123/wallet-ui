function HomePage({ address, currentWallet, totalValue, onWallets, onReceive, onStake, onInvest, onAssetDetail, onMore, onCopy, onMini, allCoins, favorites, onSearch }) {
  const [q,setQ] = useState('')
  const [tab,setTab] = useState('自选')
  const [showMoreSheet, setShowMoreSheet] = useState(false)

  let visible = []
  if (q) {
      visible = allCoins.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || c.code.toLowerCase().includes(q.toLowerCase()))
  } else {
      if (tab === '自选') {
          visible = allCoins.filter(c => favorites.includes(c.code))
      } else {
          // 热门: show first 6
          visible = allCoins.slice(0, 6)
      }
  }

  const [alertInfo, setAlertInfo] = useState(null)

  const handleDevFeature = (title) => {
    setAlertInfo({ title: '提示', msg: `${title} 功能开发中`, onConfirm: ()=>setAlertInfo(null) })
  }

  return (
    <div className="content-padded">
      {alertInfo && (
        <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') setAlertInfo(null)}} style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', zIndex: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div className="modal-box" style={{
            background: '#fff', width: '80%', maxWidth: '320px',
            borderRadius: '16px', padding: '24px',
            textAlign: 'left',
            animation: 'slideUp 0.3s ease',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
              <Icon name="info" size={24} style={{color:'#3b82f6'}} />
              <div style={{fontSize:'18px', fontWeight:'700', color:'#1f2937'}}>{alertInfo.title}</div>
            </div>
            
            <div style={{fontSize: '15px', color: '#4b5563', lineHeight: '1.5', marginBottom: '24px', paddingLeft: '4px'}}>
              {alertInfo.msg}
            </div>

            <div style={{display:'flex', gap:'12px'}}>
              <button onClick={()=>setAlertInfo(null)} style={{
                flex: 1,
                borderRadius: '8px', 
                padding: '10px', 
                background: '#fff', 
                color: '#6b7280', 
                border: '1px solid #e5e7eb', 
                fontSize: '15px', 
                fontWeight: '600',
                cursor: 'pointer'
              }}>取消</button>
              <button onClick={alertInfo.onConfirm} style={{
                flex: 1,
                borderRadius: '8px', 
                padding: '10px', 
                background: '#3b82f6', 
                color: '#fff', 
                border: 'none', 
                fontSize: '15px', 
                fontWeight: '600',
                cursor: 'pointer'
              }}>确认</button>
            </div>
          </div>
        </div>
      )}

      <div className="search-box" onClick={onSearch}>
         <Icon name="search" size={18} />
         <div style={{color:'#9ca3af', fontSize:'14px'}}>搜索代币</div>
      </div>

      <div className="card-white" style={{
        background: '#fff', 
        padding:'20px',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <div style={{flex:1}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'8px', cursor:'pointer'}} onClick={onWallets}>
             <div style={{fontSize:'14px', fontWeight:'600', color:'var(--text-main)'}}>{currentWallet.name}</div>
             <Icon name="down" size={14} style={{color:'var(--text-muted)'}} />
             <div style={{width:'1px', height:'14px', background:'#e5e7eb'}}></div>
             <div onClick={(e)=>{e.stopPropagation(); onCopy()}} style={{color:'var(--text-muted)', cursor:'pointer'}}>
               <Icon name="copy" size={16} />
             </div>
          </div>
          <div style={{fontSize:'24px', fontWeight:'700', color:'var(--text-main)', letterSpacing:'0.5px'}}>
             ¥ {totalValue ? totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}
          </div>
        </div>

        <div>
           <Button onClick={onReceive} style={{
             height:'40px', 
             padding:'0 24px', 
             borderRadius:'20px', 
             fontSize:'14px', 
             fontWeight:'600',
             background:'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
             boxShadow:'0 4px 12px rgba(99, 102, 241, 0.3)'
           }}>接收</Button>
        </div>
      </div>

      <div className="card-white" style={{
        background: '#fff',
        padding: '20px 10px',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border)',
        marginBottom: '10px'
      }}>
        <div className="grid-menu-row" style={{marginTop:'0', marginBottom: 0, margin: '0 10px'}}>
              <button className="grid-btn" onClick={()=>onMini('signin')}>
                <div className="grid-icon" style={{background:'#eff6ff', color:'#3b82f6'}}><Icon name="calendar" /></div>
                <div className="grid-label">签到</div>
              </button>
              <button className="grid-btn" onClick={()=>handleDevFeature('挖矿')}>
                <div className="grid-icon" style={{background:'#fffbeb', color:'#f59e0b'}}><Icon name="lightning" /></div>
                <div className="grid-label">挖矿</div>
              </button>
              <button className="grid-btn" onClick={()=>handleDevFeature('建设')}>
                <div className="grid-icon" style={{background:'#f3e8ff', color:'#a855f7'}}><Icon name="service" /></div>
                <div className="grid-label">建设</div>
              </button>
              <button className="grid-btn" onClick={()=>onMini('governance')}>
                <div className="grid-icon" style={{background:'#ecfdf5', color:'#10b981'}}><Icon name="vote" /></div>
                <div className="grid-label">治理</div>
              </button>
              <button className="grid-btn" onClick={()=>setShowMoreSheet(true)}>
                <div className="grid-icon" style={{background:'#f3f4f6', color:'#6b7280'}}><Icon name="more" /></div>
                <div className="grid-label">更多</div>
              </button>
           </div>
      </div>

      <div className="big-actions-row" style={{gap:'16px', padding:'0 20px', marginBottom:'10px'}}>
         <div className="big-action-card" onClick={onStake} style={{
           background:'#fff', 
           border:'1px solid var(--border)', 
           height:'60px', 
           borderRadius:'16px',
           flexDirection:'row',
           gap:'12px',
           boxShadow:'var(--shadow-sm)'
         }}>
           <div style={{color:'var(--primary)', display:'flex', alignItems:'center'}}><Icon name="earn" size={24} /></div>
           <span style={{fontSize:'16px', color:'var(--text-main)', fontWeight:'600'}}>存钱</span>
         </div>
         <div className="big-action-card" onClick={onInvest} style={{
           background:'#fff', 
           border:'1px solid var(--border)', 
           height:'60px', 
           borderRadius:'16px',
           flexDirection:'row',
           gap:'12px',
           boxShadow:'var(--shadow-sm)'
         }}>
           <div style={{color:'#f97316', display:'flex', alignItems:'center'}}><Icon name="chart" size={24} /></div>
           <span style={{fontSize:'16px', color:'var(--text-main)', fontWeight:'600'}}>投资</span>
         </div>
      </div>

      <div className="card-white" style={{padding:'0', overflow:'hidden', marginBottom:'120px'}}>
        <div className="market-tabs" style={{padding:'16px 20px 0'}}>
          {['自选','热门'].map(t=> (
            <button key={t} className={`m-tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
          ))}
        </div>
        <div className="no-scrollbar" style={{maxHeight:'400px', overflowY:'auto', padding:'0 20px'}}>
          {visible.length === 0 && (
             <div style={{padding:'20px', textAlign:'center', color:'var(--text-muted)'}}>
               {tab==='自选' ? '暂无自选代币，请去市场添加' : '暂无数据'}
             </div>
          )}
          {visible.map((c,i)=> (
            <div key={i} className="coin-row" onClick={()=>onAssetDetail(c)}>
              <div className="coin-left">
                <div className="coin-icon"></div>
                <div className="coin-name">{c.name}</div>
              </div>
              <div className="coin-right" style={{textAlign:'right'}}>
                <div className="coin-price" style={{fontSize:'15px', fontWeight:'700', color:'var(--text-main)'}}>{c.price}</div>
                <div style={{
                  display: 'inline-block',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginTop: '4px',
                  color: c.chg.startsWith('+') ? '#16a34a' : '#dc2626',
                  background: c.chg.startsWith('+') ? '#dcfce7' : '#fee2e2'
                }}>{c.chg}</div>
              </div>
            </div>
          ))}
          <div style={{textAlign:'center', padding:'16px', color:'var(--primary)', fontSize:'14px', fontWeight:'600', cursor:'pointer'}} onClick={()=>onMore(tab)}>查看更多</div>
        </div>
      </div>

      {showMoreSheet && (
        <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') setShowMoreSheet(false)}}>
          <div className="modal-box">
            <div className="grid-menu-row" style={{marginBottom:'0', justifyContent:'flex-start', gap:'15px', flexWrap:'wrap'}}>
               <button className="grid-btn" onClick={()=>{ onMini('invite'); setShowMoreSheet(false) }}>
                 <div className="grid-icon" style={{background:'#eff6ff', color:'#3b82f6'}}><Icon name="invite" /></div>
                 <div className="grid-label">邀请</div>
               </button>
               <button className="grid-btn" onClick={()=>{ onMini('c2c'); setShowMoreSheet(false) }}>
                 <div className="grid-icon" style={{background:'#f3e8ff', color:'#a855f7'}}><Icon name="c2c" /></div>
                 <div className="grid-label">C2C</div>
               </button>
               <button className="grid-btn" onClick={()=>{ onMini('tasks'); setShowMoreSheet(false) }}>
                 <div className="grid-icon" style={{background:'#ecfdf5', color:'#10b981'}}><Icon name="copy" /></div>
                 <div className="grid-label">任务中心</div>
               </button>
               <button className="grid-btn" onClick={()=>{ onMini('points'); setShowMoreSheet(false) }}>
                 <div className="grid-icon" style={{background:'#fff7ed', color:'#f97316'}}><Icon name="earn" /></div>
                 <div className="grid-label">我的积分</div>
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}