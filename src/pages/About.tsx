import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          About ComponentSet
        </h1>
        <p className="text-xl text-gray-400">
          A modern React component library documentation site
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">
              Interactive Components
            </h3>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">
              Live Code Editor
            </h3>
            <p className="text-gray-300 text-sm">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">
              Modern Design
            </h3>
            <p className="text-gray-300 text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">
              TypeScript Support
            </h3>
            <p className="text-gray-300 text-sm">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Technology Stack
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>React 19 with TypeScript</li>
          <li>Tailwind CSS for styling</li>
          <li>Vite for build tooling</li>
          <li>React Router for navigation</li>
          <li>Lucide React for icons</li>
          <li>React Live for interactive code editing</li>
        </ul>
      </section>

      <footer className="border-t border-gray-700 pt-6">
        <p className="text-gray-400 text-sm mb-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <Link
          to="/"
          className="group w-fit bg-primary/30 hover:bg-primary/40 border border-primary px-6 py-3 rounded-full text-text flex items-center gap-2 transition-all duration-300"
        >
          Back to Home
          <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
        </Link>
      </footer>
    </div>
  );
}
