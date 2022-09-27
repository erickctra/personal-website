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

  return (
    <section
      className={`mt-28 fadeout
      ${objReference.isVisible ? 'fadein' : ''}`}
      ref={objReference.containerRef}
    >
      <h1>Technologies i have experience</h1>
      <h3 className="text-xs">
        *this site is made using Typescript, ReactJS and GraphQl :))
      </h3>
      <ul className="mt-2 text-description">
        {response?.data.map((tech) => {
          return <li key={tech.id}>{tech.techName}</li>;
        })}
      </ul>
    </section>
  );
}
