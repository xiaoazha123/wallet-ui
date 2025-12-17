function AddressBookPage({ onBack }) {
  const [showAdd, setShowAdd] = useState(false)
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')
  const [editingContact, setEditingContact] = useState(null)

  const networks = [
    { id:'main', name:'Ethereum Mainnet', type:'Layer 1', rpc:'https://mainnet.infura.io/v3...', color:'#627eea', icon:'M' },
    { id:'bsc', name:'BNB Smart Chain', type:'Layer 1', rpc:'https://bsc-dataseed.binance.org', color:'#f3ba2f', icon:'B' },
    { id:'trx', name:'TRON Mainnet', type:'Layer 1', rpc:'https://api.trongrid.io', color:'#ef0027', icon:'T' },
    { id:'polygon', name:'Polygon', type:'Layer 2', rpc:'https://polygon-rpc.com', color:'#8247e5', icon:'P' },
    { id:'sol', name:'Solana', type:'Layer 1', rpc:'https://api.mainnet-beta.solana.com', color:'#14f195', icon:'S' },
  ]

  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.address.toLowerCase().includes(search.toLowerCase()) ||
    (c.note && c.note.toLowerCase().includes(search.toLowerCase()))
  )

  function addContact(newContact) {
    if (editingContact) {
      const updated = contacts.map(c => c === editingContact ? newContact : c)
      setContacts(updated)
      setEditingContact(null)
    } else {
      setContacts([...contacts, newContact])
    }
    setShowAdd(false)
  }

  function deleteContact(index) {
    if(confirm('确定要删除该地址吗？')) {
      const copy = [...contacts]
      copy.splice(index, 1)
      setContacts(copy)
    }
  }

  function editContact(contact) {
    setEditingContact(contact)
    setShowAdd(true)
  }

  return (
    <div className="content-padded" style={{paddingTop:'12px', height:'100%', display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'16px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>地址簿</div>
         <button onClick={()=>{ setEditingContact(null); setShowAdd(true); }} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--primary)'}}><Icon name="plus" size={24} /></button>
      </div>

      <div style={{padding:'0 12px 16px'}}>
         <div style={{background:'#f3f4f6', padding:'10px 16px', borderRadius:'12px', display:'flex', alignItems:'center', gap:'10px'}}>
            <Icon name="search" size={18} style={{color:'var(--text-muted)'}} />
            <input 
              value={search}
              onChange={e=>setSearch(e.target.value)}
              placeholder="搜索名称、地址或备注" 
              style={{background:'transparent', border:'none', outline:'none', fontSize:'14px', width:'100%'}} 
            />
         </div>
      </div>

      {contacts.length === 0 ? (
        <div style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'var(--text-muted)'}}>
           <div style={{width:'80px', height:'80px', borderRadius:'40px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'16px'}}>
             <Icon name="user" size={40} style={{opacity:0.5}} />
           </div>
           <div style={{marginBottom:'24px'}}>地址簿为空</div>
           <Button onClick={()=>{ setEditingContact(null); setShowAdd(true); }} style={{padding:'12px 32px', borderRadius:'24px'}}>+ 添加地址</Button>
        </div>
      ) : (
        <div style={{flex:1, overflowY:'auto', padding:'0 12px'}}>
           {filteredContacts.map((c,i) => (
             <div key={i} style={{background:'#fff', padding:'16px', borderRadius:'16px', border:'1px solid var(--border)', marginBottom:'12px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', alignItems:'center', gap:'12px', flex:1, overflow:'hidden'}}>
                   <div style={{width:'40px', height:'40px', borderRadius:'20px', background:c.networkColor, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'700', fontSize:'18px', flexShrink:0}}>
                     {c.networkIcon}
                   </div>
                   <div style={{flex:1, overflow:'hidden'}}>
                     <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                        <div style={{fontWeight:'600', fontSize:'16px', color:'var(--text-main)'}}>{c.name}</div>
                        {c.note && <div style={{fontSize:'12px', color:'var(--text-muted)', background:'#f3f4f6', padding:'2px 6px', borderRadius:'4px'}}>{c.note}</div>}
                     </div>
                     <div style={{fontSize:'13px', color:'var(--text-muted)', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{c.address}</div>
                   </div>
                </div>
                <div style={{display:'flex', gap:'12px', marginLeft:'12px'}}>
                   <div onClick={()=>editContact(c)} style={{cursor:'pointer', color:'var(--text-muted)'}}><Icon name="edit" size={20} /></div>
                   <div onClick={()=>deleteContact(i)} style={{cursor:'pointer', color:'#ef4444'}}><Icon name="close" size={20} /></div>
                </div>
             </div>
           ))}
        </div>
      )}

      {showAdd && <AddAddressModal networks={networks} initialData={editingContact} onClose={()=>setShowAdd(false)} onSave={addContact} />}
    </div>
  )
}

function AddAddressModal({ networks, onClose, onSave, initialData }) {
  const [name, setName] = useState(initialData ? initialData.name : '')
  const [addr, setAddr] = useState(initialData ? initialData.address : '')
  const [note, setNote] = useState(initialData ? initialData.note : '')
  const [chain, setChain] = useState(initialData ? initialData.network : networks[0].id)
  const [showChainSelect, setShowChainSelect] = useState(false)

  const selectedNetwork = networks.find(n=>n.id===chain)

  function doSave() {
    if(!name || !addr) return alert('请填写名称和地址')

    let isValid = true;
    let errorMsg = '';

    if (chain === 'main' || chain === 'bsc' || chain === 'polygon') {
      if (!/^0x[a-fA-F0-9]{40}$/.test(addr)) {
        isValid = false;
        errorMsg = '您输入的地址有误，请输入有效的 EVM (0x开头) 地址';
      }
    } else if (chain === 'trx') {
      if (!/^T[a-zA-Z0-9]{33}$/.test(addr)) {
        isValid = false;
        errorMsg = '您输入的地址有误，请输入有效的 TRON (T开头) 地址';
      }
    } else if (chain === 'sol') {
      if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(addr)) {
        isValid = false;
        errorMsg = '您输入的地址有误，请输入有效的 Solana 地址';
      }
    }

    if (!isValid) {
      alert(errorMsg);
      return;
    }

    onSave({
       name, 
       address: addr, 
       note, 
       network: chain, 
       networkName: selectedNetwork.name,
       networkColor: selectedNetwork.color,
       networkIcon: selectedNetwork.icon
    })
  }

  return (
    <div className="modal-overlay" style={{alignItems:'flex-end'}}>
      <div className="modal-box" style={{width:'100%', borderRadius:'24px 24px 0 0', padding:'24px', maxHeight:'85vh', display:'flex', flexDirection:'column'}}>
         <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px'}}>
           <div style={{fontSize:'18px', fontWeight:'700'}}>{initialData ? '编辑地址' : '添加地址'}</div>
           <button onClick={onClose} style={{background:'none', border:'none', padding:'4px', cursor:'pointer'}}><Icon name="close" size={20} /></button>
         </div>

         <div style={{overflowY:'auto', flex:1}}>
           <div style={{marginBottom:'20px'}}>
              <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'8px', color:'var(--text-muted)'}}>名称 *</div>
              <input 
                value={name}
                onChange={e=>setName(e.target.value)}
                placeholder="例如: Alice"
                style={{width:'100%', padding:'14px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'15px'}}
              />
           </div>

           <div style={{marginBottom:'20px'}}>
              <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'8px', color:'var(--text-muted)'}}>地址 *</div>
              <div style={{position:'relative'}}>
                 <input 
                   value={addr}
                   onChange={e=>setAddr(e.target.value)}
                   placeholder="0x..."
                   style={{width:'100%', padding:'14px', paddingRight:'40px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'15px'}}
                 />
                 <div style={{position:'absolute', right:'10px', top:'50%', transform:'translateY(-50%)', color:'var(--primary)'}}>
                   <Icon name="scan" size={20} />
                 </div>
              </div>
           </div>

           <div style={{marginBottom:'20px'}}>
              <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'8px', color:'var(--text-muted)'}}>网络</div>
              <div onClick={()=>setShowChainSelect(true)} style={{
                 padding:'14px', borderRadius:'12px', border:'1px solid var(--border)', 
                 display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer', background:'#fff'
              }}>
                 <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                    <div style={{width:'24px', height:'24px', borderRadius:'12px', background:selectedNetwork.color, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px', fontWeight:'700'}}>
                      {selectedNetwork.icon}
                    </div>
                    <span style={{fontSize:'15px'}}>{selectedNetwork.name}</span>
                 </div>
                 <Icon name="right" size={16} style={{color:'var(--text-muted)'}} />
              </div>
           </div>

           <div style={{marginBottom:'32px'}}>
              <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'8px', color:'var(--text-muted)'}}>备注</div>
              <input 
                value={note}
                onChange={e=>setNote(e.target.value)}
                placeholder="添加备注 (可选)"
                style={{width:'100%', padding:'14px', borderRadius:'12px', border:'1px solid var(--border)', outline:'none', fontSize:'15px'}}
              />
           </div>

           <div style={{display:'flex', gap:'16px'}}>
              <Button variant="ghost" onClick={onClose} style={{flex:1, height:'50px'}}>取消</Button>
              <Button onClick={doSave} style={{flex:1, height:'50px'}}>保存</Button>
           </div>
         </div>
      </div>

      {showChainSelect && (
        <div className="modal-overlay" style={{zIndex:2100}} onClick={(e)=>{if(e.target.className==='modal-overlay') setShowChainSelect(false)}}>
           <div className="modal-box" style={{width:'100%', borderRadius:'24px 24px 0 0', padding:'24px', maxHeight:'60vh'}}>
              <div style={{fontSize:'18px', fontWeight:'700', marginBottom:'20px', textAlign:'center'}}>选择网络</div>
              <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                 {networks.map(n=>(
                   <div key={n.id} onClick={()=>{ setChain(n.id); setShowChainSelect(false); }} style={{
                      padding:'14px', borderRadius:'12px', border: chain===n.id ? '1px solid var(--primary)' : '1px solid var(--border)',
                      background: chain===n.id ? 'var(--primary-light)' : '#fff',
                      display:'flex', alignItems:'center', gap:'12px', cursor:'pointer'
                   }}>
                      <div style={{width:'32px', height:'32px', borderRadius:'16px', background:n.color, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px', fontWeight:'700'}}>
                        {n.icon}
                      </div>
                      <div style={{fontSize:'15px', fontWeight:'600', flex:1}}>{n.name}</div>
                      {chain===n.id && <Icon name="check" size={20} style={{color:'var(--primary)'}} />}
                   </div>
                 ))}
              </div>
           </div>
        </div>
      )}
    </div>
  )
}
