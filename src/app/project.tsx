"use client";
import { useState } from "react";

const projects = [
  {
    title: "Traducteur francais ewe",
    description: "A partir d'un modele entrainer , cette application permet de traduire des phrases simples du francais vers l'ewe avec des petites erreurs du au manque de donnees",
    category: "Machine Learning",
    github: "https://github.com/Kazusha/app_traducteur_de_langue_fr_ewe",
    image: "/trad.png",
  },
  {
    title: "Plateforme Recrutement IA",
    description: "Une plateforme de recrutement utilisant l'intelligence artificielle pour analyser les CV et les lettres de motivation, offrant ainsi une présélection automatisée des candidats.",
    category: "Développement Web",
    github: "https://github.com/Kazusha/Crunch_Time_2026",
    image: "/crunch.png",
  },
  {
    title: "Historio - Gestion de Livres",
    description: "Une application web pour gérer une collection de livres, permettant aux utilisateurs d'ajouter, de modifier et de supprimer des livres, ainsi que de suivre leur lecture.",
    category: "Développement Web",
    github: "https://github.com/Kazusha/Historio",
    image: "/historio.png",
  },
  {
    title: "ROMYFOOD - Application de Livraison de Nourriture",
    description: "Une application  de prise de commande de nourriture qui permet aux utilisateurs de commander des repas auprès de restaurants locaux .",
    category: "Frontend",
    github: "https://github.com/Kazusha/ROMYFOOD",
    image: "/romyfood.png",
  },
  {
    title: "Prédiction risque de rechute sur des addictions",
    description: "Une application de prédiction du risque de rechute pour les personnes souffrant d'addictions. À but non médical.",
    category: "Machine Learning",
    github: "https://github.com/Kazusha/Data-Analyse-sur-un-dataset-simuler-sur-des-addictions",
    image: "/addiction.png",
  },
  {
    title: "Tableau de bord agriculture au Sénégal",
    description: "Un tableau de bord interactif pour visualiser les données agricoles au Sénégal, permettant aux utilisateurs d'explorer les tendances et les statistiques liées à l'agriculture.",
    category: "Data Visualisation",
    github: "",
    image: "/powerbi.png",
    pdf: "/CHALLENGE_DATASET.pdf",
  },
];

const categories = ["Tous", "Développement Web", "Frontend", "Machine Learning", "Data Visualisation"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-no-repeat bg-center px-10 py-16" style={{ backgroundImage: "url('/kkk.jpg')" }}>
      <h2 className="text-2xl font-bold mb-8 text-black">Mes projets</h2>

      <div className="cursor-pointer flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-gray-600 border-gray-300 hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="border cursor-pointer bg-white border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:border-black transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="text-xs uppercase font-semibold text-gray-400">
                {project.category}
              </span>
              <h3 className="text-lg font-bold mt-2 mb-2 text-black">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-black underline"
                  >
                    Voir sur GitHub →
                  </a>
                )}
                {project.pdf && (
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-black underline"
                  >
                    Voir le PDF →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}