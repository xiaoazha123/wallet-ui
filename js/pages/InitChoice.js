function InitChoice({ onCreate, onImport }) {
  return (
    <div className="content-padded" style={{paddingTop:'40px', display:'flex', flexDirection:'column', height:'100%'}}>
      <div style={{marginBottom:'40px', margin:'0 20px 40px'}}>
        <h1 style={{fontSize:'28px', fontWeight:'800', marginBottom:'12px'}}>初始化钱包</h1>
        <div style={{fontSize:'16px', color:'var(--text-muted)', lineHeight:'1.6'}}>
          欢迎来到 Planet 钱包。<br/>您可以创建一个新钱包或导入已有钱包。
        </div>
      </div>

      <div style={{flex:1, display:'flex', flexDirection:'column', gap:'20px', margin:'0 20px'}}>
        <div onClick={onCreate} style={{
          background:'#fff', 
          borderRadius:'24px', 
          padding:'24px', 
          boxShadow:'var(--shadow-sm)', 
          border:'1px solid var(--border)',
          cursor:'pointer',
          display:'flex',
          alignItems:'center',
          gap:'20px',
          transition:'transform 0.1s'
        }}>
           <div style={{width:'60px', height:'60px', borderRadius:'20px', background:'#eff6ff', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary)', fontSize:'28px'}}>
             <Icon name="plus" />
           </div>
           <div style={{flex:1}}>
             <div style={{fontSize:'18px', fontWeight:'700', marginBottom:'4px'}}>创建新钱包</div>
             <div style={{fontSize:'14px', color:'var(--text-muted)'}}>生成新的助记词和地址</div>
           </div>
           <Icon name="right" style={{color:'#d1d5db'}} />
        </div>

        <div onClick={onImport} style={{
          background:'#fff', 
          borderRadius:'24px', 
          padding:'24px', 
          boxShadow:'var(--shadow-sm)', 
          border:'1px solid var(--border)',
          cursor:'pointer',
          display:'flex',
          alignItems:'center',
          gap:'20px',
          transition:'transform 0.1s'
        }}>
           <div style={{width:'60px', height:'60px', borderRadius:'20px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-main)', fontSize:'28px'}}>
             <Icon name="download" />
           </div>
           <div style={{flex:1}}>
             <div style={{fontSize:'18px', fontWeight:'700', marginBottom:'4px'}}>导入钱包</div>
             <div style={{fontSize:'14px', color:'var(--text-muted)'}}>使用助记词、私钥或 Keystore</div>
           </div>
           <Icon name="right" style={{color:'#d1d5db'}} />
        </div>
      </div>

      <div style={{marginTop:'auto', paddingBottom:'40px', textAlign:'center', fontSize:'13px', color:'var(--text-muted)'}}>
         Planet Wallet 不会保存您的私钥，<br/>请务必自行妥善保管。
      </div>
    </div>
  )
}