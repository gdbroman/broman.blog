const outroCopy = [
  'Hello reader! Did this resonate? ',
  'Shoot me an email',
  ", I'd love to hear from you. Anyway. Thanks for reading, I'll see you around."
];
const emailHref = 'mailto:99gustaf@gmail.com?subject=I read your little article';

export const Outro = (): JSX.Element => (
  <footer>
    <hr />
    <i>
      <p>
        {outroCopy[0]}
        <a href={emailHref} target="_blank" rel="noreferrer">
          {outroCopy[1]}
        </a>
        {outroCopy[2]}
      </p>
    </i>
  </footer>
);
