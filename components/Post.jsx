import Link from "next/link";
import Tag from "./Tag";

const Post = ({ data }) => {
  return (
    <div className="border-b pb-8 pt-10">
      {/* rendering all the tags  */}
      {data.category.map((item) => {
        return <Tag text={item} key={item} />;
      })}
      {/*  */}
      <Link href={`blog/${data.slug}`}>
        <a className="block hover:opacity-80  transition-opacity">
          <h3 className="text-xl font-semibold  mb-2 ">{data.title}</h3>
          <p>{data.excerpt}</p>
        </a>
      </Link>
      <div className="flex text-sm items-center pt-4">
        <p className="pr-2 font-light ">{data.published}</p>
        <span>|</span>
        <p className="pl-2 font-light">{data.time} min read</p>
      </div>
    </div>
  );
};

export default Post;
