function CourseDetail({ course, onComplete }) {
  const chapters = [
    { title:'1. 什么是区块链', time:'05:00', status:'completed' },
    { title:'2. 去中心化的意义', time:'03:20', status:'current' },
    { title:'3. 共识机制', time:'08:10', status:'locked' },
  ]
  return (
    <div className="content">
      <Card>
        <div className="course-header">
          <div className="ch-tag">{course.level}</div>
          <div className="ch-title">{course.title}</div>
          <div className="ch-meta">时长 {course.duration} · 讲师 {course.author || 'Planet 官方'}</div>
        </div>
        <div className="course-intro">
          本课程将带你深入了解{course.title}的核心概念与应用场景，适合{course.level}用户学习。
        </div>
        <div className="row">
           <Button onClick={onComplete}>开始学习</Button>
        </div>
      </Card>
      <Card>
        <div className="list-head">课程目录</div>
        <div className="chapter-list">
          {chapters.map((c,i)=>(
            <div key={i} className={`chapter-item ${c.status}`}>
              <div className="chap-icon">
                {c.status==='completed' ? <Icon name="yes" size={12} /> : (i+1)}
              </div>
              <div className="chap-info">
                <div className="chap-title">{c.title}</div>
                <div className="chap-time">{c.time}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
