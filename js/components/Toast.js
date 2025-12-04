function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 2000)
    return () => clearTimeout(t)
  }, [onClose])
  return <div className="toast">{message}</div>
}
