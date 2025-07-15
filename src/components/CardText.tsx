import { ArrowRight } from "lucide-react";

export default function CardText() {
  return (
    <a
      href="#"
      className="w-96 bg-black/20 rounded-2xl py-6 px-8 m-2 flex flex-col gap-4 group hover:bg-black/30 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">
        Collaboration is the key to DevOps success
      </h3>
      <p className="text-sm text-gray-400">
        Everything you need to know about getting started with GitHub Actions.
      </p>
      <p className="text-link w-fit">
        Learn more
        <ArrowRight
          height={18}
          className="inline-block ml-1 group-hover:translate-x-1 transition-all duration-300"
        />
      </p>
    </a>
  );
}
