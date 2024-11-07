const Card = ({ title, images, price, description, icon }) => {
  return (
    <>
      <img
        className=" object-cover hover:scale-105 "
        src={images || "/assets/img/defaultImg.png"}
        alt="Placeholder"
        onError={(e) => (e.target.src = "/assets/img/defaultImg.png")}
      />
      <div className="contant-wrapper ">
        <h1 className="text-xl font-semibold title ">{title}</h1>
        <p className="text-md discrption">{description}</p>
        <div className="flex justify-between px-2 md:pb-5 w-full ">
          <p className="text-xl price">{price}</p>
          <p className="text-xl icon">{icon}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
