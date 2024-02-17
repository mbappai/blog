import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 25

export default function Home({ posts }) {
  return (
    <>
      <div className="">

        <div className=' mt-24 flex flex-col gap-y-6 w-full max-w-3xl'>
          <h1 className="text-lg font-medium tracking-normal">Welcome to my Digital Garden</h1>  
          <p className="text-lg font-medium tracking-normal">My name is Mujahid Bappai, a professional virtual assistant on the web. This is the little space I carved up for myself on the web for me to dump my thoughts</p>
          <p className="text-lg font-medium tracking-normal">This is not at all fancy or anything</p>
          <p className="text-lg font-medium tracking-normal">All articles or post you see on this page might or might not be fully formed so please take everything with a grain of salt</p>
        </div>
        
        <div className=" mt-24 ">
          <h2 className='text-md mb-8 font-bold tracking-wider uppercase'>Brain dumps</h2>
          <ul >
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li key={slug} className="py-4">
                  <article>
                    <div className="xl:items-baseline xl:space-y-0">
                    
                      <dl className='sr-only'>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>

                      <div className="space-y-1 xl:col-span-3">

                          <div>
                            <h3 className="text-lg underline decoration-1 underline-offset-2 font-medium tracking-normal">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h3>
                          </div>

                        {/* <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read more: "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>

       </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
