const infos = [
    { label: "Nom complet",value: "MIDJIE LIMAN ROMARIC"},
    { label: "Localisation" , value: "Lomé, Togo"},
    {label: "Email", value: "limanmidjie@gmail.com"},
    { label: "Langues", value: "Français (natif), Anglais (B1)" },
    { label: "Études", value: "Master IA & Big Data — École Polytechnique de Lomé" },

]
export default function About() {
    return(
        <section id="about" className="px-16 py-8 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/creative-office-desk-light-colours.jpg')" }}>
            <div className="flex flex-col md:flex-row items-center gap-12 px-8 md:px=16 py-16 md:py-24 ">
                
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl font-bold mb-4 text-black">À propos de moi</h1>
                <h2 className="text-3xl font-semibold mb-4 text-gray-700">Data Science - Développement Web</h2>
                <p className="text-xl text-gray-600 max-w-2xl">
                    Développeur Junior spécialisé en  Data Science et en Web et , avec une première expérience en entreprise et
plusieurs projets personnels déployés. Actuellement en Master IA & Big Data à l'École Polytechnique de Lomé, je
cherche à contribuer à des projets concrets alliant développement web et intelligence artificielle.

                </p>
                <div className=" flex-1 py-12  md:text-left max-w-2xl">
      {infos.map((item, index) => (
        <div
          key={index}
          className="flex justify-between border-b border-gray-300 py-4"
        >
          <span className="font-semibold text-gray-500 uppercase text-sm">
            {item.label}
          </span>
          <span className="text-gray-900 text-lg">{item.value}</span>
        </div>
      ))}
    </div>
              </div>
              
            </div>
            </section>
    )
}