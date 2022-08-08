import Button from "../../components/Button";
import Post from "../../components/Post";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import { FaNewspaper } from "react-icons/fa";

// hygraph;
const graphcms = new GraphQLClient(process.env.CMS_URL);

const blog = ({ posts }) => {
  return (
    <main>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="I write articles about programming or whatever comes in my mind.
          Subscribe for latest updates."
        />
      </Head>
      <div className="py-16 lg:py-20">
        <div>
          <FaNewspaper className="text-5xl text-icon" />
        </div>

        <h2 className="pt-5 mb-4 text-4xl font-semibold   md:text-5xl lg:text-6xl">
          Blog
        </h2>

        <div className="pt-3 sm:w-3/4">
          <p className=" text-xl   ">
            I write articles about programming or whatever comes in my mind.
            Subscribe for latest updates.
          </p>
        </div>

        <form className="flex flex-col py-12 sm:flex-row">
          <input
            type="email"
            id="subscribe"
            placeholder="News letter coming soon!"
            disabled
            className="w-full border-2 px-5 py-4 dark:bg-secondary rounded mr-2  transition-colors focus:border-primary outline-none sm:w-1/2 mb-2 sm:mb-0"
          />
          <Button text={"Subscribe"} />
        </form>

        <div className="pt-8 lg:pt-12">
          {posts.map((post) => {
            return <Post data={post} key={post.id} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default blog;

// getting all the blog posts
export async function getStaticProps() {
  try {
    const query = `
      query {
        posts {
          title
          slug
          id
          excerpt
          published
          time
          category
        }
      }
    `;

    const { posts } = await graphcms.request(query);

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error.message);
    return {
      props: {
        posts: [],
      },
    };
  }
}
