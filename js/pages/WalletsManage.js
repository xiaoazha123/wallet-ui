function WalletsManage({ onBack, onAddWallet }) {
  const [mode, setMode] = useState('view') // 'view' or 'manage'
  const [showAddSheet, setShowAddSheet] = useState(false)
  const [items,setItems] = useState([
    { name:'My Wallet',  assets:'¥0', backed:true, color:'#f59e0b', selected:true },
  ])

  function rename(i) { 
    const name = prompt('重命名钱包', items[i].name); 
    if(name){ const copy=[...items]; copy[i].name=name; setItems(copy) } 
  }
  
  function remove(i) { 
    if(confirm('确定要删除该钱包吗？请确保已备份助记词！')) {
       const copy=[...items]; copy.splice(i,1); setItems(copy) 
    }
  }

  if (mode === 'manage') {
    return (
      <div className="content-padded" style={{paddingTop:'12px', minHeight:'100vh'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px', padding:'0 8px'}}>
           <button onClick={()=>setMode('view')} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
           <div style={{fontSize:'18px', fontWeight:'700'}}>钱包管理</div>
           <div style={{width:'40px'}}></div>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
           {items.map((w,i)=>(
             <div key={i} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 20px'}}>
                <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                   <div style={{width:'40px', height:'40px', borderRadius:'10px', background:w.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'20px'}}><Icon name="wallet" /></div>
                   <div>
                     <div style={{fontSize:'16px', fontWeight:'600', display:'flex', alignItems:'center', gap:'6px'}}>
                       {w.name} <span style={{fontSize:'10px', color:'#6b7280', border:'1px solid #e5e7eb', padding:'1px 4px', borderRadius:'4px'}}>{w.type}</span>
                     </div>
                     <div style={{fontSize:'13px', color:'var(--text-muted)'}}>{w.assets}</div>
                   </div>
                </div>
                <div style={{display:'flex', gap:'16px', color:'#9ca3af'}}>
                   <div onClick={()=>rename(i)} style={{cursor:'pointer'}}><Icon name="edit" size={20} /></div>
                   <div style={{cursor:'pointer'}}><Icon name="menu" size={20} /></div>
                </div>
             </div>
           ))}
        </div>
      </div>
    )
  }

  return (
    <div className="content-padded" style={{paddingTop:'12px', height:'100%', display:'flex', flexDirection:'column', overflow:'hidden'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px', padding:'0 8px', flexShrink:0}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>我的钱包</div>
         <button onClick={()=>setMode('manage')} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'#f59e0b', fontSize:'14px', fontWeight:'600'}}>管理</button>
      </div>

      <div style={{padding:'0 20px', marginBottom:'24px', flexShrink:0}}>
         <div style={{fontSize:'32px', fontWeight:'800'}}>¥0</div>
      </div>

      <div style={{display:'flex', flexDirection:'column', overflowY:'auto'}}>
         {items.map((w,i)=>(
           <div key={i} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 20px', borderTop:'1px solid #f9fafb', cursor:'pointer'}}>
              <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                 <div style={{width:'40px', height:'40px', borderRadius:'10px', background:w.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'20px'}}><Icon name="wallet" /></div>
                 <div>
                   <div style={{fontSize:'16px', fontWeight:'600', display:'flex', alignItems:'center', gap:'6px'}}>
                     {w.name} <span style={{fontSize:'10px', color:'#6b7280', border:'1px solid #e5e7eb', padding:'1px 4px', borderRadius:'4px'}}>{w.type}</span>
                   </div>
                   <div style={{fontSize:'13px', color:'var(--text-muted)'}}>{w.assets}</div>
                 </div>
              </div>
              {w.selected && <div style={{background:'#000', borderRadius:'50%', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}><Icon name="check" size={12} style={{color:'#fff'}} /></div>}
           </div>
         ))}
      </div>

      <div style={{padding:'450px 20px 40px', flexShrink:0}}>
         <Button onClick={()=>setShowAddSheet(true)} style={{width:'100%', height:'50px', borderRadius:'12px', background:'#f59e0b', color:'#fff', fontSize:'16px', fontWeight:'600', border:'none'}}>添加钱包</Button>
      </div>

      {showAddSheet && (
        <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') setShowAddSheet(false)}}>
          <div className="modal-box">
             <div style={{textAlign:'center', fontSize:'18px', fontWeight:'700', marginBottom:'24px'}}>添加钱包</div>
             <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
               <button onClick={()=>{ setShowAddSheet(false); onAddWallet('create'); }} style={{
                 padding:'16px', 
                 borderRadius:'16px', 
                 background:'#f3f4f6', 
                 border:'none', 
                 display:'flex', 
                 alignItems:'center', 
                 gap:'12px',
                 cursor:'pointer'
               }}>
                 <div style={{width:'40px', height:'40px', borderRadius:'20px', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', color:'#f59e0b'}}><Icon name="wallet" size={24}/></div>
                 <div style={{textAlign:'left'}}>
                   <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)'}}>创建新钱包</div>
                   <div style={{fontSize:'12px', color:'var(--text-muted)'}}>生成新的助记词</div>
                 </div>
               </button>

               <button onClick={()=>{ setShowAddSheet(false); onAddWallet('import'); }} style={{
                 padding:'16px', 
                 borderRadius:'16px', 
                 background:'#f3f4f6', 
                 border:'none', 
                 display:'flex', 
                 alignItems:'center', 
                 gap:'12px',
                 cursor:'pointer'
               }}>
                 <div style={{width:'40px', height:'40px', borderRadius:'20px', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', color:'#6366f1'}}><Icon name="import" size={24}/></div>
                 <div style={{textAlign:'left'}}>
                   <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)'}}>导入钱包</div>
                   <div style={{fontSize:'12px', color:'var(--text-muted)'}}>使用助记词或私钥导入</div>
                 </div>
               </button>
             </div>
             <div style={{marginTop:'24px', textAlign:'center'}}>
               <button onClick={()=>setShowAddSheet(false)} style={{background:'none', border:'none', color:'var(--text-muted)', fontSize:'14px', cursor:'pointer'}}>取消</button>
             </div>
          </div>
        </div>
      )}
    </div>
  )
}