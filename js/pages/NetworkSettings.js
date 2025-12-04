function NetworkSettings({ onBack }) {
  const [net, setNet] = useState('main')
  return (
    <div className="content">
      <Card>
        <div className="list-head">网络选择</div>
        <div className={`chain-item ${net==='main'?'active':''}`} onClick={()=>setNet('main')}>
          <div className="chain-icon">M</div>
          <div className="st-label">Ethereum Mainnet</div>
        </div>
        <div className={`chain-item ${net==='test'?'active':''}`} onClick={()=>setNet('test')}>
          <div className="chain-icon">T</div>
          <div className="st-label">Sepolia Testnet</div>
        </div>
        <div className="row">
           <Button variant="secondary" onClick={()=>alert('添加自定义RPC')}>+ 添加自定义网络</Button>
        </div>
      </Card>
      <div className="row" style={{marginTop:'24px'}}>
        <Button variant="ghost" onClick={onBack}>返回</Button>
      </div>
    </div>
  )
}
