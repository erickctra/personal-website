import { Project } from '../components/Project';
import { ProjectResponse } from '../types';

interface GetProjectsQueryResponse {
  data: ProjectResponse[];
}

export function Projects(response: GetProjectsQueryResponse) {
  return (
    <section className={`mt-28 ${response?.data.length === 0 ? 'hidden' : ''}`}>
      <h1>Selected projects</h1>

      {response?.data.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </section>
  );
}
