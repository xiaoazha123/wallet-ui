function LaunchSplash({ onCreate, onImport }) {
  const [showImport, setShowImport] = useState(false)

  return (
    <div 
      className="content-padded" 
      style={{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        padding: 0,
        background: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 顶部背景图 */}
      <div style={{
        width: '100%',
        height: '420px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img 
          src="./planet_home1.png" 
          alt="background" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }} 
        />
      </div>

      {/* 文本区域 */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 24px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '22px',
          fontWeight: '800',
          color: '#1f2937',
          marginBottom: '16px',
          letterSpacing: '1px'
        }}>Planet非托管钱包</h1>
        
        <div style={{
          fontSize: '15px',
          color: '#6b7280',
          lineHeight: '1.6',
          maxWidth: '280px',
          marginBottom: '32px'
        }}>
          安全管理多个钱包，多账户自由切换
        </div>

        {/* 按钮区域 */}
        <div style={{width:'100%', marginTop:'80px', display:'flex', flexDirection:'column', gap:'16px'}}>
          <Button onClick={onCreate} style={{
            height:'52px',
            borderRadius:'12px',
            fontSize:'16px',
            fontWeight:'600',
            background: '#3b82f6'
          }}>创建钱包</Button>


          <Button onClick={()=>setShowImport(true)} style={{
            height:'52px',
            borderRadius:'12px',
            fontSize:'16px',
            fontWeight:'600',
            background: '#fff',
            color: '#3b82f6',
            border: '1px solid #3b82f6'
          }}>导入钱包</Button>
        </div>
      </div>

      {/* 导入方式选择弹窗 */}
      {showImport && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }} onClick={()=>setShowImport(false)}>
           <div style={{
             background: '#fff',
             borderRadius: '24px 24px 0 0',
             padding: '24px 24px 40px',
             animation: 'slideUp 0.3s ease',
             height: '420px' // 与上方图片高度对应，正好占据下方区域
           }} onClick={e=>e.stopPropagation()}>
             <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px'}}>
               <div style={{fontSize:'18px', fontWeight:'700'}}>选择导入方式</div>
               <div onClick={()=>setShowImport(false)} style={{padding:'4px', cursor:'pointer', color:'#9ca3af'}}>
                 <Icon name="close" size={20} />
               </div>
             </div>
             
             <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
               {[
                 { id:'助记词', desc:'助记词由单词组成，以空格隔开', icon:'file' },
                 { id:'私钥', desc:'明文私钥字符', icon:'key' },
                 { id:'Keystore', desc:'加密的私钥 JSON 文件', icon:'code' }
               ].map(item => (
                 <div key={item.id} onClick={()=>onImport(item.id)} style={{
                   display: 'flex',
                   alignItems: 'center',
                   padding: '16px',
                   borderRadius: '16px',
                   background: '#fff',
                   border: '1px solid #f3f4f6',
                   cursor: 'pointer',
                   boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                 }}>
                   <div style={{
                     width: '40px',
                     height: '40px',
                     borderRadius: '12px',
                     background: '#fff',
                     border: '1px solid #e5e7eb',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     marginRight: '16px',
                     color: '#374151'
                   }}>
                     <Icon name={item.icon} size={20} />
                   </div>
                   <div style={{flex:1}}>
                     <div style={{fontSize:'16px', fontWeight:'600', color:'#1f2937', marginBottom:'4px'}}>{item.id}</div>
                     <div style={{fontSize:'12px', color:'#9ca3af'}}>{item.desc}</div>
                   </div>
                   <Icon name="right" size={16} style={{color:'#d1d5db'}} />
                 </div>
               ))}
             </div>
           </div>
        </div>
      )}
    </div>
  )
}
