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
    <div className="content">
      <Card>
        <div className="tabs">
          {['助记词','私钥','Keystore'].map(t=> (
            <button key={t} className={`tab-btn ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
          ))}
        </div>
        {tab==='助记词' && (
          <div>
            <Input label="助记词" value={mn} onChange={setMn} placeholder="12/24 词，空格分隔" />
          </div>
        )}
        {tab==='私钥' && (
          <div>
            <Input label="私钥" value={pk} onChange={setPk} placeholder="64位hex或0x开头" />
          </div>
        )}
        {tab==='Keystore' && (
          <div>
            <div className="input"><label>JSON</label><textarea className="area" value={ks} onChange={e=>setKs(e.target.value)} placeholder="粘贴Keystore JSON" /></div>
            <Input label="密码" type="password" value={pass} onChange={setPass} placeholder="输入密码" />
          </div>
        )}
        <div className="row"><Button onClick={submit}>确认导入</Button></div>
      </Card>
    </div>
  )
}
