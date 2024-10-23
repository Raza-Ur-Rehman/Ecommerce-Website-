
const Button = ({text, icon}) => {
  return (
    <div>
    <Button className="bg-slate-950 text-white p-[12px] text-lg rounded-md flex  text-center gap-5 items-center cursor-pointer">
        {text}
        {icon}
    </Button>
    </div>
  )
}

export default Button
