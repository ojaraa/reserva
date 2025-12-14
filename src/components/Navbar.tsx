// import { LandPlot } from "lucide-react"


import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = ({showNavLink} : {showNavLink: boolean}) => {
 

  return (
    <div className="flex items-center justify-between p-6">
      <Link to={'/'} className="flex gap-x-1 items-center">
        <h2 className="text-2xl">reserva</h2>
      </Link>

      {showNavLink && (
        <div className="flex justify-between items-center gap-x-7">
          <nav className="">
            <ul className="flex gap-6 items-center">
              <li className="">Home</li>
              <li className="">About</li>
              <li className="">Contact</li>
            </ul>
          </nav>

          <Button>Login</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
