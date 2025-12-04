function GameDetail({ game, onTx }) {
  return (
    <div className="content">
      <Card>
        <div className="detail-header">
           <div className="dh-icon"><Icon name="game" size={40} /></div>
           <div className="dh-content">
             <div className="dh-title">{game.name}</div>
             <div className="dh-meta">{game.cat} · {game.players || '10k+'} 玩家</div>
           </div>
        </div>
        <div className="game-desc-box">
          {game.desc}。这是一个建立在 Planet 链上的去中心化应用。玩家可以通过游戏内活动获取代币奖励。
        </div>
        <div className="stat-row">
           <div className="stat-box">
             <div className="sb-label">地板价</div>
             <div className="sb-val">120 PNT</div>
           </div>
           <div className="stat-box">
             <div className="sb-label">24h 交易</div>
             <div className="sb-val">1.2M</div>
           </div>
        </div>
        <div className="row">
          <Button onClick={()=>onTx('连接钱包')}>连接钱包</Button>
          <Button variant="secondary" onClick={()=>onTx('访问官网')}>访问官网</Button>
        </div>
      </Card>
      <Card>
        <div className="list-head">最新动态</div>
        <div className="news-item">
          <div className="news-title">S1 赛季开启公告</div>
          <div className="news-date">2025-10-01</div>
        </div>
        <div className="news-item">
          <div className="news-title">维护更新说明</div>
          <div className="news-date">2025-09-28</div>
        </div>
      </Card>
    </div>
  )
}
