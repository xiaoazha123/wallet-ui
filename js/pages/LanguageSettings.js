function LanguageSettings({ currentLang, onSetLang, onBack }) {
  const langs = [
    { id:'中文', name:'简体中文', sub:'Simplified Chinese' },
    { id:'English', name:'English', sub:'English' },
    { id:'Japanese', name:'日本語', sub:'Japanese' },
    { id:'Korean', name:'한국어', sub:'Korean' },
  ]

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div className="lang-header" style={{
        background:'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', 
        borderRadius:'24px', 
        padding:'24px', 
        color:'#fff', 
        marginBottom:'24px',
        boxShadow:'0 10px 25px rgba(139, 92, 246, 0.3)',
        margin:'0 20px 24px'
      }}>
         <div style={{fontSize:'14px', opacity:0.9, marginBottom:'4px'}}>语言设置</div>
         <div style={{fontSize:'28px', fontWeight:'800', marginBottom:'8px'}}>Language</div>
         <div style={{fontSize:'13px', opacity:0.8}}>当前语言：{currentLang}</div>
      </div>

      <div className="list-head" style={{padding:'0 4px', marginBottom:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 20px 12px'}}>
        <div style={{fontSize:'16px', fontWeight:'700'}}>选择语言 / Select Language</div>
      </div>

      <Card>
        {langs.map((l,i)=>(
          <div key={l.id} onClick={()=>onSetLang(l.id)} style={{
             display:'flex', 
             alignItems:'center', 
             padding:'16px 0', 
             borderBottom: i<langs.length-1 ? '1px solid var(--border)' : 'none',
             cursor:'pointer'
          }}>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>{l.name}</div>
               <div style={{fontSize:'12px', color:'var(--text-muted)'}}>{l.sub}</div>
            </div>
            {currentLang===l.id && <div style={{color:'var(--primary)', fontSize:'14px'}}><Icon name="check" size={20} /></div>}
          </div>
        ))}
      </Card>
      
      <div className="row" style={{marginTop:'32px'}}>
        <Button variant="ghost" onClick={onBack}>返回</Button>
      </div>
    </div>
  )
}