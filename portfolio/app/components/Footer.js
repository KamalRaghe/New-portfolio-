export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
        <p>
          © 2026 Kamal Raghe. All rights
          reserved.
        </p>

        <div className="flex gap-6">
          <a
            style={{color:"#50A2FF"}}
            href="https://drive.google.com/file/d/1NvBmqRH7hPVu5lGbQv7YnKfWBjMX2_C1/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            style={{color:"#50A2FF"}}
            href="https://github.com/KamalRaghe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            style={{color:"#50A2FF"}}
            href="https://www.linkedin.com/in/kamal-raghe-aa7a922b3"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}