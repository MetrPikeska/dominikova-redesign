import './Portfolio.css'

function TextParts({ parts }) {
  return (
    <p className="card-text">
      {parts.map((part, i) =>
        part.italic ? <em key={i}>{part.text}</em> : <span key={i}>{part.text}</span>
      )}
    </p>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="card">
      <a
        href={project.href}
        target={project.external ? '_blank' : undefined}
        rel={project.external ? 'noopener noreferrer' : undefined}
        className="card-image-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="card-image-wrap">
          <img src={project.image} alt={project.alt} loading="lazy" />
        </div>
      </a>
      <div className="card-body">
        <h3 className="card-title">
          <a
            href={project.href}
            target={project.external ? '_blank' : undefined}
            rel={project.external ? 'noopener noreferrer' : undefined}
          >
            {project.title}
          </a>
        </h3>
        <TextParts parts={project.textParts} />
      </div>
    </article>
  )
}

export default function Portfolio({ data }) {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-inner">
        <h2 className="section-title">{data.title}</h2>
        <div className="portfolio-grid">
          {data.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
