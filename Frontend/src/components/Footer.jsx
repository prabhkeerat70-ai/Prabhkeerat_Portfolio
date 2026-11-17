import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="text-center md:text-left">

            <a
              href="#home"
              className="text-2xl font-bold"
            >
              Prabhkeerat
              <span className="text-purple-500">.</span>
            </a>

            <p className="text-sm text-slate-500 mt-2">
              Full-Stack AI & RAG Developer
            </p>

          </div>


          {/* Social Links */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/prabhkeerat70-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-3
                rounded-xl
                bg-slate-900
                border border-slate-800
                text-slate-400
                hover:text-white
                hover:border-purple-500
                transition
              "
            >
              GitHub
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prabhkeerat-toor-6a7156413/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-3
                rounded-xl
                bg-slate-900
                border border-slate-800
                text-slate-400
                hover:text-white
                hover:border-purple-500
                transition
              "
            >
              LinkedIn
            </a>


            {/* Back to Top */}
            <a
              href="#home"
              className="
                p-3
                rounded-xl
                bg-slate-900
                border border-slate-800
                text-slate-400
                hover:text-white
                hover:border-purple-500
                transition
              "
              aria-label="Back to top"
            >
              <ArrowUp size={19} />
            </a>

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Prabhkeerat. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;