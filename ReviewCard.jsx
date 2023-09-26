import { star } from "../assets/assets/icons"

const ReviewCard = ({imgURL, costumerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
<img 
src={imgURL}
alt="costumer"
className="rouned-full object-cover w-[120px] h-[120px] mt-12"
/>
<p className="mt-3 max-w-sm text-center items-center gap-2.5  " >{feedback}</p>
<div className="flex flex-row mt-2">
    <img 
src={star}
alt="star"
width={24}
height={24}
className="object-contain m-0"
/>
<p className="text-xl font-montserrat text-slate-gray ">
    ({rating})
</p>
</div>

<h3 className="mt-0 font-palanquin text-3xl text-center font-bold">
    {costumerName}
</h3>

    </div>
  )
}

export default ReviewCard