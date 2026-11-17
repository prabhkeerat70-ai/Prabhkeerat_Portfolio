import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-28 pb-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="reveal">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
              <Sparkles size={16} />

              <span>
                AI & RAG Developer
              </span>
            </div>


            {/* Greeting */}
            <p className="text-slate-400 text-lg mb-4">
              Hello, I'm Prabhkeerat 👋
            </p>


            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">

              Full-Stack

              <span className="block text-purple-500 mt-2">
                AI & RAG Developer
              </span>

            </h1>


            {/* Description */}
            <p className="mt-7 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
              I build modern web applications and AI-powered
              solutions using React, FastAPI, RAG, vector search,
              embeddings and LLM APIs.
            </p>


            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">

              {/* View Projects */}
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-medium"
              >
                View My Work

                <ArrowRight size={18} />
              </Link>


              {/* Hire Me */}
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-purple-500 hover:bg-purple-500/5 transition font-medium"
              >
                Hire Me
              </Link>

            </div>


            {/* Social Links */}
            <div className="flex items-center gap-6 mt-9">

              {/* GitHub */}
              <a
                href="https://github.com/prabhkeerat70-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition"
              >
                GitHub
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/prabhkeerat-toor-6a7156413/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition"
              >
                LinkedIn
              </a>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="hidden lg:flex justify-center reveal">

            <div className="relative w-[380px] h-[380px] float">

              {/* Outer Circle */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  border border-purple-500/20
                  shadow-[0_0_100px_rgba(124,58,237,0.15)]
                "
              />


              {/* Inner Circle */}
              <div
                className="
                  absolute inset-10
                  rounded-full
                  bg-purple-500/5
                  border border-purple-500/20
                  flex items-center justify-center
                "
              >

                <div className="text-center">

                  {/* Code Symbol */}
                  <div className="text-7xl font-bold text-purple-400">
                    {"</>"}
                  </div>


                  {/* Title */}
                  <p className="text-xl font-semibold mt-5">
                    AI + RAG
                  </p>


                  {/* Subtitle */}
                  <p className="text-slate-400 mt-2">
                    Full-Stack Development
                  </p>

                </div>

              </div>


              {/* ================= FLOATING TECH LABELS ================= */}

              {/* React */}
              <div
                className="
                  absolute
                  -top-2
                  right-8
                  px-4
                  py-2.5
                  rounded-xl
                  bg-slate-900
                  border border-slate-700
                  shadow-xl
                "
              >
                React
              </div>


              {/* FastAPI */}
              <div
                className="
                  absolute
                  top-28
                  -right-12
                  px-4
                  py-2.5
                  rounded-xl
                  bg-slate-900
                  border border-slate-700
                  shadow-xl
                "
              >
                FastAPI
              </div>


              {/* FAISS */}
              <div
                className="
                  absolute
                  bottom-10
                  -left-12
                  px-4
                  py-2.5
                  rounded-xl
                  bg-slate-900
                  border border-slate-700
                  shadow-xl
                "
              >
                FAISS
              </div>


              {/* LLM */}
              <div
                className="
                  absolute
                  -bottom-3
                  right-16
                  px-4
                  py-2.5
                  rounded-xl
                  bg-slate-900
                  border border-slate-700
                  shadow-xl
                "
              >
                LLM APIs
              </div>


              {/* RAG */}
              <div
                className="
                  absolute
                  top-20
                  left-0
                  px-4
                  py-2.5
                  rounded-xl
                  bg-slate-900
                  border border-slate-700
                  shadow-xl
                "
              >
                RAG
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;