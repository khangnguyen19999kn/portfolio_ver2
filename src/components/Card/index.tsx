import "./card.css";
export default function Card({ index }: { index: number }) {
  return (
    <div className="w-card h-card bg-[#91959b70] rounded-2xl border-gray-400 border-2 cardContainer">
      <div className="h-1/4 rounded-t-2xl flex items-center px-10 border-b-gray-400 border-b">
        <p className="text-2xl">{`${index + 1}`}</p>
      </div>
      <div className="h-3/4  rounded-b-2xl  flex items-end">
        <div className="h-3/4 bg-red-500 w-full relative flex justify-center rounded-2xl">
          <div className="absolute -top-5 bg-gray-500/80 w-11/12 h-[20px] rounded-t-2xl">
            <div className="w-full h-full relative flex justify-center">
              <div className="absolute -top-4 bg-gray-200/20 w-10/12 h-[16px] rounded-t-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
