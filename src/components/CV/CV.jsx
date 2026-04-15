import './CV.css'

export default function CV({ data }) {
  return (
    <section id="zivotopis" className="cv">
      <div className="cv-inner">
        <h2 className="section-title">{data.title}</h2>

        <div className="cv-header">
          <div className="cv-identity">
            <h3 className="cv-name">{data.name}</h3>
            <p className="cv-role">{data.role}</p>
          </div>
          <div className="cv-contact-info">
            <p>
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </p>
            <p>
              <a
                href={data.contact.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn — {data.contact.linkedin.label}
              </a>
            </p>
          </div>
        </div>

        <div className="cv-grid">
          <aside className="cv-left">
            <div className="cv-box">
              <h4 className="cv-box-title">{data.education.title}</h4>
              {data.education.items.map((item, i) => (
                <p key={i} className="cv-edu-item">
                  <strong>{item.degree}</strong>
                  <br />
                  <span className="cv-meta">{item.years}</span>
                </p>
              ))}
            </div>

            <div className="cv-box">
              <h4 className="cv-box-title">{data.skills.title}</h4>
              <ul className="cv-list">
                {data.skills.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="cv-box">
              <h4 className="cv-box-title">{data.languages.title}</h4>
              {data.languages.items.map((item, i) => (
                <p key={i} className="cv-lang-item">{item}</p>
              ))}
            </div>
          </aside>

          <main className="cv-right">
            <h4 className="cv-section-title">{data.experience.title}</h4>
            {data.experience.items.map((item, i) => (
              <div key={i} className="cv-exp-item">
                <div className="cv-exp-header">
                  <span className="cv-exp-org">{item.org}</span>
                  <span className="cv-exp-years">{item.years}</span>
                </div>
                <p className="cv-exp-desc">{item.desc}</p>
              </div>
            ))}
          </main>
        </div>
      </div>
    </section>
  )
}
