import { ArrowRight } from "lucide-react";

/*export interface CardImageProps {
}*/

export default function CardImage() {
  return (
    <div className="w-96 px-8 py-7 bg-black/20 rounded-2xl flex flex-col items-start gap-4 group hover:bg-black/30 transition-all duration-300">
      <img
        src="https://placehold.co/356x237"
        alt="Card Image"
        className="rounded-xl"
      />
      <span className="text-sm px-4 py-1 rounded-full border border-link text-link">
        Beta
      </span>
      <h3 className="text-xl font-semibold">Code search & code view</h3>
      <p className=" text-gray-400">
        Enables you to rapidly search, navigate, and understand code, right from
        GitHub.com.
      </p>
      <p className="text-link w-fit">
        Learn more
        <ArrowRight
          height={18}
          className="inline-block ml-1 group-hover:translate-x-2 transition-all duration-300"
        />
      </p>
    </div>
  );
}
