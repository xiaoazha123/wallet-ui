function VerifyMnemonic({ words, onSuccess }) {
  // Use indices 0..N-1 to track shuffling
  // We need to keep track of original words but shuffle their positions
  // Actually, simplest is: shuffled is an array of objects { word, id } where id is unique (e.g. index in original array if words are unique, or just random id)
  // But wait, duplicate words in mnemonic? Standard BIP39 allows duplicates.
  // So we should map words to objects first, then shuffle objects.
  
  const shuffledItems = useMemo(() => {
    return words.map((w, i) => ({ word: w, id: i })) // id is the original index (0..11), ensuring uniqueness
      .sort(() => Math.random() - 0.5)
  }, [words])

  const [selectedItems, setSelectedItems] = useState([]) // Array of { word, id }

  function pick(item) {
    if (selectedItems.length < words.length) {
      setSelectedItems([...selectedItems, item])
    }
  }

  function remove(indexInSelected) {
    const copy = [...selectedItems]
    copy.splice(indexInSelected, 1)
    setSelectedItems(copy)
  }

  const ok = selectedItems.map(i => i.word).join(' ') === words.join(' ')

  return (
    <div className="content-padded" style={{paddingTop:'24px'}}>
      <div style={{marginBottom:'24px', margin:'0 20px 24px'}}>
         <h1 style={{fontSize:'24px', fontWeight:'800', marginBottom:'8px'}}>验证助记词</h1>
         <div style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:'1.5'}}>
           请按正确的顺序点击下方的单词。
         </div>
      </div>

      <div className="mn-selected-area" style={{
        minHeight:'160px', 
        background:'#f9fafb', 
        borderRadius:'16px', 
        padding:'16px', 
        border:'1px dashed var(--border)',
        marginBottom:'24px',
        display:'flex',
        flexWrap:'wrap',
        gap:'8px',
        alignContent:'flex-start',
        margin:'0 20px 24px'
      }}>
        {selectedItems.map((item, i) => (
          <div key={i} onClick={() => remove(i)} className="mn-chip-sel" style={{
            background:'var(--primary)', 
            color:'#fff', 
            borderRadius:'8px', 
            padding:'6px 12px', 
            fontSize:'14px',
            fontWeight:'600',
            cursor:'pointer',
            boxShadow:'0 2px 4px rgba(99, 102, 241, 0.3)'
          }}>
            <span style={{opacity:0.7, marginRight:'4px', fontSize:'10px'}}>{i+1}</span>{item.word}
          </div>
        ))}
        {selectedItems.length === 0 && <div style={{width:'100%', textAlign:'center', color:'var(--text-muted)', fontSize:'13px', marginTop:'40px'}}>请在下方选择单词</div>}
      </div>

      <div className="mn-grid-options" style={{
        display:'flex', 
        flexWrap:'wrap', 
        gap:'8px', 
        justifyContent:'center',
        padding: '0 10px'
      }}>
        {shuffledItems.map((item, i) => {
           // Check if this specific item (by id) is already selected
           const used = selectedItems.some(s => s.id === item.id)
           
           return (
             <button key={item.id} onClick={() => !used && pick(item)} disabled={used} style={{
               background: used ? '#f3f4f6' : '#fff',
               border:'1px solid var(--border)',
               borderRadius:'8px',
               padding:'8px 16px',
               fontSize:'14px',
               color: used ? '#d1d5db' : 'var(--text-main)',
               fontWeight:'500',
               cursor: used ? 'default' : 'pointer',
               opacity: used ? 0.5 : 1,
               transition: 'all 0.2s'
             }}>{item.word}</button>
           )
        })}
      </div>

      <div className="row" style={{marginTop:'40px', margin:'40px 20px 0'}}>
        <Button onClick={() => ok ? onSuccess() : alert('顺序不正确，请重新选择')} disabled={selectedItems.length !== words.length} variant={selectedItems.length === words.length ? 'primary' : 'disabled'} style={{height:'50px', borderRadius:'25px', width:'100%'}}>完成</Button>
      </div>
    </div>
  )
}