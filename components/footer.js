import Image from 'next/image'

const socials = [
  {
    linkUrl: 'https://github.com/broman-builds',
    imageSource: '/icons/github.svg',
    altText: '@broman-builds on Github',
  },
  {
    linkUrl: 'https://twitter.com/notyeast',
    imageSource: '/icons/twitter.svg',
    altText: '@notyeast on Twitter',
  },
  {
    linkUrl: 'https://www.quora.com/profile/Gustaf-Broman',
    imageSource: '/icons/quora.svg',
    altText: '@Gustaf-Broman on Quora',
  },
  {
    linkUrl: 'https://www.goodreads.com/user/show/63185510-gustaf-broman',
    imageSource: '/icons/goodreads.svg',
    altText: '@broman-books on Goodreads',
  },
]

const SocialLink = ({ linkUrl, imageSource, altText }) => (
  <a href={linkUrl} target="_blank" className="social-link">
    <Image src={imageSource} height={18} width={18} alt={altText} />
  </a>
)

export const Footer = () => (
  <footer>
    <div id="social-icons">
      {socials.map((social) => (
        <SocialLink
          linkUrl={social.linkUrl}
          imageSource={social.imageSource}
          altText={social.altText}
        />
      ))}
    </div>
    <a
      href="mailto:99gustaf@gmail.com?subject=Hello"
      target="_blank"
      id="say-hello"
    >
      Say Hello
    </a>
  </footer>
)
