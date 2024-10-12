import Link from './Link';
import siteMetadata from '@/data/siteMetadata';
import SocialIcon from '@/components/social-icons';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          {/* <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} /> */}
          {/* <SocialIcon kind="github" href={siteMetadata.github} size={6} /> */}
          <a
            target="_blank"
            className="italic underline decoration-dotted underline-offset-2"
            href={siteMetadata.github}
          >
            Github
          </a>
          <div className="text-stone-400">{` • `}</div>
          <a
            target="_blank"
            className="italic underline decoration-dotted underline-offset-2"
            href={siteMetadata.linkedin}
          >
            Linkedin
          </a>
          <div className="text-stone-400"> • </div>
          <a
            target="_blank"
            className="italic underline decoration-dotted underline-offset-2"
            href={siteMetadata.twitter}
          >
            X (formerly twitter)
          </a>
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
          {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} /> */}
          {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} /> */}
        </div>
        <div className="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            {`© ${siteMetadata.author} ${new Date().getFullYear()} - Today`}.{' '}
            <span className="text-black">All rights reserved</span>{' '}
          </div>
          {/* <div>{siteMetadata.author}. All rights reserved</div> */}
        </div>
        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div> */}
      </div>
    </footer>
  );
}
