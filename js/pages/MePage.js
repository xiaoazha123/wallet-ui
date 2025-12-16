function MePage({ onBack, onGeneralSettings, onWallets, onSecurity, onNetwork, onDAppBrowser, onWalletConnect, onAddressBook, onWeb3Academy, onNotifications, onHelp, onService, onInvite, onLogout }) {
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      {/* 顶部标题 - 统一风格 */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'24px', padding:'0 8px', height:'44px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'0', width:'40px', height:'40px', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', color:'var(--text-main)'}}>
           <Icon name="back" size={24} />
         </button>
         <div style={{fontSize:'18px', fontWeight:'700', color:'var(--text-main)'}}>我的</div>
         <div style={{width:'40px'}}></div>
      </div>

      {/* 用户信息卡片 */}
      <div onClick={onWallets} style={{
        display:'flex', 
        alignItems:'center', 
        marginBottom:'32px', 
        padding: '0 20px',
        cursor: 'pointer'
      }}>
         <div style={{
           width:'64px', height:'64px', borderRadius:'32px', background:'#e0e7ff', color:'#6366f1',
           display:'flex', alignItems:'center', justifyContent:'center', marginRight:'16px'
         }}>
           <Icon name="user" size={32} />
         </div>
         <div style={{flex: 1}}>
           <div style={{fontSize:'20px', fontWeight:'700', marginBottom:'4px', color: 'var(--text-main)'}}>钱包用户</div>
           <div style={{fontSize:'14px', color:'var(--text-muted)'}}>Wallet 01</div>
         </div>
         <Icon name="right" size={20} style={{color:'var(--text-muted)'}} />
      </div>

      {/* 邀请奖励 */}
      <div style={{fontSize:'13px', fontWeight:'600', color:'var(--text-muted)', marginBottom:'12px', paddingLeft:'20px'}}>邀请奖励</div>
      <div className="card-white" style={{padding:'0', marginBottom:'24px', borderRadius:'16px', border:'none', boxShadow:'var(--shadow-sm)'}}>
         <div onClick={onInvite} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#fff7ed', display:'flex', alignItems:'center', justifyContent:'center', color:'#ea580c', marginRight:'16px'}}>
              <Icon name="gift" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>邀请中心</div>
               <div style={{fontSize:'13px', color:'var(--text-muted)'}}>邀请好友，赚取返佣</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
         <div onClick={onInvite} style={{padding:'16px', display:'flex', alignItems:'center', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#ecfdf5', display:'flex', alignItems:'center', justifyContent:'center', color:'#10b981', marginRight:'16px'}}>
              <Icon name="chart" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>返佣收益</div>
               <div style={{fontSize:'13px', color:'var(--text-muted)'}}>查看我的返佣收益</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
      </div>

      {/* 设置 */}
      <div style={{fontSize:'13px', fontWeight:'600', color:'var(--text-muted)', marginBottom:'12px', paddingLeft:'20px'}}>设置</div>
      <div className="card-white" style={{padding:'0', marginBottom:'24px', borderRadius:'16px', border:'none', boxShadow:'var(--shadow-sm)'}}>
         <div onClick={onGeneralSettings} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#4b5563', marginRight:'16px'}}>
              <Icon name="settings" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>通用设置</div>
               <div style={{fontSize:'13px', color:'var(--text-muted)'}}>语言、货币、显示设置</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
         <div onClick={onNetwork} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#ffedd5', display:'flex', alignItems:'center', justifyContent:'center', color:'#ea580c', marginRight:'16px'}}>
              <Icon name="global" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>多链设置</div>
               <div style={{fontSize:'13px', color:'var(--text-muted)'}}>管理网络节点</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>

         <div onClick={onSecurity} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#4b5563', marginRight:'16px'}}>
              <Icon name="lock" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>安全中心</div>
               <div style={{fontSize:'13px', color:'var(--text-muted)'}}>密码、生物识别、备份</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
         <div onClick={onDAppBrowser} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#f3e8ff', display:'flex', alignItems:'center', justifyContent:'center', color:'#a855f7', marginRight:'16px'}}>
              <Icon name="compass" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>DApp 浏览器</div>
               <div style={{fontSize:'13px', color:'var(--text-muted)'}}>访问去中心化应用</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
         <div onClick={onWalletConnect} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#eff6ff', display:'flex', alignItems:'center', justifyContent:'center', color:'#3b82f6', marginRight:'16px'}}>
              <Icon name="link" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>WalletConnect</div>
               <div style={{fontSize:'13px', color:'var(--text-muted)'}}>管理 DApp 连接</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
         <div onClick={onAddressBook} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#f3e8ff', display:'flex', alignItems:'center', justifyContent:'center', color:'#a855f7', marginRight:'16px'}}>
              <Icon name="user" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>地址簿</div>
               <div style={{fontSize:'13px', color:'var(--text-muted)'}}>管理常用地址</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
         <div onClick={onWeb3Academy} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#ffedd5', display:'flex', alignItems:'center', justifyContent:'center', color:'#f97316', marginRight:'16px'}}>
              <Icon name="book" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>Web3 学院</div>
               <div style={{fontSize:'13px', color:'var(--text-muted)'}}>学习区块链知识</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
         <div onClick={onNotifications} style={{padding:'16px', display:'flex', alignItems:'center', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#4b5563', marginRight:'16px'}}>
              <Icon name="bell" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>通知设置</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
      </div>

      {/* 帮助与支持 */}
      <div style={{fontSize:'13px', fontWeight:'600', color:'var(--text-muted)', marginBottom:'12px', paddingLeft:'20px'}}>帮助与支持</div>
      <div className="card-white" style={{padding:'0', marginBottom:'24px', borderRadius:'16px', border:'none', boxShadow:'var(--shadow-sm)'}}>
         <div onClick={onService} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#4b5563', marginRight:'16px'}}>
              <Icon name="service" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>联系客服</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
         <div onClick={onHelp} style={{padding:'16px', display:'flex', alignItems:'center', borderBottom:'1px solid var(--border)', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', color:'#4b5563', marginRight:'16px'}}>
              <Icon name="help" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'var(--text-main)', marginBottom:'2px'}}>帮助中心</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
         <div onClick={onLogout} style={{padding:'16px', display:'flex', alignItems:'center', cursor:'pointer'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'12px', background:'#fee2e2', display:'flex', alignItems:'center', justifyContent:'center', color:'#ef4444', marginRight:'16px'}}>
              <Icon name="logout" size={22} />
            </div>
            <div style={{flex:1}}>
               <div style={{fontSize:'16px', fontWeight:'600', color:'#ef4444', marginBottom:'2px'}}>退出登录</div>
            </div>
            <Icon name="right" size={18} style={{color:'#d1d5db'}} />
         </div>
      </div>

      <div style={{textAlign:'center', fontSize:'12px', color:'var(--text-muted)', marginBottom:'40px'}}>
        版本 v1.0.0
      </div>
      <div style={{height:'60px'}}></div>
    </div>
  )
}
