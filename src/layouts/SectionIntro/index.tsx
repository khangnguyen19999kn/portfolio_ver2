import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronsDown } from "lucide-react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function SectionIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const sectionElement = sectionRef.current;
    if (!sectionRef) return;
    const tl = gsap.timeline();
    const END = sectionElement?.clientHeight ?? 0;
    tl.to(".text-scroll", {
      color: "red",
      opacity: 0,
      duration: 2,
    })
      .to(".welcome-text", {
        opacity: 1,
        y: -200,
        duration: 2,
      })
      .to(".welcome-text", {
        opacity: 0,
        y: 200,
        duration: 2,
      });

    ScrollTrigger.create({
      animation: tl,
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${END}`,
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        console.log(self.progress);
      },
    });
  }, []);
  return (
    <div
      className="w-full h-full flex justify-center items-center bg-orange-white "
      ref={sectionRef}
    >
      <div className="text text-5xl">
        <div className="text-scroll animate-bounce ">
          <h1>Scroll Down</h1>
          <div className="flex justify-center mt-4">
            <ChevronsDown className="w-10 h-10"/>
          </div>
        </div>
        <h1 className="welcome-text opacity-0">Welcome</h1>
      </div>
    </div>
  );
}
