import Button from "./common/Button"

const Banner = () => {
  return (
    <>
      <div className="flex">
        <Button text="Go to Collection" icon={<i className="fa-solid fa-arrow-right-long text-xl"></i>} />
      </div>
    </>
  )
}

export default Banner
