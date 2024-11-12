import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TestScaleSection() {
  const containerSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sectionElement = containerSectionRef.current;
    if (!sectionElement) return;

    gsap.set([".img-2", ".img-3"], { opacity: 0, y: 100 });

    const tl = gsap.timeline();
    const clientWidth = sectionElement.clientWidth;

    tl.to(".img-1", {
      scale: 4,
      transformOrigin: "center right",
      duration: 2,
      ease: "power2.inOut",
    })
      .to(
        ".img-1",
        {
          x: -clientWidth / 2,
          autoAlpha: 0,
          duration: 1.4,
          ease: "power2.inOut",
        },
        "-=1.4"
      )

      .to(
        ".img-2",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        ".img-2",
        {
          scale: 4,
          transformOrigin: "center right",
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.9"
      )
      .to(
        ".img-2",
        {
          x: -clientWidth / 2,
          autoAlpha: 0,
          duration: 1.4,
          ease: "power2.inOut",
        },
        "-=1.4"
      )

      .to(
        ".img-3",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        ".img-3",
        {
          scale: 4,
          transformOrigin: "center right",
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.9"
      )
      .to(
        ".img-3",
        {
          x: -clientWidth / 2,
          autoAlpha: 0,
          duration: 1.4,
          ease: "power2.inOut",
        },
        "-=1.4"
      );

    ScrollTrigger.create({
      animation: tl,
      trigger: sectionElement,
      start: "top top",
      end: `+=${sectionElement.clientHeight * 3}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true,
      fastScrollEnd: true,
      preventOverlaps: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      className="h-screen w-full flex overflow-hidden relative"
      ref={containerSectionRef}
    >
      <div className="w-1/2 h-full relative p-5">
        <div className="absolute top-[40%] right-0 w-1/3 h-1/5">
          <img
            src="https://cdn.prod.website-files.com/657eccfbaeba36ef69962c26/661844f300e6cd112442d85f_03_Simone-Pose-InGym_0120_kc2_cw_vh4%201.jpg"
            alt="test1"
            className="img-1 w-full h-full object-cover"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
            alt="test2"
            className="img-2 w-full h-full object-cover absolute top-0 left-0"
          />
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-a-river-in-the-middle-of-the-forest-free-image.jpeg?w=600&quality=80"
            alt="test3"
            className="img-3 w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-start items-center p-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          perspiciatis atque earum, tenetur labore repudiandae aliquid impedit
          sit optio corrupti, totam culpa. Adipisci, id! Hic iste ipsa a officia
          quidem?
        </p>
      </div>
    </div>
  );
}
