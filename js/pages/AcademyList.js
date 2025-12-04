function AcademyList({ onOpen }) {
  const [filter, setFilter] = useState('全部')
  const courses = [
    { title:'区块链基础', level:'初级', duration:'10m', author:'Planet 学院' },
    { title:'钱包安全指南', level:'初级', duration:'15m', author:'安全实验室' },
    { title:'智能合约开发', level:'高级', duration:'45m', author:'Dev DAO' },
    { title:'DeFi 投资策略', level:'中级', duration:'30m', author:'金融社' },
  ]
  const list = filter==='全部' ? courses : courses.filter(c=>c.level===filter)
  return (
    <div className="content">
       <div className="top-tabs">
         {['全部','初级','中级','高级'].map(t=> (
           <button key={t} className={`tab-btn ${filter===t?'active':''}`} onClick={()=>setFilter(t)}>{t}</button>
         ))}
       </div>
       <Card>
         <div className="course-list">
           {list.map((c,i)=>(
             <div key={i} className="course-item" onClick={()=>onOpen(c)}>
               <div className="course-left">
                 <div className="c-title">{c.title}</div>
                 <div className="c-sub">{c.level} · {c.duration} · {c.author}</div>
               </div>
               <div className="course-right">
                 <Button className="small" variant="secondary">学习</Button>
               </div>
             </div>
           ))}
         </div>
       </Card>
    </div>
  )
}
