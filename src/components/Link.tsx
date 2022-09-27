import Logo from '../assets/loader.svg';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 9 9"
    >
      <path
        fill="#0038FF"
        d="M1.229.729v1.33l5.265.004L.757 7.8l.943.943 5.737-5.737-.005 5.265h1.34V.73H1.228z"
      ></path>
    </svg>
  );
}

interface LinkProps {
  title: string;
  url: string;
  download?: boolean;
}

export function Link(props: LinkProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <a className="text-link underline" target="_blank" href={props.url}>
        {props.title}
      </a>
      <Icon />
    </div>
  );
}
