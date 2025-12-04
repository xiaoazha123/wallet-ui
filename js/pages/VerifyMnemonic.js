function VerifyMnemonic({ words, onSuccess }) {
  const shuffled = useMemo(()=>words.slice().sort(()=>Math.random()-0.5), [words])
  const [selected,setSelected] = useState([])
  function pick(w){ if(selected.length<words.length) setSelected([...selected,w]) }
  const ok = selected.join(' ')===words.join(' ')
  return (
    <div className="content">
      <Card>
        <div className="list-head">助记词验证</div>
        <div className="mn-selected">
          {selected.map((w,i)=>(<div key={i} className="mn-cell fill">{w}</div>))}
        </div>
        <div className="mn-grid">
          {shuffled.map((w,i)=>(<button key={i} className="mn-cell" onClick={()=>pick(w)}>{w}</button>))}
        </div>
        <div className="row">
          <Button onClick={()=> ok ? onSuccess() : alert('顺序不正确，请重新选择')} >完成</Button>
        </div>
      </Card>
    </div>
  )
}
