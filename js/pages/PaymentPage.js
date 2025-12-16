function PaymentPage({ onBack }) {
  const [view, setView] = useState('scan') // 'scan' | 'receive'
  const [network, setNetwork] = useState('main') // Use ID: 'main', 'trx', etc.
  const [showNetModal, setShowNetModal] = useState(false)
  
  const netMap = {
    'main': 'Ethereum Mainnet',
    'bsc': 'BNB Smart Chain',
    'trx': 'TRON Mainnet',
    'sol': 'Solana',
    'test': 'Sepolia Testnet'
  }
  
  const txs = [
    { id:1, type:'send', title:'转出 -> 0x48...2a9', time:'10分钟前', amt:'-150.00 USDT', status:'成功' },
    { id:2, type:'interact', title:'交互 Uniswap V3', time:'2小时前', amt:'0.00 ETH', status:'成功' },
    { id:3, type:'receive', title:'收到 <- 0xAB...CD9', time:'昨天 14:20', amt:'+500.00 USDT', status:'成功' },
  ]

  const [contacts, setContacts] = useState([
    { id:1, name:'Alice', avatar:'A', bg:'#fee2e2', color:'#ef4444' },
    { id:2, name:'Bob', avatar:'B', bg:'#dbeafe', color:'#3b82f6' },
  ])
  const [showAddContact, setShowAddContact] = useState(false)
  const [newContactName, setNewContactName] = useState('')
  const [newContactAddr, setNewContactAddr] = useState('')

  function handleAddContact() {
     if(!newContactName || !newContactAddr) return alert('请填写完整信息');
     setContacts([...contacts, {
       id: Date.now(),
       name: newContactName,
       avatar: newContactName[0].toUpperCase(),
       bg: '#dcfce7',
       color: '#16a34a'
     }]);
     setShowAddContact(false);
     setNewContactName('');
     setNewContactAddr('');
  }

  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      {showNetModal && <NetworkModal current={network} onClose={()=>setShowNetModal(false)} onSelect={(id)=>{ setNetwork(id); setShowNetModal(false); }} />}
      
      {/* 顶部导航与网络选择 */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px', padding:'0 8px'}}>
         <div style={{display:'flex', alignItems:'center'}}>
           <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)', marginRight:'4px'}}><Icon name="back" size={24} /></button>
           <div style={{fontSize:'18px', fontWeight:'700'}}>支付</div>
         </div>
         
         <div className="net-select" style={{
           display:'flex', alignItems:'center', gap:'6px', 
           background:'#f3f4f6', padding:'6px 12px', borderRadius:'20px',
           fontSize:'13px', fontWeight:'600', color:'var(--text-main)', cursor:'pointer'
         }} onClick={()=>setShowNetModal(true)}>
           <div style={{width:'8px', height:'8px', borderRadius:'50%', background: network==='trx'?'#ef4444':'#6366f1'}}></div>
           {netMap[network] || 'Select Network'} <Icon name="down" size={12} />
         </div>
      </div>

      {/* 主卡片 */}
      <div className="payment-card" style={{
        background:'#fff', 
        borderRadius:'24px', 
        padding:'24px', 
        marginBottom:'20px',
        boxShadow:'var(--shadow-md)',
        border:'1px solid var(--border)',
        margin:'0 20px 20px',
        minHeight: '380px',
        display: 'flex',
        flexDirection: 'column'
      }}>
         {/* 分段控制器 */}
         <div className="seg-control" style={{
           display:'flex', background:'#f3f4f6', borderRadius:'12px', padding:'4px', marginBottom:'24px'
         }}>
            <div onClick={()=>setView('scan')} style={{
              flex:1, textAlign:'center', padding:'10px', borderRadius:'10px',
              background: view==='scan' ? '#fff' : 'transparent',
              color: view==='scan' ? 'var(--text-main)' : 'var(--text-muted)',
              fontWeight:'600', fontSize:'14px', cursor:'pointer',
              boxShadow: view==='scan' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
              transition: 'all 0.2s'
            }}>扫一扫</div>
            <div onClick={()=>setView('receive')} style={{
              flex:1, textAlign:'center', padding:'10px', borderRadius:'10px',
              background: view==='receive' ? '#fff' : 'transparent',
              color: view==='receive' ? 'var(--text-main)' : 'var(--text-muted)',
              fontWeight:'600', fontSize:'14px', cursor:'pointer',
              boxShadow: view==='receive' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
              transition: 'all 0.2s'
            }}>收款码</div>
         </div>

         {/* 扫一扫视图 */}
         {view === 'scan' && (
           <div style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', animation: 'fadeIn 0.3s ease'}}>
              <div className="scan-box" onClick={()=>alert('模拟打开相机')} style={{
                width:'220px', height:'220px', 
                border:'2px solid var(--primary)', 
                borderRadius:'24px', 
                position:'relative',
                display:'flex', alignItems:'center', justifyContent:'center',
                background: '#f9fafb',
                marginBottom: '24px',
                cursor: 'pointer',
                overflow: 'hidden'
              }}>
                <Icon name="scan" size={64} style={{color:'var(--primary)', opacity:0.3}} />
                {/* 模拟扫描线 */}
                <div style={{
                  position:'absolute', top:'0', left:'0', right:'0', height:'2px', 
                  background:'linear-gradient(90deg, transparent, var(--primary), transparent)',
                  boxShadow:'0 0 15px var(--primary)',
                  animation: 'scan 2.5s infinite linear',
                  width: '100%'
                }}></div>
              </div>
              <div style={{fontSize:'14px', color:'var(--text-muted)', marginBottom:'32px', textAlign:'center'}}>
                将二维码放入框内，即可自动扫描<br/>
                <span style={{fontSize:'12px', opacity:0.7}}>支持 WalletConnect / 钱包地址 / 收款码</span>
              </div>
              <button onClick={()=>alert('打开相册')} style={{
                background:'#eff6ff', color:'var(--primary)', border:'none', 
                padding:'14px 40px', borderRadius:'30px', fontWeight:'600', fontSize:'15px',
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'all 0.2s'
              }}> 从相册选择
              </button>
           </div>
         )}

         {/* 收款码视图 */}
         {view === 'receive' && (
           <div style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', animation: 'fadeIn 0.3s ease'}}>
              <div style={{
                padding:'16px', border:'1px solid var(--border)', borderRadius:'24px', marginBottom:'20px',
                background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                 <Icon name="qr" size={180} style={{color:'#000'}} />
              </div>
              <div onClick={()=>{ navigator.clipboard.writeText('0x12AB...89FF'); alert('已复制地址'); }} style={{
                display:'flex', alignItems:'center', gap:'8px', 
                background:'#f3f4f6', padding:'10px 20px', borderRadius:'20px', marginBottom:'24px',
                fontSize:'15px', fontWeight:'600', color:'var(--text-main)', cursor:'pointer'
              }}>
                 0x12AB...89FF <Icon name="copy" size={16} />
              </div>
              <div style={{
                fontSize:'13px', color:'#ef4444', background:'#fef2f2', 
                padding:'12px 20px', borderRadius:'12px', textAlign:'center', lineHeight:'1.5',
                border: '1px solid #fee2e2'
              }}>
                仅支持 <strong>{netMap[network]}</strong> 资产<br/>
                <span style={{opacity:0.8}}>转入其他资产将无法找回</span>
              </div>
           </div>
         )}
      </div>

      {/* 快捷转账 */}
      <div style={{padding:'0 20px', marginBottom:'24px'}}>
        <div style={{fontSize:'14px', fontWeight:'600', color:'var(--text-muted)', marginBottom:'16px'}}>快捷转账</div>
        <div style={{display:'flex', gap:'20px', overflowX:'auto', paddingBottom:'4px'}}>
           <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', minWidth:'56px', cursor:'pointer'}} onClick={()=>setShowAddContact(true)}>
             <div style={{width:'56px', height:'56px', borderRadius:'28px', border:'1px dashed var(--text-muted)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-muted)'}}>
               <Icon name="add" size={24} />
             </div>
             <span style={{fontSize:'12px', color:'var(--text-muted)'}}>新增</span>
           </div>
           {contacts.map(c => (
             <div key={c.id} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', minWidth:'56px', cursor:'pointer'}} onClick={()=>alert(`转账给 ${c.name}`)}>
               <div style={{width:'56px', height:'56px', borderRadius:'28px', background:c.bg, color:c.color, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'700', fontSize:'18px', boxShadow:'var(--shadow-sm)'}}>
                 {c.avatar}
               </div>
               <span style={{fontSize:'12px', color:'var(--text-main)', fontWeight:'500'}}>{c.name}</span>
             </div>
           ))}
        </div>
      </div>

      {/* 新增联系人弹窗 */}
      {showAddContact && (
        <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') setShowAddContact(false)}}>
          <div className="modal-box">
            <div className="modal-title">新增联系人</div>
            <div style={{marginBottom:'16px'}}>
               <div style={{fontSize:'14px', marginBottom:'8px', fontWeight:'600'}}>名称</div>
               <input value={newContactName} onChange={e=>setNewContactName(e.target.value)} placeholder="输入联系人名称" style={{width:'100%', padding:'12px', borderRadius:'12px', border:'1px solid var(--border)', background:'#f9fafb', fontSize:'14px'}} />
            </div>
            <div style={{marginBottom:'24px'}}>
               <div style={{fontSize:'14px', marginBottom:'8px', fontWeight:'600'}}>钱包地址</div>
               <div style={{display:'flex', gap:'8px'}}>
                 <input value={newContactAddr} onChange={e=>setNewContactAddr(e.target.value)} placeholder="0x..." style={{flex:1, padding:'12px', borderRadius:'12px', border:'1px solid var(--border)', background:'#f9fafb', fontSize:'14px'}} />
                 <button onClick={()=>alert('扫描二维码')} style={{padding:'0 12px', background:'#f3f4f6', border:'none', borderRadius:'12px', cursor:'pointer'}}><Icon name="scan" size={20} /></button>
               </div>
            </div>
            <div style={{display:'flex', gap:'12px'}}>
              <Button onClick={handleAddContact} style={{flex:1}}>保存</Button>
              <Button variant="ghost" onClick={()=>setShowAddContact(false)} style={{flex:1}}>取消</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}