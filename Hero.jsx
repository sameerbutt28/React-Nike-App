import { arrowRight } from "../assets/assets/icons"
import Button from "../components/Button"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p> Our Summer Collection</p>
        <h1>
          <span>The New Arrival  </span>
          <br />
          <span> Nike  </span>
          <span> Shoes </span>
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort and innovation fot your active life.
        </p>
        <Button label='Shop Now' iconURL={arrowRight}
        />
        <div className=" flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stats, index) => (
            <div>
              <p>{stats.value}</p>
              <p>{stats.label}</p>
            </div>


          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero