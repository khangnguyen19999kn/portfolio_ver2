import { Zap } from "lucide-react";
import Marquee from "react-fast-marquee";
export default function MarqueeSection() {
  return (
    <div className="h-40 bg-orange-400">
      <div className="flex items-center h-full text-3xl font-semibold">
        <Marquee>
          {Array.from({ length: 20 }, (_, index) => (
            <div className="flex justify-center items-center item" key={index}>
              <span className="w-fit whitespace-nowrap mr-2">Landing Page</span>
              <Zap className="fill-black mx-10 w-5 h-5" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
