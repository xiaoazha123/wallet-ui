function C2CPage({ onBack }) {
  const [tab, setTab] = useState('express') // express, p2p, block
  const [action, setAction] = useState('buy') // buy, sell
  const [payAmt, setPayAmt] = useState('')
  const [fiat, setFiat] = useState('CNY')
  const [crypto, setCrypto] = useState('USDT')
  
  // Modal States
  const [showAmountModal, setShowAmountModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false)
  
  // Filter States
  const [filterAmount, setFilterAmount] = useState('')
  const [filterMethod, setFilterMethod] = useState('all') // all, alipay, wechat, card
  
  // Advanced Filter States
  const [filterAdType, setFilterAdType] = useState('all') // all, merchant, ordinary
  const [filterSort, setFilterSort] = useState('price') // price, completion, quantity

  // P2P Mock Data
  const merchants = [
    { id:1, name:'德亿丰资本', done:178, rate:'100%', time:'20分钟', price:'6.95', min:'3,475.00', max:'13,900.00', amount:'5,546.59', methods:['alipay'] },
    { id:2, name:'打了贝贝', done:1076, rate:'100%', time:'20分钟', price:'6.96', min:'3,480.00', max:'13,920.00', amount:'4,327.61', methods:['alipay','wechat'] },
    { id:3, name:'曜清晨', done:88, rate:'100%', time:'20分钟', price:'6.96', min:'4,872.00', max:'10,440.00', amount:'9,186.76', methods:['wechat'] },
  ]
  
  const blockMerchants = [
    { id:1, name:'俊俊贷款支付可验流水', verified:true, done:81, rate:'100%', time:'20分钟', price:'7.01', min:'68,698.00', max:'168,788.74', amount:'24,078.28', methods:['card','alipay'] },
    { id:2, name:'财源滚滚—24h售后保障', verified:true, done:74, rate:'88%', time:'20分钟', price:'7.01', min:'14,020.00', max:'126,180.00', amount:'18,000.00', methods:['card','alipay','wechat'] },
  ]

  return (
    <div className="content-padded" style={{display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden'}}>
      {/* Top Fixed Area */}
      <div style={{flexShrink: 0, paddingTop: '12px'}}>
         {/* Header */}
         <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
           <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
           <div style={{fontSize:'18px', fontWeight:'700'}}>C2C 交易</div>
           <div style={{width:'40px'}}></div>
         </div>

         {/* Tabs */}
         <div style={{
           display: 'flex', 
           alignItems: 'center', 
           gap: '24px', 
           padding: '16px 20px', 
           borderBottom: '1px solid var(--border)'
         }}>
            {['express', 'p2p', 'block'].map(t => (
              <div key={t} onClick={()=>setTab(t)} style={{
                fontSize:'16px', 
                fontWeight: tab===t?'700':'500', 
                color: tab===t?'var(--text-main)':'var(--text-muted)', 
                cursor:'pointer',
                position: 'relative'
              }}>
                {t==='express'?'快捷区':(t==='p2p'?'自选区':'大宗区')}
                {tab===t && <div style={{position:'absolute', bottom:'-17px', left:'0', right:'0', height:'2px', background:'var(--text-main)'}}></div>}
              </div>
            ))}
         </div>

         {/* P2P/Block Fixed Filters */}
         {(tab === 'p2p' || tab === 'block') && (
            <div style={{padding: '16px 20px 0'}}>
                {/* Row 1: Buy/Sell Toggle & Fiat Selector */}
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px'}}>
                   <div style={{display:'flex', gap:'4px', background:'#f3f4f6', padding:'2px', borderRadius:'8px'}}>
                      <button onClick={()=>setAction('buy')} style={{padding:'6px 24px', borderRadius:'6px', border:'none', fontSize:'14px', fontWeight:'600', background:action==='buy'?'#fff':'transparent', color:action==='buy'?'var(--text-main)':'var(--text-muted)', boxShadow:action==='buy'?'var(--shadow-sm)':'none'}}>买入</button>
                      <button onClick={()=>setAction('sell')} style={{padding:'6px 24px', borderRadius:'6px', border:'none', fontSize:'14px', fontWeight:'600', background:action==='sell'?'#fff':'transparent', color:action==='sell'?'var(--text-main)':'var(--text-muted)', boxShadow:action==='sell'?'var(--shadow-sm)':'none'}}>卖出</button>
                   </div>
                   
                   <div style={{display:'flex', alignItems:'center', gap:'8px', background:'#f3f4f6', padding:'6px 12px', borderRadius:'16px', fontSize:'13px', fontWeight:'600'}}>
                      <Icon name="chart" size={14} />
                      {fiat} <Icon name="down" size={10} />
                   </div>
                </div>

                {/* Row 2: Filters */}
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', paddingBottom: '16px'}}>
                   <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
                      {/* USDT (Static Display) */}
                      <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
                         <div style={{width:'20px', height:'20px', borderRadius:'10px', background:'#10b981', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px'}}>T</div>
                         <span style={{fontSize:'16px', fontWeight:'700'}}>USDT</span>
                      </div>
                      
                      {/* Amount Filter */}
                      <div onClick={()=>setShowAmountModal(true)} style={{fontSize:'14px', fontWeight: filterAmount?'600':'400', color: filterAmount?'var(--text-main)':'var(--text-muted)', display:'flex', alignItems:'center', gap:'4px', cursor:'pointer'}}>
                         {filterAmount || '金额'} <Icon name="down" size={10} />
                      </div>

                      {/* Payment Method Filter */}
                      <div onClick={()=>setShowPaymentModal(true)} style={{fontSize:'14px', fontWeight: filterMethod!=='all'?'600':'400', color: filterMethod!=='all'?'var(--text-main)':'var(--text-muted)', display:'flex', alignItems:'center', gap:'4px', cursor:'pointer'}}>
                         {filterMethod==='all'?'支付方式':(filterMethod==='alipay'?'支付宝':(filterMethod==='wechat'?'微信':'银行卡'))} <Icon name="down" size={10} />
                      </div>
                   </div>

                   {/* Advanced Filter (Funnel Icon) */}
                   <div onClick={()=>setShowAdvancedFilter(true)} style={{position:'relative', cursor:'pointer'}}>
                      <Icon name="menu" size={20} style={{color:'var(--text-muted)'}} />
                      {(filterAdType!=='all' || filterSort!=='price') && <div style={{position:'absolute', top:'-4px', right:'-4px', width:'8px', height:'8px', background:'#ef4444', borderRadius:'4px'}}></div>}
                   </div>
                </div>
             </div>
         )}
      </div>

      {/* Main Content (Scrollable) */}
      <div style={{flex: 1, overflowY: 'auto', padding: '0 20px 20px'}}>
        
        {tab === 'express' && (
          <div style={{display:'flex', flexDirection:'column', paddingTop: '20px'}}>
            <div style={{marginBottom:'24px'}}>
               <div style={{display:'flex', gap:'4px', background:'#f3f4f6', padding:'2px', borderRadius:'8px', width:'fit-content'}}>
                  <button onClick={()=>setAction('buy')} style={{padding:'6px 24px', borderRadius:'6px', border:'none', fontSize:'14px', fontWeight:'600', background:action==='buy'?'#fff':'transparent', color:action==='buy'?'var(--text-main)':'var(--text-muted)', boxShadow:action==='buy'?'var(--shadow-sm)':'none'}}>买入</button>
                  <button onClick={()=>setAction('sell')} style={{padding:'6px 24px', borderRadius:'6px', border:'none', fontSize:'14px', fontWeight:'600', background:action==='sell'?'#fff':'transparent', color:action==='sell'?'var(--text-main)':'var(--text-muted)', boxShadow:action==='sell'?'var(--shadow-sm)':'none'}}>卖出</button>
               </div>
            </div>
            
            <div style={{flex:1}}>
                <div style={{marginBottom:'24px'}}>
                   <div style={{fontSize:'12px', fontWeight:'600', color:'var(--text-main)', marginBottom:'8px'}}>花费</div>
                   <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid var(--border)', paddingBottom:'8px', marginBottom:'8px'}}>
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        value={payAmt} 
                        onChange={e=>setPayAmt(e.target.value)} 
                        style={{fontSize:'32px', fontWeight:'700', border:'none', outline:'none', width:'100%', background:'transparent', color:'var(--text-main)'}} 
                      />
                      <div style={{display:'flex', alignItems:'center', gap:'8px', fontWeight:'600', fontSize:'16px'}}>
                        <div style={{width:'20px', height:'20px', borderRadius:'10px', background: action==='buy'?'#ef4444':'#10b981', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px'}}>{action==='buy'?'¥':'T'}</div>
                        {action==='buy' ? fiat : crypto} <Icon name="down" size={12} />
                      </div>
                   </div>
                   <div style={{fontSize:'12px', color:'var(--text-muted)'}}>69.50 - 104,250.00 CNY</div>
                </div>

                <div style={{marginBottom:'24px'}}>
                   <div style={{fontSize:'12px', fontWeight:'600', color:'var(--text-main)', marginBottom:'8px'}}>到账</div>
                   <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid var(--border)', paddingBottom:'8px', marginBottom:'8px'}}>
                      <div style={{fontSize:'32px', fontWeight:'700', color: payAmt ? 'var(--text-main)' : '#d1d5db'}}>
                        {payAmt ? (action==='buy' ? (parseFloat(payAmt) / 6.95).toFixed(2) : (parseFloat(payAmt) * 6.95).toFixed(2)) : '0.00'}
                      </div>
                      <div style={{display:'flex', alignItems:'center', gap:'8px', fontWeight:'600', fontSize:'16px'}}>
                        <div style={{width:'20px', height:'20px', borderRadius:'10px', background: action==='buy'?'#10b981':'#ef4444', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px'}}>{action==='buy'?'T':'¥'}</div>
                        {action==='buy' ? crypto : fiat} <Icon name="down" size={12} />
                      </div>
                   </div>
                   <div style={{fontSize:'12px', color:'var(--text-muted)'}}>1 USDT ≈ 6.95 CNY</div>
                </div>
            </div>

            <div style={{marginTop:'24px'}}>
                <Button style={{
                  width:'100%', height:'48px', borderRadius:'24px', fontSize:'16px', fontWeight:'600',
                  background: action==='buy'?'#16a34a':'#ef4444', border:'none', marginBottom:'20px'
                }}>{action==='buy' ? '零手续费买入' : '零手续费卖出'}</Button>
                
                {/* Keypad */}
                <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'16px', textAlign:'center', paddingBottom:'10px'}}>
                   {[1,2,3,4,5,6,7,8,9,'.',0].map(n=>(
                     <div key={n} onClick={()=>setPayAmt(p=>p+n)} style={{fontSize:'22px', fontWeight:'600', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}>{n}</div>
                   ))}
                   <div onClick={()=>setPayAmt(p=>p.slice(0,-1))} style={{display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', padding:'8px'}}><Icon name="close" size={22} /></div>
                </div>
            </div>
          </div>
        )}

        {/* P2P & Block Zone */}
        {(tab === 'p2p' || tab === 'block') && (
          <div style={{paddingTop: '20px'}}>
             {/* Banner for Block Trade */}
             {tab === 'block' && (
               <div style={{background:'#eff6ff', borderRadius:'12px', padding:'16px', display:'flex', alignItems:'center', gap:'12px', marginBottom:'20px'}}>
                  <div style={{width:'40px', height:'40px', background:'#3b82f6', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'20px'}}>🛡️</div>
                  <div>
                    <div style={{fontSize:'14px', fontWeight:'700', color:'#1e3a8a'}}>大宗交易保障</div>
                    <div style={{fontSize:'12px', color:'#60a5fa'}}>申请成为认证商家 &gt;</div>
                  </div>
               </div>
             )}

             {/* Merchant List */}
             <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
               {(tab==='p2p' ? merchants : blockMerchants).map(m => (
                 <div key={m.id} style={{
                   background: '#fff',
                   borderRadius: '16px',
                   padding: '16px',
                   boxShadow: 'var(--shadow-sm)',
                   border: '1px solid var(--border)'
                 }}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'12px'}}>
                       <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                          <div style={{width:'24px', height:'24px', borderRadius:'12px', background:'#374151', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px', fontWeight:'700'}}>{m.name[0]}</div>
                          <div style={{fontSize:'14px', fontWeight:'600', color:'var(--text-main)'}}>{m.name} {m.verified && <span style={{color:'#eab308'}}>🛡️</span>}</div>
                       </div>
                       <div style={{fontSize:'12px', color:'var(--text-muted)'}}>{m.done}单 | {m.rate}</div>
                    </div>
                    
                    {/* Price and Button Row */}
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px'}}>
                       <div style={{fontSize:'24px', fontWeight:'700', color:'var(--text-main)', display:'flex', alignItems:'baseline', gap:'4px'}}>
                          <span style={{fontSize:'14px', fontWeight:'600'}}>¥</span>{m.price}
                       </div>
                       <Button style={{
                         width:'80px', height:'32px', padding:'0', borderRadius:'16px', fontSize:'13px', fontWeight:'600',
                         background: action==='buy'?'#16a34a':'#ef4444', border:'none'
                       }}>{action==='buy'?'买入':'卖出'}</Button>
                    </div>

                    {/* Limits and Amount */}
                    <div style={{marginBottom:'12px'}}>
                      <div style={{fontSize:'12px', color:'var(--text-muted)'}}>限额 ¥ {m.min} - ¥ {m.max}</div>
                      <div style={{fontSize:'12px', color:'var(--text-muted)', marginTop:'2px'}}>数量 {m.amount} USDT</div>
                    </div>

                    {/* Payment Methods */}
                    <div style={{display:'flex', gap:'12px'}}>
                       {m.methods.map(met => (
                         <div key={met} style={{display:'flex', alignItems:'center', gap:'4px'}}>
                           <div style={{width:'2px', height:'10px', background: met==='alipay'?'#0ea5e9':(met==='wechat'?'#22c55e':'#f59e0b')}}></div>
                           <span style={{fontSize:'11px', color:'var(--text-muted)'}}>{met==='alipay'?'支付宝':(met==='wechat'?'微信':'银行卡')}</span>
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* Amount Modal */}
        {showAmountModal && (
          <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') setShowAmountModal(false)}} style={{alignItems:'flex-end'}}>
             <div className="modal-box" style={{width:'100%', borderRadius:'24px 24px 0 0', padding:'24px', margin:0, animation:'slideUp 0.3s ease'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px'}}>
                  <div style={{fontSize:'18px', fontWeight:'700'}}>按金额筛选</div>
                  <div onClick={()=>setShowAmountModal(false)} style={{cursor:'pointer'}}><Icon name="close" size={24} /></div>
                </div>
                <div style={{marginBottom:'24px'}}>
                  <input 
                    type="number" 
                    placeholder="输入目标金额" 
                    value={filterAmount} 
                    onChange={e=>setFilterAmount(e.target.value)} 
                    style={{width:'100%', padding:'12px', background:'#f9fafb', border:'1px solid var(--border)', borderRadius:'12px', fontSize:'14px', outline:'none'}} 
                  />
                </div>
                <button onClick={()=>setShowAmountModal(false)} style={{width:'100%', padding:'14px', borderRadius:'24px', border:'none', background:'var(--primary)', color:'#fff', fontSize:'16px', fontWeight:'600'}}>确认</button>
             </div>
          </div>
        )}

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') setShowPaymentModal(false)}} style={{alignItems:'flex-end'}}>
             <div className="modal-box" style={{width:'100%', borderRadius:'24px 24px 0 0', padding:'24px', margin:0, animation:'slideUp 0.3s ease'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px'}}>
                  <div style={{fontSize:'18px', fontWeight:'700'}}>支付方式</div>
                  <div onClick={()=>setShowPaymentModal(false)} style={{cursor:'pointer'}}><Icon name="close" size={24} /></div>
                </div>
                <div style={{display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'24px'}}>
                   {['all','alipay','wechat','card'].map(m => (
                     <div key={m} onClick={()=>setFilterMethod(m)} style={{
                       padding:'8px 16px', borderRadius:'20px', fontSize:'13px', fontWeight:'600', cursor:'pointer',
                       background: filterMethod===m ? 'var(--primary)' : '#f3f4f6',
                       color: filterMethod===m ? '#fff' : 'var(--text-main)'
                     }}>
                       {m==='all'?'全部':(m==='alipay'?'支付宝':(m==='wechat'?'微信':'银行卡'))}
                     </div>
                   ))}
                </div>
                <button onClick={()=>setShowPaymentModal(false)} style={{width:'100%', padding:'14px', borderRadius:'24px', border:'none', background:'var(--primary)', color:'#fff', fontSize:'16px', fontWeight:'600'}}>确认</button>
             </div>
          </div>
        )}

        {/* Advanced Filter Modal (Hamburger) */}
        {showAdvancedFilter && (
          <div className="modal-overlay" onClick={(e)=>{if(e.target.className==='modal-overlay') setShowAdvancedFilter(false)}} style={{alignItems:'flex-end'}}>
             <div className="modal-box" style={{width:'100%', borderRadius:'24px 24px 0 0', padding:'24px', margin:0, animation:'slideUp 0.3s ease', display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'32px'}}>
                  <div style={{fontSize:'20px', fontWeight:'700'}}>筛选条件</div>
                  <div onClick={()=>setShowAdvancedFilter(false)} style={{cursor:'pointer'}}><Icon name="close" size={24} /></div>
                </div>
                
                <div style={{flex:1, overflowY:'auto'}}>
                  {/* Ad Type */}
                  <div style={{marginBottom:'32px'}}>
                    <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'12px'}}>广告类型</div>
                    <div style={{display:'flex', gap:'12px'}}>
                      {['all','merchant','ordinary'].map(t => (
                        <div key={t} onClick={()=>setFilterAdType(t)} style={{
                          padding:'8px 16px', borderRadius:'8px', fontSize:'13px', fontWeight:'600', cursor:'pointer',
                          background: filterAdType===t ? '#eff6ff' : '#f3f4f6',
                          color: filterAdType===t ? 'var(--primary)' : 'var(--text-main)',
                          border: filterAdType===t ? '1px solid var(--primary)' : '1px solid transparent'
                        }}>
                          {t==='all'?'全部':(t==='merchant'?'认证商家':'普通广告')}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div style={{marginBottom:'32px'}}>
                    <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'12px'}}>排序方式</div>
                    <div style={{display:'flex', gap:'12px'}}>
                      {['price','completion','quantity'].map(s => (
                        <div key={s} onClick={()=>setFilterSort(s)} style={{
                          padding:'8px 16px', borderRadius:'8px', fontSize:'13px', fontWeight:'600', cursor:'pointer',
                          background: filterSort===s ? '#eff6ff' : '#f3f4f6',
                          color: filterSort===s ? 'var(--primary)' : 'var(--text-main)',
                          border: filterSort===s ? '1px solid var(--primary)' : '1px solid transparent'
                        }}>
                          {s==='price'?'价格最优':(s==='completion'?'成交率高':'数量最多')}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{display:'flex', gap:'16px', marginTop:'auto'}}>
                   <button onClick={()=>{setFilterAdType('all'); setFilterSort('price')}} style={{flex:1, padding:'14px', borderRadius:'24px', border:'1px solid var(--border)', background:'#fff', fontSize:'16px', fontWeight:'600'}}>重置</button>
                   <button onClick={()=>setShowAdvancedFilter(false)} style={{flex:1, padding:'14px', borderRadius:'24px', border:'none', background:'var(--primary)', color:'#fff', fontSize:'16px', fontWeight:'600'}}>确认</button>
                </div>
             </div>
          </div>
        )}

      </div>
    </div>
  )
}
