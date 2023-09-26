
import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard'
const CustomerReviews = () => {
  return (
    <section className="max-container">
<h3 className="text-4xl font-palanquin font-bold text-center">
What our 
<span className="text-coral-red "> Costumers </span> Says? 
</h3>
<p className="text-center mt-4 m-auto  font-montserrat text-slate-gray info-text max-w-lg ">
  Hear genuine stories from our satisfied costumers about their exceptional experiences with us.
</p>
 <div className='flex flex-row flex-wrap justify-evenly'> 
{reviews.map((review) => (
  <ReviewCard
  key={review.customerName}
  imgURL= {review.imgURL}
  costumerName={review.customerName}
  rating={review.rating}
  feedback ={review.feedback}
  />
))}
 </div>
      </section>
  )
}

export default CustomerReviews