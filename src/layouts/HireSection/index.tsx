import { useEffect, useRef } from "react";
import { useCountUp } from "use-count-up";

export default function HireSection() {
  const { value, reset } = useCountUp({
    end: 100,
    duration: 5,
    isCounting: true,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.4) {
          reset();
        }
      });
    }, options);
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, [reset]);

  return (
    <div className="w-3/4 bigDesktop:w-1/2 m-auto bg-gray-300/35 h-3/4 bigDesktop:h-1/2 flex rounded-3xl my-10 bg-orange-white border border-stale-200" ref={sectionRef}>
      <div className="w-2/5 h-full flex justify-end items-center">
        <div className="w-3/5 h-1/2 relative bg-orange-300 rounded-3xl">
          <img
            src="https://genk.mediacdn.vn/2018/6/18/14-15293076849281696308120.png"
            alt="test-avatar"
            className="absolute bottom-0 h-[450px] w-full"
          />
        </div>
      </div>
      <div className="w-3/5 h-full flex items-center px-20">
        <div className="h-2/3 ">
          <div className="flex text-5xl bold">
            <span>Why</span>
            <span className="text-orange-600 ml-2">Hire me</span>
            <span>?</span>
          </div>
          <div className="text-xl my-5 text-gray-500/50 ">
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              beatae numquam velit assumenda ea facere quaerat optio libero
              perspiciatis enim sit, rem fugiat. Possimus sunt magnam blanditiis
              iste, placeat laudantium!
            </span>
          </div>
          <div className="flex flex-col my-5">
            <span className="text-xl bold">{value}+</span>
            <span>Project Complete</span>
          </div>
          <button className="border transition-all border-black rounded-3xl px-8 py-3 hover:bg-orange-300 hover:text-white hover:border-orange-300 text-lg font-semibold">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}
