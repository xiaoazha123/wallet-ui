function WalletOverview({ currentWallet, totalValue, onReceive, onSend, onSwap, onStake, onAssetDetail, onWallets, onToast, displayCoins }) {
  const [tab, setTab] = useState('assets')
  
  // Use displayCoins passed from App.js if available, otherwise fallback (or empty)
  // Filter coins to only show those with balance > 0
  const coinsToList = (displayCoins || []).filter(c => c.balance > 0)
  
  const txs = [
    { type: '转账', amount: '-0.2 BTC', time: '今天 12:32', status: '成功' },
    { type: '收款', amount: '+0.05 ETH', time: '昨天 19:10', status: '成功' },
    { type: '质押收益', amount: '+12 USDT', time: '2025-11-02', status: '成功' },
    { type: '兑换', amount: '-100 USDT', time: '2025-10-28', status: '成功' },
    { type: '收款', amount: '+500 H', time: '2025-10-25', status: '成功' },
  ]
  const longTxs = [...txs, ...txs, ...txs] // Triple for scrolling
  
  return (
    <div className="content-padded" style={{paddingTop:'0'}}>
      <TopNavBar title="资产" />
      <div className="card-white" style={{
        background: '#fff', 
        padding:'20px',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{flex:1}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'8px', cursor:'pointer'}} onClick={onWallets}>
             <div style={{fontSize:'14px', fontWeight:'600', color:'var(--text-main)'}}>{currentWallet?.name || 'My Wallet'}</div>
             <Icon name="down" size={14} style={{color:'var(--text-muted)'}} />
             <div style={{width:'1px', height:'14px', background:'#e5e7eb'}}></div>
             <div style={{color:'var(--text-muted)', cursor:'pointer'}} onClick={(e)=>{
               e.stopPropagation();
               if(onToast) onToast('已复制地址');
             }}>
               <Icon name="copy" size={16} />
             </div>
          </div>
          <div style={{fontSize:'24px', fontWeight:'700', color:'var(--text-main)', letterSpacing:'0.5px'}}>
             ¥ {totalValue ? totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}
          </div>
        </div>
      </div>

      <div className="card-white" style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-sm)',
         border: '1px solid var(--border)',
         margin: '0 20px 10px',
         display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', cursor:'pointer', flex:1}} onClick={onSend}>
          <div style={{width:'50px', height:'50px', borderRadius:'25px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary)'}}><Icon name="send" size={22} /></div>
          <span style={{fontSize:'13px', fontWeight:'500', color:'var(--text-main)'}}>发送</span>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', cursor:'pointer', flex:1}} onClick={onReceive}>
          <div style={{width:'50px', height:'50px', borderRadius:'25px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary)'}}><Icon name="down" size={22} /></div>
          <span style={{fontSize:'13px', fontWeight:'500', color:'var(--text-main)'}}>接收</span>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', cursor:'pointer', flex:1}} onClick={onSwap}>
          <div style={{width:'50px', height:'50px', borderRadius:'25px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary)'}}><Icon name="swap" size={22} /></div>
          <span style={{fontSize:'13px', fontWeight:'500', color:'var(--text-main)'}}>兑换</span>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', cursor:'pointer', flex:1}} onClick={onStake}>
          <div style={{width:'50px', height:'50px', borderRadius:'25px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary)'}}><Icon name="earn" size={22} /></div>
          <span style={{fontSize:'13px', fontWeight:'500', color:'var(--text-main)'}}>存钱</span>
        </div>
      </div>

      <div className="card-white" style={{padding:'0', marginBottom:'100px'}}>
        <div className="market-tabs" style={{padding:'16px 20px 0'}}>
           <button className={`m-tab ${tab==='assets'?'active':''}`} onClick={()=>setTab('assets')}>资产列表</button>
           <button className={`m-tab ${tab==='txs'?'active':''}`} onClick={()=>setTab('txs')}>交易记录</button>
        </div>

        <div className="scroll-list no-scrollbar" style={{padding:'0 20px'}}>
          {tab === 'assets' && coinsToList.length === 0 && (
             <div style={{padding:'40px', textAlign:'center', color:'var(--text-muted)'}}>暂无资产</div>
          )}
          {tab === 'assets' && coinsToList.map((c,i) => (
            <div key={i} className="asset-item" onClick={()=>onAssetDetail(c)} style={{padding:'16px 20px', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer'}}>
              <div className="asset-left" style={{display:'flex', alignItems:'center', gap:'12px'}}>
                <div className="coin-icon" style={{width:'40px', height:'40px', borderRadius:'20px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', color:'#6b7280'}}>{c.name[0]}</div>
                <div className="asset-info">
                  <div className="a-name" style={{fontWeight:'bold', fontSize:'16px'}}>
                    {c.name}
                    {c.isAggregated && <span style={{fontSize:'10px', background:'#f3f4f6', color:'#6b7280', padding:'2px 6px', borderRadius:'4px', marginLeft:'6px'}}>ALL</span>}
                  </div>
                  <div className="a-amt" style={{fontSize:'13px', color:'var(--muted)'}}>{c.balance} {c.name}</div>
                </div>
              </div>
              <div className="asset-right" style={{textAlign:'right'}}>
                <div className="a-val" style={{fontWeight:'bold', fontSize:'16px'}}>¥ {(c.price * c.balance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                <div className={`a-chg ${c.chg.startsWith('+')?'up':'down'}`} style={{fontSize:'13px', color:c.chg.startsWith('+')?'#10b981':(c.chg.startsWith('-')?'#ef4444':'#6b7280')}}>{c.chg}</div>
              </div>
            </div>
          ))}

          {tab === 'txs' && longTxs.map((tx,i) => (
            <div key={i} className="tx-item" style={{padding:'16px 20px', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
               <div className="tx-left">
                 <div className="tx-type" style={{fontWeight:'600', fontSize:'15px', marginBottom:'4px'}}>{tx.type}</div>
                 <div className="tx-time" style={{fontSize:'12px', color:'var(--muted)'}}>{tx.time}</div>
               </div>
               <div className="tx-right" style={{textAlign:'right'}}>
                 <div className="tx-amt" style={{fontWeight:'bold', color: tx.amount.startsWith('+')?'#10b981':'#1f2937'}}>{tx.amount}</div>
                 <div className="tx-status" style={{fontSize:'12px', color:'#10b981'}}>{tx.status}</div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
