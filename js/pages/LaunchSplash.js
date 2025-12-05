function LaunchSplash({ lang, onLang, onNext }) {
  return (
    <div 
      className="content-padded" 
      style={{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        paddingTop:'60px',
        paddingBottom:'30px',
      }}
    >

      {/* 上半部分整体下移 */}
      <div 
        style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'flex-start',
          marginTop:'40px',     // 让整体往下
          marginBottom:'60px'
        }}
      >
        <div className="logo-placeholder" style={{
          width:'120px',
          height:'120px',
          borderRadius:'32px',
          background:'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          marginBottom:'28px',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          fontSize:'60px',
          color:'#fff',
          boxShadow:'0 12px 30px rgba(99, 102, 241, 0.3)'
        }}>
          <Icon name="planet" />
        </div>

        <h1 style={{
          fontSize:'34px',
          fontWeight:'800',
          marginBottom:'14px',
          background:'linear-gradient(135deg, #111827 0%, #4b5563 100%)',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent'
        }}>Planet 钱包</h1>

        <div 
          style={{
            fontSize:'15px',
            color:'var(--text-muted)',
            lineHeight:'1.6',
            maxWidth:'260px',
            textAlign:'center'
          }}
        >
          开启您的 Web3 之旅<br/>安全、便捷、去中心化
        </div>
      </div>


      {/* 中间按钮区域 */}
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'100%',
        marginBottom:'auto'   // 中间部分向上，底部说明永远在最下
      }}>

        {/* 语言选择 */}
        <div 
          style={{
            background:'#f3f4f6',
            borderRadius:'24px',
            padding:'4px',
            display:'inline-flex',
            marginBottom:'28px'
          }}
        >
          <button onClick={()=>onLang('中文')} style={{
            padding:'8px 22px',
            borderRadius:'20px',
            border:'none',
            background: lang==='中文'?'#fff':'transparent',
            color: lang==='中文'?'var(--text-main)':'var(--text-muted)',
            fontWeight: lang==='中文'?'600':'400',
            boxShadow: lang==='中文'?'0 2px 8px rgba(0,0,0,0.05)':'none',
            fontSize:'14px',
            cursor:'pointer'
          }}>中文</button>

          <button onClick={()=>onLang('English')} style={{
            padding:'8px 22px',
            borderRadius:'20px',
            border:'none',
            background: lang==='English'?'#fff':'transparent',
            color: lang==='English'?'var(--text-main)':'var(--text-muted)',
            fontWeight: lang==='English'?'600':'400',
            boxShadow: lang==='English'?'0 2px 8px rgba(0,0,0,0.05)':'none',
            fontSize:'14px',
            cursor:'pointer'
          }}>English</button>
        </div>

        {/* 主按钮 */}
        <Button 
          onClick={onNext} 
          style={{
            height:'52px',
            borderRadius:'26px',
            width:'100%',
            fontWeight:'600',
            fontSize:'17px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <div style={{ display:'flex', alignItems:'center' }}>
            立即开始
            <Icon name="right" size={18} style={{ marginLeft:8 }} />
          </div>
        </Button>
      </div>

      {/* 底部说明 —— 永远在最下方 */}
      <div 
        style={{
          textAlign:'center',
          fontSize:'12px',
          color:'var(--text-muted)',
          marginTop:'20px'
        }}
      >
        继续即代表您同意 
        <span style={{color:'var(--primary)', fontWeight:'600', cursor:'pointer'}}> 服务条款 </span>
        和 
        <span style={{color:'var(--primary)', fontWeight:'600', cursor:'pointer'}}> 隐私政策</span>
      </div>

    </div>
  )
}
