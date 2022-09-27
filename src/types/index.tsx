interface ProjectResponse {
  id: string;
  name: string;
  releaseYear: string;
  sourceCode: string;
  description: string;
  image: string;
  bannerColor: {
    hex: string;
  };
}

interface TechResponse {
  id: string;
  techName: string;
}

interface ExperienceResponse {
  id: string;
  contribuitionTime: string;
  companyName: string;
  companyWebsite: string;
  experienceDescription: string;
}

interface AboutResponse {
  id: string;
  aboutSection: string[];
  attachment: string[];
}

interface SocialResponse {
  instagram: string;
  linkedin: string;
  email: string;
  resumePdf: string;
}

export type {
  ProjectResponse,
  TechResponse,
  ExperienceResponse,
  AboutResponse,
  SocialResponse,
};
