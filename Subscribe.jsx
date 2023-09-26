import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    id="conatct-us"> 
      <h3 className="text-4xl leading-[68px] lg:max-w-md  font-palanquin font-bold">
        Sign Up from 
        <span className="text-coral-red">  Updates 
        </span> & Newsletter
      </h3>
<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-slate-gray rounded-full">
  <input type="text" placeholder="subscribe@nike.com"
  className="input"/>
  <div className="flex mx-sm:justify-end items-center max-sm:w-full">
    <Button label="Sign Up" fullWidth={false} />
  </div>
</div>
    </section>
  )
}

export default Subscribe