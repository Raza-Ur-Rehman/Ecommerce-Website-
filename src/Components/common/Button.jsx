const Button = ({ text, icon, link }) => {
  return (
    <>
      <a href={link} className="  p-[12px] text-lg rounded-md flex  text-center gap-5 items-center cursor-pointer">
        {text}
        {icon}
      </a>
    </>
  );
};

export default Button;
