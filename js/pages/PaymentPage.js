function PaymentPage() {
  return (
    <div className="content">
      <Card>
         <div className="list-head">支付</div>
         <div className="pay-actions">
           <Button variant="primary">扫一扫</Button>
           <Button variant="secondary">收付款码</Button>
         </div>
      </Card>
    </div>
  )
}
