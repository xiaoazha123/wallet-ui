function MorePage({ onTask, onPoints }) {
  return (
    <div className="content">
      <Card>
        <div className="grid-menu">
           <button className="grid-item" onClick={onTask}>
             <Icon name="copy" />
             <span>任务</span>
           </button>
           <button className="grid-item" onClick={onPoints}>
             <Icon name="earn" />
             <span>积分</span>
           </button>
        </div>
      </Card>
    </div>
  )
}
