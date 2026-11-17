import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/70">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="text-2xl font-bold"
            onClick={closeMenu}
          >
            Prabhkeerat
            <span className="text-purple-500">.</span>
          </Link>


          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-7">

            {links.map((link) => (

              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-slate-300 hover:text-white transition"
              >
                {link.name}
              </Link>

            ))}

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-medium"
            >
              Hire Me
            </Link>

          </div>


          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>


        {/* Mobile Menu */}

        {isOpen && (

          <div className="md:hidden border-t border-slate-800 py-6">

            <div className="flex flex-col gap-5">

              {links.map((link) => (

                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className="text-slate-300 hover:text-white"
                >
                  {link.name}
                </Link>

              ))}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-center px-5 py-3 rounded-xl bg-purple-600"
              >
                Hire Me
              </Link>

            </div>

          </div>

        )}

      </div>

    </nav>
  );
}

export default Navbar;