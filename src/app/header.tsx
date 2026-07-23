"use client";
export default function Header() {
  return (
    <header className="flex justify-between items-center px-16 py-8 bg-white shadow-sm">
      <div className="flex items-center">
       <a href="#about" className="text-2xl fontbold text-gray-500">Liman21</a>
      </div>

      <nav className="flex items-center gap-12 text-xl font-semibold uppercase tracking-wide text-gray-500">
        <a href="#about" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full ">À propos</a>
        <a href="#projects" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Projets</a>
        <a href="#skills" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Compétences</a>
        <a href="#contact" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Contact</a>
      </nav>

      <button
        onClick={() => window.open('\MIDJIE_LIMAN_ROMARIC_CVV.pdf.pdf', '_blank')}
        className=" cursor-pointer bg-white text-xl text-gray-500 border-4 font-semibold border-black py-3 px-7 rounded-lg hover:bg-blue-50 transition"
      >
        Voir mon CV
      </button>
    </header>
  );
}