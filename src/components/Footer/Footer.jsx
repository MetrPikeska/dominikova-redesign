import './Footer.css'

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <p className="footer-text">{data.text}</p>
    </footer>
  )
}
