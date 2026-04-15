import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav({ data }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to={data.lang === 'cs' ? '/' : '/en'} className="nav-logo">
          {data.nav.logo}
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {data.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <Link to={data.langSwitcher.to} className="nav-lang">
            {data.langSwitcher.label}
          </Link>
        </nav>
      </div>
    </header>
  )
}
