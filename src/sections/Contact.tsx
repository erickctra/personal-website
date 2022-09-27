import { Link } from '../components/Link';
import { SocialResponse } from '../types';

interface GetSocialQueryResponse {
  data: SocialResponse;
}

export function Contact(response: GetSocialQueryResponse) {
  return (
    <section className="mt-28">
      <h1>Contact me</h1>
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
