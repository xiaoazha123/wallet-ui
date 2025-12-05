function TasksPage() {
  const tasks = [
    { id:1, title:'每日签到', reward:'+10', done:false, btn:'去签到', icon:'📅', sub:'连续签到奖励更多' },
    { id:2, title:'邀请好友', reward:'+100/人', done:false, btn:'去邀请', icon:'👥', sub:'邀请无上限，多邀多得' },
    { id:3, title:'完成一笔交易', reward:'+50', done:true, btn:'已完成', icon:'💸', sub:'任意金额转账或兑换' },
    { id:4, title:'浏览市场行情', reward:'+20', done:false, btn:'去浏览', icon:'📈', sub:'关注 3 个以上币种' },
    { id:5, title:'参与治理投票', reward:'+30', done:false, btn:'去投票', icon:'🗳️', sub:'为社区提案投出一票' },
  ]
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <Card>
         <div className="list-head" style={{marginBottom:'16px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
           <div style={{fontSize:'18px', fontWeight:'700'}}>任务中心</div>
           <div style={{fontSize:'12px', color:'var(--text-muted)'}}>已完成 1/5</div>
         </div>
         
         <div style={{width:'100%', height:'6px', background:'#f3f4f6', borderRadius:'3px', marginBottom:'24px', overflow:'hidden'}}>
            <div style={{width:'20%', height:'100%', background:'var(--primary)', borderRadius:'3px'}}></div>
         </div>

         <div className="task-list" style={{display:'flex', flexDirection:'column', gap:'16px'}}>
           {tasks.map(t=>(
             <div key={t.id} className="task-row" style={{
               display:'flex', 
               alignItems:'center', 
               justifyContent:'space-between', 
               padding:'16px', 
               borderRadius:'16px',
               background:'#fff',
               boxShadow:'var(--shadow-sm)',
               border:'1px solid var(--border)',
               opacity: t.done ? 0.8 : 1
             }}>
                <div className="t-left" style={{display:'flex', gap:'12px', alignItems:'center'}}>
                  <div className="t-icon" style={{width:'40px', height:'40px', borderRadius:'12px', background:t.done?'#f3f4f6':'#eff6ff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px'}}>{t.icon}</div>
                  <div>
                    <div className="t-title" style={{fontSize:'15px', fontWeight:'600', marginBottom:'2px', color:'var(--text-main)'}}>{t.title}</div>
                    <div className="t-sub" style={{fontSize:'12px', color:'var(--text-muted)'}}>{t.sub}</div>
                  </div>
                </div>
                <div style={{textAlign:'right'}}>
                   <div className="t-reward" style={{fontSize:'13px', color:'#eab308', fontWeight:'600', marginBottom:'6px'}}>奖励 {t.reward}</div>
                   <button style={{
                     padding:'6px 12px', 
                     borderRadius:'12px', 
                     background: t.done ? '#f3f4f6' : 'var(--primary)', 
                     color: t.done ? 'var(--text-muted)' : '#fff', 
                     border:'none', 
                     fontSize:'12px', 
                     fontWeight:'600'
                   }} disabled={t.done}>{t.btn}</button>
                </div>
             </div>
           ))}
         </div>
      </Card>
    </div>
  )
}
