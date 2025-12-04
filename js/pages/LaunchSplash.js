function LaunchSplash({ lang, onLang, onNext }) {
  return (
    <div className="content">
      <Card>
        <div className="brand">Planet 钱包</div>
        <div className="lang">
          <button className={`lang-btn ${lang==='中文'?'active':''}`} onClick={()=>onLang('中文')}>中文</button>
          <button className={`lang-btn ${lang==='English'?'active':''}`} onClick={()=>onLang('English')}>English</button>
        </div>
        <div className="intro">
          <div className="intro-item">去中心化 · 本地私钥安全</div>
          <div className="intro-item">支持 Keystore / 助记词 / 私钥</div>
          <div className="intro-item">内置质押生息入口</div>
        </div>
        <div className="row">
          <Button onClick={onNext}>继续</Button>
        </div>
      </Card>
    </div>
  )
}
