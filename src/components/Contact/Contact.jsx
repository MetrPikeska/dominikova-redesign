import './Contact.css'

export default function Contact({ data }) {
  return (
    <section id={data.id} className="contact">
      <div className="contact-inner">
        <h2 className="contact-title">{data.title}</h2>
        <div className="contact-links">
          <a href={`mailto:${data.email}`} className="contact-link">
            <span className="contact-link-label">E-mail</span>
            <span className="contact-link-value">{data.email}</span>
          </a>
          <a
            href={data.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link-label">LinkedIn</span>
            <span className="contact-link-value">{data.linkedin.label}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
