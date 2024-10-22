
const Button = ({text, icon}) => {
  return (
    <>
    <div className="bg-slate-950 text-white p-[12px] text-lg rounded-lg flex  text-center gap-5 items-center cursor-pointer">
        {text}
        {icon}
    </div>
    </>
  )
}

export default Button
