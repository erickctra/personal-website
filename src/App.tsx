import { useState } from 'react';

import { Home } from './sections/Home';
import { Projects } from './sections/Projects';
import { Technologies } from './sections/Technologies';
import { Experiences } from './sections/Experiences';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Link } from './components/Link';

import LoaderIcon from './assets/loader.svg';

import { gql, useQuery } from '@apollo/client';
import {
  AboutResponse,
  ExperienceResponse,
  ProjectResponse,
  SocialResponse,
  TechResponse,
} from './types';

const GET_LANDING_PAGE_QUERY = gql`
  query LandingPage {
    projects {
      id
      name
      image
      releaseYear
      sourceCode
      description
      bannerColor {
        hex
      }
    }
    techs {
      id
      techName
    }
    experiences {
      id
      companyName
      companyWebsite
      contribuitionTime
      experienceDescription
    }
    abouts {
      id
      aboutSection
      attachment
    }
    social(where: { id: "ckxj6dmpcgi2t0b05d096vamn" }) {
      instragram
      linkedin
      email
      resumePdf
    }
  }
`;

interface GetLandingPageQueryResponse {
  projects: ProjectResponse[];
  techs: TechResponse[];
  experiences: ExperienceResponse[];
  abouts: AboutResponse[];
  social: SocialResponse;
}

function App() {
  const { data } = useQuery<GetLandingPageQueryResponse>(
    GET_LANDING_PAGE_QUERY
  );

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    if (data === undefined) {
      setLoading(false);
    }
  }, 10000);

  function isLoading() {
    if (loading) {
      return (
        <img className="my-44 mx-auto animate-spin" src={LoaderIcon} alt="" />
      );
    } else {
      return (
        <div className="my-44">
          <h1>Error loading content - 404</h1>
          <Link title={'Contact me'} url={'mailto:someone@example.com'} />
        </div>
      );
    }
  }

  return (
    <div className="App max-w-2xl m-auto box-border py-14 px-14 sm:px-5">
      <Home />
      <div className="mt-4">
        <Link
          title="My Resume (pdf 109kb)"
          url={data?.social.resumePdf ?? ''}
        />
      </div>
      {data ? (
        <>
          <Projects data={data?.projects} />
          <Technologies data={data.techs} />
          <Experiences data={data.experiences} />
          <About data={data.abouts} />
          <Contact data={data.social} />
        </>
      ) : (
        isLoading()
      )}
    </div>
  );
}

export default App;
