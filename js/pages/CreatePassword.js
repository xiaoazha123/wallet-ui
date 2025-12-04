function CreatePassword({ onNext }) {
  const [pwd,setPwd] = useState('')
  const [pwd2,setPwd2] = useState('')
  const [face,setFace] = useState(false)
  const strong = pwd.length>=8 && /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && /\d/.test(pwd)
  const ok = strong && pwd===pwd2
  return (
    <div className="content">
      <Card>
        <div className="list-head">设置密码</div>
        <Input label="密码" type="password" value={pwd} onChange={setPwd} placeholder="至少8位，含大小写与数字" />
        <Input label="确认密码" type="password" value={pwd2} onChange={setPwd2} placeholder="再次输入" />
        <div className="setting-row"><span>启用生物识别</span><input type="checkbox" checked={face} onChange={()=>setFace(!face)} /></div>
        <div className="rule">密码强度：{strong?'强':'弱'}</div>
        <div className="row">
          <Button onClick={()=>ok && onNext({pwd,face})} variant={ok?'primary':'secondary'}>下一步</Button>
        </div>
      </Card>
    </div>
  )
}
