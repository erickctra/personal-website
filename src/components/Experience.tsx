import { ExperienceResponse } from '../types';
import { useElementOnScreen } from '../utils';
import { Link } from './Link';

export function Experience({
  companyName,
  companyWebsite,
  contribuitionTime,
  experienceDescription,
}: ExperienceResponse) {
  const objReference = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.04,
  });

  return (
    <div
      className={`mt-8 fadeout 
      ${objReference.isVisible ? 'fadein' : ''}`}
      ref={objReference.containerRef}
    >
      <h3 className="text-xs">{contribuitionTime}</h3>
      <h1 className="mt-2">
        <Link title={companyName} url={companyWebsite} />
      </h1>
      <h2 className="whitespace-pre-line">{experienceDescription}</h2>
    </div>
  );
}
