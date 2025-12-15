function App() {
  const [tab,setTab] = useState('home')
  const [view,setView] = useState('launch')
  const [stack,setStack] = useState([])
  const [toast,setToast] = useState('')
  const address = '0x12AB...89FF'
  const [lang,setLang] = useState(localStorage.getItem('lang')||'中文')
  const [backed,setBacked] = useState(true)
  const [mnemonic,setMnemonic] = useState(generateMnemonic())
  const [showNetModal, setShowNetModal] = useState(false)
  const [showFeatureModal, setShowFeatureModal] = useState(false) // New state for feature modal
  const [featureTitle, setFeatureTitle] = useState('') // Title for the feature modal
  const [currentNet, setCurrentNet] = useState('main')
  const [importTab, setImportTab] = useState('助记词')
  function push(v){ setStack(s=>[...s,view]); setView(v) }
  function back(){ setView(stack[stack.length-1] || (tab==='home'?'home':tab)); setStack(s=>s.slice(0,-1)) }
  function gotoTab(t){ setTab(t); setView(t); setStack([]) }
  const showBack = stack.length>0 && view!=='onboard'
  const title = useMemo(()=>{
    const map={home:'首页', market:'市场', trade:'交易', discover:'发现', assets:'资产'}
    if(view==='launch') return '欢迎'
    if(view==='init') return '初始化'
    if(view==='create-pass') return '设置密码'
    if(view==='mnemonic') return '助记词'
    if(view==='verify') return '助记词验证'
    if(view==='bind-invite') return '绑定邀请'
    if(view==='import') return '导入钱包'
    if(view==='wallets') return '钱包管理'
    if(view==='asset') return '资产详情'
    if(view==='send') return '发送'
    if(view==='receive') return '收款'
    if(view==='settings') return '设置'
    if(view==='security') return '安全设置'
    if(view==='network') return '多链设置'
    if(view==='language') return '语言设置'
    if(view==='earn-detail') return '存钱详情'
    if(view==='stake') return '存钱'
    if(view==='redeem') return '赎回'
    if(view==='deposit') return 'USDT 充值'
    if(view==='buy') return '购买代币'
    if(view==='game-detail') return '游戏'
    if(view==='course') return '课程详情'
    if(view==='signin') return '每日签到'
    if(view==='payment') return '支付'
    if(view==='invite') return '邀请好友'
    if(view==='governance') return '治理'
    if(view==='news-detail') return '新闻详情'
    if(view==='more') return '更多服务'
    if(view==='tasks') return '任务中心'
    if(view==='points') return '我的积分'
    if(view==='earn') return '存钱'
    if(view==='invest') return '投资'
    if(view==='game') return '游戏中心'
    if(view==='academy') return 'Web3 学院'
    if(view==='c2c') return 'C2C 交易'
    return map[tab]
  },[tab,view])

  const [currentToken,setCurrentToken] = useState(null)
  const [currentProduct,setCurrentProduct] = useState(null)
  const [currentGame,setCurrentGame] = useState(null)
  const [currentCourse,setCurrentCourse] = useState(null)
  const [currentNews,setCurrentNews] = useState(null)
  const [currentMarketTab,setCurrentMarketTab] = useState('自选')

  const [currentReceiveToken, setCurrentReceiveToken] = useState(null) // Added missing state

  const [currentNetSelect, setCurrentNetSelect] = useState('all')
  const [currentWallet, setCurrentWallet] = useState({ name:'My Wallet', addr: address })

  const allCoins = [
    { name:'BTC', price: 680000, balance: 0.05, chg:'+2.38%', code:'BTC', network: 'btc' },
    { name:'ETH', price: 23000, balance: 1.25, chg:'-1.12%', code:'ETH', network: 'main' },
    { name:'SOL', price: 1050, balance: 50.0, chg:'+5.67%', code:'SOL', network: 'sol' },
    { name:'BNB', price: 4200, balance: 10.5, chg:'+0.45%', code:'BNB', network: 'bsc' },
    { name:'USDT', price: 7.2, balance: 500.0, chg:'+0.01%', code:'USDT', network: 'main' }, // ETH USDT
    { name:'USDT', price: 7.2, balance: 200.0, chg:'+0.01%', code:'USDT', network: 'bsc' }, // BSC USDT
    { name:'H', price: 2.34, balance: 1200.0, chg:'+12.5%', code:'H', network: 'main' },
    { name:'XRP', price: 4.50, balance: 0, chg:'-0.89%', code:'XRP', network: 'main' },
    { name:'ADA', price: 3.20, balance: 0, chg:'+1.20%', code:'ADA', network: 'main' },
    { name:'DOGE', price: 1.10, balance: 0, chg:'+8.90%', code:'DOGE', network: 'main' },
    { name:'DOT', price: 50.00, balance: 0, chg:'-2.30%', code:'DOT', network: 'polkadot' },
    { name:'AVAX', price: 250.00, balance: 0, chg:'+3.40%', code:'AVAX', network: 'avalanche' },
    { name:'LINK', price: 120.00, balance: 0, chg:'+0.10%', code:'LINK', network: 'main' },
    { name:'MATIC', price: 6.80, balance: 0, chg:'-1.50%', code:'MATIC', network: 'polygon' },
    { name:'UNI', price: 45.00, balance: 0, chg:'+2.10%', code:'UNI', network: 'main' },
  ]
  
  // Dynamic Calculation of Total Asset Value
  const totalAssetValue = useMemo(() => {
      let coinsToCalc = allCoins;
      if (currentNet !== 'all') {
          coinsToCalc = allCoins.filter(c => c.network === currentNet);
      }
      const total = coinsToCalc.reduce((acc, c) => acc + (c.price * (c.balance || 0)), 0);
      return total;
  }, [currentNet, allCoins]);

  // Aggregated Coin List for Display
  const displayCoins = useMemo(() => {
    if (currentNet !== 'all') {
        // Single chain mode: Format price string and return filtered list
        return allCoins.filter(c => c.network === currentNet).map(c => ({
            ...c,
            priceStr: `¥${c.price.toLocaleString()}`
        }));
    }

    // All Networks mode: Aggregate same-name tokens
    const aggregated = {};
    allCoins.forEach(c => {
        if (!aggregated[c.code]) {
            aggregated[c.code] = { ...c, balance: 0, networks: [] };
        }
        aggregated[c.code].balance += c.balance || 0;
        aggregated[c.code].networks.push(c.network);
    });

    return Object.values(aggregated).map(c => ({
        ...c,
        priceStr: `¥${c.price.toLocaleString()}`,
        isAggregated: c.networks.length > 1
    }));
  }, [currentNet, allCoins]);

  const [favorites, setFavorites] = useState(['BTC','ETH','SOL'])
  const toggleFavorite = (code) => {
    setFavorites(prev => {
      if(prev.includes(code)) return prev.filter(c => c !== code)
      return [...prev, code]
    })
  }

  return (
    <div className="iphone-frame">
      <div className="dynamic-island"></div>
      <div className="app-screen">
        <StatusBar className={view==='launch' ? 'overlay' : ''} />
        {view === 'home' && (
          <Header 
            title={title} 
            view={view}
            showBack={showBack} 
            onBack={back} 
            onSettings={()=>push('settings')} 
            onNetwork={()=>setShowNetModal(true)} 
            onService={()=>{ setFeatureTitle('客服功能开发中'); setShowFeatureModal(true); }}
            right={null} 
          />
        )}

        <div className="scroll-content">
          {showNetModal && <NetworkModal current={currentNet} onClose={()=>setShowNetModal(false)} onSelect={(id)=>{ setCurrentNet(id); setShowNetModal(false); setToast('已切换网络'); }} />}
          {showFeatureModal && <FeatureModal title={featureTitle} onClose={()=>setShowFeatureModal(false)} />}

          {view==='launch' && (
            <LaunchSplash 
              onCreate={()=>setView('mnemonic')}
              onImport={(tab)=>{
                setImportTab(tab)
                setView('import')
              }}
            />
          )}
          {view==='init' && (<InitChoice onCreate={()=>setView('mnemonic')} onImport={()=>setView('import')} />)}
          {view==='create-pass' && (<CreatePassword onNext={()=>setView('bind-invite')} />)}
          {view==='mnemonic' && (<ShowMnemonic isAddWallet={stack.length > 0} onBack={back} words={mnemonic} onCopy={(text)=>{ navigator.clipboard.writeText(text); setToast('已复制助记词') }} acknowledged={{a:false,b:false}} onAcknowledgeChange={()=>{}} onNext={()=>setView('verify')} />)}
          {view==='verify' && (<VerifyMnemonic isAddWallet={stack.length > 0} onBack={back} words={mnemonic} onSuccess={()=>{ setBacked(false); if(stack.length===0) setView('create-pass'); else back(); }} />)}
          {view==='import' && (<ImportWallet isAddWallet={stack.length > 0} initialTab={importTab} onBack={back} onDone={()=>{ setBacked(true); if(stack.length===0) setView('create-pass'); else back(); }} />)}
          {view==='bind-invite' && (<BindInvitePage onNext={()=>{ setToast('欢迎使用 Planet 钱包'); setView('home') }} />)}

          {view==='home' && (
            <HomePage 
              address={address} 
              currentWallet={currentWallet}
              onWallets={()=>push('wallets')} 
              onReceive={()=>push('receive')} 
              onStake={()=>push('earn')} 
              onInvest={()=>push('invest')} 
              onAssetDetail={(t)=>{ setCurrentToken(t); push('asset') }} 
              onMore={(which)=>{ setCurrentMarketTab(which); gotoTab('market') }} 
              onCopy={()=>{ setToast('已复制地址') }} 
              onMini={(v)=>push(v)}
              allCoins={displayCoins}
              favorites={favorites}
              onSearch={()=>push('search')}
            />
          )}

          {view==='signin' && (<SignInPage onSign={()=>{ setToast('签到成功 +10积分'); back() }} onBack={back} />)}
          {view==='payment' && (<PaymentPage onBack={back} />)}
          {view==='invite' && (<InvitePage onBack={back} />)}
          {view==='governance' && (<GovernancePage onBack={back} onToast={setToast} />)}
          {view==='more' && (<MorePage onTask={()=>push('tasks')} onPoints={()=>push('points')} onInvite={()=>push('invite')} onBack={back} />)}
          {view==='tasks' && (<TasksPage onBack={back} />)}
          {view==='points' && (<PointsPage onBack={back} />)}
          {view==='c2c' && (<C2CPage onBack={back} />)}

          {view==='market' && (
            <MarketPage 
              initialTab={currentMarketTab} 
              onAssetDetail={(t)=>{ setCurrentToken(t); push('asset') }} 
              onNewsDetail={(n)=>{ setCurrentNews(n); push('news-detail') }}
              allCoins={displayCoins}
              favorites={favorites}
            />
          )}

          {view==='news-detail' && currentNews && (
            <NewsDetailPage 
              news={currentNews} 
              onBack={back} 
              onCourse={(c)=>{ setCurrentCourse(c); push('course') }} 
            />
          )}

          {view==='trade' && (<SwapPage onSwap={()=>{ setToast('兑换成功'); }} />)}

          {view==='discover' && (
            <DiscoverPage 
              onGame={()=>setView('game')} 
              onAcademy={()=>setView('academy')} 
              onGameDetail={(g)=>{ setCurrentGame(g); push('game-detail') }} 
              onCourseDetail={(c)=>{ setCurrentCourse(c); push('course') }} 
              onToast={setToast}
            />
          )}

          {view==='password-verify' && (
            <PasswordVerify 
              onSuccess={()=>{
                // After verification, proceed with the pending action
                // We need to know what the pending action was.
                // We can use a state 'pendingAction' or just pass it via prop if we had a router
                // Here we can use a temporary state or just assume based on where we came from?
                // Better: use a state to store the 'next view' and 'next action props'
                // For simplicity in this prototype, let's use a state `afterVerify`
                if (afterVerify) {
                  afterVerify();
                  setAfterVerify(null);
                } else {
                  back();
                }
              }}
              onBack={back}
            />
          )}

          {view==='search' && (
            <SearchPage 
              onBack={back}
              allCoins={displayCoins}
              onAssetDetail={(t)=>{ setCurrentToken(t); push('asset') }} 
            />
          )}

          {view==='wallets' && (
             <WalletsManage 
               onBack={back} 
               onAddWallet={(type)=>{
                 // Set the action to perform after verification
                 setAfterVerify(() => () => {
                   if(type === 'create') {
                     setMnemonic(generateMnemonic());
                     // Skip history stack for verification page so back goes to wallets
                     // Actually push is fine, verify is a step.
                     // But we want back from mnemonic to go to wallets, not verify.
                     // So we might want to replace the verify view in stack?
                     // For now standard push flow: Wallets -> Verify -> Mnemonic
                     push('mnemonic');
                   } else {
                     push('import');
                   }
                 });
                 push('password-verify');
               }}
             />
           )}
          {view==='asset' && currentToken && (
            <AssetDetail 
              token={currentToken} 
              onBack={back} 
              isFavorite={favorites.includes(currentToken.code)}
              onToggleFavorite={()=>toggleFavorite(currentToken.code)}
              onSend={()=>push('send')} 
              onReceive={()=>{
                // Directly go to receive detail with current token and network
                // Assuming currentNet is the network ID (e.g., 'main', 'polygon') or we can pass a default
                // The requirement is to use the network selected in the top right (which is `currentNet`)
                // However, `token` object usually has network info. 
                // Let's construct a token object that ReceiveView expects.
                // ReceiveView uses token?.sym, token?.icon, token?.color, token?.net
                const receiveToken = {
                  sym: currentToken.code || currentToken.name, // Handle difference in property names
                  name: currentToken.name || currentToken.code,
                  icon: currentToken.icon || (currentToken.name ? currentToken.name[0] : 'C'),
                  color: '#3b82f6', // Default color if not present
                  net: currentNet === 'main' ? 'Ethereum' : (currentNet === 'polygon' ? 'Polygon' : 'Base') // Map ID to name if needed, or just pass ID
                }
                setCurrentReceiveToken(receiveToken); 
                push('receive-detail');
              }} 
            />
          )}
          {view==='send' && (<SendFlow onConfirm={()=>{ setToast('已广播到链上'); back() }} onCancel={back} />)}
          {view==='receive' && (<ReceiveSelect onBack={back} onSelect={(t)=>{ setCurrentReceiveToken(t); push('receive-detail') }} onWalletSelect={()=>push('wallet-select')} onNetworkSelect={()=>push('network-select')} />)}
          {view==='receive-detail' && (<ReceiveView token={currentReceiveToken} address={address} onBack={back} />)}
          {view==='wallet-select' && (<WalletSelect onBack={back} onSelect={()=>{ back() }} />)}
          {view==='network-select' && (<NetworkSelect current={currentNetSelect} onBack={back} onSelect={(n)=>{ setCurrentNetSelect(n.id); back() }} />)}

          {view==='settings' && (
            <SettingsPage 
              onWallets={()=>push('wallets')} 
              onSecurity={()=>push('security')} 
              onNetwork={()=>push('network')} 
              onLang={()=>push('language')} 
              onBack={back}
            />
          )}
          {view==='security' && (<SecuritySettings onBack={back} onChangePassword={()=>push('change-password')} />)}
          {view==='change-password' && (
            <ChangePassword 
              onBack={back} 
              onSuccess={()=>{ setToast('密码修改成功'); back(); }} 
            />
          )}
          {view==='network' && (<NetworkSettings onBack={back} />)}
          {view==='language' && (
            <LanguageSettings 
              currentLang={lang} 
              onSetLang={(l)=>{ setLang(l); localStorage.setItem('lang', l); setToast(`Language set to ${l}`); back() }} 
              onBack={back} 
            />
          )}

          {view==='earn' && (<StakingHome onDetail={(p)=>{ setCurrentProduct(p); push('earn-detail') }} onStakeNow={(p)=>{ setCurrentProduct(p); push('stake') }} onBack={back} />)}
          {view==='earn-detail' && currentProduct && (<EarnDetail product={currentProduct} onStake={()=>push('stake')} onRedeem={()=>push('redeem')} onDeposit={()=>push('deposit')} onBack={back} />)}
          {view==='stake' && (<StakeFlow onConfirm={()=>{ setToast('已质押'); back() }} onCancel={back} />)}
          {view==='redeem' && (<RedeemFlow onConfirm={()=>{ setToast('已赎回'); back() }} onCancel={back} />)}
          {view==='deposit' && (<DepositUSDT address={address} onCopy={(text)=>{ navigator.clipboard.writeText(text); setToast('已复制地址'); }} onBack={back} />)}

          {view==='invest' && (<InvestHome onBuy={()=>push('buy')} onBack={back} />)}
          {view==='buy' && (<BuyFlow onConfirm={()=>{ setToast('购买成功'); back() }} onCancel={back} />)}

          {view==='game' && (<GameList onEnter={(g)=>{ setCurrentGame(g); push('game-detail') }} onBack={back} />)}
          {view==='game-detail' && currentGame && (<GameDetail game={currentGame} onTx={(m)=>setToast(m)} onBack={back} />)}

          {view==='academy' && (<AcademyList onOpen={(c)=>{ setCurrentCourse(c); push('course') }} onBack={back} />)}
          {view==='course' && currentCourse && (<CourseDetail course={currentCourse} onComplete={()=>setToast('学习进度已记录')} onBack={back} />)}

          {view==='assets' && (
            <WalletOverview 
              currentWallet={currentWallet}
              totalValue={totalAssetValue}
              onReceive={()=>push('receive')} 
              onSend={()=>push('send')} 
              onSwap={()=>push('trade')} 
              onStake={()=>push('earn')} 
              onAssetDetail={(t)=>{ setCurrentToken(t); push('asset') }} 
              onWallets={()=>push('wallets')} 
              onToast={setToast} 
              displayCoins={displayCoins}
            />
          )}
        </div>

        {['home','market','trade','discover','assets'].includes(view) ? (
           <BottomNav active={tab} onSelect={gotoTab} />
        ) : null}
        {toast && <Toast message={toast} onClose={()=>setToast('')} />}
      </div>
    </div>
  )
}

function LanguageSettings({ currentLang, onSetLang, onBack }) {
  const langs = ['中文', 'English', '日本語', '한국어', 'Español']
  return (
    <div className="content-padded" style={{paddingTop:'12px'}}>
      <div style={{display:'flex', alignItems:'center', marginBottom:'20px', padding:'0 8px'}}>
         <button onClick={onBack} style={{background:'none', border:'none', padding:'8px', cursor:'pointer', color:'var(--text-main)'}}><Icon name="back" size={24} /></button>
         <div style={{fontSize:'18px', fontWeight:'700'}}>语言设置</div>
         <div style={{width:'40px'}}></div>
      </div>
      <Card>
        {langs.map((l,i)=>(
          <div key={l} onClick={()=>onSetLang(l)} style={{
            padding:'16px 0',
            borderBottom: i<langs.length-1 ? '1px solid var(--border)' : 'none',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            cursor:'pointer'
          }}>
            <div style={{fontSize:'16px', fontWeight: currentLang===l?'600':'400', color:'var(--text-main)'}}>{l}</div>
            {currentLang===l && <Icon name="check" size={20} style={{color:'var(--primary)'}} />}
          </div>
        ))}
      </Card>
    </div>
  )
}
