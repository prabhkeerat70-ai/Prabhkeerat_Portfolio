import {
  Code2,
  Smartphone,
  Server,
  Brain,
  Database,
  Bug,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={26} />,
    title: "React Development",
    description:
      "Modern and responsive React websites and web applications with clean, reusable components.",
  },

  {
    icon: <Smartphone size={26} />,
    title: "Responsive Websites",
    description:
      "Mobile-friendly websites that provide a smooth experience across desktop, tablet and mobile.",
  },

  {
    icon: <Server size={26} />,
    title: "Backend & APIs",
    description:
      "REST APIs and backend services using Node.js, Express.js and FastAPI.",
  },

  {
    icon: <Brain size={26} />,
    title: "AI & RAG Applications",
    description:
      "AI-powered applications using RAG, vector search, embeddings and LLM APIs.",
  },

  {
    icon: <Database size={26} />,
    title: "Database Integration",
    description:
      "Application integration with databases and backend data services.",
  },

  {
    icon: <Bug size={26} />,
    title: "Bug Fixing",
    description:
      "Debugging and fixing React, JavaScript, API integration and frontend issues.",
  },
];

function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-12 bg-slate-950">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p className="text-purple-400 font-medium mb-3">
            SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            How I Can Help
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Practical development services for businesses,
            startups and individuals.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => (

            <div
              key={service.title}
              className="group p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:-translate-y-1 transition duration-300"
            >

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mt-6">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mt-3">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;