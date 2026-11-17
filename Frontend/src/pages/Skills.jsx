import {
  Code2,
  Palette,
  Braces,
  Atom,
  Server,
  Database,
  Globe,
  Zap,
  Brain,
  Search,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 size={28} />,
    skills: [
      { name: "HTML", icon: <Globe size={18} /> },
      { name: "CSS", icon: <Palette size={18} /> },
      { name: "JavaScript", icon: <Braces size={18} /> },
      { name: "React", icon: <Atom size={18} /> },
      { name: "Tailwind CSS", icon: <Palette size={18} /> },
    ],
  },

  {
    title: "Backend",
    icon: <Server size={28} />,
    skills: [
      { name: "Python", icon: <Code2 size={18} /> },
      { name: "Node.js", icon: <Server size={18} /> },
      { name: "Express.js", icon: <Zap size={18} /> },
      { name: "FastAPI", icon: <Zap size={18} /> },
      { name: "REST APIs", icon: <Globe size={18} /> },
      { name: "MongoDB", icon: <Database size={18} /> },
      
      { name: "JAVA with DSA ", icon: <Server size={18} /> },
    ],
  },

  {
    title: "AI & RAG",
    icon: <Brain size={28} />,
    skills: [
      { name: "RAG", icon: <Brain size={18} /> },
      { name: "FAISS", icon: <Search size={18} /> },
      { name: "MiniLM", icon: <Sparkles size={18} /> },
      { name: "Embeddings", icon: <Brain size={18} /> },
      { name: "LLM APIs", icon: <Sparkles size={18} /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12 bg-slate-950">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p className="text-purple-400 font-medium mb-3">
            MY SKILLS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I Work With
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A combination of frontend, backend and AI technologies
            for building complete digital products.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-7">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="group p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:-translate-y-1 transition duration-300"
            >

              <div className="flex items-center gap-4 mb-7">

                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {category.title}
                </h3>

              </div>


              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-purple-400 hover:border-purple-500/50 transition"
                  >
                    {skill.icon}
                    {skill.name}
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;