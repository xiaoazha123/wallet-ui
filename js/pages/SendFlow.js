function SendFlow({ onConfirm, onCancel }) {
  const [addr, setAddr] = useState('')
  const [token, setToken] = useState('USDT')
  const [amt, setAmt] = useState('')
  const [gasSpeed, setGasSpeed] = useState('standard')
  const [showAdv, setShowAdv] = useState(false)
  const [pwd, setPwd] = useState('')
  const [step, setStep] = useState(1)

  const balance = 1200.50
  const gasEst = {
    slow: { time: '5 mins', fee: '0.5' },
    standard: { time: '2 mins', fee: '1.2' },
    fast: { time: '30 secs', fee: '3.0' }
  }

  function handleMax() { setAmt(balance.toString()) }
  function handlePaste() {
    navigator.clipboard.readText().then(t => setAddr(t)).catch(e => console.error(e))
  }
  function doCheck() {
    if (!addr || !amt) return alert('请输入地址和金额')
    if (parseFloat(amt) > balance) return alert('余额不足')
    setStep(2)
  }
  function doSend() {
    if (!pwd) return alert('请输入密码')
    onConfirm({ addr, token, amt, gas: gasEst[gasSpeed].fee })
  }

  if (step === 2) {
    return (
      <div className="content-padded" style={{paddingTop:'12px'}}>
         <Card>
           <div className="confirm-head" style={{textAlign:'center', padding:'20px 0'}}>
             <div style={{fontSize:'16px', fontWeight:'600', marginBottom:'8px'}}>确认发送</div>
             <div className="confirm-amt" style={{fontSize:'32px', fontWeight:'800', color:'var(--text-main)'}}>-{amt} <span style={{fontSize:'16px', fontWeight:'600'}}>{token}</span></div>
           </div>
           
           <div className="confirm-info" style={{background:'#f9fafb', borderRadius:'16px', padding:'16px', marginBottom:'24px'}}>
             <div className="confirm-row" style={{display:'flex', justifyContent:'space-between', marginBottom:'12px'}}>
               <span style={{color:'var(--text-muted)'}}>接收地址</span>
               <span style={{fontFamily:'monospace', maxWidth:'150px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{addr}</span>
             </div>
             <div className="confirm-row" style={{display:'flex', justifyContent:'space-between'}}>
               <span style={{color:'var(--text-muted)'}}>网络费用</span>
               <span>{gasEst[gasSpeed].fee} TRX</span>
             </div>
           </div>
           
           <div className="pwd-input-area" style={{marginBottom:'24px'}}>
             <div className="label" style={{marginBottom:'8px', fontWeight:'600'}}>安全验证</div>
             <input type="password" className="pwd-input" placeholder="请输入交易密码" value={pwd} onChange={e=>setPwd(e.target.value)} style={{width:'100%', padding:'14px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none'}} />
             <div className="bio-hint" style={{marginTop:'12px', textAlign:'center', color:'var(--primary)', fontSize:'14px'}}><Icon name="scan" size={16}/> 使用生物识别</div>
           </div>

           <div className="row" style={{gap:'12px'}}>
             <Button onClick={doSend} style={{flex:1}}>确认发送</Button>
             <Button variant="ghost" onClick={()=>setStep(1)} style={{flex:1}}>返回修改</Button>
           </div>
         </Card>
      </div>
    )
  }

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <Card>
        <div className="send-field" style={{marginBottom:'20px'}}>
          <div className="label" style={{marginBottom:'8px', fontWeight:'600'}}>接收地址</div>
          <div className="input-group" style={{display:'flex', gap:'8px'}}>
             <div style={{flex:1, position:'relative'}}>
                <input className="main-input" value={addr} onChange={e=>setAddr(e.target.value)} placeholder="输入地址或域名" style={{width:'100%', padding:'14px', paddingRight:'80px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'15px'}} />
                <div className="input-actions" style={{position:'absolute', right:'8px', top:'50%', transform:'translateY(-50%)', display:'flex', gap:'4px'}}>
                   <button onClick={handlePaste} style={{background:'none', border:'none', cursor:'pointer', color:'var(--primary)'}}><Icon name="copy" /></button>
                   <button style={{background:'none', border:'none', cursor:'pointer', color:'var(--primary)'}}><Icon name="qr" /></button>
                </div>
             </div>
          </div>
          {addr.length > 10 && addr.startsWith('Tnew') && (
             <div className="sec-warn" style={{marginTop:'8px', color:'#ef4444', fontSize:'12px', display:'flex', alignItems:'center', gap:'4px'}}>
               <Icon name="info" size={12} /> 新地址，请务必核对
             </div>
          )}
        </div>

        <div className="send-field" style={{marginBottom:'24px'}}>
          <div className="label" style={{marginBottom:'8px', fontWeight:'600'}}>发送数量</div>
          <div className="input-group" style={{position:'relative'}}>
             <input type="number" className="main-input" value={amt} onChange={e=>setAmt(e.target.value)} placeholder="0.00" style={{width:'100%', padding:'14px', paddingRight:'80px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'18px', fontWeight:'600'}} />
             <div style={{position:'absolute', right:'14px', top:'50%', transform:'translateY(-50%)', display:'flex', alignItems:'center', gap:'8px'}}>
                <button className="max-btn" onClick={handleMax} style={{background:'rgba(99, 102, 241, 0.1)', color:'var(--primary)', border:'none', padding:'4px 8px', borderRadius:'4px', fontSize:'12px', fontWeight:'600'}}>MAX</button>
                <div className="token-tag" style={{fontWeight:'600'}}>{token}</div>
             </div>
          </div>
          <div className="avail-bal" style={{marginTop:'8px', fontSize:'13px', color:'var(--text-muted)'}}>可用: {balance} {token}</div>
        </div>

        <div className="send-field">
          <div className="label-row" style={{display:'flex', justifyContent:'space-between', marginBottom:'12px'}}>
             <span style={{fontWeight:'600'}}>Gas 费用</span>
             <span className="gas-val" style={{color:'var(--text-muted)'}}>{gasEst[gasSpeed].fee} TRX</span>
          </div>
          <div className="gas-sel" style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px'}}>
             {['slow','standard','fast'].map(s => (
               <button key={s} className={`gas-opt ${gasSpeed===s?'active':''}`} onClick={()=>setGasSpeed(s)} style={{
                 padding:'10px', 
                 borderRadius:'8px', 
                 border: gasSpeed===s ? '1px solid var(--primary)' : '1px solid var(--border)',
                 background: gasSpeed===s ? 'var(--primary-light)' : '#fff',
                 textAlign:'center',
                 cursor:'pointer'
               }}>
                 <div className="g-name" style={{fontSize:'13px', fontWeight:'600', color: gasSpeed===s?'var(--primary)':'var(--text-main)'}}>{s==='slow'?'慢':s==='standard'?'标准':'快'}</div>
                 <div className="g-time" style={{fontSize:'11px', color:'var(--text-muted)', marginTop:'2px'}}>{gasEst[s].time}</div>
               </button>
             ))}
          </div>
        </div>

        <div className="row" style={{marginTop:'32px', gap:'12px'}}>
          <Button onClick={doCheck} style={{flex:1}}>下一步</Button>
          <Button variant="ghost" onClick={onCancel} style={{flex:1}}>取消</Button>
        </div>
      </Card>
    </div>
  )
}
