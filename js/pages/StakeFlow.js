function StakeFlow({ onConfirm, onCancel }) {
  const [amt,setAmt] = useState('')
  return (
    <div className="content">
      <Card>
        <Input label="质押金额" value={amt} onChange={setAmt} placeholder="输入数量" />
        <div className="row">
          <Button onClick={()=>onConfirm(amt)}>确认</Button>
          <Button variant="ghost" onClick={onCancel}>取消</Button>
        </div>
      </Card>
    </div>
  )
}
