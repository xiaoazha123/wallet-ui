function BindInvitePage({ onNext }) {
  const [code, setCode] = useState('')
  
  function doBind() {
    if (!code) return alert('请输入邀请码')
    // Mock binding success
    onNext() 
  }

  return (
    <div className="content-padded" style={{paddingTop:'24px'}}>
      <div style={{marginBottom:'32px', margin:'0 20px 32px'}}>
        <h1 style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>填写邀请码</h1>
        <div style={{fontSize:'14px', color:'var(--text-muted)'}}>绑定好友关系，双方共享奖励</div>
      </div>

      <Card>
        <div style={{padding:'20px 0'}}>
           <Input label="邀请码" value={code} onChange={setCode} placeholder="请输入邀请码" />
        </div>
        
        <div style={{fontSize:'12px', color:'var(--text-muted)', marginTop:'8px', lineHeight:'1.6', background:'#f9fafb', padding:'16px', borderRadius:'16px'}}>
          <div style={{fontWeight:'600', marginBottom:'8px', color:'var(--text-main)'}}>绑定说明：</div>
          <div style={{marginBottom:'4px'}}>• 首次绑定关系永久有效</div>
          <div style={{marginBottom:'4px'}}>• 30天内充值 ≥ 100 USDT</div>
          <div>• 持仓时间 ≥ 7 天</div>
          <div style={{color:'var(--primary)', marginTop:'12px', fontWeight:'500'}}>满足以上条件后视为有效绑定，双方可获得奖励。</div>
        </div>
      </Card>

      <div className="row" style={{marginTop:'40px', gap:'12px'}}>
        <Button onClick={doBind} style={{flex:2, height:'50px', borderRadius:'25px'}}>确认绑定</Button>
        <Button variant="secondary" onClick={onNext} style={{flex:1, height:'50px', borderRadius:'25px', background:'#f3f4f6', color:'var(--text-muted)'}}>跳过</Button>
      </div>
    </div>
  )
}