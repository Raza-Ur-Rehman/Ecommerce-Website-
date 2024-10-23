
const Card = ({ title,images,price,description }) => {
  return (
    <div className="bg-orange-300">
      <img className="" src={ "/assets/img/defaultImg.png" && images} alt="Placeholder"/>
      <h1 className="text-lg font-semibold">{title.slice(0, 31)  + "..."}</h1>
      <p>{description.slice(0, 80)+ "...."}</p>
      <span>${price}</span>
    </div>
  )
}

export default Card
