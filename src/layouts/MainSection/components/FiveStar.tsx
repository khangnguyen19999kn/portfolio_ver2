import { Star } from "lucide-react";

export default function FiveStar() {
  const showFiveStar = Array.from({ length: 5 }, (_, index) => (
    <Star key={index} className="fill-yellow-500" />
  ));
  return <div className="flex justify-center">{showFiveStar}</div>;
}
