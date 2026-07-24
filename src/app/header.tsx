"use client";
export default function Header() {
  return (
    <header className="sticky top-0 z-50  flex justify-between items-center px-10 py-4 bg-white shadow-sm">
      <div className="flex items-center">
        <a href="#about" className="text-base font-bold text-gray-500">Liman21</a>
      </div>

      <nav className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-gray-500">
        <a href="#about" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">À propos</a>
        <a href="#projects" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Projets</a>
        <a href="#skills" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Compétences</a>
        <a href="#contact" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Contact</a>
      </nav>

      <button
        onClick={() => window.open('/CV_MIDJIE_LIMAN_ROMARIC.pdf', '_blank')}
        className="cursor-pointer bg-white text-sm text-gray-500 border-2 font-semibold border-black py-2 px-5 rounded-lg hover:bg-blue-50 transition"
      >
        Voir mon CV
      </button>
    </header>
  );
}