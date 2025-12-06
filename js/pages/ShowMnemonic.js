function ShowMnemonic({ words, onCopy, onNext, onAcknowledgeChange, acknowledged, isAddWallet, onBack }) {
  return (
    <div className="content-padded" style={{paddingTop: isAddWallet ? '12px' : '24px'}}>
      {isAddWallet ? (
        <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
           <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
           <div style={{fontSize:'18px', fontWeight:'700'}}>备份助记词</div>
           <div style={{width:'40px'}}></div>
        </div>
      ) : null}
      <div style={{marginBottom:'24px', margin: isAddWallet ? '0 20px 12px' : '0 20px 24px'}}>
         {!isAddWallet && <h1 style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>备份助记词</h1>}
         <div style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:'1.5'}}>
           请准确抄写下方的12个单词，并保存在安全的地方。
         </div>
      </div>

      <div style={{background:'#fee2e2', borderRadius:'12px', padding:'12px', display:'flex', gap:'12px', marginBottom:'24px', alignItems:'start', margin:'0 20px 24px'}}>
         <div style={{color:'#ef4444', marginTop:'2px'}}><Icon name="info" size={16} /></div>
         <div style={{fontSize:'13px', color:'#b91c1c', lineHeight:'1.5'}}>
           <span style={{fontWeight:'700'}}>切勿截图！</span> 如果有人获取了您的助记词，他们就能直接盗取您的资产。
         </div>
      </div>

      <div className="mnemonic-grid" style={{
        display:'grid', 
        gridTemplateColumns:'repeat(3, 1fr)', 
        gap:'12px', 
        marginBottom:'24px',
        margin:'0 20px 24px'
      }}>
        {words.map((w,i)=>(
          <div key={i} className="mn-chip" style={{
            background:'#fff', 
            border:'1px solid var(--border)', 
            borderRadius:'8px', 
            padding:'8px 4px', 
            textAlign:'center',
            fontSize:'14px',
            fontWeight:'600',
            color:'var(--text-main)',
            position:'relative'
          }}>
            <span style={{position:'absolute', top:'4px', left:'6px', fontSize:'10px', color:'#9ca3af'}}>{i+1}</span>
            {w}
          </div>
        ))}
      </div>

      <div style={{display:'flex', justifyContent:'center', marginBottom:'32px'}}>
        <button onClick={()=>{ if(confirm('确认复制助记词？')) onCopy(words.join(' ')) }} style={{
          background:'none', 
          border:'none', 
          color:'var(--primary)', 
          fontSize:'14px', 
          fontWeight:'600', 
          display:'flex', 
          alignItems:'center', 
          gap:'6px'
        }}>
          <Icon name="copy" size={16} /> 复制助记词
        </button>
      </div>

      <div className="checks" style={{display:'flex', flexDirection:'column', gap:'16px', marginBottom:'32px', margin:'0 20px'}}>
        <label style={{display:'flex', gap:'12px', alignItems:'start'}}>
          <input type="checkbox" checked={acknowledged.a} onChange={e=>onAcknowledgeChange({...acknowledged,a:e.target.checked})} style={{marginTop:'4px'}} /> 
          <span style={{fontSize:'13px', color:'var(--text-main)', lineHeight:'1.5'}}>我明白如果我丢失了助记词，我将无法恢复我的钱包。</span>
        </label>
        <label style={{display:'flex', gap:'12px', alignItems:'start'}}>
          <input type="checkbox" checked={acknowledged.b} onChange={e=>onAcknowledgeChange({...acknowledged,b:e.target.checked})} style={{marginTop:'4px'}} /> 
          <span style={{fontSize:'13px', color:'var(--text-main)', lineHeight:'1.5'}}>我已手动抄写助记词并将其保存在安全的地方。</span>
        </label>
      </div>

      <div className="row">
        <Button onClick={onNext} variant={(acknowledged.a && acknowledged.b)?'primary':'disabled'} style={{height:'50px', borderRadius:'25px', width:'100%'}}>下一步</Button>
      </div>
    </div>
  )
}