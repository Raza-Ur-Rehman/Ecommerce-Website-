
const Card = ({ title,images,price,description,}) => {
  return (
    <div className="shadow-md rounded-lg ">
      <img className=" object-cover w-[250px] h-2/3 hover:scale-105 " src={images || "/assets/img/defaultImg.png" } alt="Placeholder"  onError={(e) => e.target.src = "/assets/img/defaultImg.png"} />
     
      <div className="flex flex-col justify-around gap-1  p-2 ">
      <div className="p-1 ">
      <h1 className="text-lg font-semibold ">{title.slice(0, 20)  + "..."}</h1>
      </div>
      <div className="p-1 " ><p className="text-sm ">{description.slice(0,25 )+ "..."}</p></div>
      <div className="p-1 pb-2  text-end"><p className="text-lg">${price}</p></div>
      </div>
    </div>
  )
}

export default Card
