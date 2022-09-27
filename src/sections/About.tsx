import { gql, useQuery } from '@apollo/client';
import { Link } from '../components/Link';
import { AboutResponse } from '../types';
import { useElementOnScreen } from '../utils';

interface GetAboutQueryResponse {
  data: AboutResponse[];
}

export function About(response: GetAboutQueryResponse) {
  const firstResult = response?.data[0];

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
      <h1>About me</h1>

      {firstResult?.aboutSection.map((section) => {
        return (
          <h2 key={section} className="mt-8 max-w-[90%]">
            {section}
          </h2>
        );
      })}

      <Link title="Instagram" url={firstResult?.attachment[0] ?? ''} />
    </section>
  );
}
