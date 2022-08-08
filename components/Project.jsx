import { MdKeyboardArrowRight } from "react-icons/md";

const Project = ({ data }) => {
  return (
    <a
      target={"_blank"}
      href={data.link}
      className="mb-6 rounded flex items-center justify-between border  px-4 py-4 sm:px-6"
    >
      <span className="w-9/10 pr-8">
        <h3 className=" text-lg mb-1 font-semibold ">{data.title}</h3>
        <p>{data.description}</p>
      </span>
      <span className="w-1/10">
        <MdKeyboardArrowRight className="mx-auto text-xl text-primary" />
      </span>
    </a>
  );
};

export default Project;
