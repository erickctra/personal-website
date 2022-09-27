import { Experience } from '../components/Experience';
import { ExperienceResponse } from '../types';

interface GetExperiencesQueryResponse {
  data: ExperienceResponse[];
}

export function Experiences(response: GetExperiencesQueryResponse) {
  return (
    <section className="mt-8">
      <h1>Last experiences:</h1>
      {response?.data.map((experience) => {
        return <Experience key={experience.id} {...experience} />;
      })}
    </section>
  );
}
