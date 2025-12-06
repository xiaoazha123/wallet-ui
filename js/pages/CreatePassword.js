function CreatePassword({ onNext }) {
  const [pwd,setPwd] = useState('')
  const [pwd2,setPwd2] = useState('')
  const [face,setFace] = useState(false)
  const strong = pwd.length>=8 && /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && /\d/.test(pwd)
  const ok = strong && pwd===pwd2
  
  return (
    <div className="content-padded" style={{paddingTop:'24px'}}>
      <div style={{marginBottom:'32px', margin:'0 20px 32px'}}>
        <h1 style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>设置安全密码</h1>
        <div style={{fontSize:'14px', color:'var(--text-muted)'}}>该密码将用于解锁钱包和确认交易</div>
      </div>

      <Card>
        <div style={{marginBottom:'20px'}}>
           <Input label="输入密码" type="password" value={pwd} onChange={setPwd} placeholder="输入密码" />
           <div style={{marginTop:'8px', display:'flex', gap:'4px'}}>
              <div style={{height:'4px', flex:1, borderRadius:'2px', background: pwd.length>0 ? (pwd.length>=8?'#f59e0b':'#ef4444') : '#f3f4f6'}}></div>
              <div style={{height:'4px', flex:1, borderRadius:'2px', background: pwd.length>=8 && /[a-z]/.test(pwd) ? '#f59e0b' : '#f3f4f6'}}></div>
              <div style={{height:'4px', flex:1, borderRadius:'2px', background: strong ? '#10b981' : '#f3f4f6'}}></div>
           </div>
           <div style={{fontSize:'12px', color: strong?'#10b981':'var(--text-muted)', marginTop:'6px', textAlign:'right'}}>
             {strong ? '密码强度：强' : '（原型演示：可直接点击下一步跳过）'}
           </div>
        </div>

        <div style={{marginBottom:'24px'}}>
           <Input label="确认密码" type="password" value={pwd2} onChange={setPwd2} placeholder="再次输入密码" />
           {pwd2 && pwd!==pwd2 && <div style={{fontSize:'12px', color:'#ef4444', marginTop:'6px'}}>两次密码不一致</div>}
        </div>

        <div className="setting-row" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 0', borderTop:'1px solid var(--border)'}}>
           <div>
             <div style={{fontWeight:'600', fontSize:'15px'}}>启用生物识别</div>
             <div style={{fontSize:'12px', color:'var(--text-muted)'}}>使用面容 ID 或指纹解锁</div>
           </div>
           <div className={`toggle-switch ${face?'on':''}`} onClick={()=>setFace(!face)}><div className="toggle-dot"/></div>
        </div>
      </Card>

      <div className="row" style={{marginTop:'40px'}}>
        <Button onClick={()=>onNext({pwd,face})} style={{height:'50px', borderRadius:'25px', width:'100%'}}>下一步</Button>
      </div>
    </div>
  )
}