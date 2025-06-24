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

export default function Projects({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 text-center"
    >
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="border rounded shadow p-4 bg-white dark:bg-gray-800 max-w-xs"
          >
            <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
