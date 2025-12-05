function InvestHome({ onBuy }) {
  const [tab, setTab] = useState('earn')
  
  const holdings = [
    { name: 'PNT', amount: '1,200', val: '¥ 2,808', profit: '+12.5%', icon:'P' },
    { name: 'USDT 活期', amount: '500', val: '¥ 3,500', profit: '+0.05%', icon:'$' },
  ]

  const defiList = [
    { name: 'USDT 活期宝', tags: ['保本','灵活'], apy: '5.2%', icon: '$' },
    { name: 'ETH 2.0 质押', tags: ['热门'], apy: '3.8%', icon: 'E' },
    { name: 'TRX 超级节点', tags: ['高收益'], apy: '8.1%', icon: 'T' },
    { name: 'BTC 定投计划', tags: ['稳健'], apy: '15.2%', icon: 'B' },
  ]

  const rwaList = [
    { title: '新加坡商业地产基金 I 期', desc: '持有核心商业区写字楼收益权', apy: '8.5%', progress: 65, raised: '6.5M / 10M' },
    { title: '绿色能源债券 2025', desc: '投资太阳能发电站项目', apy: '6.2%', progress: 30, raised: '300K / 1M' },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div className="invest-overview" style={{
        background:'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', 
        borderRadius:'24px', 
        padding:'24px', 
        color:'#fff', 
        marginBottom:'24px',
        boxShadow:'0 10px 25px rgba(2, 132, 199, 0.3)',
        margin: '0 20px 24px'
      }}>
        <div style={{fontSize:'14px', opacity:0.9, marginBottom:'4px'}}>总投资资产 (CNY)</div>
        <div style={{fontSize:'32px', fontWeight:'800', marginBottom:'20px'}}>¥ 6,308.00</div>
        <div style={{display:'flex', gap:'24px'}}>
           <div>
             <div style={{fontSize:'12px', opacity:0.8, marginBottom:'4px'}}>累计收益</div>
             <div style={{fontSize:'10px', fontWeight:'700', color:'#bef264'}}>+¥ 128.50</div>
           </div>
           <div>
             <div style={{fontSize:'13px', opacity:0.8, marginBottom:'4px'}}>昨日收益</div>
             <div style={{fontSize:'18px', fontWeight:'700', color:'#bef264'}}>+¥ 12.30</div>
           </div>
        </div>
      </div>

      <div className="invest-grid" style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'12px', marginBottom:'24px', margin:'0 20px 24px'}}>
        <div onClick={()=>alert('定投功能开发中')} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px'}}>
          <div style={{width:'48px', height:'48px', borderRadius:'16px', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', color:'#0ea5e9', boxShadow:'var(--shadow-sm)', border:'1px solid var(--border)'}}><Icon name="chart" /></div>
          <div style={{fontSize:'12px', fontWeight:'600', color:'var(--text-main)'}}>定投</div>
        </div>
        <div onClick={()=>setTab('earn')} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px'}}>
          <div style={{width:'48px', height:'48px', borderRadius:'16px', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', color:'#8b5cf6', boxShadow:'var(--shadow-sm)', border:'1px solid var(--border)'}}><Icon name="earn" /></div>
          <div style={{fontSize:'12px', fontWeight:'600', color:'var(--text-main)'}}>理财</div>
        </div>
        <div onClick={()=>setTab('rwa')} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px'}}>
          <div style={{width:'48px', height:'48px', borderRadius:'16px', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', color:'#f59e0b', boxShadow:'var(--shadow-sm)', border:'1px solid var(--border)'}}><Icon name="invest" /></div>
          <div style={{fontSize:'12px', fontWeight:'600', color:'var(--text-main)'}}>RWA</div>
        </div>
        <div onClick={onBuy} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px'}}>
          <div style={{width:'48px', height:'48px', borderRadius:'16px', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', color:'#10b981', boxShadow:'var(--shadow-sm)', border:'1px solid var(--border)'}}><Icon name="plus" /></div>
          <div style={{fontSize:'12px', fontWeight:'600', color:'var(--text-main)'}}>买币</div>
        </div>
      </div>

      <Card>
        <div className="tabs-modern" style={{display:'flex', background:'#f9fafb', borderRadius:'12px', padding:'4px', marginBottom:'20px'}}>
          {['earn','holdings','rwa'].map(t=> (
            <button key={t} onClick={()=>setTab(t)} style={{
              flex:1, 
              padding:'8px 0', 
              borderRadius:'10px', 
              border:'none', 
              background: tab===t ? '#fff' : 'transparent', 
              color: tab===t ? 'var(--text-main)' : 'var(--text-muted)', 
              fontWeight: tab===t ? '600' : '400', 
              boxShadow: tab===t ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
              fontSize:'13px',
              transition:'all 0.2s'
            }}>
              {t==='earn'?'理财推荐':t==='holdings'?'我的持仓':'RWA/新币'}
            </button>
          ))}
        </div>

        {tab === 'holdings' && (
          <div className="asset-list" style={{display:'flex', flexDirection:'column', gap:'16px'}}>
            {holdings.map((h,i) => (
              <div key={i} className="asset-item" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                  <div style={{width:'40px', height:'40px', borderRadius:'50%', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px'}}>{h.icon}</div>
                  <div>
                    <div style={{fontSize:'15px', fontWeight:'600', marginBottom:'2px'}}>{h.name}</div>
                    <div style={{fontSize:'13px', color:'var(--text-muted)'}}>{h.amount}</div>
                  </div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontSize:'15px', fontWeight:'600'}}>{h.val}</div>
                  <div style={{fontSize:'12px', color:'#10b981'}}>{h.profit}</div>
                </div>
              </div>
            ))}
            <div className="row" style={{marginTop:'16px'}}>
               <Button variant="secondary" className="small" onClick={onBuy} style={{width:'100%', height:'44px', borderRadius:'22px'}}>+ 添加资产</Button>
            </div>
          </div>
        )}

        {tab === 'earn' && (
          <div className="list-col" style={{display:'flex', flexDirection:'column', gap:'16px'}}>
            {defiList.map((d,i) => (
              <div key={i} className="defi-item" style={{display:'flex', alignItems:'center', justifyContent:'space-between', paddingBottom: i<defiList.length-1?'16px':'0', borderBottom: i<defiList.length-1?'1px solid #f3f4f6':'none'}}>
                <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                  <div style={{width:'40px', height:'40px', borderRadius:'50%', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px'}}>{d.icon}</div>
                  <div>
                    <div style={{fontSize:'15px', fontWeight:'600', marginBottom:'4px'}}>{d.name}</div>
                    <div style={{display:'flex', gap:'4px'}}>
                      {d.tags.map(t=><span key={t} style={{fontSize:'10px', padding:'2px 6px', borderRadius:'4px', background: t==='热门'||t==='高收益'?'#fef3c7':'#f3f4f6', color: t==='热门'||t==='高收益'?'#d97706':'var(--text-muted)'}}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontSize:'18px', fontWeight:'700', color:'#10b981'}}>{d.apy}</div>
                  <div style={{fontSize:'11px', color:'var(--text-muted)'}}>预计年化</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'rwa' && (
          <div className="list-col" style={{display:'flex', flexDirection:'column', gap:'16px'}}>
            {rwaList.map((r,i) => (
              <div key={i} className="rwa-card" style={{background:'#f9fafb', borderRadius:'16px', padding:'16px', border:'1px solid var(--border)'}}>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'8px'}}>
                  <div style={{fontSize:'10px', background:'#dcfce7', color:'#16a34a', padding:'2px 8px', borderRadius:'4px', fontWeight:'600'}}>进行中</div>
                </div>
                <div style={{fontSize:'15px', fontWeight:'700', marginBottom:'4px'}}>{r.title}</div>
                <div style={{fontSize:'12px', color:'var(--text-muted)', marginBottom:'12px'}}>{r.desc}</div>
                
                <div style={{height:'6px', background:'#e5e7eb', borderRadius:'3px', marginBottom:'8px', overflow:'hidden'}}>
                  <div style={{width:`${r.progress}%`, height:'100%', background:'var(--primary)', borderRadius:'3px'}}></div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', color:'var(--text-muted)', marginBottom:'12px'}}>
                   <span>已募 {r.raised}</span>
                   <span>{r.progress}%</span>
                </div>
                
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px dashed #e5e7eb', paddingTop:'12px'}}>
                   <div>
                     <div style={{fontSize:'11px', color:'var(--text-muted)'}}>目标年化</div>
                     <div style={{fontSize:'16px', fontWeight:'700', color:'#f59e0b'}}>{r.apy}</div>
                   </div>
                   <Button className="small" onClick={()=>alert('RWA 详情页')} style={{padding:'6px 16px', borderRadius:'16px', fontSize:'12px'}}>立即参与</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}