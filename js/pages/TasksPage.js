function TasksPage() {
  const tasks = [
    { id:1, title:'每日签到', reward:'+10', done:false, btn:'去签到' },
    { id:2, title:'邀请好友', reward:'+100/人', done:false, btn:'去邀请' },
    { id:3, title:'完成一笔交易', reward:'+50', done:true, btn:'已完成' },
    { id:4, title:'浏览市场行情', reward:'+20', done:false, btn:'去浏览' },
    { id:5, title:'参与治理投票', reward:'+30', done:false, btn:'去投票' },
  ]
  return (
    <div className="content">
      <Card>
         <div className="list-head">任务中心</div>
         <div className="task-list">
           {tasks.map(t=>(
             <div key={t.id} className="task-row" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 0', borderBottom:'1px solid var(--border)'}}>
                <div className="t-left">
                  <div className="t-title" style={{fontSize:'15px', fontWeight:'600'}}>{t.title}</div>
                  <div className="t-reward" style={{fontSize:'12px', color:'#eab308', marginTop:'4px'}}>奖励 {t.reward} 积分</div>
                </div>
                <Button className="small" variant={t.done?'secondary':'primary'} disabled={t.done}>{t.btn}</Button>
             </div>
           ))}
         </div>
      </Card>
    </div>
  )
}
