import { Brain, Code2, Server } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Heading */}
          <div className="reveal">

            <p className="text-purple-400 font-medium mb-4">
              ABOUT ME
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              I build
              <span className="text-purple-500"> AI-powered </span>
              applications that solve real problems.
            </h2>

          </div>


          {/* Content */}
          <div>

            <p className="text-slate-400 text-lg leading-relaxed">
              I'm a Full-Stack AI & RAG Developer focused on building
              modern web applications and intelligent AI solutions.
              I work with React, Tailwind CSS, Node.js, Express.js
              and FastAPI.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mt-5">
              My AI development experience includes Retrieval-Augmented
              Generation, FAISS vector search, MiniLM embeddings and
              LLM APIs. I enjoy connecting AI systems with practical
              web applications.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mt-5">
              I'm interested in freelance projects involving AI chatbots,
              RAG applications, web applications, REST APIs and custom
              AI integrations.
            </p>


            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mt-10">

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                <Brain className="text-purple-400 mb-3" size={25} />
                <h3 className="font-semibold">AI & RAG</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Intelligent applications
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                <Code2 className="text-purple-400 mb-3" size={25} />
                <h3 className="font-semibold">Frontend</h3>
                <p className="text-sm text-slate-500 mt-1">
                  React applications
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                <Server className="text-purple-400 mb-3" size={25} />
                <h3 className="font-semibold">Backend</h3>
                <p className="text-sm text-slate-500 mt-1">
                  APIs & services
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;