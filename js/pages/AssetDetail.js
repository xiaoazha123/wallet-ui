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

      <Card>
        <div className="asset-header" style={{padding:'10px 0'}}>
          
          <div className="chart-area" style={{height:'120px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'24px', position:'relative'}}>
             {/* Mock Chart Line */}
             <svg viewBox="0 0 300 100" style={{width:'100%', height:'100%', overflow:'visible'}}>
                <path d="M0,80 C50,80 50,40 100,40 C150,40 150,60 200,60 C250,60 250,20 300,20" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" />
             </svg>
          </div>

          <div className="range-selector" style={{display:'flex', gap:'8px', marginBottom: readOnly ? '0' : '24px'}}>
             {ranges.map(r=>(
               <button key={r} onClick={()=>setRange(r)} style={{
                 padding:'4px 12px', 
                 borderRadius:'4px', 
                 border:'1px solid var(--text-main)', 
                 background: range===r ? 'none' : 'none',
                 color: 'var(--text-main)',
                 fontSize:'13px',
                 fontWeight: range===r ? '600' : '400',
                 opacity: range===r ? 1 : 0.6
               }}>{r}</button>
             ))}
          </div>

          {!readOnly && (
          <div className="action-buttons" style={{display:'flex', gap:'16px'}}>
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
      </Card>

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
