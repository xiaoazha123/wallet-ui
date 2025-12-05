function ReceiveView({ token, address, onBack }) {
  // Mock logic to handle token specific address or network if needed
  // For prototype, we just show the passed address or a mock one
  // token = { sym, net, icon, color, ... }
  
  return (
    <div className="content-padded" style={{paddingTop:'12px', background:'#fff', minHeight:'80vh', display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>接收</div>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="close" size={20} /></button>
      </div>

      <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:'0 20px'}}>
         <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'20px'}}>
            <div style={{position:'relative'}}>
               <div style={{width:'56px', height:'56px', borderRadius:'50%', background:token?.color||'#3b82f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'28px', fontWeight:'700'}}>{token?.icon||'E'}</div>
               <div style={{position:'absolute', bottom:'-2px', right:'-4px', background:'#fff', borderRadius:'50%', padding:'2px'}}>
                  {/* Network Icon Badge */}
                  <div style={{width:'18px', height:'18px', borderRadius:'50%', background:'#3b82f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'10px'}}><Icon name="network" /></div>
               </div>
            </div>
            <div style={{fontSize:'18px', fontWeight:'700', marginTop:'8px'}}>{token?.sym || 'ETH'}</div>
            <div style={{fontSize:'11px', color:'#6b7280', background:'#f3f4f6', padding:'2px 8px', borderRadius:'4px', marginTop:'4px'}}>{token?.net || 'Base'}</div>
         </div>

         <div style={{marginBottom:'24px'}}>
            <Icon name="qr" size={200} style={{color:'#000'}} />
         </div>

         <div style={{width:'100%', marginBottom:'16px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'8px'}}>
               <Icon name="wallet" size={16} style={{color:'#f59e0b'}} />
               <span style={{fontSize:'14px', fontWeight:'600'}}>My Wallet</span>
               <Icon name="down" size={12} style={{color:'#9ca3af'}} />
            </div>
            <div style={{background:'#fff', border:'1px solid #e5e7eb', borderRadius:'16px', padding:'16px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
               <div style={{fontFamily:'monospace', fontSize:'13px', color:'var(--text-main)', wordBreak:'break-all', lineHeight:'1.5', marginRight:'12px'}}>
                 {address || '0x8912067920d2ef6a08ca8e16BAf73646E3008292'}
               </div>
               <div onClick={()=>navigator.clipboard.writeText(address)} style={{color:'var(--text-muted)', cursor:'pointer'}}>
                 <Icon name="copy" size={20} />
               </div>
            </div>
         </div>

         <div style={{background:'#f9fafb', borderRadius:'12px', padding:'12px 16px', display:'flex', gap:'10px', alignItems:'start', width:'100%'}}>
            <Icon name="info" size={16} style={{color:'#6b7280', marginTop:'2px'}} />
            <div style={{fontSize:'12px', color:'#6b7280', lineHeight:'1.5'}}>
              仅向该地址发送 {token?.net || 'Base'} 网络资产。其他资产将永远丢失。
            </div>
         </div>
      </div>

      <div style={{padding:'20px 40px 40px'}}>
         <Button style={{width:'100%', height:'48px', borderRadius:'24px', background:'#f3f4f6', color:'var(--text-main)', fontSize:'16px', fontWeight:'600', border:'none'}}>分享</Button>
      </div>
    </div>
  )
}