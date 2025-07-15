import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="block px-2 py-2 rounded hover:bg-gray-700/20 transition-colors"
    >
      {children}
    </Link>
  );
}
