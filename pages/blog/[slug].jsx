import Tag from "../../components/Tag";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaReddit,
  FaWhatsapp,
} from "react-icons/fa";

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

const BlogPost = ({ post }) => {
  const router = useRouter();

  const currentPath = router.asPath;

  const blogPostUrl = `https://devocoe.in${currentPath}`;

  return (
    <main>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div className="pt-16 lg:pt-20">
        <div className="border-b border-grey-lighter pb-8 sm:pb-12">
          {post.category.map((item) => {
            return <Tag text={item} key={item} />;
          })}

          <h2 className="block  text-3xl font-semibold leading-tight  sm:text-4xl md:text-5xl">
            {post.title}
          </h2>
          <div className="flex items-center pt-5 sm:pt-8">
            <p className="pr-2"> {post.published}</p>
            <span className="vdark:text-white  text-grey">|</span>
            <p className="pl-2">{post.time} min read</p>
          </div>
        </div>

        <div className="prose prose-p:dark:text-white prose-p:text-black dark:prose-invert max-w-none border-b  py-8 sm:py-12">
          <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </div>

        <div className="flex items-center py-10">
          <span className="pr-5  font-medium ">Share</span>
          <WhatsappShareButton url={blogPostUrl}>
            <FaWhatsapp className="text-2xl  hover:text-primary transition-colors" />
          </WhatsappShareButton>
          <FacebookShareButton url={blogPostUrl}>
            <FaFacebook className="text-2xl ml-5  hover:text-primary transition-colors" />
          </FacebookShareButton>
          <TwitterShareButton url={blogPostUrl}>
            <FaTwitter className="text-2xl ml-5 hover:text-primary transition-colors" />
          </TwitterShareButton>
          <LinkedinShareButton url={blogPostUrl}>
            <FaLinkedin className="text-2xl ml-5 hover:text-primary transition-colors" />
          </LinkedinShareButton>
          <RedditShareButton url={blogPostUrl}>
            <FaReddit className="text-2xl ml-5 hover:text-primary transition-colors" />
          </RedditShareButton>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const graphcms = new GraphQLClient(process.env.CMS_URL);

  try {
    const query = `
    {
      posts{
      slug
      }
    }
    
    `;

    const { posts } = await graphcms.request(query);

    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.log(error.message);
  }
}

export async function getStaticProps({ params: { slug } }) {
  // hygraph
  const graphcms = new GraphQLClient(process.env.CMS_URL);

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
      }`;

    const { posts } = await graphcms.request(query);

    return {
      props: {
        post: posts[0],
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error.message);
  }
}
