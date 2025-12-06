function ChangePassword({ onBack, onSuccess }) {
  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [error, setError] = useState('')

  function doChange() {
    if (!oldPass) return setError('请输入旧密码')
    if (!newPass) return setError('请输入新密码')
    if (newPass !== confirmPass) return setError('两次新密码输入不一致')
    if (newPass.length < 6) return setError('新密码长度至少6位')
    
    // For prototype, we accept any old password
    onSuccess()
  }

  return (
    <div className="content-padded" style={{paddingTop:'40px', background:'#fff', height:'100%'}}>
      <div style={{marginBottom:'30px', padding:'0 20px'}}>
        <div onClick={onBack} style={{marginBottom:'20px', cursor:'pointer'}}><Icon name="back" size={24} /></div>
        <h1 style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>修改安全密码</h1>
        <div style={{fontSize:'14px', color:'var(--text-muted)'}}>请验证身份并设置新密码</div>
      </div>

      <div style={{padding:'0 20px', display:'flex', flexDirection:'column', gap:'20px'}}>
        <div>
          <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'8px', color:'var(--text-main)'}}>旧密码</div>
          <Input 
            type="password" 
            value={oldPass} 
            onChange={e=>{setOldPass(e.target.value); setError('')}} 
            placeholder="请输入当前密码"
          />
        </div>

        <div>
          <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'8px', color:'var(--text-main)'}}>新密码</div>
          <Input 
            type="password" 
            value={newPass} 
            onChange={e=>{setNewPass(e.target.value); setError('')}} 
            placeholder="请输入新密码"
          />
        </div>

        <div>
          <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'8px', color:'var(--text-main)'}}>确认新密码</div>
          <Input 
            type="password" 
            value={confirmPass} 
            onChange={e=>{setConfirmPass(e.target.value); setError('')}} 
            placeholder="请再次输入新密码"
          />
        </div>

        {error && <div style={{color:'#ef4444', fontSize:'12px'}}>{error}</div>}
        
        <div style={{marginTop:'20px'}}>
          <Button onClick={doChange} style={{width:'100%', height:'50px', borderRadius:'25px', fontSize:'16px'}}>确认修改</Button>
        </div>
      </div>
    </div>
  )
}