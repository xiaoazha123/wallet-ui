function AcademyList({ onOpen, onBack }) {
  const [filter, setFilter] = useState('全部')
  const courses = [
    { title:'区块链基础', level:'初级', duration:'10m', author:'Planet 学院', img:'📘' },
    { title:'钱包安全指南', level:'初级', duration:'15m', author:'安全实验室', img:'🛡️' },
    { title:'智能合约开发', level:'高级', duration:'45m', author:'Dev DAO', img:'💻' },
    { title:'DeFi 投资策略', level:'中级', duration:'30m', author:'金融社', img:'📈' },
  ]
  const list = filter==='全部' ? courses : courses.filter(c=>c.level===filter)
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>Web3 学院</div>
         <div style={{width:'40px'}}></div>
      </div>

       <div className="top-tabs" style={{padding:'0 20px', marginBottom:'16px', display:'flex', gap:'12px', overflowX:'auto', scrollbarWidth:'none'}}>
         {['全部','初级','中级','高级'].map(t=> (
           <button key={t} 
             onClick={()=>setFilter(t)}
             style={{
               padding:'8px 16px', 
               borderRadius:'20px', 
               border: filter===t ? '1px solid var(--primary)' : '1px solid transparent', 
               background: filter===t ? '#fff' : '#f3f4f6', 
               color: filter===t ? 'var(--primary)' : 'var(--text-muted)', 
               fontWeight:'600', 
               fontSize:'13px',
               whiteSpace:'nowrap',
               cursor:'pointer'
             }}
           >{t}</button>
         ))}
       </div>
       
       <div className="course-list" style={{padding:'0 20px', paddingBottom:'100px', display:'flex', flexDirection:'column', gap:'16px'}}>
         {list.map((c,i)=>(
           <div key={i} className="course-item" onClick={()=>onOpen(c)} style={{
             background:'#fff', 
             borderRadius:'16px', 
             padding:'16px', 
             boxShadow:'var(--shadow-sm)',
             border:'1px solid var(--border)',
             display:'flex',
             gap:'16px'
           }}>
             <div className="course-img" style={{width:'80px', height:'80px', borderRadius:'12px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'32px'}}>{c.img}</div>
             <div className="course-info" style={{flex:1}}>
               <div className="c-title" style={{fontSize:'15px', fontWeight:'700', marginBottom:'6px', color:'var(--text-main)', lineHeight:'1.4'}}>{c.title}</div>
               <div className="c-sub" style={{fontSize:'12px', color:'var(--text-muted)', marginBottom:'12px'}}>{c.level} · {c.duration} · {c.author}</div>
               <div style={{width:'100%', height:'4px', background:'#f3f4f6', borderRadius:'2px', overflow:'hidden'}}>
                  <div style={{width:'40%', height:'100%', background:'var(--primary)', borderRadius:'2px'}}></div>
               </div>
             </div>
             <div className="course-right" style={{display:'flex', alignItems:'center'}}>
               <button style={{background:'#f3f4f6', color:'var(--text-main)', border:'none', padding:'8px 16px', borderRadius:'20px', fontSize:'12px', fontWeight:'600'}}>继续</button>
             </div>
           </div>
         ))}
       </div>
    </div>
  )
}
