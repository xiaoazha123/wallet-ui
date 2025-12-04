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
  const [currentNet, setCurrentNet] = useState('main')
  function push(v){ setStack(s=>[...s,view]); setView(v) }
  function back(){ setView(stack[stack.length-1] || (tab==='home'?'home':tab)); setStack(s=>s.slice(0,-1)) }
  function gotoTab(t){ setTab(t); setView(t) }
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
    return map[tab]
  },[tab,view])

  const [currentToken,setCurrentToken] = useState(null)
  const [currentProduct,setCurrentProduct] = useState(null)
  const [currentGame,setCurrentGame] = useState(null)
  const [currentCourse,setCurrentCourse] = useState(null)
  const [currentNews,setCurrentNews] = useState(null)
  const [currentMarketTab,setCurrentMarketTab] = useState('自选')

  return (
    <div className="iphone-frame">
      <div className="dynamic-island"></div>
      <div className="app-screen">
        <StatusBar />
        <Header 
          title={title} 
          view={view}
          showBack={showBack} 
          onBack={back} 
          onSettings={()=>push('settings')} 
          onNetwork={()=>setShowNetModal(true)} 
          onService={()=>alert('客服功能即将上线')}
          right={null} 
        />

        <div className="scroll-content">
          {showNetModal && <NetworkModal current={currentNet} onClose={()=>setShowNetModal(false)} onSelect={(id)=>{ setCurrentNet(id); setShowNetModal(false); setToast('已切换网络'); }} />}

          {view==='launch' && (
            <LaunchSplash lang={lang} onLang={(l)=>{ setLang(l); localStorage.setItem('lang', l) }} onNext={()=>setView('init')} />
          )}
          {view==='init' && (<InitChoice onCreate={()=>setView('create-pass')} onImport={()=>setView('import')} />)}
          {view==='create-pass' && (<CreatePassword onNext={()=>setView('mnemonic')} />)}
          {view==='mnemonic' && (<ShowMnemonic words={mnemonic} onCopy={(text)=>{ navigator.clipboard.writeText(text); setToast('已复制助记词') }} acknowledged={{a:false,b:false}} onAcknowledgeChange={()=>{}} onNext={()=>setView('verify')} />)}
          {view==='verify' && (<VerifyMnemonic words={mnemonic} onSuccess={()=>{ setBacked(false); setView('bind-invite') }} />)}
          {view==='import' && (<ImportWallet onDone={()=>{ setBacked(true); setView('bind-invite') }} />)}
          {view==='bind-invite' && (<BindInvitePage onNext={()=>{ setToast('欢迎使用 Planet 钱包'); setView('home') }} />)}

          {view==='home' && (
            <HomePage 
              address={address} 
              onWallets={()=>push('wallets')} 
              onReceive={()=>push('receive')} 
              onStake={()=>push('earn')} 
              onInvest={()=>push('invest')} 
              onAssetDetail={(t)=>{ setCurrentToken(t); push('asset') }} 
              onMore={(which)=>{ setCurrentMarketTab(which); gotoTab('market') }} 
              onCopy={()=>{ setToast('已复制地址') }} 
              onMini={(v)=>push(v)} 
            />
          )}

          {view==='signin' && (<SignInPage onSign={()=>{ setToast('签到成功 +10积分'); back() }} />)}
          {view==='payment' && (<PaymentPage />)}
          {view==='invite' && (<InvitePage />)}
          {view==='governance' && (<GovernancePage />)}
          {view==='more' && (<MorePage onTask={()=>push('tasks')} onPoints={()=>push('points')} />)}
          {view==='tasks' && (<TasksPage />)}
          {view==='points' && (<PointsPage />)}

          {view==='market' && (
            <MarketPage 
              initialTab={currentMarketTab} 
              onAssetDetail={(t)=>{ setCurrentToken(t); push('asset') }} 
              onNewsDetail={(n)=>{ setCurrentNews(n); push('news-detail') }}
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
            />
          )}

          {view==='wallets' && (<WalletsManage onBack={back} />)}
          {view==='asset' && currentToken && (<AssetDetail token={currentToken} onBack={back} onSend={()=>push('send')} onReceive={()=>push('receive')} />)}
          {view==='send' && (<SendFlow onConfirm={()=>{ setToast('已广播到链上'); back() }} onCancel={back} />)}
          {view==='receive' && (<ReceiveView address={address} onCopy={(text)=>{ navigator.clipboard.writeText(text); setToast('已复制地址'); }} />)}

          {view==='settings' && (
            <SettingsPage 
              onWallets={()=>push('wallets')} 
              onSecurity={()=>push('security')} 
              onNetwork={()=>push('network')} 
              onLang={()=>{ 
                const next = lang==='中文'?'English':'中文'; 
                setLang(next); 
                localStorage.setItem('lang', next); 
                setToast(`Switched to ${next}`) 
              }} 
            />
          )}
          {view==='security' && (<SecuritySettings onBack={back} />)}
          {view==='network' && (<NetworkSettings onBack={back} />)}

          {view==='earn' && (<StakingHome onDetail={(p)=>{ setCurrentProduct(p); push('earn-detail') }} onStakeNow={(p)=>{ setCurrentProduct(p); push('stake') }} />)}
          {view==='earn-detail' && currentProduct && (<EarnDetail product={currentProduct} onStake={()=>push('stake')} onRedeem={()=>push('redeem')} onDeposit={()=>push('deposit')} />)}
          {view==='stake' && (<StakeFlow onConfirm={()=>{ setToast('已质押'); back() }} onCancel={back} />)}
          {view==='redeem' && (<RedeemFlow onConfirm={()=>{ setToast('已赎回'); back() }} onCancel={back} />)}
          {view==='deposit' && (<DepositUSDT address={address} onCopy={(text)=>{ navigator.clipboard.writeText(text); setToast('已复制地址'); }} />)}

          {view==='invest' && (<InvestHome onBuy={()=>push('buy')} />)}
          {view==='buy' && (<BuyFlow onConfirm={()=>{ setToast('购买成功'); back() }} onCancel={back} />)}

          {view==='game' && (<GameList onEnter={(g)=>{ setCurrentGame(g); push('game-detail') }} />)}
          {view==='game-detail' && currentGame && (<GameDetail game={currentGame} onTx={(m)=>setToast(m)} />)}

          {view==='academy' && (<AcademyList onOpen={(c)=>{ setCurrentCourse(c); push('course') }} />)}
          {view==='course' && currentCourse && (<CourseDetail course={currentCourse} onComplete={()=>setToast('学习进度已记录')} />)}

          {view==='assets' && (
            <WalletOverview onReceive={()=>push('receive')} onSend={()=>push('send')} onSwap={()=>push('trade')} onStake={()=>push('earn')} onAssetDetail={(t)=>{ setCurrentToken(t); push('asset') }} onWallets={()=>push('wallets')} />
          )}
        </div>

        {view!=='onboard' && (<BottomNav active={tab} onSelect={gotoTab} />)}
        {toast && <Toast message={toast} onClose={()=>setToast('')} />}
      </div>
    </div>
  )
}
