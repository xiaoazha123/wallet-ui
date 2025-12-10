function ImportWallet({ onDone, isAddWallet, onBack, initialTab }) {
  const [tab,setTab] = useState(initialTab || '助记词')
  const [mn,setMn] = useState('')
  const [pk,setPk] = useState('')
  const [ks,setKs] = useState('')
  const [pass,setPass] = useState('')
  function validateMnemonic(txt){ return true }
  function validatePk(txt){ return true }
  function validateKs(txt){ return true }
  function submit(){ onDone() }
  
  // Dynamic Title based on Tab
  const getTitle = () => {
    switch(tab) {
      case '助记词': return '导入助记词'
      case '私钥': return '导入私钥'
      case 'Keystore': return '导入 Keystore'
      default: return '导入钱包'
    }
  }

  const getDesc = () => {
    switch(tab) {
      case '助记词': return '输入 12 或 24 个单词，恢复您的钱包资产'
      case '私钥': return '输入明文私钥字符串，通常为 64 位十六进制字符'
      case 'Keystore': return '输入 Keystore JSON 内容及对应的密码'
      default: return '选择导入方式并输入相关信息'
    }
  }

  return (
    <div className="content-padded" style={{paddingTop: isAddWallet ? '12px' : '24px'}}>
      {isAddWallet ? (
        <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
           <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
           <div style={{fontSize:'18px', fontWeight:'700'}}>{getTitle()}</div>
           <div style={{width:'40px'}}></div>
        </div>
      ) : null}
      
      <div style={{marginBottom:'32px', margin: isAddWallet ? '0 20px 12px' : '0 20px 32px'}}>
        {!isAddWallet && <h1 style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>{getTitle()}</h1>}
        <div style={{fontSize:'14px', color:'var(--text-muted)'}}>{getDesc()}</div>
      </div>

      {/* Removed Tab Switcher to make screens distinct */}

      <Card>
        {tab==='助记词' && (
          <div>
            <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'12px', display:'flex', justifyContent:'space-between'}}>
              <span>助记词</span>
              <span style={{color:'var(--primary)', cursor:'pointer'}} onClick={()=>setMn('apple banana cherry dog elephant flower grape house igloo jungle kite lemon')}>粘贴示例</span>
            </div>
            <textarea 
              value={mn} 
              onChange={e=>setMn(e.target.value)} 
              placeholder="请输入助记词，单词之间请用空格隔开" 
              style={{
                width:'100%', 
                height:'160px', 
                padding:'16px', 
                borderRadius:'16px', 
                border:'1px solid var(--border)', 
                fontFamily:'monospace', 
                fontSize:'16px', 
                lineHeight: '1.5',
                resize:'none',
                outline:'none',
                background:'#f9fafb',
                color: '#374151'
              }}
            />
            <div style={{marginTop:'12px', display:'flex', gap:'8px'}}>
               <div style={{padding:'6px 12px', background:'#f3f4f6', borderRadius:'8px', fontSize:'12px', color:'var(--text-muted)'}}>12 单词</div>
               <div style={{padding:'6px 12px', background:'#f3f4f6', borderRadius:'8px', fontSize:'12px', color:'var(--text-muted)'}}>24 单词</div>
            </div>
          </div>
        )}
        {tab==='私钥' && (
          <div>
            <div style={{marginBottom:'20px'}}>
              <Input label="私钥字符串" value={pk} onChange={setPk} placeholder="0x..." />
            </div>
            <div style={{padding:'16px', background:'#fff7ed', borderRadius:'12px', border:'1px solid #ffedd5'}}>
               <div style={{fontSize:'13px', fontWeight:'600', color:'#c2410c', marginBottom:'4px'}}>安全提示</div>
               <div style={{fontSize:'12px', color:'#ea580c', lineHeight:'1.5'}}>
                 请确保您在安全的环境下输入私钥。不要将私钥透露给任何人。
               </div>
            </div>
          </div>
        )}
        {tab==='Keystore' && (
          <div>
            <div className="input">
               <label style={{fontSize:'12px', fontWeight:'600', marginBottom:'8px', display:'block'}}>Keystore 内容</label>
               <textarea 
                 className="area" 
                 value={ks} 
                 onChange={e=>setKs(e.target.value)} 
                 placeholder="{...}" 
                 style={{
                    width:'100%', 
                    height:'140px', 
                    padding:'16px', 
                    borderRadius:'16px', 
                    border:'1px solid var(--border)', 
                    fontFamily:'monospace', 
                    fontSize:'13px', 
                    resize:'none',
                    outline:'none',
                    background:'#f9fafb',
                    marginBottom:'16px',
                    color: '#374151'
                 }}
               />
            </div>
            <Input label="钱包密码" type="password" value={pass} onChange={setPass} placeholder="请输入生成 Keystore 时的密码" />
          </div>
        )}
      </Card>
      
      <div className="row" style={{marginTop:'40px'}}>
        <Button onClick={submit} style={{height:'50px', borderRadius:'25px', width:'100%'}}>开始导入</Button>
      </div>
    </div>
  )
}