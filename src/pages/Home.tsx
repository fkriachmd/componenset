import { Link } from "react-router-dom";
import HeroImage from "../components/HeroSec";
import {
  ArrowRight,
  BookText,
  FileSliders,
  LayoutGrid,
  LibraryBig,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <div className="w-full border border-gray-700 rounded-3xl overflow-hidden">
        <div className="border-b border-gray-700 flex justify-between items-start">
          <div className="px-8 pt-8">
            <span className="border border-gray-600 rounded-full px-4 py-2">
              v0.0.0
            </span>
            <h1 className="text-4xl font-bold mt-4 mb-2">Component Pool</h1>
            <p>
              These components are the building blocks of design system.
              <br />
              We’ve grouped these components into the following categories.
            </p>
            <div className="flex items-center mt-4 gap-2">
              <Link
                to="/component/icon"
                className="group bg-primary/30 hover:bg-primary/40 border border-primary px-4 py-2 rounded-full text-text flex items-center gap-2 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
              </Link>
              <Link
                to="/about"
                className="group border border-gray-700 px-4 py-2 rounded-full hover:bg-gray-700/30 text-white flex items-center gap-2 transition-all duration-300"
              >
                <BookText
                  height={20}
                  className="mr-1 group-hover:scale-105 transition-all duration-300"
                />
                About
              </Link>
            </div>
          </div>
          <div className="pt-20">
            <HeroImage />
          </div>
        </div>
        <div className="p-4 flex items-center justify-evenly">
          <div className="flex flex-col items-center w-40 hover:bg-black/10 transition-all duration-300 rounded-xl py-4">
            <Zap
              height={84}
              width={84}
              strokeWidth={0.6}
              stroke="#00ED64"
              fill="#00ED6420"
            />
            <h2 className="font-medium mt-4 mb-2">Easy to Use</h2>
          </div>
          <div className="flex flex-col items-center w-40 hover:bg-black/10 transition-all duration-300 rounded-xl py-4">
            <LayoutGrid
              height={84}
              width={84}
              strokeWidth={0.6}
              stroke="#00ED64"
              fill="#00ED6420"
            />
            <h2 className="font-medium mt-4 mb-2">Clean & consistent</h2>
          </div>
          <div className="flex flex-col items-center w-40 hover:bg-black/10 transition-all duration-300 rounded-xl py-4">
            <FileSliders
              height={84}
              width={84}
              strokeWidth={0.6}
              stroke="#00ED64"
              fill="#00ED6420"
            />
            <h2 className="font-medium mt-4 mb-2">Customizable</h2>
          </div>
          <div className="flex flex-col items-center w-40 hover:bg-black/10 transition-all duration-300 rounded-xl py-4">
            <LibraryBig
              height={84}
              width={84}
              strokeWidth={0.6}
              stroke="#00ED64"
              fill="#00ED6420"
            />
            <h2 className="font-medium mt-4 mb-2">Comprehensive</h2>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-8">
        &copy; 2025 FkriAchmd React App. All rights reserved.
      </p>
    </div>
  );
}
