import { TechResponse } from '../types';
import { useElementOnScreen } from '../utils';

interface GetTechsQueryResponse {
  data: TechResponse[];
}

export function Technologies(response: GetTechsQueryResponse) {
  const objReference = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.04,
  });

  const i18n = {
    en: {
      'techs': 'Technologies i have experience',
      'thisSite': '*this site is made using Typescript, ReactJS and GraphQl :))'

    },
    pt_BR: {
      'techs': 'Tecnologias que eu tenho experiência',
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
    <section
      className={`mt-28 fadeout
      ${objReference.isVisible ? 'fadein' : ''}`}
      ref={objReference.containerRef}
    >
      <h1>{lang.techs}</h1>
      <h3 className="text-xs">
        {lang.thisSite}
      </h3>
      <ul className="mt-2 text-description">
        {response?.data.map((tech) => {
          return <li key={tech.id}>{tech.techName}</li>;
        })}
      </ul>
    </section>
  );
}
