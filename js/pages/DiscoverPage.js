function DiscoverPage({ onGame, onAcademy, onGameDetail, onCourseDetail, onToast }) {
  const banners = [
    { id:1, title:'星球争霸 S1', sub:'赢取百万奖池', color:'#4f46e5' },
    { id:2, title:'DeFi 训练营', sub:'小白变大神', color:'#ea580c' },
  ]
  
  const dapps = [
    { id:1, name:'Uniswap', cat:'DeFi', icon:'🦄' },
    { id:2, name:'OpenSea', cat:'NFT', icon:'🌊' },
    { id:3, name:'Aave', cat:'Lending', icon:'👻' },
    { id:4, name:'Compound', cat:'Lending', icon:'🟢' },
    { id:5, name:'1inch', cat:'DEX', icon:'🐴' },
    { id:6, name:'Curve', cat:'DEX', icon:'🌈' },
    { id:7, name:'DyDx', cat:'DEX', icon:'🟣' },
    { id:8, name:'Maker', cat:'DAO', icon:'MK' },
  ]

  const hotGames = [
    { id:1, name:'星际远征', cat:'SLG', players:'12k', desc:'探索宇宙，建立你的舰队', img:'🚀' },
    { id:2, name:'链上农场', cat:'Sim', players:'8.5k', desc:'种植作物，饲养动物', img:'🌾' },
  ]
  
  const newCourses = [
    { id:1, title:'区块链入门', level:'初级', duration:'15m', author:'Planet 学院' },
    { id:2, title:'DeFi 进阶', level:'中级', duration:'25m', author:'金融社' },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'0'}}>
      <TopNavBar title="发现" />
      {/* Banners */}
      <div className="banner-scroll no-scrollbar" style={{display:'flex', gap:'12px', overflowX:'auto', marginBottom:'24px', scrollbarWidth:'none', margin:'0 20px 10px'}}>
         {banners.map(b=>(
           <div key={b.id} onClick={()=>{ if(onToast) onToast('活动即将开始'); }} style={{
             minWidth:'280px', 
             height:'140px', 
             cursor: 'pointer',
             borderRadius:'20px', 
             background:b.color, 
             padding:'20px',
             color:'#fff',
             display:'flex',
             flexDirection:'column',
             justifyContent:'center',
             boxShadow:'var(--shadow-sm)'
           }}>
             <div style={{fontSize:'20px', fontWeight:'800', marginBottom:'8px'}}>{b.title}</div>
             <div style={{fontSize:'14px', opacity:0.9}}>{b.sub}</div>
             <div style={{marginTop:'16px', display:'inline-block', background:'rgba(255,255,255,0.2)', padding:'6px 12px', borderRadius:'20px', fontSize:'12px', width:'fit-content', fontWeight:'600'}}>立即参与</div>
           </div>
         ))}
      </div>

      <div className="section-head" style={{padding:'0 20px', marginBottom:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 20px 10px'}}>
         <div style={{fontSize:'18px', fontWeight:'700', color:'var(--text-main)'}}>推荐 DApp</div>
         <div style={{fontSize:'13px', color:'var(--primary)', fontWeight:'600', cursor:'pointer'}} onClick={()=>alert('更多DApp')}>查看更多</div>
      </div>

      <div className="dapp-grid" style={{
        display:'grid', 
        gridTemplateColumns:'repeat(4, 1fr)', 
        gap:'16px', 
        padding:'0 20px', 
        marginBottom:'32px'
      }}>
         {dapps.map(d=>(
           <div key={d.id} onClick={()=>{ if(onToast) onToast(`${d.name} 即将上线`); }} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', cursor:'pointer'}}>
              <div style={{width:'56px', height:'56px', borderRadius:'16px', background:'#fff', boxShadow:'var(--shadow-sm)', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>
                {d.icon}
              </div>
              <div style={{fontSize:'12px', color:'var(--text-main)', fontWeight:'500'}}>{d.name}</div>
           </div>
         ))}
      </div>

      <Card>
        <div className="list-head" style={{marginBottom:'16px'}}>
          <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)'}}>热门游戏</div>
          <button className="link" onClick={onGame} style={{color:'var(--primary)', fontSize:'13px', fontWeight:'600', border:'none', background:'none', cursor:'pointer'}}>全部</button>
        </div>
        <div className="h-list" style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          {hotGames.map(g=>(
            <div key={g.id} className="h-card" onClick={()=>onGameDetail(g)} style={{display:'flex', alignItems:'center', gap:'16px'}}>
              <div className="h-icon" style={{width:'60px', height:'60px', borderRadius:'16px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>{g.img}</div>
              <div className="h-info" style={{flex:1}}>
                <div className="h-name" style={{fontSize:'16px', fontWeight:'700', marginBottom:'4px'}}>{g.name}</div>
                <div className="h-meta" style={{fontSize:'12px', color:'var(--text-muted)'}}>{g.cat} · {g.players} 玩家</div>
              </div>
              <button style={{background:'#f3f4f6', color:'var(--text-main)', border:'none', padding:'8px 16px', borderRadius:'20px', fontSize:'12px', fontWeight:'600'}}>开始</button>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="list-head" style={{marginBottom:'16px'}}>
          <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)'}}>Web3 学院</div>
          <button className="link" onClick={onAcademy} style={{color:'var(--primary)', fontSize:'13px', fontWeight:'600', border:'none', background:'none', cursor:'pointer'}}>全部</button>
        </div>
        <div className="v-list" style={{display:'flex', flexDirection:'column', gap:'12px'}}>
          {newCourses.map(c=>(
            <div key={c.id} className="v-item" onClick={()=>onCourseDetail(c)} style={{padding:'12px', borderRadius:'12px', background:'#f9fafb', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
               <div className="v-info">
                 <div className="v-title" style={{fontSize:'14px', fontWeight:'600', marginBottom:'4px'}}>{c.title}</div>
                 <div className="v-meta" style={{fontSize:'12px', color:'var(--text-muted)'}}>{c.level} · {c.duration}</div>
               </div>
               <Icon name="right" size={16} style={{color:'var(--text-muted)'}} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
