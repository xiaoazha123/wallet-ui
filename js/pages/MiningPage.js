function MiningPage({ onBack }) {
  const [isMining, setIsMining] = useState(false);
  const [balance, setBalance] = useState(1234.5678);
  const [miningRate, setMiningRate] = useState(0.25); // coins per hour
  const [timeLeft, setTimeLeft] = useState(0); // in seconds
  const [latency, setLatency] = useState(0); // in ms
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let interval;
    if (isMining) {
      interval = setInterval(() => {
        setBalance(prev => prev + (miningRate / 3600));
        setLatency(Math.floor(Math.random() * 40) + 20); // Random latency between 20-60ms
        setTimeLeft(prev => {
          if (prev <= 0) {
            setIsMining(false);
            return 0;
          }
          return prev - 1;
        });
        
        if(Math.random() > 0.7) {
            const msgs = [
                `Block #${Math.floor(Math.random()*10000000)} verified`,
                `Hash calculation complete: 0x${Math.random().toString(16).substr(2,6)}...`,
                `Network latency: ${Math.floor(Math.random()*50 + 10)}ms`,
                `Consensus achieved on shard ${Math.floor(Math.random()*10)}`,
                `Ledger updated successfully`
            ];
            setLogs(prev => [...prev.slice(-2), msgs[Math.floor(Math.random()*msgs.length)]]);
        }

      }, 1000);
    } else {
        setLogs([]);
    }
    return () => clearInterval(interval);
  }, [isMining, miningRate]);

  const startMining = () => {
    if (!isMining) {
      setIsMining(true);
      setTimeLeft(24 * 60 * 60); // 24 hours
      setLogs(['Initializing node...', 'Connected.']);
    } else {
      setIsMining(false);
      setTimeLeft(0);
    }
  };

  return (
    <div className="content-padded" style={{ 
      display: 'flex', flexDirection: 'column', height: '100%', padding: 0,
      backgroundImage: "url('./wa.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#f8fafc',
      fontFamily: "'Inter', sans-serif",
      overflow: 'hidden' // Prevent scrollbars
    }}>
      {/* Dark Overlay */}
      <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.7)',
          zIndex: 0
      }}></div>

      {/* Header - Fixed Height */}
      <div style={{ height: '60px', display: 'flex', alignItems: 'center', padding: '0 20px', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', color: '#fff', marginLeft: '-8px' }}>
          <Icon name="back" size={24} />
        </button>
        <div style={{ flex: 1, textAlign: 'center', fontSize: '16px', fontWeight: '600', marginRight: '24px', letterSpacing: '0.5px' }}>
          Web3 节点挖矿
        </div>
      </div>

      {/* Content Container - Flex Box to control layout */}
      <div style={{ flex: 1, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Section - Balance and Stats Grid */}
        <div style={{ padding: '20px 24px 0' }}>
            {/* Small Balance Card */}
            <div style={{ 
                width: '100%',
                background: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '16px 20px',
                marginBottom: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '11px', color: '#cbd5e1', marginBottom: '4px', fontWeight: '500', textTransform: 'uppercase' }}>
                        当前累计收益
                    </div>
                    <div style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'DIN, sans-serif', color: '#fff', lineHeight: 1 }}>
                        {balance.toFixed(4)}
                    </div>
                </div>
                <div style={{ fontSize: '14px', color: '#38bdf8', fontWeight: '600', background:'rgba(56, 189, 248, 0.1)', padding:'4px 10px', borderRadius:'8px' }}>
                    HP Token
                </div>
            </div>

            {/* Compact Stats Grid - Moved here */}
            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '2px' }}>全网算力</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>12.5 EH/s</div>
                </div>
                <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '2px' }}>全网节点</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>8,342</div>
                </div>
                <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '2px' }}>区块高度</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>12,456,789</div>
                </div>
                <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '2px' }}>网络延迟</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: isMining ? '#4ade80' : '#fff' }}>
                        {isMining ? `${latency} ms` : '-- ms'}
                    </div>
                </div>
            </div>
        </div>

        {/* Center Section - Mining Button */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
                {/* Blue Pulse Ring & Lightning Particles */}
                {isMining && (
                    <>
                        <div style={{
                            position: 'absolute', top: -10, left: -10, right: -10, bottom: -10,
                            borderRadius: '50%',
                            border: '2px solid #60a5fa', // Blue pulse
                            opacity: 0.6,
                            animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        }}></div>
                        
                        {/* Lightning Particles / Sparks */}
                        {[...Array(8)].map((_, i) => (
                            <div key={i} style={{
                                position: 'absolute',
                                top: '50%', left: '50%',
                                width: '3px', height: '12px',
                                background: '#fff',
                                borderRadius: '2px',
                                transformOrigin: 'center center',
                                '--rot': `${i * 45}deg`,
                                animation: `sparkle 1.5s infinite ${i * 0.1}s ease-in-out`,
                                boxShadow: '0 0 10px #3b82f6'
                            }} />
                        ))}
                    </>
                )}

                <button 
                    onClick={startMining}
                    style={{
                    width: '180px', height: '180px', borderRadius: '50%', border: 'none',
                    background: isMining 
                        ? 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)' // Blue Gradient
                        : 'rgba(255, 255, 255, 0.1)', 
                    boxShadow: isMining 
                        ? '0 0 40px rgba(37, 99, 235, 0.6)' // Blue glow
                        : '0 4px 6px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    position: 'relative', zIndex: 10,
                    backdropFilter: 'blur(5px)',
                    border: isMining ? '1px solid rgba(147, 197, 253, 0.5)' : '1px solid rgba(255,255,255,0.2)'
                    }}
                >
                    <Icon name="lightning" size={56} style={{ 
                    color: '#fff', 
                    marginBottom: '12px',
                    transition: 'all 0.3s',
                    filter: isMining ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : 'none'
                    }} />
                    <div style={{ 
                    fontSize: '16px', fontWeight: '700', 
                    color: '#fff',
                    letterSpacing: '1px',
                    textShadow: isMining ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
                    }}>
                    {isMining ? '正在挖矿' : '启动节点'}
                    </div>
                </button>
            </div>
        </div>

        {/* Bottom Section - Logs */}
        <div style={{ padding: '0 24px 24px' }}>
            <div style={{ 
                background: 'rgba(15, 23, 42, 0.6)', borderRadius: '12px', padding: '12px 16px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '11px', color: '#cbd5e1', fontFamily: 'monospace',
                backdropFilter: 'blur(5px)',
                minHeight: '60px'
            }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px', borderBottom:'1px solid rgba(255,255,255,0.05)', paddingBottom:'4px' }}>
                    <span style={{ color: '#94a3b8' }}>节点日志</span>
                    <span style={{ color: isMining ? '#4ade80' : '#94a3b8' }}>● {isMining ? '在线' : '离线'}</span>
                </div>
                {/* Fixed height container for logs to prevent layout shift */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {[...Array(3)].map((_, i) => (
                        <div key={i} style={{ 
                            padding: '2px 0', 
                            minHeight: '20px', 
                            display: 'flex', 
                            alignItems: 'center',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            {logs[i] ? (
                                <>
                                    <span style={{color:'#64748b', marginRight:'8px', fontSize:'10px'}}>{'>'}</span>
                                    {logs[i]}
                                </>
                            ) : (
                                i === 0 && logs.length === 0 ? (
                                    <span style={{color:'#64748b', fontStyle:'italic', opacity: 0.7}}>等待节点指令...</span>
                                ) : (
                                    <span style={{visibility: 'hidden'}}>-</span>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.2; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
        @keyframes sparkle {
          0% { transform: rotate(var(--rot)) translateY(-90px) scale(0); opacity: 0; }
          50% { transform: rotate(var(--rot)) translateY(-105px) scale(1); opacity: 1; }
          100% { transform: rotate(var(--rot)) translateY(-120px) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}