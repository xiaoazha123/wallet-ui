function BottomNav({ active, onSelect }) {
  const items = [
    { key: 'home', label: '首页', icon: 'wallet' },
    { key: 'market', label: '行情', icon: 'chart' },
    { key: 'trade', label: '交易', icon: 'swap' },
    { key: 'discover', label: '发现', icon: 'compass' },
    { key: 'assets', label: '资产', icon: 'pie' },
  ]
  return (
    <nav className="bottom-nav">
      {items.map(i => (
        <button key={i.key} className={`nav-item ${active === i.key ? 'active' : ''}`} onClick={() => onSelect(i.key)}>
          <Icon name={i.icon} size={24} />
          <span>{i.label}</span>
        </button>
      ))}
    </nav>
  )
}
