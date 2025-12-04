function GameList({ onEnter }) {
   const [tab, setTab] = useState('热门')
   const games = [
     { name:'星际远征', desc:'探索宇宙，建立你的舰队', cat:'SLG', players:'12k', tags:['P2E','战斗'] },
     { name:'链上农场', desc:'种植作物，饲养动物', cat:'Sim', players:'8.5k', tags:['休闲','NFT'] },
     { name:'勇者斗恶龙', desc:'回合制RPG冒险', cat:'RPG', players:'5k', tags:['冒险'] },
     { name:'加密赛车', desc:'极速竞技，赢取奖励', cat:'Racing', players:'3k', tags:['竞技'] },
   ]
   return (
     <div className="content">
       <div className="top-tabs">
         {['热门','最新','策略','休闲'].map(t=> (
           <button key={t} className={`tab-btn ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
         ))}
       </div>
       <Card>
         <div className="game-list">
           {games.map((g,i)=>(
             <div key={i} className="game-item" onClick={()=>onEnter(g)}>
               <div className="game-icon-lg"><Icon name="game" /></div>
               <div className="game-info">
                 <div className="game-name">{g.name}</div>
                 <div className="game-desc">{g.desc}</div>
                 <div className="game-tags">
                   <span className="tag-s">{g.cat}</span>
                   {g.tags.map(t=><span key={t} className="tag-s">{t}</span>)}
                 </div>
               </div>
               <Button className="small" variant="secondary">开始</Button>
             </div>
           ))}
         </div>
       </Card>
     </div>
   )
}
