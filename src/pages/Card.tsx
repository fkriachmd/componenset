/*export interface CardProps {
}*/

import { Layers } from "lucide-react";
import LiveCodeEditor from "../components/LiveCodeEditor";

export default function Card() {
  const cardTextCode = `() => {
  // import { ArrowRight } from "lucide-react";
   
  return (
    <a
      href="#"
      className="w-96 bg-black/20 rounded-2xl py-6 px-8 m-2 flex flex-col gap-4 group hover:bg-black/40 transition-all duration-300"
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
          className="inline-block ml-1 group-hover:translate-x-2 transition-all duration-300"
        />
      </p>
    </a>
  );
}`;

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-2">Cards</h1>
      <p className="mb-8">
        Use the card component to display information in a compact way and link
        to other internal pages.
      </p>
      <div id="content">
        <div className="">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <Layers />
            Examples
          </h2>
          <p className="text-xl font-semibold text-accent hover:text-accent/70 transition-all duration-300 mb-2 w-fit">
            Text Card
          </p>
          <p>
            The call to action text defaults to Learn more and can be customized
            using the React-Ts.
          </p>

          <LiveCodeEditor
            code={cardTextCode}
            title="Card Text"
            editorHeight="420px"
          />
        </div>
      </div>
    </div>
  );
}
