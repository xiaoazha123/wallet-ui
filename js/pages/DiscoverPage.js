function DiscoverPage({ onGame, onAcademy, onGameDetail, onCourseDetail }) {
  const hotGames = [
    { id:1, name:'星际远征', cat:'SLG', players:'12k', desc:'探索宇宙，建立你的舰队' },
    { id:2, name:'链上农场', cat:'Sim', players:'8.5k', desc:'种植作物，饲养动物' },
  ]
  const newCourses = [
    { id:1, title:'区块链入门', level:'初级', duration:'15m', author:'Planet 学院' },
    { id:2, title:'DeFi 进阶', level:'中级', duration:'25m', author:'金融社' },
  ]
  return (
    <div className="content">
      <Card>
        <div className="list-head">
          <div>热门游戏</div>
          <button className="link" onClick={onGame}>查看全部</button>
        </div>
        <div className="h-list">
          {hotGames.map(g=>(
            <div key={g.id} className="h-card" onClick={()=>onGameDetail(g)}>
              <div className="h-icon"><Icon name="game" /></div>
              <div className="h-name">{g.name}</div>
              <div className="h-meta">{g.cat} · {g.players}</div>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <div className="list-head">
          <div>最新课程</div>
          <button className="link" onClick={onAcademy}>查看全部</button>
        </div>
        <div className="v-list">
          {newCourses.map(c=>(
            <div key={c.id} className="v-item" onClick={()=>onCourseDetail(c)}>
               <div className="v-info">
                 <div className="v-title">{c.title}</div>
                 <div className="v-meta">{c.level} · {c.duration}</div>
               </div>
               <Icon name="down" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
