function MorePage({ onTask, onPoints, onBack }) {
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>更多服务</div>
         <div style={{width:'40px'}}></div>
      </div>

      <Card>
        <div className="grid-menu" style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'12px'}}>
           <button className="grid-item" onClick={onTask} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', background:'none', border:'none', cursor:'pointer'}}>
             <div style={{width:'48px', height:'48px', borderRadius:'16px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#4b5563'}}><Icon name="copy" size={24} /></div>
             <span style={{fontSize:'12px', color:'var(--text-main)', fontWeight:'500'}}>任务</span>
           </button>
           <button className="grid-item" onClick={onPoints} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', background:'none', border:'none', cursor:'pointer'}}>
             <div style={{width:'48px', height:'48px', borderRadius:'16px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#4b5563'}}><Icon name="earn" size={24} /></div>
             <span style={{fontSize:'12px', color:'var(--text-main)', fontWeight:'500'}}>积分</span>
           </button>
        </div>
      </Card>
    </div>
  )
}
