function InitChoice({ onCreate, onImport }) {
  return (
    <div className="content">
      <Card>
        <div className="list-head">钱包初始化方式</div>
        <div className="row">
          <Button onClick={onCreate}>创建钱包</Button>
          <Button variant="secondary" onClick={onImport}>导入钱包</Button>
        </div>
        <div className="tip">Planet Wallet 为去中心化钱包，请妥善备份助记词。</div>
      </Card>
    </div>
  )
}
