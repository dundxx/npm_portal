import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 h-14 customBG">
      <div className="flex items-center space-x-2 text-sm">
        <Link to="/" className="text-lg font-bold text-colorDiv">
          NPM Registry
        </Link>
      </div>

    </div>
  );
}
