import { MoveUpRight } from "lucide-react";

type TCardPortfolioProps = {
  title: string;
  img: string;
  link: string;
};
export default function CardPortfolio({
  title,
  img,
  link,
}: TCardPortfolioProps) {
  return (
    <div className="w-[500px] bg-slate-200 h-96 relative flex justify-center rounded-lg">
      <div className="w-11/12 bg-green-50 h-full"></div>
      <div className="absolute top-0 left-0 bg-slate-300/50 w-full h-full rounded-lg">
        <div className="w-full h-full relative">
          <div className="absolute bottom-5 left-5 text-3xl font-semibold ">
            {title}
            <img src={img} alt="img-card" className="hidden" />
          </div>
          <div className="absolute top-5 right-5">
            <a target="_blank" href={link}>
              <button className="border border-orange-500 rounded-full p-5 transition-all hover:bg-orange-500 hover:text-white">
                <MoveUpRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
