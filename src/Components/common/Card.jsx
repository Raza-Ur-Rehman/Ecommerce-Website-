
const Card = ({ title,images,price,description, }) => {
  return (
    <>
      <img className=" object-cover  hover:scale-105 " src={images || "/assets/img/defaultImg.png" } alt="Placeholder"  onError={(e) => e.target.src = "/assets/img/defaultImg.png"} />
      <div className="contant-wrapper">
      <h1 className="text-lg font-semibold title ">{title}</h1>
      <p className="text-sm discrption">{description}</p>
      <p className="text-lg price">{price}</p>
      </div>
    </>
  )
}

export default Card
