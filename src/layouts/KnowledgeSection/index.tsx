import Card from "@/components/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function KnowledgeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listCardRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const sectionElement = sectionRef.current;
    const listCardElement = listCardRef.current;
    if (!sectionRef) return;
    ScrollTrigger.create({
      trigger: sectionElement,
      start: "top 20%",
      end: () => `+=${listCardElement?.offsetWidth}`,
      scrub: 1,
      pin: true,
      markers: true,
      animation: gsap.to(".card", {
        opacity: 1,
        x: () =>
          -((listCardElement?.offsetWidth ?? 0) - window.innerWidth * 0.8),
      }),
    });
    gsap.to("body", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: sectionElement,
        start: "top 20%",
        end: () => `+=${listCardElement?.offsetWidth}`,
        toggleActions: "play reset play reverse",
      },
    });
  }, [sectionRef]);
  return (
    <div className="w-full h-3/4 bigDesktop:h-1/2 p-5 flex justify-center" ref={sectionRef}>
      <div className="w-5/6 h-full bg-black rounded-xl p-5 overflow-hidden">
        <div className="text-area h-1/4 w-full bg-pink-200 flex">
          <div className="text-1 w-3/5 flex items-center">
            <div className="ml-10">
              <span className="text-5xl bold">My</span>
              <span className="text-orange-600 ml-2 text-5xl bold ">
                Knowledge
              </span>
            </div>
          </div>
          <div className="text-2 w-2/5 text-2xl text-center m-auto font-semibold">
            This is all the knowledge I have accumulated while working and going
            to school
          </div>
        </div>
        <div
          className="text-area h-3/4 w-fit bg-card p-5 flex items-center flex-nowrap"
          ref={listCardRef}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="mr-10 card">
              <Card index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
