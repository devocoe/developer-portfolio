import Tag from "../../components/Tag";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoReddit,
  IoLogoWhatsapp,
} from "react-icons/io5";

import {
  FacebookShareButton,
  RedditShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "next-share";

import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";
import Head from "next/head";

const graphcms = new GraphQLClient(process.env.CMS_URL);

const blogpost = ({ post, host }) => {
  const router = useRouter();

  const currentPath = router.asPath;

  const blogPostUrl = `https://${host}${currentPath}`;

  return (
    <main>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div className="pt-16 lg:pt-20">
        <div className="border-b border-grey-lighter pb-8 sm:pb-12">
          {/* tags  */}
          {post.category.map((item) => {
            return <Tag text={item} key={item} />;
          })}

          {/* title  */}
          <h2 className="block  text-3xl font-semibold leading-tight  sm:text-4xl md:text-5xl">
            {post.title}
          </h2>
          <div className="flex items-center pt-5 sm:pt-8">
            <p className="pr-2   "> {post.published}</p>
            <span className="vdark:text-white  text-grey">//</span>
            <p className="pl-2   ">{post.time} min read</p>
          </div>
        </div>
        {/* blog body  */}
        <div className="prose prose-p:dark:text-white prose-p:text-black dark:prose-invert max-w-none border-b  py-8 sm:py-12">
          <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </div>
        {/* blog body  */}

        {/* share  */}
        <div className="flex items-center py-10">
          <span className="pr-5  font-medium ">Share</span>
          <WhatsappShareButton url={blogPostUrl}>
            <IoLogoWhatsapp className="text-2xl  hover:text-primary transition-colors" />
          </WhatsappShareButton>
          <FacebookShareButton url={blogPostUrl}>
            <IoLogoFacebook className="text-2xl ml-5  hover:text-primary transition-colors" />
          </FacebookShareButton>
          <TwitterShareButton url={blogPostUrl}>
            <IoLogoTwitter className="text-2xl ml-5 hover:text-primary transition-colors" />
          </TwitterShareButton>
          <LinkedinShareButton url={blogPostUrl}>
            <IoLogoLinkedin className="text-2xl ml-5 hover:text-primary transition-colors" />
          </LinkedinShareButton>
          <RedditShareButton url={blogPostUrl}>
            <IoLogoReddit className="text-2xl ml-5 hover:text-primary transition-colors" />
          </RedditShareButton>
        </div>
      </div>
    </main>
  );
};

export default blogpost;

export const getServerSideProps = async (context) => {
  const {
    query: { slug },
  } = context;

  const host = context.req.headers.host;

  try {
    const query = `
    {
      posts(where: { slug: "${slug}" }){
        title
        published
        body{html}
        time
        category
        excerpt
      }
    }
    
    `;

    const { posts } = await graphcms.request(query);

    if (posts.length <= 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: posts[0],
        host,
      },
    };
  } catch (error) {
    console.log(error.message);
  }
};
