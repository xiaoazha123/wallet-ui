function ReceiveView({ address, onCopy }) {
  return (
    <div className="content-padded" style={{paddingTop:'24px'}}>
      <Card>
        <div style={{textAlign:'center', padding:'20px 0'}}>
           <div style={{fontSize:'16px', fontWeight:'600', marginBottom:'24px'}}>接收资产</div>
           
           <div className="qr-box" style={{
              width:'200px', 
              height:'200px', 
              margin:'0 auto 24px', 
              background:'#f3f4f6', 
              borderRadius:'16px', 
              display:'flex', 
              alignItems:'center', 
              justifyContent:'center',
              border:'1px solid var(--border)'
           }}>
             <Icon name="qr" size={160} />
           </div>

           <div className="addr-box" style={{
             background:'#f9fafb', 
             padding:'16px', 
             borderRadius:'12px', 
             marginBottom:'24px',
             wordBreak:'break-all',
             fontSize:'14px',
             color:'var(--text-muted)',
             fontFamily:'monospace'
           }}>
             {address}
           </div>

           <div className="row" style={{gap:'12px'}}>
             <Button onClick={() => onCopy(address)} style={{flex:1}}><Icon name="copy" /> 复制</Button>
             <Button variant="secondary" style={{flex:1}} onClick={()=>alert('已保存图片')}><Icon name="download" /> 保存图片</Button>
           </div>
           
           <div style={{marginTop:'24px', fontSize:'12px', color:'var(--text-muted)'}}>
             仅支持发送到此地址的 ERC20 代币
           </div>
        </div>
      </Card>
    </div>
  )
}
