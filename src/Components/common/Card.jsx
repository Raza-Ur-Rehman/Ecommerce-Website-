
const Card = ({ title,images,price,description,}) => {
  return (
    <div className="shadow-md rounded-lg">
      <img className=" object-cover w-full hover:scale-105 " src={images || "/assets/img/defaultImg.png" } alt="Placeholder"  onError={(e) => e.target.src = "/assets/img/defaultImg.png"} />
      <div className="p-2 flex justify-around flex-col gap-2">
      <h1 className="text-lg font-semibold pt-1">{title.slice(0, 20)  + "..."}</h1>
      </div>
      <div><p className="text-lg pt-2 ">{description.slice(0,30 )+ "..."}</p></div>
      <div><p className="text-lg ">${price}</p></div>
    </div>
  )
}

export default Card
