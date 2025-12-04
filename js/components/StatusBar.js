function StatusBar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}))
  useEffect(()=>{
    const t = setInterval(()=>setTime(new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})), 1000)
    return ()=>clearInterval(t)
  },[])
  return (
    <div className="status-bar">
      <div style={{width:'50px', textAlign:'center'}}>{time}</div>
      <div style={{width:'50px', display:'flex', gap:'4px', justifyContent:'center'}}>
        <div style={{width:'18px', height:'10px', border:'1px solid #000', borderRadius:'3px', position:'relative'}}>
           <div style={{width:'12px', height:'6px', background:'#000', margin:'1px'}}></div>
        </div>
      </div>
    </div>
  )
}
