import Image from 'next/image';

import { socialInfo, usernames } from '../util/socials';

const SocialLink = ({ linkUrl, imageSource, altText }) => (
  <a href={linkUrl} target="_blank" className="social-link" rel="noreferrer">
    <Image src={imageSource} height={18} width={18} alt={altText} />
  </a>
);

export const Footer = (): JSX.Element => (
  <footer>
    <div id="social-icons">
      {socialInfo.map((social, index) => (
        <SocialLink
          key={index}
          linkUrl={social.linkUrl}
          imageSource={social.imageSource}
          altText={social.altText}
        />
      ))}
    </div>
    <a
      id="say-hello"
      target="_blank"
      rel="noreferrer"
      href={`mailto:${usernames.email}?subject=hello this is an email`}
    >
      Email Me?
    </a>
  </footer>
);
