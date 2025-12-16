function AssetDetail({ token, onBack, onSend, onReceive, isFavorite, onToggleFavorite, readOnly = false }) {
  const [range, setRange] = useState('1D')
  const ranges = ['1天','1周','1月','全部']
  const txs = [
    { type: '转账', amount: '-0.2', time: '今天 12:32', status: '已完成' },
    { type: '收款', amount: '+0.05', time: '昨天 19:10', status: '已完成' },
    { type: '质押收益', amount: '+12', time: '2025-11-02', status: '已完成' },
  ]
  const longTxs = [...txs, ...txs, ...txs]

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>资产详情</div>
         <div onClick={onToggleFavorite} style={{cursor:'pointer', padding:'8px'}}>
            {isFavorite ? (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="#eab308">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
               </svg>
            ) : (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--text-muted)'}}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
               </svg>
            )}
         </div>
      </div>
      
      <div className="token-info" style={{marginBottom:'20px', padding:'0 20px'}}>
         <div className="token-code" style={{fontSize:'24px', fontWeight:'700', color:'var(--text-main)'}}>{token.code}</div>
         <div className="token-change" style={{fontSize:'14px', color:'#10b981', marginTop:'4px'}}>24h +3.42%</div>
      </div>

      <div style={{
          background:'#fff', 
          borderRadius:'20px', 
          padding:'20px 20px 0 20px', 
          boxShadow:'var(--shadow-sm)',
          border: '1px solid var(--border)',
          margin:'0 20px',
          marginBottom:'10px'
      }}>
        <div className="asset-header" style={{padding:'10px 0'}}>
          
          <div className="chart-area" style={{height:'180px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'24px', position:'relative', width: '100%'}}>
             {/* Mock Chart Line */}
             <svg viewBox="0 0 300 120" style={{width:'100%', height:'100%', overflow:'visible'}} preserveAspectRatio="none">
                <path d="M0,90 C40,90 40,30 80,30 C120,30 120,70 160,70 C200,70 200,20 240,20 C280,20 300,50 300,50" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
             </svg>
          </div>

          <div className="range-selector" style={{display:'flex', gap:'8px', marginBottom:'20px'}}>
             {ranges.map(r=>(
               <button key={r} onClick={()=>setRange(r)} style={{
                 padding:'6px 16px', 
                 borderRadius:'8px', 
                 border: range===r ? '1px solid var(--text-main)' : '1px solid transparent', 
                 background: 'none',
                 color: 'var(--text-main)',
                 fontSize:'13px',
                 fontWeight: range===r ? '600' : '400',
                 opacity: range===r ? 1 : 0.6
               }}>{r}</button>
             ))}
          </div>

          {!readOnly && (
          <div className="action-buttons" style={{display:'flex', gap:'16px', paddingBottom:'20px'}}>
             <button onClick={onReceive} style={{
               flex:1, 
               background:'var(--primary)', 
               color:'#fff', 
               border:'none', 
               borderRadius:'24px', 
               padding:'12px', 
               fontWeight:'600',
               fontSize:'16px',
               boxShadow:'0 4px 12px rgba(99, 102, 241, 0.3)'
             }}>接收</button>
             <button onClick={onSend} style={{
               flex:1, 
               background:'#f3f4f6', 
               color:'var(--text-main)', 
               border:'none', 
               borderRadius:'24px', 
               padding:'12px', 
               fontWeight:'600',
               fontSize:'16px'
             }}>发送</button>
          </div>
          )}
        </div>
      </div>

      {readOnly && (
      <>
        <div style={{
            background:'#fff', 
            borderRadius:'20px', 
            padding:'20px', 
            boxShadow:'var(--shadow-sm)', 
            // marginBottom:'16px',
            border: '1px solid var(--border)',
            margin:'0px 20px 10px'
        }}>
          <div style={{marginBottom:'24px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'20px'}}>
               <Icon name="chart" size={20} style={{color:'var(--primary)'}} />
               <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)'}}>市场数据</div>
            </div>
            
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px 16px'}}>
              <div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'6px'}}>市值</div>
                <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)', letterSpacing:'-0.5px'}}>$820.00B</div>
              </div>
              <div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'6px'}}>24h 成交量</div>
                <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)', letterSpacing:'-0.5px'}}>$32.00B</div>
              </div>
              <div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'6px'}}>流通供应量</div>
                <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)', letterSpacing:'-0.5px'}}>19.50M</div>
              </div>
              <div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'6px'}}>最大供应量</div>
                <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)', letterSpacing:'-0.5px'}}>21.00M</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
            background:'#fff', 
            borderRadius:'20px', 
            padding:'20px', 
            boxShadow:'var(--shadow-sm)',
            border: '1px solid var(--border)',
            margin:'0px 20px 10px'
        }}>
          <div style={{marginBottom:'24px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px'}}>
               <Icon name="info" size={20} style={{color:'var(--primary)'}} />
               <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)'}}>简介</div>
            </div>
            <div style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:'1.7', textAlign:'justify'}}>
              {token.name} 是一种去中心化的数字货币，不依赖任何中央机构或银行。它采用点对点技术，让网络上的每个节点都能验证交易。作为区块链技术的开创者，它为数字资产领域奠定了基础。
            </div>
          </div>
          
          <div>
            <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px'}}>
               <Icon name="network" size={20} style={{color:'var(--primary)'}} />
               <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)'}}>相关链接</div>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px', background:'#f8fafc', borderRadius:'16px', cursor:'pointer'}}>
                 <div style={{fontSize:'15px', fontWeight:'600', color:'var(--text-main)'}}>官方网站</div>
                 <Icon name="right" size={16} style={{color:'var(--text-muted)'}} />
              </div>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px', background:'#f8fafc', borderRadius:'16px', cursor:'pointer'}}>
                 <div style={{fontSize:'15px', fontWeight:'600', color:'var(--text-main)'}}>区块浏览器</div>
                 <Icon name="right" size={16} style={{color:'var(--text-muted)'}} />
              </div>
            </div>
          </div>
        </div>
      </>
      )}
      {!readOnly && (
      <Card>
        <div className="list-head" style={{marginBottom:'16px'}}>交易记录</div>
        <div className="txs-list">
          {longTxs.map((x,i)=>(
            <div key={i} className="tx-row" style={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
              <div className="tx-left">
                <div className="tx-type" style={{fontWeight:'600', fontSize:'15px', marginBottom:'4px'}}>{x.type}</div>
                <div className="tx-amt" style={{fontSize:'14px', color:'var(--text-main)'}}>{x.amount}</div>
              </div>
              <div className="tx-right" style={{textAlign:'right'}}>
                <div className="tx-time" style={{fontSize:'13px', color:'var(--muted)', marginBottom:'4px'}}>{x.time}</div>
                {/* <div className="tx-status" style={{fontSize:'12px', color:'#10b981'}}>{x.status}</div> */}
              </div>
            </div>
          ))}
        </div>
      </Card>
      )}

    </div>
  )
}
