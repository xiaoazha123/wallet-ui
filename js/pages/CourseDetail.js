function CourseDetail({ course, onComplete }) {
  const chapters = [
    { title:'1. 什么是区块链', time:'05:00', status:'completed' },
    { title:'2. 去中心化的意义', time:'03:20', status:'current' },
    { title:'3. 共识机制', time:'08:10', status:'locked' },
    { title:'4. 智能合约入门', time:'12:30', status:'locked' },
  ]
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div className="course-header-card" style={{
        background:'#4f46e5', 
        borderRadius:'24px', 
        padding:'24px', 
        color:'#fff',
        marginBottom:'20px',
        position:'relative',
        overflow:'hidden',
        margin:'0 20px 20px'
      }}>
         <div style={{position:'relative', zIndex:2}}>
            <div className="ch-tag" style={{display:'inline-block', background:'rgba(255,255,255,0.2)', padding:'4px 8px', borderRadius:'8px', fontSize:'12px', marginBottom:'12px'}}>{course.level}</div>
            <div className="ch-title" style={{fontSize:'24px', fontWeight:'700', marginBottom:'8px', lineHeight:'1.3'}}>{course.title}</div>
            <div className="ch-meta" style={{fontSize:'14px', opacity:0.9, marginBottom:'20px'}}>时长 {course.duration} · 讲师 {course.author || 'Planet 官方'}</div>
            
            <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
               <button onClick={onComplete} style={{background:'#fff', color:'var(--primary)', border:'none', padding:'10px 24px', borderRadius:'20px', fontWeight:'600', fontSize:'14px'}}>开始学习</button>
               <div style={{fontSize:'12px', opacity:0.8}}>已学习 30%</div>
            </div>
         </div>
         <div style={{position:'absolute', right:'-20px', bottom:'-20px', fontSize:'120px', opacity:0.1}}>{course.img}</div>
      </div>

      <Card>
        <div className="list-head" style={{marginBottom:'16px'}}>课程目录</div>
        <div className="chapter-list" style={{display:'flex', flexDirection:'column', gap:'4px'}}>
          {chapters.map((c,i)=>(
            <div key={i} className={`chapter-item ${c.status}`} style={{
              padding:'16px', 
              borderRadius:'12px', 
              display:'flex', 
              alignItems:'center', 
              gap:'16px',
              background: c.status==='current' ? '#f0f9ff' : 'transparent',
              border: c.status==='current' ? '1px solid #bae6fd' : '1px solid transparent'
            }}>
              <div className="chap-icon" style={{
                width:'24px', 
                height:'24px', 
                borderRadius:'12px', 
                background: c.status==='completed' ? '#dcfce7' : (c.status==='current' ? '#e0f2fe' : '#f3f4f6'), 
                display:'flex', 
                alignItems:'center', 
                justifyContent:'center',
                color: c.status==='completed' ? '#16a34a' : (c.status==='current' ? '#0284c7' : '#9ca3af'),
                fontSize:'12px',
                fontWeight:'600'
              }}>
                {c.status==='completed' ? <Icon name="yes" size={14} /> : (i+1)}
              </div>
              <div className="chap-info" style={{flex:1}}>
                <div className="chap-title" style={{fontSize:'14px', fontWeight:'600', color: c.status==='locked'?'var(--text-muted)':'var(--text-main)', marginBottom:'4px'}}>{c.title}</div>
                <div className="chap-time" style={{fontSize:'12px', color:'var(--text-muted)'}}>{c.time}</div>
              </div>
              {c.status==='locked' && <Icon name="lock" size={14} style={{color:'var(--text-muted)'}} />}
              {c.status==='current' && <div style={{padding:'4px 8px', background:'#0ea5e9', color:'#fff', borderRadius:'8px', fontSize:'10px'}}>进行中</div>}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
