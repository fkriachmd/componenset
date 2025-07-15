/*export interface CardProps {
}*/

import CardText from "../components/CardText";

export default function Card() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-2">Cards</h1>
      <p className="mb-8">
        Use the card component to display information in a compact way and link
        to other internal pages.
      </p>
      <div id="content">
        <div className="">
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>
          <p className="text-xl font-semibold text-accent hover:text-accent/70 transition-all duration-300 mb-2">
            Text Card
          </p>
          <p>
            The call to action text defaults to Learn more and can be customized
            using the React-Ts.
          </p>

          <div className="border border-gray-700 rounded-2xl overflow-hidden mt-6">
            <div className="flex w-full justify-center ">
              <CardText />
            </div>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
