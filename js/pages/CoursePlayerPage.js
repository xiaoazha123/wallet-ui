// CoursePlayerPage.js
function CoursePlayerPage({ course, lesson, onBack, onNext }) {
  // Mock video player interface
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(30); // 30% progress

  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulse {
        0% { opacity: 0.6; transform: scale(0.98); }
        50% { opacity: 1; transform: scale(1); }
        100% { opacity: 0.6; transform: scale(0.98); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="content-padded" style={{paddingTop:'0', height:'100vh', display:'flex', flexDirection:'column', background:'#fff'}}>
      {/* Custom Header for Player */}
      <div style={{display:'flex', alignItems:'center', padding:'12px 16px', borderBottom:'1px solid #f3f4f6'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'4px', cursor:'pointer', color:'var(--text-main)', marginRight:'12px'}}>
           <Icon name="back" size={24} />
         </button>
         <div style={{flex:1}}>
           <div style={{fontSize:'14px', color:'var(--text-muted)'}}>{course.title}</div>
           <div style={{fontSize:'16px', fontWeight:'700', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{lesson.title}</div>
         </div>
         <button style={{background:'none', border:'none', padding:'8px'}}><Icon name="more" size={24} /></button>
      </div>

      {/* Video Player Area */}
      <div style={{
        width:'100%', 
        aspectRatio:'16/9', 
        background:'#000', 
        position:'relative',
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center',
        color:'#fff'
      }}>
        {isPlaying ? (
           <div style={{width:'100%', height:'100%', background:'#111', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div style={{animation:'pulse 2s infinite'}}>正在播放...</div>
           </div>
        ) : (
           <div onClick={()=>setIsPlaying(true)} style={{cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center'}}>
             <div style={{
               width:'60px', height:'60px', borderRadius:'30px', background:'rgba(255,255,255,0.2)', 
               display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)'
             }}>
               <Icon name="play" size={30} style={{marginLeft:'4px'}} />
             </div>
             <div style={{marginTop:'12px', fontSize:'14px'}}>点击开始学习</div>
           </div>
        )}
        
        {/* Progress Bar */}
        <div style={{position:'absolute', bottom:0, left:0, right:0, height:'4px', background:'rgba(255,255,255,0.3)'}}>
          <div style={{width:`${progress}%`, height:'100%', background:'var(--primary)'}}></div>
        </div>
      </div>

      {/* Content Area */}
      <div style={{flex:1, overflowY:'auto', padding:'20px', display:'flex', flexDirection:'column'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
           <div style={{fontSize:'20px', fontWeight:'700'}}>{lesson.title}</div>
           <div style={{padding:'4px 12px', background:'#f0f9ff', color:'var(--primary)', borderRadius:'12px', fontSize:'12px', fontWeight:'600'}}>
             正在学习
           </div>
        </div>

        <div style={{color:'var(--text-secondary)', lineHeight:'1.6', fontSize:'15px', marginBottom:'30px'}}>
          <p>本节课程将为您详细讲解{lesson.title.split(' ')[1] || '区块链核心概念'}。</p>
          <p>您将了解到去中心化网络的基本运作原理，以及它是如何改变我们对价值传输的认知的。</p>
          <p>学习重点：</p>
          <ul style={{paddingLeft:'20px', marginTop:'10px'}}>
            <li>核心概念解析</li>
            <li>实际应用场景</li>
            <li>未来发展趋势</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div style={{display:'flex', gap:'12px', marginTop:'auto'}}>
           <button style={{
             flex:1, padding:'14px', borderRadius:'12px', border:'1px solid var(--border)', 
             background:'#fff', color:'var(--text-main)', fontWeight:'600'
           }}>
             上一节
           </button>
           <button onClick={onNext} style={{
             flex:2, padding:'14px', borderRadius:'12px', border:'none', 
             background:'var(--primary)', color:'#fff', fontWeight:'600',
             boxShadow:'0 4px 12px rgba(79, 70, 229, 0.3)'
           }}>
             完成并继续
           </button>
        </div>

        {/* Discussion Area */}
        <div style={{marginTop:'40px'}}>
           <div style={{fontSize:'16px', fontWeight:'700', marginBottom:'16px'}}>课程讨论 (128)</div>
           {[1,2].map(i => (
             <div key={i} style={{display:'flex', gap:'12px', marginBottom:'20px'}}>
               <div style={{width:'40px', height:'40px', borderRadius:'20px', background:'#f3f4f6'}}></div>
               <div style={{flex:1}}>
                 <div style={{display:'flex', justifyContent:'space-between', marginBottom:'4px'}}>
                   <div style={{fontWeight:'600', fontSize:'14px'}}>User_{9527+i}</div>
                   <div style={{fontSize:'12px', color:'var(--text-muted)'}}>2小时前</div>
                 </div>
                 <div style={{fontSize:'14px', color:'var(--text-secondary)', lineHeight:'1.4'}}>
                   这节课讲得非常透彻，终于明白了去中心化的真正含义！
                 </div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
