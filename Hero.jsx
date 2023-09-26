import { arrowRight } from "../assets/assets/icons"
import { bigShoe1 } from "../assets/assets/images"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1);
  return (
    <section id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red "> Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">The New Arrival  </span>
          <br />
          <span className="text-coral-red inline-block mt-3"> Nike  </span>
          <span> Shoes </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14">
          Discover stylish Nike arrivals, quality comfort and innovation for your active life.
        </p>
        <Button label='Shop Now' iconURL={arrowRight}
        />
        <div className=" flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stats) => {
            return(
                <div key={stats.label}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stats.label}</p>
            </div>
            )
          })}
        </div>
      </div>
      <div className="flex  flex-col flex-1 justify-center relative items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-hero bg-center">
        <img
        src={bigShoeImage}
        alt="shoes collection"
        width={610}
        height={500}
        className="relative z-10 object-contain"
        />
      <div className="flex absolute bottom-[-8%] gap-8 ">
        {shoes.map((shoe)=>(
          <div key={shoe}>
            <ShoeCard
            imgURL={shoe}
            changeBigShoeImage={(shoe)=>
              setbigShoeImage(shoe)
            }
            bigShoeImage={bigShoeImage}
            />

            </div>

        ))}
      </div>
      </div>

      
    </section>
  )
}

export default Hero