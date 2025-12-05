function GameList({ onEnter }) {
   const [tab, setTab] = useState('热门')
   const games = [
     { name:'星际远征', desc:'探索宇宙，建立你的舰队', cat:'SLG', players:'12k', tags:['P2E','战斗'], img:'🚀' },
     { name:'链上农场', desc:'种植作物，饲养动物', cat:'Sim', players:'8.5k', tags:['休闲','NFT'], img:'🌾' },
     { name:'勇者斗恶龙', desc:'回合制RPG冒险', cat:'RPG', players:'5k', tags:['冒险'], img:'⚔️' },
     { name:'加密赛车', desc:'极速竞技，赢取奖励', cat:'Racing', players:'3k', tags:['竞技'], img:'🏎️' },
   ]
   return (
     <div className="content-padded" style={{paddingTop:'12px'}}>
       <div className="top-tabs" style={{marginBottom:'16px', display:'flex', gap:'6px', overflowX:'auto', scrollbarWidth:'none', margin:'0 20px 20px'}}>
         {['热门','最新','策略','休闲','竞技','角色扮演'].map(t=> (
           <button key={t} 
             onClick={()=>setTab(t)}
             style={{
               padding:'8px 16px', 
               borderRadius:'20px', 
               border: tab===t ? '1px solid var(--primary)' : '1px solid transparent', 
               background: tab===t ? '#fff' : '#f3f4f6', 
               color: tab===t ? 'var(--primary)' : 'var(--text-muted)', 
               fontWeight:'600', 
               fontSize:'13px',
               whiteSpace:'nowrap',
               cursor:'pointer'
             }}
           >{t}</button>
         ))}
       </div>

       <div className="game-list" style={{padding:'0 20px', paddingBottom:'100px'}}>
         {games.map((g,i)=>(
           <div key={i} className="game-item" onClick={()=>onEnter(g)} style={{
             background:'#fff', 
             borderRadius:'16px', 
             padding:'16px', 
             marginBottom:'16px', 
             boxShadow:'var(--shadow-sm)',
             border:'1px solid var(--border)',
             display:'flex',
             gap:'16px'
           }}>
             <div className="game-icon-lg" style={{width:'80px', height:'80px', borderRadius:'16px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'32px'}}>{g.img}</div>
             <div className="game-info" style={{flex:1}}>
               <div className="game-name" style={{fontSize:'16px', fontWeight:'700', marginBottom:'4px', color:'var(--text-main)'}}>{g.name}</div>
               <div className="game-desc" style={{fontSize:'13px', color:'var(--text-muted)', marginBottom:'8px', lineHeight:'1.4'}}>{g.desc}</div>
               <div className="game-tags" style={{display:'flex', gap:'6px', flexWrap:'wrap'}}>
                 <span className="tag-s" style={{fontSize:'10px', padding:'2px 6px', background:'#e0e7ff', color:'var(--primary)', borderRadius:'4px'}}>{g.cat}</span>
                 {g.tags.map(t=><span key={t} className="tag-s" style={{fontSize:'10px', padding:'2px 6px', background:'#f3f4f6', color:'var(--text-muted)', borderRadius:'4px'}}>{t}</span>)}
               </div>
             </div>
             <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <button style={{
                  background:'var(--primary)', 
                  color:'#fff', 
                  border:'none', 
                  padding:'8px 16px', 
                  borderRadius:'20px', 
                  fontSize:'13px', 
                  fontWeight:'600',
                  cursor:'pointer'
                }}>开始</button>
             </div>
           </div>
         ))}
       </div>
     </div>
   )
}
