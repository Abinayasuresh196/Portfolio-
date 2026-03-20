import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-syne text-2xl font-extrabold tracking-tight text-foreground">
          PA<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              activeClassName="text-primary after:w-full"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground z-50"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile slide-in overlay */}
      <div
        className={`fixed inset-0 bg-black/60 md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-card border-l border-border md:hidden transition-transform duration-300 ease-out z-50 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="pt-16 px-4 flex flex-col gap-0">
          <div className="bg-background rounded-lg shadow-lg border border-border">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block text-lg font-syne font-bold text-foreground hover:text-primary transition-colors py-4 border-b border-border last:border-b-0 pl-6"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
