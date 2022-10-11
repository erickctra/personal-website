import { Project } from '../components/Project';
import { ProjectResponse } from '../types';

interface GetProjectsQueryResponse {
  data: ProjectResponse[];
}


export function Projects(response: GetProjectsQueryResponse) {

  const i18n = {
    en: {
      'selected': 'Selected projects'
    },
    pt_BR: {
      'selected': 'Projetos selecionados'
    }
  }

  const languague = navigator.language;
  const format = languague.replace(/-/g, "_");

  let lang;

  if (format == 'pt_BR') {
    lang = i18n.pt_BR;
  } else {
    lang = i18n.en;
  }

  return (
    <section className={`mt-28 ${response?.data.length === 0 ? 'hidden' : ''}`}>
      <h1>{lang.selected}</h1>

      {response?.data.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </section>
  );
}
