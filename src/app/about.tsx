const infos = [
  { label: "Nom complet", value: "MIDJIE LIMAN ROMARIC" },
  { label: "Localisation", value: "Lomé, Togo" },
  { label: "Email", value: "limanmidjie@gmail.com" },
  { label: "Langues", value: "Français (natif), Anglais (B1)" },
  { label: "Études", value: "Master IA & Big Data — École Polytechnique de Lomé" },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-10 py-8 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/creative-office-desk-light-colours.jpg')" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 px-8 md:px-10 py-10 md:py-16">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold mb-3 text-black">À propos de moi</h1>
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Data Science - Développement Web</h2>
          <p className="text-sm text-gray-600 max-w-xl">
            Développeur Junior spécialisé en Data Science et en Web, avec une première expérience en entreprise et
            plusieurs projets personnels déployés. Actuellement en Master IA & Big Data à l'École Polytechnique de Lomé, je
            cherche à contribuer à des projets concrets alliant développement web et intelligence artificielle.
          </p>

          <div className="py-6 md:text-left max-w-xl">
            {infos.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-gray-300 py-3"
              >
                <span className="font-semibold text-gray-500 uppercase text-xs">
                  {item.label}
                </span>
                <span className="text-gray-900 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}