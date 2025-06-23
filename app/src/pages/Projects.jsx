const projects = [
  {
    title: 'Project Alpha',
    description: 'A backend service for processing data at scale.',
  },
  {
    title: 'Project Beta',
    description: 'An analytics pipeline built with modern data tools.',
  },
  {
    title: 'Project Gamma',
    description: 'A REST API supporting multiple client applications.',
  },
];

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {projects.map((proj) => (
          <div key={proj.title} className="card">
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
