const Tag = ({ text, bg }) => {
  return (
    <span className="mb-4 inline-block rounded-full mr-2 bg-green-100 px-2 py-1 dark:text-secondary text-sm text-primaryDark">
      {text}
    </span>
  );
};

export default Tag;
