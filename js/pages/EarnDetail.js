function EarnDetail({ product, onStake, onRedeem, onDeposit, onBack }) {
  return (
    <div className="content-padded" style={{paddingTop:'12px', height:'100%', display:'flex', flexDirection:'column', overflow:'hidden'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px', flexShrink:0}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>存钱详情</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div style={{flex:1, overflowY:'auto', paddingBottom:'20px'}}>
        <div className="earn-detail-header" style={{
          background:'#fff', 
          borderRadius:'24px', 
          padding:'24px', 
          marginBottom:'20px',
          textAlign:'center',
          boxShadow:'var(--shadow-sm)',
          border:'1px solid var(--border)',
          margin:'0 20px 20px'
        }}>
           <div style={{fontSize:'14px', color:'var(--text-muted)', marginBottom:'8px'}}>{product.code} 质押</div>
           <div style={{fontSize:'40px', fontWeight:'800', color:'#10b981', marginBottom:'4px'}}>{product.apy}</div>
           <div style={{fontSize:'13px', color:'var(--text-muted)'}}>预计年化收益率</div>
        </div>

        <Card>
           <div className="detail-row" style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
              <span style={{color:'var(--text-muted)'}}>锁定期</span>
              <span style={{fontWeight:'600'}}>{product.lock}</span>
           </div>
           <div className="detail-row" style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
              <span style={{color:'var(--text-muted)'}}>起投金额</span>
              <span style={{fontWeight:'600'}}>{product.min} {product.code}</span>
           </div>
           <div className="detail-row" style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
              <span style={{color:'var(--text-muted)'}}>利息发放</span>
              <span style={{fontWeight:'600'}}>每日发放</span>
           </div>
           <div className="detail-row" style={{display:'flex', justifyContent:'space-between', padding:'12px 0'}}>
              <span style={{color:'var(--text-muted)'}}>到期处理</span>
              <span style={{fontWeight:'600'}}>自动赎回</span>
           </div>
        </Card>

        <div style={{margin:'20px 20px'}}>
          <div style={{fontSize:'16px', fontWeight:'700', marginBottom:'12px', paddingLeft:'4px'}}>我的持仓</div>
          <div style={{
             background:'#fff', 
             borderRadius:'20px', 
             padding:'20px', 
             boxShadow:'var(--shadow-sm)', 
             border:'1px solid var(--border)',
             display:'flex',
             justifyContent:'space-between',
             alignItems:'center'
          }}>
             <div>
               <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'4px'}}>已质押金额</div>
               <div style={{fontSize:'20px', fontWeight:'700'}}>0.00 {product.code}</div>
             </div>
             <div style={{textAlign:'right'}}>
               <div style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'4px'}}>累计收益</div>
               <div style={{fontSize:'20px', fontWeight:'700', color:'#10b981'}}>0.00</div>
             </div>
          </div>
        </div>
      </div>

      <div className="action-bar" style={{ 
        padding:'20px 20px 40px', 
        borderTop:'1px solid var(--border)',
        display:'flex',
        gap:'180px',
        flexShrink:0
      }}>
         <Button variant="secondary" onClick={onRedeem} style={{flex:1, height:'50px', borderRadius:'12px'}}>赎回</Button>
         <Button onClick={onStake} style={{flex:2, height:'50px', borderRadius:'12px'}}>立即质押</Button>
      </div>
    </div>
  )
}