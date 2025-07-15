import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      <Link
        to="/"
        className="group mt-4 w-fit bg-primary/30 hover:bg-primary/40 border border-primary px-4 py-2 rounded-full text-text flex items-center gap-2 transition-all duration-300"
      >
        Home
        <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
      </Link>
    </div>
  );
}
