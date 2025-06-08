import mockup from "../../assets/fit2.png"
import blob from "../../assets/blob.png"

const Overview = () => {
  return (
    <div className="min-h-full relative z-10  overflow-hidden">
        <div className="absolute top-0 left-0 -z-10">
            <img src={blob} alt="blob" className="animate-float w-40 md:w-3/4" />
        </div>
        <div className="absolute bottom-0 right-0 -z-10 ">
            <img src={blob} alt="blob" className="animate-float w-40 md:w-3/4" />
        </div>
      <div className="mx-auto p-3 text-center flex flex-col items-center justify-center mt-5 z-60">
        <div className="flex flex-col justify-center items-center">
        <h2 className="capitalize text-accent-foreground mb-2 text-gray-700 text-2xl md:text-4xl font-bold ">Your fitness journey visualized</h2>
        <div className=" bg-blue-300 h-1 w-40 rounded-sm mb-5"></div>
        </div>
        <p className="max-w-xl leading-loose text-muted-foreground">Track your progress with real-time stats, personalized recommendations, and powerful insights—all in one place. Whether you're building muscle, burning fat, or maintaining a healthy lifestyle, our intelligent dashboard adapts to your goals and keeps you motivated every step of the way</p>
      </div>

      <div className="mx-auto flex items-center justify-center overflow-hidden max-w-5xl md:-mt-20 "  >
        <img src={mockup} alt="mockup" className="w-[50%] h-1/2 drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] "  />
      </div>
    </div>
    
  )
}

export default Overview
