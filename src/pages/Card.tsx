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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa sequi vitae?
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

  const cardImageCode = `() => {
  // import { ArrowRight } from "lucide-react";
   
  return (
    <a href="#" className="w-96 px-8 py-7 bg-black/20 rounded-2xl flex flex-col items-start gap-4 group hover:bg-black/30 transition-all duration-300">
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis perspiciatis neque aliquam eius, explicabo ad laborum?
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
    <div className="w-full p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Cards</h1>
        <p className="text-lg text-gray-400">
          Use the card component to display information in a compact way and
          link to other internal pages.
        </p>
      </header>
      <div id="content">
        <div className="">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <Layers />
            Examples
          </h2>
          <div className="mb-8">
            <p className="text-xl font-semibold text-accent hover:text-accent/70 transition-all duration-300 mb-2 w-fit">
              Text Card
            </p>
            <p>
              The call to action text defaults to Learn more and can be
              customized using the React-Ts.
            </p>

            <LiveCodeEditor
              code={cardTextCode}
              title="Card Text"
              editorHeight="420px"
            />
          </div>
          <div className="">
            <p className="text-xl font-semibold text-accent hover:text-accent/70 transition-all duration-300 mb-2 w-fit">
              Image Card
            </p>
            <p>
              Combine Image and Label when you need to add more metadata or
              context to the Card.
            </p>

            <LiveCodeEditor
              code={cardImageCode}
              title="Card Image"
              editorHeight="420px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
