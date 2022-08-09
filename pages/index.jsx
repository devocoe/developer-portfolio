import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Post from "../components/Post";
import Project from "../components/Project";
import Link from "next/link";
import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { FaNewspaper, FaCodeBranch } from "react-icons/fa";
import { MdArrowRightAlt, MdOutlinePortrait } from "react-icons/md";

export default function Home({ latestPosts, projects }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Devocoe - Programmer and High school student </title>
        <meta
          name="description"
          content="A passionate programmer and also a high school student. Love
          exploring new things and making fun projects."
          lang="en"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* hero section  */}
        <section id="intro" className="border-b  py-16 lg:py-20">
          <div>
            <Image
              src={"/img/author.png"}
              width={80}
              height={80}
              alt="author"
              className="rounded-full"
            />
          </div>
          <h1 className="pt-3  text-4xl font-semibold  md:text-5xl lg:text-6xl">
            Hi, I&apos;m Piyush.
          </h1>
          <p className="pt-3 mb-12  text-xl  ">
            A passionate programmer and also a high school student. Love
            exploring new things and making fun projects.
          </p>

          <Button
            ariaLabel={"Contact"}
            text={"Let's Talk"}
            onClick={() => {
              router.push("/contact");
            }}
          />
        </section>
        {/* hero section  */}

        {/* about section  */}
        <section id="about" className="border-b  py-16 lg:py-20">
          <div className="flex items-center pb-6">
            <MdOutlinePortrait className="text-3xl text-icon" />
            <h2 className="ml-3  text-2xl font-semibold">My Story</h2>
          </div>
          <div>
            <p className="">
              My self Piyush Kumar and i am from India. i started programming
              when i was in 10th std, currently i am in 12th std, so i have all
              most <strong>2 years of experience</strong> in programming. i love
              programming and i love making fun projects and solving real world
              problems with my coding skills.
              <br />
              <br />
              My skills are{" "}
              <strong>
                HTML, CSS, Javascript, Python, Nodejs, Reactjs, Nextjs,
                Expressjs, Mongodb
              </strong>
              . I also have little bit experience of mobile development in react
              native. Apart from coding i have some other hobbies like reading
              self development books and travelling.
            </p>
          </div>
        </section>
        {/* about section  */}

        {/* latest post section  */}
        <section className="py-16 lg:py-20">
          <div className="flex items-center pb-6">
            <FaNewspaper className="text-3xl text-icon" />
            <h2 className="ml-3  text-2xl font-semibold ">Latest Blogs</h2>
            <Link href="/blog">
              <a className="flex items-center pl-10  italic transition-colors hover:text-primary">
                All posts
                <MdArrowRightAlt className="text-xl ml-3 text-primary" />
              </a>
            </Link>
          </div>
          <div className="pt-8">
            {latestPosts.map((post) => {
              return <Post data={post} key={post.id} />;
            })}
          </div>
        </section>
        {/* latest post section  */}

        {/* projects section  */}
        <section id="projects" className="pb-16 lg:pb-20">
          <div className="flex items-center pb-6">
            <FaCodeBranch className="text-3xl text-icon" />
            <h2 className="ml-3 text-2xl font-semibold ">My Projects</h2>
          </div>
          <div>
            {projects.map((project) => {
              return <Project data={project} key={project.id} />;
            })}
          </div>
        </section>
        {/* projects section  */}
      </main>
    </div>
  );
}

// getting data
export async function getStaticProps() {
  // hygraph
  const graphcms = new GraphQLClient(process.env.CMS_URL);

  try {
    const query = `
      query {
        posts(first:4,orderBy: createdAt_DESC) {
          title
          slug
          id
          excerpt
          published
          time
          category
        }
        projects{
          id
          title
          link
          description
        }
      }
    `;

    const { posts, projects } = await graphcms.request(query);

    return {
      props: {
        latestPosts: posts,
        projects,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error.message);
    return {
      props: {
        latestPosts: [],
        projects: [],
      },
    };
  }
}
