import { Link } from '../components/Link';
import { SocialResponse } from '../types';

interface GetSocialQueryResponse {
  data: SocialResponse;
}

export function Contact(response: GetSocialQueryResponse) {

  const i18n = {
    en: {
      'contact': 'Contact me:',

    },
    pt_BR: {
      'contact': 'Contate-me',
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
    <section className="mt-28">
      <h1>{lang.contact}</h1>
      <ul className="">
        <li>
          <Link
            title={response.data.email}
            url={`mailto:${response.data.email}`}
          />
        </li>
        <li>
          <Link title="LinkedIn" url={response.data.linkedin} />
        </li>
      </ul>
    </section>
  );
}
