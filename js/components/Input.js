function Input({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div className="input">
      <label>{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  )
}
