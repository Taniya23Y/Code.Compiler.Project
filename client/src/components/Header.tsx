import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold select-none">Web-D Compiler</h2>
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link to="/compiler">
            <Button>Compiler</Button>
          </Link>
        </li>
        <li>
          <Link to="/login" >
            <Button variant="blue">Login</Button>
          </Link>
        </li>
        <li>
          <Link to="/signup" >
            <Button variant="blue">signup</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
