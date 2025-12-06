function PasswordVerify({ onSuccess, onBack }) {
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')

  function verify() {
    // For prototype, any non-empty password is valid
    if (pass.length > 0) {
      onSuccess()
    } else {
      setError('请输入密码')
    }
  }

  return (
    <div className="content-padded" style={{paddingTop:'12px', background:'#fff', height:'100%'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>验证密码</div>
         <div style={{width:'40px'}}></div>
      </div>
      <div style={{marginBottom:'24px', padding:'0 20px'}}>
        <div style={{fontSize:'14px', color:'var(--text-muted)'}}>为了您的资产安全，请输入钱包密码</div>
      </div>

      <div style={{padding:'0 20px'}}>
        <Input 
          type="password" 
          label="钱包密码" 
          value={pass} 
          onChange={val=>{setPass(val); setError('')}} 
          placeholder="请输入密码"
        />
        {error && <div style={{color:'#ef4444', fontSize:'12px', marginTop:'8px'}}>{error}</div>}
        
        <div style={{marginTop:'40px'}}>
          <Button onClick={verify} style={{width:'100%', height:'50px', borderRadius:'25px', fontSize:'16px'}}>确认</Button>
        </div>
        
        <div style={{marginTop:'20px', textAlign:'center'}}>
          <div style={{fontSize:'14px', color:'var(--primary)', fontWeight:'600', cursor:'pointer'}}>使用生物识别</div>
        </div>
      </div>
    </div>
  )
}