function WalletsManage({ onBack }) {
  const [items,setItems] = useState([
    { name:'主钱包', addr:'0xA1...C8', assets:'$12,450.00', backed:true },
    { name:'测试钱包', addr:'0x9F...11', assets:'$0.00', backed:false },
  ])
  const [showModal, setShowModal] = useState(false)
  const [step, setStep] = useState('auth') // auth, select, create, show-mnemonic, import, bind-invite
  const [inputName, setInputName] = useState('')
  const [inputSeed, setInputSeed] = useState('')
  const [inputCode, setInputCode] = useState('')
  const [newMnemonic, setNewMnemonic] = useState('')

  function openAdd() {
    setStep('auth')
    setInputName('')
    setInputSeed('')
    setInputCode('')
    setNewMnemonic('')
    setShowModal(true)
  }

  function doAuth() {
    // Mock authentication
    setStep('select')
  }

  function doCreate() {
    if(!inputName) return alert('请输入钱包名称')
    setNewMnemonic(generateMnemonic()) // reusing global helper or need to define? Assuming global or mock
    setStep('show-mnemonic')
  }

  function doBackedUp() {
    setStep('bind-invite')
  }

  function doImport() {
    if(!inputSeed) return alert('请输入助记词或私钥')
    setStep('bind-invite')
  }

  function doBindAndFinish() {
    if(!inputCode) return alert('请输入邀请码')
    finishAdd()
  }

  function doSkipBind() {
    finishAdd()
  }

  function finishAdd() {
    const name = inputName || '导入钱包 ' + (items.length+1)
    setItems([...items,{ name, addr:'0x'+Math.random().toString(16).slice(2,6)+'...', assets:'$0.00', backed: step==='show-mnemonic' || step==='bind-invite' }])
    setShowModal(false)
  }
  
  function rename(i) { 
    const name = prompt('重命名钱包', items[i].name); 
    if(name){ const copy=[...items]; copy[i].name=name; setItems(copy) } 
  }
  
  function remove(i) { 
    if(confirm('确定要删除该钱包吗？请确保已备份助记词！')) {
       const copy=[...items]; copy.splice(i,1); setItems(copy) 
    }
  }

  return (
    <div className="content">
      <div className="list-head" style={{padding:'0 4px', marginBottom:'12px'}}>钱包列表</div>
      <div className="wallets">
        {items.map((w,i)=>(
          <div key={i} className="wallet-card-lg">
            <div className="wc-head">
              <div className="wc-name">{w.name} <span className={`wc-tag ${w.backed?'backed':''}`}>{w.backed?'已备份':'未备份'}</span></div>
              <div className="wc-addr">{w.addr}</div>
            </div>
            <div className="wc-assets">
              <div className="wc-val">{w.assets}</div>
              <div className="wc-actions">
                <Button className="small" variant="secondary" onClick={()=>rename(i)}>重命名</Button>
                <Button className="small" variant="ghost" onClick={()=>remove(i)}>删除</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row" style={{marginTop:'24px'}}>
        <Button onClick={openAdd}>新建 / 导入钱包</Button>
        <Button variant="ghost" onClick={onBack}>返回</Button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') setShowModal(false)}}>
          <div className="modal-box">
            {step==='auth' && (
              <div style={{textAlign:'center', padding:'20px 10px'}}>
                <div className="modal-title" style={{fontSize:'20px', marginBottom:'30px'}}>身份验证</div>
                <div style={{marginBottom:'40px', color:'var(--muted)'}}>
                  <div style={{fontSize:'15px'}}>请验证身份以继续</div>
                </div>
                <div style={{textAlign:'left', marginBottom:'20px'}}>
                   <label style={{display:'block', fontSize:'12px', fontWeight:'600', marginBottom:'8px', color:'var(--muted)'}}>密码</label>
                   <input type="password" style={{width:'100%', padding:'14px', borderRadius:'12px', border:'1px solid var(--border)', fontSize:'16px', outline:'none'}} placeholder="输入密码" value={inputName} onChange={setInputName} />
                </div>
                <div className="row" style={{gap:'12px'}}>
                  <Button style={{flex:1}} onClick={doAuth}>验证</Button>
                  <Button variant="secondary" style={{flex:1}} onClick={doAuth}><Icon name="yes" /> 指纹验证</Button>
                </div>
                <div style={{marginTop:'20px'}}>
                   <button style={{border:'none', background:'none', color:'var(--primary)', fontSize:'15px'}} onClick={()=>setShowModal(false)}>取消</button>
                </div>
              </div>
            )}

            {step==='select' && (
              <>
                <div className="modal-title">添加钱包</div>
                <div className="modal-opts">
                  <div className="modal-opt" onClick={()=>setStep('create')}>
                    <div className="mo-icon"><Icon name="plus"/></div>
                    <div className="mo-label">创建新钱包</div>
                  </div>
                  <div className="modal-opt" onClick={()=>setStep('import')}>
                    <div className="mo-icon"><Icon name="download"/></div>
                    <div className="mo-label">导入钱包</div>
                  </div>
                </div>
                <Button variant="ghost" style={{width:'100%'}} onClick={()=>setShowModal(false)}>取消</Button>
              </>
            )}

            {step==='create' && (
              <>
                <div className="modal-title">创建新钱包</div>
                <Input label="钱包名称" value={inputName} onChange={setInputName} placeholder="例如: 主钱包 2" />
                <div className="row">
                  <Button onClick={doCreate}>下一步</Button>
                  <Button variant="ghost" onClick={()=>setStep('select')}>返回</Button>
                </div>
              </>
            )}

            {step==='show-mnemonic' && (
              <>
                <div className="modal-title">备份助记词</div>
                <div style={{fontSize:'12px', color:'var(--muted)', marginBottom:'12px'}}>请抄写下方助记词并妥善保管</div>
                <div className="mnemonic-box" style={{background:'#f9fafb', padding:'12px', borderRadius:'12px', fontSize:'14px', fontFamily:'monospace', lineHeight:'1.6', marginBottom:'20px'}}>
                   {newMnemonic || 'apple banana cat dog elephant ...'}
                </div>
                <div className="row">
                  <Button onClick={doBackedUp}>我已备份</Button>
                </div>
              </>
            )}

            {step==='import' && (
              <>
                <div className="modal-title">导入钱包</div>
                <Input label="钱包名称" value={inputName} onChange={setInputName} placeholder="例如: 导入的钱包" />
                <div className="input">
                  <label>助记词 / 私钥</label>
                  <textarea 
                    value={inputSeed} 
                    onChange={e=>setInputSeed(e.target.value)}
                    placeholder="输入12/24位助记词或私钥"
                    style={{padding:'12px',borderRadius:'14px',border:'1px solid var(--border)',fontFamily:'monospace',resize:'none',height:'80px'}}
                  />
                </div>
                <div className="row">
                  <Button onClick={doImport}>下一步</Button>
                  <Button variant="ghost" onClick={()=>setStep('select')}>返回</Button>
                </div>
              </>
            )}

            {step==='bind-invite' && (
              <div style={{padding:'10px 0'}}>
                <div className="list-head" style={{textAlign:'center', marginBottom:'20px'}}>
                   <div style={{fontSize:'18px', fontWeight:'bold'}}>填写邀请码</div>
                   <div style={{fontSize:'13px', color:'var(--muted)', marginTop:'8px'}}>填写好友邀请码，绑定关系</div>
                </div>
                
                <Input label="邀请码" value={inputCode} onChange={setInputCode} placeholder="请输入邀请码" />
                
                <div style={{fontSize:'12px', color:'var(--muted)', marginTop:'16px', lineHeight:'1.6', background:'#f9fafb', padding:'12px', borderRadius:'8px'}}>
                  <div style={{fontWeight:'600', marginBottom:'4px'}}>绑定规则：</div>
                  <div>1. 首次绑定邀请码，关系永久有效</div>
                  <div>2. 需在 30 天内累计充值 ≥ 100 USDT</div>
                  <div>3. 持仓时间需 ≥ 7 天</div>
                  <div style={{color:'var(--primary)', marginTop:'4px'}}>满足以上条件后视为有效绑定，双方可获得奖励。</div>
                </div>

                <div className="row" style={{marginTop:'32px'}}>
                  <Button onClick={doBindAndFinish}>确认绑定</Button>
                  <Button variant="ghost" onClick={doSkipBind}>跳过</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
