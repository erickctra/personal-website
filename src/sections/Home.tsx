import emojiHand from '../assets/emojis/hand-emoji.png';
import emojiManPC from '../assets/emojis/man-pc.png';
import { Link } from '../components/Link';
import { useElementOnScreen } from '../utils';

import cv from '../assets/CV ERICK CINTRA DEV.pdf'

export function Home() {
  const objReference = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.03,
  });

  const i18n = {
    en: {
      'hi': 'Hi!',
      'name': 'My name is',
      'iam': {
        1: ", I'm a",
        2: "FullStack",
        3: "Developer"
      },
      'located': 'located in',
      'focused': 'Currently focused on Node, React and Typescript.',
      'experience': 'Developer with professional experience in Flutter, Firebase and React.',
      'resume': 'My Resume (pdf 125kb)'
    },
    pt_BR: {
      'hi': 'Oi!',
      'name': 'Meu nome é',
      'iam': {
        1: ", eu sou um",
        2: "Desenvolvedor",
        3: "Full-Stack"
      },
      'located': 'localizado em',
      'focused': 'Atualmente focado em Node, React e Typescript.',
      'experience': 'Desenvolvedor com experiência profissional em Flutter, Firebase e React.',
      'resume': 'Meu Resumo (pdf 125kb)'
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
    <section
      className={`w-full pt-[260px] ${objReference.isVisible ? 'fadein' : ''}`}
      ref={objReference.containerRef}
    >
      <h1 className="text-2xl">
        <span className="relative">
          {lang.hi}
          <img
            className="absolute -top-1 left-[34px] w-8 h-8"
            src={emojiHand}
            alt=""
          />
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— {lang.name}{' '}
        <span className="text-link">Erick</span>{lang.iam[1]}{' '}
        <span className="text-link">{lang.iam[2]}</span> <br />
        <span className="relative">
          <span className="text-link">{lang.iam[3]}</span>
          <img
            className="absolute -top-1 -right-9 w-8 h-8"
            src={emojiManPC}
            alt=""
          />
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{lang.located} Praia Grande, SP.
      </h1>
      <h2 className="mt-4">
        {lang.focused} <br />
        {lang.experience}
      </h2>

      <div className="mt-4">
        <Link
          title={lang.resume}
          url={cv}
        />
      </div>
    </section>
  );
}
