function StakingHome({ onDetail, onStakeNow, onBack }) {
  const [seg,setSeg] = useState('灵活存钱')
  const products = [
    { code:'USDT', apy:'8.5%', lock:'灵活', min:'100', icon:'$' },
    { code:'ETH', apy:'5.2%', lock:'灵活', min:'0.1', icon:'E' },
    { code:'USDT', apy:'10%', lock:'7天', min:'100', icon:'$' },
    { code:'BTC', apy:'4.5%', lock:'7天', min:'0.01', icon:'B' },
    { code:'USDT', apy:'12%', lock:'30天', min:'100', icon:'$' },
    { code:'USDT', apy:'15%', lock:'90天', min:'100', icon:'$' },
  ]
  const featured = { code:'USDT', apy:'12%', lock:'30天', min:'100', icon:'$' }

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>存钱</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div className="earn-hero" style={{
        background:'#fff', 
        borderRadius:'24px', 
        padding:'24px', 
        color:'var(--text-main)', 
        marginBottom:'24px',
        boxShadow:'var(--shadow-md)',
        margin:'0 20px 10px',
        border: '1px solid var(--border)'
      }}>
         <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'24px'}}>
           <div>
             <div style={{fontSize:'14px', opacity:0.8, marginBottom:'4px', color:'var(--text-muted)'}}>总存钱金额</div>
             <div style={{fontSize:'24px', fontWeight:'800', color:'var(--primary)'}}>¥ 12,450.00</div>
             <div style={{fontSize:'12px', opacity:0.8, marginTop:'4px', color:'var(--text-muted)'}}>≈ $1,718.23</div>
           </div>
           <div style={{textAlign:'right'}}>
             <div style={{fontSize:'12px', opacity:0.9, marginBottom:'4px', color:'var(--text-muted)'}}>累计收益</div>
             <div style={{fontSize:'18px', fontWeight:'700', color:'#16a34a'}}>+¥ 235.80</div>
           </div>
         </div>
         
         <div style={{background:'#f9fafb', borderRadius:'16px', padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', border:'1px solid var(--border)'}}>
           <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
             <div style={{fontSize:'13px', color:'var(--text-muted)'}}>今日收益</div>
             <div style={{fontSize:'16px', fontWeight:'700', color:'#16a34a'}}>+¥ 12.50</div>
           </div>
           <button style={{background:'#fff', border:'1px solid var(--border)', padding:'6px 12px', borderRadius:'12px', color:'var(--text-main)', fontSize:'12px', fontWeight:'600'}}>收益明细</button>
         </div>
      </div>

      <div className="no-scrollbar" style={{display:'flex', gap:'12px', marginBottom:'24px', overflowX:'auto', paddingBottom:'4px', margin:'0 20px 10px'}}>
         <div style={{
           minWidth:'260px', 
           background:'#fff', 
           borderRadius:'20px', 
           padding:'16px', 
           boxShadow:'var(--shadow-sm)', 
           border:'1px solid var(--border)',
           position:'relative',
           overflow:'hidden'
         }}>
            <div style={{position:'absolute', top:0, right:0, background:'#fef3c7', color:'#d97706', fontSize:'10px', padding:'4px 8px', borderBottomLeftRadius:'12px', fontWeight:'600'}}>限时活动</div>
            <div style={{display:'flex', gap:'12px', marginBottom:'12px'}}>
               <div style={{width:'40px', height:'40px', borderRadius:'50%', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px'}}>{featured.icon}</div>
               <div>
                 <div style={{fontSize:'16px', fontWeight:'700'}}>{featured.code} 30天定存</div>
                 <div style={{fontSize:'12px', color:'var(--text-muted)'}}>稳健增值首选</div>
               </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'end'}}>
               <div>
                 <div style={{fontSize:'24px', fontWeight:'700', color:'#10b981'}}>{featured.apy}</div>
                 <div style={{fontSize:'12px', color:'var(--text-muted)'}}>年化收益率</div>
               </div>
               <Button className="small" onClick={()=>onStakeNow(featured)}>立即存入</Button>
            </div>
         </div>
         
         <div style={{
           minWidth:'260px', 
           background:'#fff', 
           borderRadius:'20px', 
           padding:'16px', 
           boxShadow:'var(--shadow-sm)', 
           border:'1px solid var(--border)',
           display:'flex',
           flexDirection:'column',
           justifyContent:'center',
           alignItems:'center',
           textAlign:'center'
         }} onClick={()=>alert('更多活动敬请期待')}>
            <div style={{width:'48px', height:'48px', borderRadius:'50%', background:'#f0f9ff', color:'#0284c7', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'8px'}}><Icon name="plus"/></div>
            <div style={{fontSize:'14px', fontWeight:'600', color:'var(--text-muted)'}}>查看更多理财产品</div>
         </div>
      </div>

      <Card>
        <div className="tabs-modern" style={{display:'flex', background:'#f9fafb', borderRadius:'12px', padding:'4px', marginBottom:'20px'}}>
          {['灵活存钱','7天','30天','90天'].map(t=> (
            <button key={t} onClick={()=>setSeg(t)} style={{
              flex:1, 
              padding:'8px 0', 
              borderRadius:'10px', 
              border:'none', 
              background: seg===t ? '#fff' : 'transparent', 
              color: seg===t ? 'var(--text-main)' : 'var(--text-muted)', 
              fontWeight: seg===t ? '600' : '400', 
              boxShadow: seg===t ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
              fontSize:'13px',
              transition:'all 0.2s'
            }}>{t}</button>
          ))}
        </div>
        
        <div className="prod-list" style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          {products.filter(p=> (seg==='灵活存钱' && p.lock==='灵活') || p.lock===seg).map((p,i)=> (
            <div key={i} className="prod-item" style={{
              paddingBottom: i<products.length-1?'16px':'0', 
              borderBottom: i<products.length-1?'1px solid #f3f4f6':'none'
            }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px'}}>
                <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                  <div style={{width:'32px', height:'32px', borderRadius:'50%', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px'}}>{p.icon}</div>
                  <div style={{fontSize:'15px', fontWeight:'600'}}>{p.code}</div>
                </div>
                <div style={{fontSize:'12px', background:'#ecfdf5', color:'#059669', padding:'2px 8px', borderRadius:'4px'}}>低风险</div>
              </div>
              
              <div style={{display:'flex', justifyContent:'space-between', marginBottom:'16px'}}>
                <div>
                  <div style={{fontSize:'20px', fontWeight:'700', color:'#10b981'}}>{p.apy}</div>
                  <div style={{fontSize:'12px', color:'var(--text-muted)'}}>年化收益</div>
                </div>
                <div style={{textAlign:'center'}}>
                  <div style={{fontSize:'15px', fontWeight:'600'}}>{p.lock}</div>
                  <div style={{fontSize:'12px', color:'var(--text-muted)'}}>锁定期</div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontSize:'15px', fontWeight:'600'}}>{p.min}</div>
                  <div style={{fontSize:'12px', color:'var(--text-muted)'}}>起投数量</div>
                </div>
              </div>
              
              <div style={{display:'flex', gap:'12px'}}>
                <Button onClick={()=>onStakeNow(p)} style={{flex:1, height:'40px', fontSize:'14px'}}>立即存入</Button>
                <Button variant="secondary" onClick={()=>onDetail(p)} style={{flex:1, height:'40px', fontSize:'14px'}}>详情</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}