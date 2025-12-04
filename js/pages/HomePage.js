function HomePage({ address, onWallets, onReceive, onStake, onInvest, onAssetDetail, onMore, onCopy, onMini }) {
  const [q,setQ] = useState('')
  const [tab,setTab] = useState('自选')
  const [currentWallet,setCurrentWallet] = useState({ name:'My Wallet', addr: address })
  const [showMoreSheet, setShowMoreSheet] = useState(false)
  const coins = [
    { name:'BTC', price:'¥120000', chg:'+0.38%' },
    { name:'ETH', price:'¥120000', chg:'+0.38%' },
    { name:'BNB', price:'¥120000', chg:'+0.38%' },
    { name:'SOL', price:'¥120000', chg:'+0.38%' },
    { name:'ASTER', price:'¥120000', chg:'+0.38%' },
    { name:'HYPE', price:'¥120000', chg:'+0.38%' },
  ]
  const visible = coins.concat(coins).concat(coins) // Triple the list to ensure scrolling

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div className="search-box">
         <Icon name="search" size={18} />
         <input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索代币、DApp" />
      </div>

      <div className="card-white" style={{background:'#1f2937', color:'#fff'}}>
        <div className="wallet-top">
          <div className="wallet-info" onClick={onWallets} style={{color:'#fff'}}>
            <span>{currentWallet.name}</span>
            <Icon name="down" size={16} />
            <div style={{width:'1px',height:'16px',background:'rgba(255,255,255,0.2)',margin:'0 8px'}}></div>
            <Icon name="copy" size={16} onClick={(e)=>{e.stopPropagation(); onCopy && onCopy()}} />
          </div>
        </div>
        <div className="balance-label" style={{color:'rgba(255,255,255,0.6)'}}>总资产 (CNY)</div>
        <div className="balance-row" style={{color:'#fff'}}>¥ 0.00</div>

        <div className="big-actions-row">
           <div className="big-action-card" onClick={onStake} style={{background:'rgba(255,255,255,0.1)', border:'none', height:'44px'}}>
             <span style={{fontSize:'14px', color:'#fff'}}>存钱</span>
           </div>
           <div className="big-action-card" onClick={onInvest} style={{background:'rgba(255,255,255,0.1)', border:'none', height:'44px'}}>
             <span style={{fontSize:'14px', color:'#fff'}}>投资</span>
           </div>
        </div>
      </div>

      <div className="grid-menu-row" style={{marginTop:'24px'}}>
         <button className="grid-btn" onClick={()=>onMini('signin')}>
           <div className="grid-icon" style={{background:'#eff6ff', color:'#3b82f6'}}><Icon name="calendar" /></div>
           <div className="grid-label">签到</div>
         </button>
         <button className="grid-btn" onClick={()=>onMini('payment')}>
           <div className="grid-icon" style={{background:'#fff7ed', color:'#f97316'}}><Icon name="scan" /></div>
           <div className="grid-label">支付</div>
         </button>
         <button className="grid-btn" onClick={()=>onMini('invite')}>
           <div className="grid-icon" style={{background:'#f3e8ff', color:'#a855f7'}}><Icon name="invite" /></div>
           <div className="grid-label">邀请</div>
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

      <div className="card-white" style={{padding:'0', overflow:'hidden', marginBottom:'120px'}}>
        <div className="market-tabs" style={{padding:'16px 20px 0'}}>
          {['自选','热门','最新'].map(t=> (
            <button key={t} className={`m-tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
          ))}
        </div>
        <div style={{maxHeight:'400px', overflowY:'auto', padding:'0 20px'}}>
          {visible.map((c,i)=> (
            <div key={i} className="coin-row" onClick={()=>onAssetDetail({code:c.name})}>
              <div className="coin-left">
                <div className="coin-icon"></div>
                <div className="coin-name">{c.name}</div>
              </div>
              <div className="coin-right">
                <div className="coin-price">{c.price}</div>
                <div className={`coin-chg ${c.chg.startsWith('+')?'up':'down'}`}>{c.chg}</div>
              </div>
            </div>
          ))}
          <div style={{textAlign:'center', padding:'16px', color:'var(--primary)', fontSize:'14px', fontWeight:'600', cursor:'pointer'}} onClick={()=>onMore(tab)}>查看更多</div>
        </div>
      </div>

      {showMoreSheet && (
        <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') setShowMoreSheet(false)}}>
          <div className="modal-box">
            <div className="grid-menu-row" style={{marginBottom:'0', justifyContent:'flex-start', gap:'15px'}}>
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
