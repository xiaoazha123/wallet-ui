function GeneralSettingsPage({ onLang, onBack, onFeature }) {
  const [autoLock, setAutoLock] = useState(true)

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>通用设置</div>
         <div style={{width:'40px'}}></div>
      </div>

      <div className="card-white" style={{padding:'0', marginBottom:'16px'}}>
         <div onClick={()=>onFeature('货币单位设置 功能开发中')} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'32px', height:'32px', borderRadius:'50%', background:'#ecfdf5', display:'flex', alignItems:'center', justifyContent:'center', color:'#10b981', marginRight:'12px'}}>
              <Icon name="money" size={18} />
            </div>
            <div style={{flex:1, fontWeight:'600'}}>货币单位</div>
            <div style={{display:'flex', alignItems:'center', color:'var(--text-muted)', fontSize:'14px'}}>
              USD ($) <Icon name="right" size={16} />
            </div>
         </div>
         <div onClick={onLang} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'32px', height:'32px', borderRadius:'50%', background:'#eff6ff', display:'flex', alignItems:'center', justifyContent:'center', color:'#3b82f6', marginRight:'12px'}}>
              <Icon name="global" size={18} />
            </div>
            <div style={{flex:1, fontWeight:'600'}}>语言</div>
            <div style={{display:'flex', alignItems:'center', color:'var(--text-muted)', fontSize:'14px'}}>
              简体中文 <Icon name="right" size={16} />
            </div>
         </div>
         <div onClick={()=>onFeature('主题设置 功能开发中')} style={{padding:'16px', display:'flex', alignItems:'center', cursor:'pointer'}}>
            <div style={{width:'32px', height:'32px', borderRadius:'50%', background:'#fff7ed', display:'flex', alignItems:'center', justifyContent:'center', color:'#f97316', marginRight:'12px'}}>
              <Icon name="sun" size={18} />
            </div>
            <div style={{flex:1, fontWeight:'600'}}>主题</div>
            <div style={{display:'flex', alignItems:'center', color:'var(--text-muted)', fontSize:'14px'}}>
              跟随系统 <Icon name="right" size={16} />
            </div>
         </div>
      </div>



      <div className="card-white" style={{padding:'0', marginBottom:'16px'}}>
         <div style={{padding:'16px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid var(--border)'}}>
            <div style={{display:'flex', alignItems:'center'}}>
               <div style={{width:'32px', height:'32px', borderRadius:'50%', background:'#fff7ed', display:'flex', alignItems:'center', justifyContent:'center', color:'#ea580c', marginRight:'12px'}}>
                 <Icon name="lightning" size={18} />
               </div>
               <div>
                 <div style={{fontWeight:'600'}}>自动锁定</div>
                 <div style={{fontSize:'12px', color:'var(--text-muted)'}}>应用进入后台时自动锁定</div>
               </div>
            </div>
            <div onClick={()=>setAutoLock(!autoLock)} style={{
              width:'44px', height:'24px', background: autoLock?'var(--primary)':'#e5e7eb', borderRadius:'12px', position:'relative', cursor:'pointer', transition:'all 0.2s'
            }}>
               <div style={{
                 width:'20px', height:'20px', background:'#fff', borderRadius:'50%', position:'absolute', top:'2px', 
                 left: autoLock?'22px':'2px', transition:'all 0.2s', boxShadow:'0 1px 2px rgba(0,0,0,0.1)'
               }}></div>
            </div>
         </div>
         <div onClick={()=>onFeature('锁定时间设置 功能开发中')} style={{padding:'16px', display:'flex', alignItems:'center', cursor:'pointer'}}>
            <div style={{width:'32px', height:'32px', borderRadius:'50%', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#6b7280', marginRight:'12px'}}>
              <Icon name="refresh" size={18} />
            </div>
            <div style={{flex:1, fontWeight:'600'}}>自动锁定时间</div>
            <div style={{display:'flex', alignItems:'center', color:'var(--text-muted)', fontSize:'14px'}}>
              5 分钟 <Icon name="right" size={16} />
            </div>
         </div>
      </div>

      <div className="card-white" style={{padding:'0', marginBottom:'20px'}}>
         <div onClick={()=>onFeature('清除缓存 功能开发中')} style={{padding:'16px', display:'flex', alignItems:'center', cursor:'pointer'}}>
            <div style={{width:'32px', height:'32px', borderRadius:'50%', background:'#fee2e2', display:'flex', alignItems:'center', justifyContent:'center', color:'#ef4444', marginRight:'12px'}}>
              <Icon name="trash" size={18} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontWeight:'600'}}>清除缓存</div>
               <div style={{fontSize:'12px', color:'var(--text-muted)'}}>清除价格、市场等缓存数据</div>
            </div>
            <Icon name="right" size={16} style={{color:'var(--text-muted)'}} />
         </div>
      </div>

      <div style={{background:'#fff', borderRadius:'16px', padding:'16px', margin:'0 20px'}}>
         <div style={{display:'flex', justifyContent:'space-between', marginBottom:'12px', fontSize:'14px'}}>
            <span style={{color:'var(--text-muted)'}}>应用版本</span>
            <span style={{fontWeight:'600'}}>v1.0.0</span>
         </div>
         <div style={{display:'flex', justifyContent:'space-between', fontSize:'14px'}}>
            <span style={{color:'var(--text-muted)'}}>构建号</span>
            <span style={{fontWeight:'600'}}>20251122</span>
         </div>
      </div>
    </div>
  )
}
