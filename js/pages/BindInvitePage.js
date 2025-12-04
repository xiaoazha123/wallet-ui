function BindInvitePage({ onNext }) {
  const [code, setCode] = useState('')
  
  function doBind() {
    if (!code) return alert('请输入邀请码')
    // Mock binding success
    onNext() 
  }

  return (
    <div className="content">
      <Card>
        <div className="list-head" style={{textAlign:'center', marginTop:'20px', marginBottom:'20px'}}>
           <div style={{fontSize:'18px', fontWeight:'bold'}}>填写邀请码</div>
           <div style={{fontSize:'13px', color:'var(--muted)', marginTop:'8px'}}>填写好友邀请码，绑定关系</div>
        </div>
        
        <Input label="邀请码" value={code} onChange={setCode} placeholder="请输入邀请码" />
        
        <div style={{fontSize:'12px', color:'var(--muted)', marginTop:'16px', lineHeight:'1.6', background:'#f9fafb', padding:'12px', borderRadius:'8px'}}>
          <div style={{fontWeight:'600', marginBottom:'4px'}}>绑定规则：</div>
          <div>1. 首次绑定邀请码，关系永久有效</div>
          <div>2. 需在 30 天内累计充值 ≥ 100 USDT</div>
          <div>3. 持仓时间需 ≥ 7 天</div>
          <div style={{color:'var(--primary)', marginTop:'4px'}}>满足以上条件后视为有效绑定，双方可获得奖励。</div>
        </div>

        <div className="row" style={{marginTop:'32px'}}>
          <Button onClick={doBind}>确认绑定</Button>
          <Button variant="ghost" onClick={onNext}>跳过</Button>
        </div>
      </Card>
    </div>
  )
}
