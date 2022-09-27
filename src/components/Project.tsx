import { Link } from './Link';

import { ProjectResponse } from '../types';
import { useElementOnScreen } from '../utils';

export function Project({
  name,
  description,
  image,
  releaseYear,
  sourceCode,
  bannerColor,
}: ProjectResponse) {
  const objReference = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.04,
  });

  return (
    <div
      className={`flex flex-col-reverse items-center justify-between mt-8 sm:flex-row fadeout
      ${objReference.isVisible ? 'fadein' : ''}`}
      ref={objReference.containerRef}
    >
      <div className="h-auto">
        <h3 className="text-xs">{releaseYear} - present</h3>
        <h1 className="mt-2">{name}</h1>
        <h2 className="sm:max-w-[80%] mb-2">{description}</h2>
        <Link title="Try it out" url={sourceCode} />
      </div>
      <div
        style={{backgroundColor: bannerColor.hex}}
        className={`w-full h-36 mb-4 flex items-end justify-center flex-shrink-0 rounded-md sm:w-36 sm:h-36`}
      >
        <img src={image} className="w-36" alt="" />
      </div>
    </div>
  );
}
