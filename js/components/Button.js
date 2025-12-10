function Button({ children, onClick, variant = "primary", className = "", style = {} }) {
  return (
    <button className={`btn ${variant} ${className}`} onClick={onClick} style={style}>{children}</button>
  )
}
