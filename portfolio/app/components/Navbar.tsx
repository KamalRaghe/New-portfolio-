"use client";

export default function Navbar() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, "top")}
        >
          Kamal Raghe
        </a>

        <div className="hidden gap-8 md:flex">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
          >
            About
          </a>

          <a
            href="#work"
            onClick={(e) => scrollToSection(e, "work")}
          >
            Work
          </a>

          <a
            href="#experience"
            onClick={(e) =>
              scrollToSection(e, "experience")
            }
          >
            Experience
          </a>

          <a
            href="#stack"
            onClick={(e) => scrollToSection(e, "stack")}
          >
            Stack
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}