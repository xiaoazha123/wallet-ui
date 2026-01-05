function C2CPage({ onBack }) {
  const [bottomTab, setBottomTab] = useState('c2c') // c2c, orders, chat
  const [action, setAction] = useState('buy') // buy, sell
  const [payAmt, setPayAmt] = useState('')
  const [fiat, setFiat] = useState('CNY')
  const [crypto, setCrypto] = useState('USDT')
  
  // Mock Data for Orders
  // status: pending, paid, completed, cancelled
  const [orders, setOrders] = useState([
    { id: '20240315001', type: 'buy', fiatAmount: '1,000.00', cryptoAmount: '143.88', price: '6.95', status: 'completed', time: '2024-03-15 14:30', merchant: '德亿丰资本' },
    { id: '20240314002', type: 'sell', fiatAmount: '500.00', cryptoAmount: '71.94', price: '6.95', status: 'cancelled', time: '2024-03-14 09:15', merchant: '打了贝贝' }
  ])

  // Mock Data for Chats
  const [chats, setChats] = useState([
    { id: '20240315001', merchant: '德亿丰资本', lastMsg: '好的，已经放币了，请查收', time: '14:35', unread: 0 },
    { id: '20240314002', merchant: '打了贝贝', lastMsg: '您好，请问还在吗？', time: '09:20', unread: 2 }
  ])
  
  const [activeOrder, setActiveOrder] = useState(null)
  const [chatMessages, setChatMessages] = useState([])
  const [inputMsg, setInputMsg] = useState('')

  // Handle Buy/Sell Action
  const handleTrade = () => {
    if (!payAmt || parseFloat(payAmt) <= 0) return
    
    const newOrder = {
      id: new Date().getTime().toString(),
      type: action,
      fiatAmount: parseFloat(payAmt).toFixed(2),
      cryptoAmount: action === 'buy' ? (parseFloat(payAmt) / 6.95).toFixed(2) : (parseFloat(payAmt) * 6.95).toFixed(2),
      price: '6.95',
      status: 'pending',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      merchant: '极速成交商家'
    }

    setOrders([newOrder, ...orders])
    
    // Create new chat session
    const newChat = {
      id: newOrder.id,
      merchant: newOrder.merchant,
      lastMsg: action === 'buy' ? '订单已创建，请尽快完成支付' : '订单已创建，等待买家付款',
      time: newOrder.time,
      unread: 1
    }
    setChats([newChat, ...chats])
    
    // Switch to Chat tab and open this order
    setActiveOrder(newOrder)
    
    if (action === 'buy') {
      setChatMessages([
        { id: 1, sender: 'system', text: `您已成功下单，订单号 ${newOrder.id}`, time: newOrder.time },
        { id: 2, sender: 'merchant', text: '您好，在线等，请按金额转账，转账后请点击“我已付款”', time: newOrder.time }
      ])
    } else {
      setChatMessages([
        { id: 1, sender: 'system', text: `您已成功下单，订单号 ${newOrder.id}`, time: newOrder.time },
        { id: 2, sender: 'system', text: '等待买家付款中...', time: newOrder.time }
      ])
      
      // Simulate Buyer Payment for Sell Order
      setTimeout(() => {
        setChatMessages(prev => [...prev, { id: 3, sender: 'merchant', text: '我已完成付款，请查收并放币', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }])
        setOrders(prev => prev.map(o => o.id === newOrder.id ? { ...o, status: 'paid' } : o))
        setActiveOrder(prev => prev && prev.id === newOrder.id ? { ...prev, status: 'paid' } : prev)
      }, 5000)
    }
    
    setBottomTab('chat')
    setPayAmt('') // Clear input
  }

  const openChat = (orderId) => {
    const order = orders.find(o => o.id === orderId)
    if (order) {
       setActiveOrder(order)
       // Simplified mock history loading
       if (order.status === 'completed') {
         setChatMessages([
           { id: 1, sender: 'system', text: `订单 ${order.id} 已完成`, time: order.time },
           { id: 2, sender: 'merchant', text: '合作愉快！', time: order.time }
         ])
       } else if (order.status === 'cancelled') {
         setChatMessages([
           { id: 1, sender: 'system', text: `订单 ${order.id} 已取消`, time: order.time }
         ])
       } else {
         // Load logic based on current status for ongoing orders
         let msgs = [{ id: 1, sender: 'system', text: `订单 ${order.id} 进行中`, time: order.time }]
         if (order.type === 'buy') {
            msgs.push({ id: 2, sender: 'merchant', text: '您好，在线等，请按金额转账，转账后请点击“我已付款”', time: order.time })
            if(order.status === 'paid') {
                 msgs.push({ id: 3, sender: 'system', text: '您已标记为“我已付款”，等待卖家放币', time: order.time })
            }
         } else {
            msgs.push({ id: 2, sender: 'system', text: '等待买家付款中...', time: order.time })
            if(order.status === 'paid') {
                 msgs.push({ id: 3, sender: 'merchant', text: '我已完成付款，请查收并放币', time: order.time })
            }
         }
         setChatMessages(msgs)
       }
    }
  }
  
  const sendMessage = () => {
    if(!inputMsg.trim()) return
    setChatMessages([...chatMessages, { id: Date.now(), sender: 'me', text: inputMsg, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }])
    setInputMsg('')
  }

  // Buyer Actions
  const handleBuyerPaid = () => {
    if (!activeOrder) return
    
    if (!activeOrder.hasVoucher) {
      alert('请先上传支付凭证')
      return
    }

    setChatMessages(prev => [...prev, { id: Date.now(), sender: 'system', text: '您已标记为“我已付款”，等待卖家放币', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }])
    
    setOrders(prev => prev.map(o => o.id === activeOrder.id ? { ...o, status: 'paid' } : o))
    setActiveOrder(prev => ({ ...prev, status: 'paid' }))

    // Simulate Seller Release
    setTimeout(() => {
      setChatMessages(prev => [...prev, { id: Date.now()+1, sender: 'system', text: '卖家已放币，订单完成！', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }])
      setOrders(prev => prev.map(o => o.id === activeOrder.id ? { ...o, status: 'completed' } : o))
      setActiveOrder(prev => ({ ...prev, status: 'completed' }))
    }, 5000)
  }

  const handleUploadVoucher = () => {
      setChatMessages(prev => [...prev, { id: Date.now(), sender: 'me', text: '[图片] 支付凭证已上传', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }])
      if (activeOrder) {
        const updatedOrder = { ...activeOrder, hasVoucher: true }
        setActiveOrder(updatedOrder)
        setOrders(prev => prev.map(o => o.id === activeOrder.id ? updatedOrder : o))
      }
  }

  // Seller Actions
  const handleSellerRelease = () => {
    if (!activeOrder) return
    setChatMessages(prev => [...prev, { id: Date.now(), sender: 'system', text: '您已确认收款并放币，订单完成！', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }])
    
    setOrders(prev => prev.map(o => o.id === activeOrder.id ? { ...o, status: 'completed' } : o))
    setActiveOrder(prev => ({ ...prev, status: 'completed' }))
  }

  return (
    <div className="content-padded" style={{position: 'relative', display: 'flex', flexDirection: 'column', height: '82.8vh', overflow: 'hidden', padding:0, background:'#fff'}}>
      {/* Top Fixed Area */}
      <div style={{flexShrink: 0, paddingTop: '12px', background:'#fff', zIndex:10}}>
         {/* Header */}
         <div style={{display:'flex', alignItems:'center', marginBottom:'4px', padding:'0 16px'}}>
           {activeOrder && bottomTab === 'chat' ? (
              <button onClick={()=>{setActiveOrder(null)}} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)', marginLeft:'-8px'}}>
                <Icon name="back" size={24} />
              </button>
           ) : (
              <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)', marginLeft:'-8px'}}>
                <Icon name="back" size={24} />
              </button>
           )}
           <div style={{flex:1, textAlign:'center', fontSize:'18px', fontWeight:'700', marginRight:'24px'}}>
             {activeOrder && bottomTab === 'chat' ? activeOrder.merchant : 'C2C 交易'}
           </div>
         </div>
      </div>

      {/* Main Content Area */}
      <div style={{
        flex: 1, 
        overflowY: bottomTab==='chat' && activeOrder ? 'hidden' : 'auto', 
        padding: bottomTab==='c2c'?'0 16px':0, 
        paddingBottom: bottomTab==='chat' && activeOrder ? '56px' : '60px', 
        display:'flex', 
        flexDirection:'column', 
        background: bottomTab==='chat' && activeOrder ? '#f3f4f6' : '#fff'
      }}>
        
        {bottomTab === 'c2c' && (
          <div style={{display:'flex', flexDirection:'column', justifyContent: 'space-between'}}>
            <div>
                {/* Sub Tabs */}
                <div style={{display:'flex', gap:'20px', padding:'4px 0', borderBottom:'1px solid #f3f4f6', marginBottom:'12px'}}>
                   <div style={{fontSize:'16px', fontWeight:'700', color:'var(--text-main)', position:'relative'}}>
                     快捷区
                     <div style={{position:'absolute', bottom:'-8px', left:0, right:0, height:'3px', background:'var(--text-main)', borderRadius:'2px'}}></div>
                   </div>
                   <div style={{fontSize:'16px', fontWeight:'500', color:'var(--text-muted)'}}>自选区</div>
                   <div style={{fontSize:'16px', fontWeight:'500', color:'var(--text-muted)'}}>大宗区</div>
                </div>

                {/* Buy / Sell Toggle */}
                <div style={{marginBottom:'10px', display:'flex', gap:'16px'}}>
                   <div onClick={()=>setAction('buy')} style={{
                     fontSize:'18px', fontWeight:'700', cursor:'pointer',
                     color: action==='buy' ? 'var(--text-main)' : 'var(--text-muted)'
                   }}>买入</div>
                   <div onClick={()=>setAction('sell')} style={{
                     fontSize:'18px', fontWeight:'700', cursor:'pointer',
                     color: action==='sell' ? 'var(--text-main)' : 'var(--text-muted)'
                   }}>卖出</div>
                </div>

                {/* Spend Input */}
                <div style={{marginBottom:'10px',marginTop:'20px'}}>
                   <div style={{fontSize:'13px', color:'var(--text-secondary)', marginBottom:'8px'}}>花费</div>
                   <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'4px'}}>
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        value={payAmt} 
                        onChange={e=>setPayAmt(e.target.value)} 
                        style={{fontSize:'32px', fontWeight:'700', border:'none', outline:'none', width:'100%', background:'transparent', color:'var(--text-main)', fontFamily:'DIN, sans-serif'}} 
                      />
                      <div style={{
                        display:'flex', alignItems:'center', gap:'8px', 
                        background:'#f3f4f6', padding:'4px 10px', borderRadius:'16px',
                        fontWeight:'600', fontSize:'13px', cursor:'pointer'
                      }}>
                        <div style={{width:'16px', height:'16px', borderRadius:'8px', background: action==='buy'?'#ef4444':'#10b981', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px'}}>{action==='buy'?'¥':'T'}</div>
                        {action==='buy' ? fiat : crypto} <Icon name="down" size={10} />
                      </div>
                   </div>
                   <div style={{fontSize:'11px', color:'var(--text-muted)'}}>69.50 - 104,250.00 CNY</div>
                </div>

                {/* Receive Display */}
                <div style={{marginBottom:'10px',marginTop:'20px'}}>
                   <div style={{fontSize:'13px', color:'var(--text-secondary)', marginBottom:'8px'}}>到账</div>
                   <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'4px'}}>
                      <div style={{fontSize:'32px', fontWeight:'700', color: payAmt ? 'var(--text-main)' : '#e5e7eb', fontFamily:'DIN, sans-serif'}}>
                        {payAmt ? (action==='buy' ? (parseFloat(payAmt) / 6.95).toFixed(2) : (parseFloat(payAmt) * 6.95).toFixed(2)) : '0.00'}
                      </div>
                      <div style={{
                        display:'flex', alignItems:'center', gap:'8px', 
                        background:'#f3f4f6', padding:'4px 10px', borderRadius:'16px',
                        fontWeight:'600', fontSize:'13px', cursor:'pointer'
                      }}>
                        <div style={{width:'16px', height:'16px', borderRadius:'8px', background: action==='buy'?'#10b981':'#ef4444', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px'}}>{action==='buy'?'T':'¥'}</div>
                        {action==='buy' ? crypto : fiat} <Icon name="down" size={10} />
                      </div>
                   </div>
                   <div style={{fontSize:'11px', color:'var(--text-muted)'}}>1 USDT ≈ 6.95 CNY</div>
                </div>
            </div>

            <div style={{paddingBottom:'4px'}}>
                <Button onClick={handleTrade} style={{
                  width:'100%', height:'46px', borderRadius:'23px', fontSize:'16px', fontWeight:'600',
                  background: action==='buy'?'#10b981':'#ef4444', border:'none', marginBottom:'12px',
                  boxShadow: action==='buy'?'0 4px 12px rgba(16, 185, 129, 0.3)':'0 4px 12px rgba(239, 68, 68, 0.3)'
                }}>{action==='buy' ? '零手续费买入' : '零手续费卖出'}</Button>
                
                {/* Keypad */}
                <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'8px', textAlign:'center'}}>
                   {[1,2,3,4,5,6,7,8,9,'.',0].map(n=>(
                     <div key={n} onClick={()=>setPayAmt(p=>p+n)} style={{
                       fontSize:'20px', fontWeight:'600', padding:'10px', cursor:'pointer', 
                       color:'var(--text-main)', borderRadius:'12px',
                       transition:'background 0.1s'
                     }}
                     onMouseDown={e=>e.target.style.background='#f9fafb'}
                     onMouseUp={e=>e.target.style.background='transparent'}
                     onMouseLeave={e=>e.target.style.background='transparent'}
                     >{n}</div>
                   ))}
                   <div onClick={()=>setPayAmt(p=>p.slice(0,-1))} style={{display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', padding:'10px'}}>
                     <Icon name="close" size={20} />
                   </div>
                </div>
            </div>
          </div>
        )}

        {bottomTab === 'orders' && (
           <div style={{flex:1, display:'flex', flexDirection:'column', padding:'16px'}}>
              {orders.map(order => (
                <div key={order.id} style={{
                  background:'#fff', borderRadius:'12px', padding:'16px', marginBottom:'12px',
                  boxShadow:'0 2px 8px rgba(0,0,0,0.05)', border:'1px solid #f3f4f6'
                }}>
                   <div style={{display:'flex', justifyContent:'space-between', marginBottom:'12px'}}>
                     <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                        <div style={{fontSize:'16px', fontWeight:'700', color: order.type==='buy'?'#10b981':'#ef4444'}}>
                          {order.type==='buy'?'买入':'卖出'} USDT
                        </div>
                        <div style={{fontSize:'12px', color:'var(--text-muted)'}}>{order.time}</div>
                     </div>
                     <div style={{fontSize:'14px', fontWeight:'600', color: order.status==='completed'?'#10b981':(order.status==='cancelled'?'#9ca3af':(order.status==='paid'?'#3b82f6':'#f59e0b'))}}>
                        {order.status==='completed'?'已完成':(order.status==='cancelled'?'已取消':(order.status==='paid'?'待放币':'待付款'))}
                     </div>
                   </div>
                   <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <div>
                        <div style={{fontSize:'12px', color:'var(--text-muted)'}}>总金额</div>
                        <div style={{fontSize:'16px', fontWeight:'600'}}>¥ {order.fiatAmount}</div>
                      </div>
                      <div style={{textAlign:'right'}}>
                        <div style={{fontSize:'12px', color:'var(--text-muted)'}}>数量</div>
                        <div style={{fontSize:'16px', fontWeight:'600'}}>{order.cryptoAmount} USDT</div>
                      </div>
                   </div>
                   <div style={{borderTop:'1px solid #f3f4f6', marginTop:'12px', paddingTop:'12px', display:'flex', alignItems:'center', gap:'8px'}}>
                      <div style={{width:'20px', height:'20px', borderRadius:'10px', background:'#374151', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px'}}>{order.merchant[0]}</div>
                      <div style={{fontSize:'13px', fontWeight:'600'}}>{order.merchant}</div>
                   </div>
                </div>
              ))}
           </div>
        )}

        {bottomTab === 'chat' && !activeOrder && (
           <div style={{flex:1, display:'flex', flexDirection:'column'}}>
              {chats.map(chat => (
                 <div key={chat.id} onClick={()=>{openChat(chat.id)}} style={{
                   display:'flex', alignItems:'center', padding:'16px', borderBottom:'1px solid #f3f4f6', background:'#fff', cursor:'pointer'
                 }}>
                    <div style={{position:'relative', marginRight:'16px'}}>
                       <div style={{width:'48px', height:'48px', borderRadius:'24px', background:'#374151', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', fontWeight:'700'}}>
                         {chat.merchant[0]}
                       </div>
                       {chat.unread > 0 && <div style={{position:'absolute', top:'-2px', right:'-2px', background:'#ef4444', color:'#fff', fontSize:'10px', padding:'2px 6px', borderRadius:'10px', border:'1px solid #fff'}}>{chat.unread}</div>}
                    </div>
                    <div style={{flex:1}}>
                       <div style={{display:'flex', justifyContent:'space-between', marginBottom:'4px'}}>
                          <div style={{fontSize:'16px', fontWeight:'600'}}>{chat.merchant}</div>
                          <div style={{fontSize:'12px', color:'var(--text-muted)'}}>{chat.time}</div>
                       </div>
                       <div style={{fontSize:'14px', color:'var(--text-secondary)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', maxWidth:'240px'}}>
                          {chat.lastMsg}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        )}

        {bottomTab === 'chat' && activeOrder && (
           <div style={{flex:1, display:'flex', flexDirection:'column', height:'100%', background:'#f3f4f6'}}>
              {/* Order Info Snippet */}
              <div style={{flexShrink:0, background:'#fff', padding:'12px 16px', borderBottom:'1px solid #e5e7eb', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                 <div>
                    <div style={{fontSize:'14px', fontWeight:'700', color: activeOrder.type==='buy'?'#10b981':'#ef4444'}}>
                       {activeOrder.type==='buy'?'买入':'卖出'} USDT <span style={{color:'#374151', fontWeight:'400'}}>({activeOrder.status==='pending'?'待付款':(activeOrder.status==='paid'?'待放币':'已完成')})</span>
                    </div>
                    <div style={{fontSize:'12px', color:'var(--text-muted)'}}>¥ {activeOrder.fiatAmount}</div>
                 </div>
                 <button style={{padding:'6px 12px', borderRadius:'16px', background:'#eff6ff', color:'#3b82f6', border:'none', fontSize:'12px', fontWeight:'600'}}>
                    查看详情
                 </button>
              </div>

              {/* Messages */}
              <div style={{flex:1, overflowY:'auto', padding:'16px', display:'flex', flexDirection:'column', gap:'16px'}}>
                 {chatMessages.map(msg => (
                   <div key={msg.id} style={{
                     alignSelf: msg.sender==='me' ? 'flex-end' : (msg.sender==='system'?'center':'flex-start'),
                     maxWidth: msg.sender==='system' ? '100%' : '80%'
                   }}>
                      {msg.sender === 'system' ? (
                        <div style={{background:'rgba(0,0,0,0.1)', color:'#fff', padding:'4px 12px', borderRadius:'4px', fontSize:'12px', color:'#6b7280', textAlign:'center'}}>
                          {msg.text}
                        </div>
                      ) : (
                        <div style={{
                          background: msg.sender==='me' ? '#3b82f6' : '#fff',
                          color: msg.sender==='me' ? '#fff' : '#1f2937',
                          padding:'10px 14px',
                          borderRadius: msg.sender==='me' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}>
                          <div style={{fontSize:'14px', lineHeight:'1.4'}}>{msg.text}</div>
                        </div>
                      )}
                   </div>
                 ))}
              </div>
              
              {/* Fixed Bottom Area: Actions + Input */}
              <div style={{flexShrink:0, background:'#fff'}}>
                  {/* Action Bar based on Order Status */}
                  {activeOrder.status !== 'completed' && activeOrder.status !== 'cancelled' && (
                    <div style={{padding:'12px 16px', background:'#fff', borderTop:'1px solid #e5e7eb'}}>
                       {activeOrder.type === 'buy' && activeOrder.status === 'pending' && (
                         <div style={{display:'flex', gap:'10px'}}>
                            <button onClick={handleUploadVoucher} style={{flex:1, padding:'14px', background:'#f3f4f6', color:'#374151', borderRadius:'24px', border:'none', fontWeight:'700', fontSize:'16px'}}>
                               上传凭证
                            </button>
                            <button onClick={handleBuyerPaid} style={{flex:1.5, padding:'14px', background:'#10b981', color:'#fff', borderRadius:'24px', border:'none', fontWeight:'700', fontSize:'16px'}}>
                               我已付款
                            </button>
                         </div>
                       )}
                       {activeOrder.type === 'buy' && activeOrder.status === 'paid' && (
                         <button disabled style={{width:'100%', padding:'14px', background:'#d1d5db', color:'#fff', borderRadius:'24px', border:'none', fontWeight:'700', fontSize:'16px'}}>等待卖家放币...</button>
                       )}
                       {activeOrder.type === 'sell' && activeOrder.status === 'pending' && (
                         <button disabled style={{width:'100%', padding:'14px', background:'#d1d5db', color:'#fff', borderRadius:'24px', border:'none', fontWeight:'700', fontSize:'16px'}}>等待买家付款...</button>
                       )}
                       {activeOrder.type === 'sell' && activeOrder.status === 'paid' && (
                         <button onClick={handleSellerRelease} style={{width:'100%', padding:'14px', background:'#ef4444', color:'#fff', borderRadius:'24px', border:'none', fontWeight:'700', fontSize:'16px'}}>确认收款并放币</button>
                       )}
                    </div>
                  )}

                  {/* Input Area */}
                  <div style={{background:'#fff', padding:'12px', display:'flex', alignItems:'center', gap:'12px', borderTop:'1px solid #e5e7eb'}}>
                     <Icon name="plus" size={24} style={{color:'#9ca3af'}} />
                     <input 
                       type="text" 
                       value={inputMsg}
                       onChange={e=>setInputMsg(e.target.value)}
                       placeholder="发送消息..." 
                       style={{flex:1, background:'#f3f4f6', border:'none', borderRadius:'20px', padding:'10px 16px', fontSize:'14px', outline:'none'}}
                     />
                     <button onClick={sendMessage} style={{background:'#3b82f6', color:'#fff', border:'none', padding:'8px 16px', borderRadius:'16px', fontWeight:'600'}}>发送</button>
                  </div>
              </div>
           </div>
        )}

      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 100,
        height:'56px', background:'#fff', borderTop:'1px solid #f3f4f6',
        display:'flex', alignItems:'center', justifyContent:'space-around'
      }}>
         <div onClick={()=>{setBottomTab('c2c'); setActiveOrder(null)}} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'4px', cursor:'pointer', color:bottomTab==='c2c'?'var(--text-main)':'var(--text-muted)'}}>
            <Icon name="c2c" size={22} style={{color:bottomTab==='c2c'?'var(--text-main)':'#9ca3af'}} />
            <div style={{fontSize:'10px', fontWeight:bottomTab==='c2c'?'600':'400'}}>C2C</div>
         </div>
         <div onClick={()=>{setBottomTab('orders'); setActiveOrder(null)}} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'4px', cursor:'pointer', color:bottomTab==='orders'?'var(--text-main)':'var(--text-muted)'}}>
            <Icon name="copy" size={22} style={{color:bottomTab==='orders'?'var(--text-main)':'#9ca3af'}} />
            <div style={{fontSize:'10px', fontWeight:bottomTab==='orders'?'600':'400'}}>订单</div>
         </div>
         <div onClick={()=>{setBottomTab('chat'); setActiveOrder(null)}} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'4px', cursor:'pointer', color:bottomTab==='chat'?'var(--text-main)':'var(--text-muted)'}}>
            <Icon name="service" size={22} style={{color:bottomTab==='chat'?'var(--text-main)':'#9ca3af'}} />
            <div style={{fontSize:'10px', fontWeight:bottomTab==='chat'?'600':'400'}}>聊天</div>
         </div>
      </div>
    </div>
  )
}
