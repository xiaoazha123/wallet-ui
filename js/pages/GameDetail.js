function GameDetail({ game, onTx }) {
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div className="game-hero" style={{
        background:'#1f2937', 
        borderRadius:'24px', 
        padding:'24px', 
        color:'#fff',
        marginBottom:'20px',
        position:'relative',
        overflow:'hidden',
        margin:'0 20px 20px'
      }}>
         <div style={{position:'relative', zIndex:2, textAlign:'center'}}>
            <div className="dh-icon" style={{width:'80px', height:'80px', borderRadius:'20px', background:'#fff', margin:'0 auto 16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'40px', color:'#000'}}>{game.img}</div>
            <div className="dh-title" style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>{game.name}</div>
            <div className="dh-meta" style={{fontSize:'14px', opacity:0.8, marginBottom:'20px'}}>{game.cat} · {game.players || '10k+'} 玩家在线</div>
            
            <div className="row" style={{gap:'12px'}}>
              <button onClick={()=>onTx('连接钱包')} style={{flex:1, background:'var(--primary)', color:'#fff', border:'none', padding:'12px', borderRadius:'24px', fontWeight:'600', fontSize:'15px'}}>连接钱包</button>
              <button onClick={()=>onTx('访问官网')} style={{flex:1, background:'rgba(255,255,255,0.1)', color:'#fff', border:'1px solid rgba(255,255,255,0.2)', padding:'12px', borderRadius:'24px', fontWeight:'600', fontSize:'15px'}}>访问官网</button>
            </div>
         </div>
      </div>

      <div className="stat-row" style={{display:'flex', gap:'12px', marginBottom:'24px', margin:'0 20px 20px'}}>
         <div className="stat-box" style={{flex:1, background:'#fff', padding:'16px', borderRadius:'16px', textAlign:'center', border:'1px solid var(--border)', boxShadow:'var(--shadow-sm)'}}>
           <div className="sb-label" style={{fontSize:'12px', color:'var(--text-muted)', marginBottom:'4px'}}>地板价</div>
           <div className="sb-val" style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)'}}>120 PNT</div>
         </div>
         <div className="stat-box" style={{flex:1, background:'#fff', padding:'16px', borderRadius:'16px', textAlign:'center', border:'1px solid var(--border)', boxShadow:'var(--shadow-sm)'}}>
           <div className="sb-label" style={{fontSize:'12px', color:'var(--text-muted)', marginBottom:'4px'}}>24h 交易量</div>
           <div className="sb-val" style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)'}}>1.2M</div>
         </div>
      </div>

      <Card>
        <div style={{marginBottom:'20px'}}>
          <div className="list-head" style={{marginBottom:'12px'}}>游戏简介</div>
          <div className="game-desc-box" style={{fontSize:'14px', lineHeight:'1.6', color:'var(--text-muted)'}}>
            {game.desc}。这是一个建立在 Planet 链上的去中心化应用。玩家可以通过游戏内活动获取代币奖励，并在市场中自由交易 NFT 资产。
          </div>
        </div>

        <div>
          <div className="list-head" style={{marginBottom:'12px'}}>最新动态</div>
          <div className="news-item" style={{padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
            <div className="news-title" style={{fontSize:'14px', fontWeight:'600', marginBottom:'4px'}}>S1 赛季开启公告</div>
            <div className="news-date" style={{fontSize:'12px', color:'var(--text-muted)'}}>2025-10-01</div>
          </div>
          <div className="news-item" style={{padding:'12px 0'}}>
            <div className="news-title" style={{fontSize:'14px', fontWeight:'600', marginBottom:'4px'}}>维护更新说明</div>
            <div className="news-date" style={{fontSize:'12px', color:'var(--text-muted)'}}>2025-09-28</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
