function WalletOverview({ onReceive, onSend, onSwap, onStake, onAssetDetail, onWallets }) {
  const [tab, setTab] = useState('assets')
  const coins = [
    { name:'BTC', balance:'0.05', value:'¥ 18,500.00', chg:'+1.2%', icon:'' },
    { name:'ETH', balance:'1.25', value:'¥ 22,100.00', chg:'-0.5%', icon:'' },
    { name:'USDT', balance:'1,200.50', value:'¥ 8,500.00', chg:'0.0%', icon:'' },
    { name:'BNB', balance:'10.5', value:'¥ 24,500.00', chg:'+2.1%', icon:'' },
  ]
  // Triple the list to ensure scrolling
  const longCoins = [...coins, ...coins, ...coins]

  const txs = [
    { type: '转账', amount: '-0.2 BTC', time: '今天 12:32', status: '成功' },
    { type: '收款', amount: '+0.05 ETH', time: '昨天 19:10', status: '成功' },
    { type: '质押收益', amount: '+12 USDT', time: '2025-11-02', status: '成功' },
    { type: '兑换', amount: '-100 USDT', time: '2025-10-28', status: '成功' },
    { type: '收款', amount: '+500 PNT', time: '2025-10-25', status: '成功' },
  ]
  const longTxs = [...txs, ...txs, ...txs] // Triple for scrolling
  
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div className="card-white" style={{background:'#1f2937', color:'#fff', padding:'24px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px'}}>
           <div style={{fontSize:'14px', color:'rgba(255,255,255,0.6)'}}>我的资产</div>
           <Icon name="scan" size={20} style={{color:'#fff'}} />
        </div>
        <div style={{fontSize:'32px', fontWeight:'800', marginBottom:'24px'}}>¥ 73,600.00</div>
        <div className="row" style={{justifyContent:'space-between', gap:'12px'}}>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', cursor:'pointer'}} onClick={onSend}>
            <div style={{width:'48px', height:'48px', borderRadius:'24px', background:'rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center'}}><Icon name="up" size={20} /></div>
            <span style={{fontSize:'12px'}}>发送</span>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', cursor:'pointer'}} onClick={onReceive}>
            <div style={{width:'48px', height:'48px', borderRadius:'24px', background:'rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center'}}><Icon name="down" size={20} /></div>
            <span style={{fontSize:'12px'}}>接收</span>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', cursor:'pointer'}} onClick={onSwap}>
            <div style={{width:'48px', height:'48px', borderRadius:'24px', background:'rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center'}}><Icon name="swap" size={20} /></div>
            <span style={{fontSize:'12px'}}>兑换</span>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', cursor:'pointer'}} onClick={onStake}>
            <div style={{width:'48px', height:'48px', borderRadius:'24px', background:'rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center'}}><Icon name="earn" size={20} /></div>
            <span style={{fontSize:'12px'}}>理财</span>
          </div>
        </div>
      </div>

      <div className="card-white" style={{padding:'0', marginBottom:'100px'}}>
        <div className="tabs" style={{padding:'0 20px', borderBottom:'1px solid var(--border)', display:'flex', gap:'24px'}}>
           <button 
             className={`tab-btn ${tab==='assets'?'active':''}`} 
             style={{padding:'16px 0', background:'none', border:'none', borderBottom: tab==='assets'?'2px solid var(--primary)':'2px solid transparent', color: tab==='assets'?'var(--text-main)':'var(--text-muted)', fontWeight:'600', fontSize:'15px', cursor:'pointer'}}
             onClick={()=>setTab('assets')}
           >
             资产列表
           </button>
           <button 
             className={`tab-btn ${tab==='txs'?'active':''}`} 
             style={{padding:'16px 0', background:'none', border:'none', borderBottom: tab==='txs'?'2px solid var(--primary)':'2px solid transparent', color: tab==='txs'?'var(--text-main)':'var(--text-muted)', fontWeight:'600', fontSize:'15px', cursor:'pointer'}}
             onClick={()=>setTab('txs')}
           >
             交易记录
           </button>
        </div>

        <div className="scroll-list" style={{maxHeight:'400px', overflowY:'auto'}}>
          {tab === 'assets' && longCoins.map((c,i) => (
            <div key={i} className="asset-item" onClick={()=>onAssetDetail({code:c.name})} style={{padding:'16px 20px', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer'}}>
              <div className="asset-left" style={{display:'flex', alignItems:'center', gap:'12px'}}>
                <div className="coin-icon" style={{width:'40px', height:'40px', borderRadius:'20px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', color:'#6b7280'}}>{c.name[0]}</div>
                <div className="asset-info">
                  <div className="a-name" style={{fontWeight:'bold', fontSize:'16px'}}>{c.name}</div>
                  <div className="a-amt" style={{fontSize:'13px', color:'var(--muted)'}}>{c.balance} {c.name}</div>
                </div>
              </div>
              <div className="asset-right" style={{textAlign:'right'}}>
                <div className="a-val" style={{fontWeight:'bold', fontSize:'16px'}}>{c.value}</div>
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
