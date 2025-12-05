function ImportWallet({ onDone }) {
  const [tab,setTab] = useState('助记词')
  const [mn,setMn] = useState('')
  const [pk,setPk] = useState('')
  const [ks,setKs] = useState('')
  const [pass,setPass] = useState('')
  function validateMnemonic(txt){ const n=txt.trim().split(/\s+/).length; return n===12 || n===24 }
  function validatePk(txt){ return /^0x?[0-9a-fA-F]{64}$/.test(txt.trim()) }
  function validateKs(txt){ try{ JSON.parse(txt); return true }catch(e){ return false } }
  function submit(){ if(tab==='助记词' && !validateMnemonic(mn)) return alert('助记词格式错误'); if(tab==='私钥' && !validatePk(pk)) return alert('私钥格式错误'); if(tab==='Keystore' && (!validateKs(ks) || !pass)) return alert('Keystore或密码错误'); onDone() }
  
  return (
    <div className="content-padded" style={{paddingTop:'24px'}}>
      <div style={{marginBottom:'32px', margin:'0 20px 32px'}}>
        <h1 style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>导入钱包</h1>
        <div style={{fontSize:'14px', color:'var(--text-muted)'}}>选择导入方式并输入相关信息</div>
      </div>

      <div className="tabs-modern" style={{display:'flex', background:'#f3f4f6', borderRadius:'12px', padding:'4px', marginBottom:'24px', margin:'0 20px 24px'}}>
        {['助记词','私钥','Keystore'].map(t=> (
          <button key={t} onClick={()=>setTab(t)} style={{
            flex:1, 
            padding:'8px 0', 
            borderRadius:'10px', 
            border:'none', 
            background: tab===t ? '#fff' : 'transparent', 
            color: tab===t ? 'var(--text-main)' : 'var(--text-muted)', 
            fontWeight: tab===t ? '600' : '400', 
            boxShadow: tab===t ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
            fontSize:'14px',
            transition:'all 0.2s'
          }}>{t}</button>
        ))}
      </div>

      <Card>
        {tab==='助记词' && (
          <div>
            <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'12px'}}>助记词</div>
            <textarea 
              value={mn} 
              onChange={e=>setMn(e.target.value)} 
              placeholder="输入 12 或 24 个助记词，用空格分隔" 
              style={{
                width:'100%', 
                height:'120px', 
                padding:'16px', 
                borderRadius:'16px', 
                border:'1px solid var(--border)', 
                fontFamily:'monospace', 
                fontSize:'14px', 
                resize:'none',
                outline:'none',
                background:'#f9fafb'
              }}
            />
          </div>
        )}
        {tab==='私钥' && (
          <div>
            <Input label="私钥" value={pk} onChange={setPk} placeholder="输入 64 位 16 进制字符串" />
          </div>
        )}
        {tab==='Keystore' && (
          <div>
            <div className="input">
               <label style={{fontSize:'12px', fontWeight:'600', marginBottom:'8px', display:'block'}}>Keystore JSON</label>
               <textarea 
                 className="area" 
                 value={ks} 
                 onChange={e=>setKs(e.target.value)} 
                 placeholder="粘贴 Keystore 内容" 
                 style={{
                    width:'100%', 
                    height:'100px', 
                    padding:'16px', 
                    borderRadius:'16px', 
                    border:'1px solid var(--border)', 
                    fontFamily:'monospace', 
                    fontSize:'12px', 
                    resize:'none',
                    outline:'none',
                    background:'#f9fafb',
                    marginBottom:'16px'
                 }}
               />
            </div>
            <Input label="Keystore 密码" type="password" value={pass} onChange={setPass} placeholder="输入 Keystore 密码" />
          </div>
        )}
      </Card>
      
      <div className="row" style={{marginTop:'40px'}}>
        <Button onClick={submit} style={{height:'50px', borderRadius:'25px', width:'100%'}}>开始导入</Button>
      </div>
    </div>
  )
}