function NewsDetailPage({ news, onBack, onCourse }) {
  const courses = [
    { id: 1, title: 'Web3 安全入门：防范钓鱼', time: '45分钟', tags: ['安全'] },
    { id: 2, title: '以太坊技术详解', time: '60分钟', tags: ['技术'] },
    { id: 3, title: 'DeFi 投资策略', time: '30分钟', tags: ['DeFi'] },
  ]
  const related = courses.filter(c => news.tags.some(t => c.tags.includes(t)))

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{marginBottom:'20px', padding:'0 20px'}}>
        <h1 style={{fontSize:'24px', fontWeight:'800', color:'var(--text-main)', lineHeight:'1.3', margin:'0 0 12px 0'}}>{news.title}</h1>
        <div style={{display:'flex', alignItems:'center', gap:'8px', fontSize:'13px', color:'var(--text-muted)'}}>
          <span style={{fontWeight:'600', color:'var(--primary)'}}>{news.source}</span>
          <span>·</span>
          <span>{news.time}</span>
        </div>
      </div>

      <div className="card-white" style={{padding:'20px', lineHeight:'1.8', fontSize:'15px', color:'#374151'}}>
        <p style={{marginTop:0}}>（这里是新闻详情内容）</p>
        <p>Web3 正在快速发展，近期发生的一系列事件表明行业正在向更成熟的方向演进。本快讯旨在为您提供最新的市场动态和技术进展。</p>
        <p>用户在参与相关项目时，务必注意资产安全，核对合约地址，避免因盲目操作导致资产损失。</p>
        
        <div style={{display:'flex', gap:'12px', marginTop:'32px', paddingTop:'20px', borderTop:'1px solid var(--border)'}}>
          <button style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'6px', padding:'10px', borderRadius:'12px', border:'1px solid var(--border)', background:'#fff', color:'var(--text-main)', fontSize:'14px', fontWeight:'600', cursor:'pointer'}} onClick={()=>alert('已收藏')}>
            <Icon name="menu" size={16} /> 收藏
          </button>
          <button style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'6px', padding:'10px', borderRadius:'12px', border:'1px solid var(--border)', background:'#fff', color:'var(--text-main)', fontSize:'14px', fontWeight:'600', cursor:'pointer'}} onClick={()=>alert('分享链接已复制')}>
            <Icon name="invite" size={16} /> 分享
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <div style={{margin:'0 20px 40px'}}>
          <div style={{fontSize:'16px', fontWeight:'700', marginBottom:'16px', color:'var(--text-main)'}}>相关课程推荐</div>
          <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
            {related.map((c,i)=>(
              <div key={i} onClick={()=>onCourse(c)} style={{
                background:'#fff', 
                padding:'16px', 
                borderRadius:'16px', 
                boxShadow:'var(--shadow-sm)',
                border:'1px solid var(--border)',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                cursor:'pointer'
              }}>
                 <div>
                   <div style={{fontWeight:'600', fontSize:'15px', marginBottom:'4px', color:'var(--text-main)'}}>{c.title}</div>
                   <div style={{fontSize:'12px', color:'var(--text-muted)'}}>{c.time}</div>
                 </div>
                 <div style={{
                   width:'32px', 
                   height:'32px', 
                   borderRadius:'16px', 
                   background:'#eff6ff', 
                   color:'var(--primary)', 
                   display:'flex', 
                   alignItems:'center', 
                   justifyContent:'center'
                 }}>
                   <Icon name="yes" size={16} />
                 </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
