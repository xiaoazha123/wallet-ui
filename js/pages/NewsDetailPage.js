function NewsDetailPage({ news, onBack, onCourse }) {
  const courses = [
    { id: 1, title: 'Web3 安全入门：防范钓鱼', time: '45分钟', tags: ['安全'] },
    { id: 2, title: '以太坊技术详解', time: '60分钟', tags: ['技术'] },
    { id: 3, title: 'DeFi 投资策略', time: '30分钟', tags: ['DeFi'] },
  ]
  const related = courses.filter(c => news.tags.some(t => c.tags.includes(t)))

  return (
    <div className="content">
      <Card>
         <h1 style={{fontSize:'20px', margin:'0 0 12px 0'}}>{news.title}</h1>
         <div className="news-meta" style={{marginBottom:'16px'}}>
           <span>{news.source} · {news.time}</span>
         </div>
         <div className="news-detail-body">
           <p>（这里是新闻详情内容）</p>
           <p>Web3 正在快速发展，近期发生的一系列事件表明行业正在向更成熟的方向演进。本快讯旨在为您提供最新的市场动态和技术进展。</p>
           <p>用户在参与相关项目时，务必注意资产安全，核对合约地址，避免因盲目操作导致资产损失。</p>
         </div>
         <div className="news-actions">
           <Button variant="secondary" onClick={()=>alert('已收藏')}>收藏</Button>
           <Button variant="secondary" onClick={()=>alert('分享链接已复制')}>分享</Button>
         </div>
      </Card>

      {related.length > 0 && (
        <Card>
          <div className="list-head">相关课程推荐</div>
          <div className="course-list">
            {related.map((c,i)=>(
              <div key={i} className="course-item" onClick={()=>onCourse(c)}>
                 <div className="course-left">
                   <div className="c-title">{c.title}</div>
                   <div className="c-sub">{c.time}</div>
                 </div>
                 <Button className="small" variant="secondary">学习</Button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
