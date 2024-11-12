import FiveStar from "@/layouts/MainSection/components/FiveStar";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function MainSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      const textElements = textRef.current.querySelectorAll(".text span");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${sectionRef?.current?.clientHeight}`,
          scrub: true,
          pin: true,
        },
      });
      tl.fromTo(
        ".img-avatar",
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
        }
      );

      textElements.forEach((element, index) => {
        tl.fromTo(
          element,
          { opacity: 0.1 },
          { opacity: 1, duration: 1 },
          `-=${index * 0.5}`
        );
      });
      tl.fromTo(
        ".experience-year",
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0 }
      );

      tl.fromTo(
        ".favorite-lines",
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0 }
      );
    }
  }, [sectionRef]);

  return (
    <div className="w-full h-full relative" ref={sectionRef}>
      <div className="absolute top-1/2 right-[10%] experience-year">
        <FiveStar />
        <p className="text-center bold text-5xl">3 Years</p>
        <p className="text-end text-2xl">Experience</p>
      </div>
      <div className="absolute top-1/2 left-[10%] favorite-lines">
        <img
          src="https://whitestone2020.com/wp-content/uploads/2020/06/c3818-4fb20-2a6c9f_a5de97491bac430f950fe099c109dca1mv2.png?w=275&h=286"
          alt=""
        />
      </div>
      <div className="w-full h-3/5 flex justify-center items-center ">
        <div className="wrapper-text" ref={textRef}>
          <div className="flex justify-center">
            <div className="border-2 border-black rounded-full px-8 py-2 bold">
              Hello!!!
            </div>
          </div>
          <h1 className="text-8xl bigDesktop:text-9xl mt-5 flex justify-center text">
            <span>I'm</span>
            <span className="text-orange-600 ml-10">Khang</span>
          </h1>
          <h1 className="text-8xl bigDesktop:text-9xl mt-5 text">
            <span>Front-end Developer</span>
          </h1>
        </div>
      </div>
      <div className="w-full h-2/5 flex justify-center">
        <div className="w-1/2 h-full bg-orange-600 rounded-t-full z-0 relative flex justify-center">
          <img
            src="https://genk.mediacdn.vn/2018/6/18/14-15293076849281696308120.png"
            alt="test-avatar"
            className="absolute bottom-0 h-[500px] bigDesktop:h-[850px] img-avatar "
          />
        </div>
      </div>
    </div>
  );
}
