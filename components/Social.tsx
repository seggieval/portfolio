import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const socials = [
  {
    name: 'GitHub',
    icon: <FaGithub className="text-2xl" />,
    url: 'https://github.com/kirilsierykov'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="text-2xl" />,
    url: 'https://www.linkedin.com/in/kiril-sierykov/'
  },
  {
    name: 'Twitter',
    icon: <FaTwitter className="text-2xl" />,
    url: 'https://twitter.com/kirilsierykov'
  }
]

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.url} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social