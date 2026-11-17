import { ExternalLink, Sparkles } from "lucide-react";
import civicSyncImage from "../assets/projects/civicsync.png";

const projects = [
  {
    id: 1,
    title: "CivicSync",
    subtitle: "AI-Powered Civic Information Platform",

    description:
      "An AI-powered platform designed to simplify government bills and laws. I contributed to the AI/RAG system using FastAPI, FAISS, MiniLM embeddings and LLM APIs to provide contextual responses.",

    technologies: [
      "React",
      "FastAPI",
      "RAG",
      "FAISS",
      "MiniLM",
      "LLM API",
    ],

    image: civicSyncImage,

    demo: "https://civic-sync-nine.vercel.app/",

    github: null,

    featured: true,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p className="text-purple-400 font-medium mb-3">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Project
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A real-world project showcasing my experience in
            AI, RAG and full-stack development.
          </p>

        </div>


        {/* Featured Project */}
        {projects.map((project) => (

          <div
            key={project.id}
            className="max-w-6xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition duration-500"
          >

            <div className="grid lg:grid-cols-2">

              {/* Image */}
              <div className="h-72 lg:h-[430px] overflow-hidden bg-slate-800">

                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />

              </div>


              {/* Content */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">

                <div className="inline-flex items-center gap-2 text-purple-400 text-sm mb-5">
                  <Sparkles size={17} />
                  Featured Project
                </div>


                <h3 className="text-3xl md:text-4xl font-bold">
                  {project.title}
                </h3>


                <p className="text-purple-400 mt-2">
                  {project.subtitle}
                </p>


                <p className="text-slate-400 leading-relaxed mt-6">
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/10"
                    >
                      {technology}
                    </span>

                  ))}

                </div>


                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-medium"
                    >
                      Live Demo
                      <ExternalLink size={17} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-purple-500 transition font-medium"
                    >
                      GitHub
                      <Github size={17} />
                    </a>
                  )}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;