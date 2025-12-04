function ShowMnemonic({ words, onCopy, onNext, onAcknowledgeChange, acknowledged }) {
  return (
    <div className="content">
      <Card>
        <div className="list-head">助记词</div>
        <div className="mn-grid">
          {words.map((w,i)=>(<div key={i} className="mn-cell">{w}</div>))}
        </div>
        <div className="risk">请不要截图，截图可能泄露资产</div>
        <div className="row">
          <Button variant="secondary" onClick={()=>{ if(confirm('确认复制助记词？')) onCopy(words.join(' ')) }}>复制</Button>
        </div>
        <div className="checks">
          <label><input type="checkbox" checked={acknowledged.a} onChange={e=>onAcknowledgeChange({...acknowledged,a:e.target.checked})} /> 我已知晓助记词遗失将无法恢复资产</label>
          <label><input type="checkbox" checked={acknowledged.b} onChange={e=>onAcknowledgeChange({...acknowledged,b:e.target.checked})} /> 我已手动抄写助记词并妥善保存</label>
        </div>
        <div className="row"><Button onClick={onNext} variant={(acknowledged.a && acknowledged.b)?'primary':'secondary'}>下一步</Button></div>
      </Card>
    </div>
  )
}
