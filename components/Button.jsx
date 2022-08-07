const Button = ({ text, onClick, ariaLabel }) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="block rounded bg-primary px-10 py-4 text-center  
      text-xl font-semibold text-white transition-colors hover:bg-primaryDark 
      sm:inline-block sm:text-left sm:text-2xl"
    >
      {text}
    </button>
  );
};

export default Button;
