import CardPortfolio from "@/layouts/PortfolioSection/CardPortfolio";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listCardRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const sectionElement = sectionRef.current;
    const listCardElement = listCardRef.current;
    if (!sectionElement || !listCardElement) return;
    ScrollTrigger.create({
      trigger: sectionElement,
      start: "top 15%",
      end: () => `+=${listCardElement?.offsetWidth}`,
      scrub: 1,
      pin: true,
      markers: true,
      animation: gsap.to(".cardPortfolio", {
        opacity: 1,
        x: () =>
          -((listCardElement?.offsetWidth ?? 0) - window.innerWidth * 0.95),
      }),
    });
  }, [sectionRef]);
  return (
    <div className="w-full h-fit" ref={sectionRef}>
      <div className="w-full flex justify-center mb-10">
        <div className="w-1/2 h-1/4 flex justify-around">
          <div className="w-1/2 text-6xl bold">
            <span>Let's have a look at my</span>
            <span className="text-orange-500 ml-3">Portfolio</span>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <button className="bg-orange-500 text-white w-28 h-16 rounded-2xl">
              See All
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-fit h-3/4 flex flex-nowrap overflow-hidden"
        ref={listCardRef}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <div className="mr-10 cardPortfolio">
            <CardPortfolio
              key={index}
              img="https://whitestone2020.com/wp-content/uploads/2020/06/c3818-4fb20-2a6c9f_a5de97491bac430f950fe099c109dca1mv2.png?w=275&h=286"
              title={`${index + 1}`}
              link="https://whitestone2020.com/"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
