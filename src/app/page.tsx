import { LeftSide } from "@/features/leftSide";
import { RightSide } from "@/features/rightSide";

const Home = () => {
  return (
    <div className="bg-[url('/assets/bg_blur.webp')] bg-cover flex flex-col justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-2xl rounded-xl overflow-hidden bg-white/90 backdrop-blur-md border border-purple-500/20 transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-[0_25px_60px_-15px_rgba(124,58,237,0.25)] animate-fade-in-up z-10">
        <LeftSide />
        <div className="border-t border-purple-500/10 md:border-t-0 md:border-l"></div>
        <RightSide />
      </div>
      <p className="mt-6 text-xs text-white/60 font-medium tracking-wider select-none animate-fade-in-up [animation-delay:200ms]">
        © 2024 - 2026 にる / n1lsqn. All Rights Reserved.
      </p>
    </div>
  )
}

export default Home;