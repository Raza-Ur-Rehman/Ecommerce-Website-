const Button = ({ text, icon, link }) => {
  return (
    <>
      <a href={link} className=" w-full text-lg rounded-md flex  text-center gap-5 items-center cursor-pointer">
        {text}
        {icon}
      </a>
    </>
  );
};

export default Button;
