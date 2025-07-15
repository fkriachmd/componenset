import { BookOpenText, Layers2 } from "lucide-react";
import NavLink from "./NavLink";
import Logo from "./Logo";

const component = [
  {
    link: "/component/icon",
    title: "Icon",
  },
  {
    link: "/component/card",
    title: "Card",
  },
];

export default function Sidebar() {
  return (
    <nav className="w-64 text-sm bg-black/20 border-r border-gray-700 p-4 h-full overflow-y-auto flex-shrink-0">
      <a
        href="#"
        className="mb-8 text-xl font-semibold text-text flex items-center"
      >
        <Logo height={24} width={24} className="mr-2 rounded-sm" />
        composet
      </a>
      <ul className="space-y-1">
        <li className="font-semibold text-xs text-accent uppercase mt-4 first:mt-0">
          <BookOpenText height={18} className="inline-block mr-1" />
          introduction
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <ul className="space-y-1 mt-6">
        <li className="font-semibold text-xs text-accent uppercase">
          <Layers2 height={18} className="inline-block mr-1" />
          Component
        </li>
        {component.map((item, index) => (
          <li key={index}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
