import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { user, userData } = useAuth();
  const isUserSignedIn = user && userData?.role;

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="flex items-center justify-between p-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-x-1">
          <h2 className="text-2xl font-semibold">reserva</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-x-7">
          <nav>
            <ul className="flex gap-6 items-center text-sm font-medium text-slate-600">
              <Link
                to="/"
                className="hover:text-primary-blue transition-colors"
              >
                Home
              </Link>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-primary-blue transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-primary-blue transition-colors"
                >
                  Features
                </a>
              </li>
            </ul>
          </nav>

          {isUserSignedIn ? (
            <Link to={`/${userData?.role}/dashboard`}>
              <Button>
                <ArrowRight />
                Go to Dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button>Get started</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <nav>
              <ul className="flex flex-col gap-4 text-sm font-medium text-slate-600">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="hover:text-primary-blue transition-colors"
                >
                  Home
                </Link>
                <a
                  href="#how-it-works"
                  onClick={() => setOpen(false)}
                  className="hover:text-primary-blue transition-colors"
                >
                  How it works
                </a>
                <a
                  href="#features"
                  onClick={() => setOpen(false)}
                  className="hover:text-primary-blue transition-colors"
                >
                  Features
                </a>
              </ul>
            </nav>

            {isUserSignedIn ? (
              <Link
                to={`/${userData?.role}/dashboard`}
                onClick={() => setOpen(false)}
              >
                <Button className="w-full">
                  <ArrowRight />
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/login" onClick={() => setOpen(false)}>
                <Button className="w-full">Get started</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
