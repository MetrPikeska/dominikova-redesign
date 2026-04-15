import './Hero.css'

function ContoursBackground() {
  const radii = [60, 120, 180, 240, 300, 360, 420, 480]
  return (
    <svg
      className="hero-contours"
      viewBox="0 0 900 900"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {radii.map((r) => (
        <circle key={r} cx="680" cy="220" r={r} fill="none" stroke="var(--line)" strokeWidth="1" />
      ))}
    </svg>
  )
}

export default function Hero({ data }) {
  return (
    <section className="hero" id="hero">
      <ContoursBackground />
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-portrait-wrap">
            <img
              src={data.portrait}
              alt={data.portraitAlt}
              className="hero-portrait"
            />
          </div>
          <h1 className="hero-name">{data.name}</h1>
          <p className="hero-role">{data.role}</p>
          <p className="hero-tagline">{data.tagline}</p>
          <div className="hero-cta">
            {data.cta.map((btn) => (
              <a key={btn.href} href={btn.href} className="hero-btn">
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-divider" aria-hidden="true" />

        <div className="hero-right">
          <div className="hero-bio">
            {data.bio.map((para, i) => (
              <p key={i} className="hero-bio-para">{para}</p>
            ))}
          </div>
          <ul className="hero-stats">
            {data.stats.map((stat) => (
              <li key={stat.label} className="hero-stat">
                <span className="hero-stat-label">{stat.label}</span>
                <span className="hero-stat-value">{stat.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
