import { Experience } from '../components/Experience';
import { ExperienceResponse } from '../types';

interface GetExperiencesQueryResponse {
  data: ExperienceResponse[];
}

export function Experiences(response: GetExperiencesQueryResponse) {

  const i18n = {
    en: {
      'experiences': 'Last experiences:',
      'thisSite': '*this site is made using Typescript, ReactJS and GraphQl :))'

    },
    pt_BR: {
      'experiences': 'Ultimas experiencias:',
      'thisSite': '*esse site foi feito com Typescript, ReactJS e GraphQl :))'
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
    <section className="mt-8">
      <h1>{lang.experiences}</h1>
      {response?.data.map((experience) => {
        return <Experience key={experience.id} {...experience} />;
      })}
    </section>
  );
}
