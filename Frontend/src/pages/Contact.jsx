import { useState } from "react";
import { Mail, ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    const data = new FormData();

    data.append("access_key", "e969bc82-91a6-48a8-af41-dbaba8afd5f4");

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    // Subject of the email you receive
    data.append(
      "subject",
      `New Portfolio Contact from ${formData.name}`
    );

    // Helps Web3Forms identify the sender
    data.append("from_name", "Prabhkeerat Portfolio");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // Remove success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);

      } else {
        setStatus("error");
      }

    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-12"
    >

      <div className="max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-14">

          <p className="text-purple-400 font-medium mb-3">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have an idea or project in mind? Let's discuss how
            I can help turn it into a working product.
          </p>

        </div>


        {/* ================= CONTENT ================= */}

        <div className="grid md:grid-cols-2 gap-8">


          {/* ================= LEFT SIDE ================= */}

          <div className="p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800">

            <h3 className="text-2xl font-semibold">
              Get in touch
            </h3>

            <p className="text-slate-400 leading-relaxed mt-4">
              I'm available for freelance web development,
              backend development and AI/RAG projects.
            </p>


            <div className="space-y-6 mt-10">


              {/* EMAIL */}

              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="flex items-center gap-4 group"
              >

                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Mail size={20} />
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="text-slate-200 group-hover:text-purple-400 transition">
                    prabhkeerat70@gmail.com
                  </p>

                </div>

              </a>


              {/* GITHUB */}

              <a
                href="https://github.com/prabhkeerat70-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >

                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <span className="font-bold text-sm">
                    GH
                  </span>
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    GitHub
                  </p>

                  <p className="text-slate-200 group-hover:text-purple-400 transition">
                    GitHub Profile
                  </p>

                </div>

              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/prabhkeerat-toor-6a7156413/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >

                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <span className="font-bold text-sm">
                    in
                  </span>
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    LinkedIn
                  </p>

                  <p className="text-slate-200 group-hover:text-purple-400 transition">
                    LinkedIn Profile
                  </p>

                </div>

              </a>

            </div>

          </div>


          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-5"
          >

            {/* NAME */}

            <div>

              <label className="block text-sm text-slate-400 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-purple-500 transition"
              />

            </div>
            {/* EMAIL */}

            <div>

              <label className="block text-sm text-slate-400 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-purple-500 transition"
              />

            </div>


            {/* MESSAGE */}

            <div>

              <label className="block text-sm text-slate-400 mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 outline-none resize-none focus:border-purple-500 transition"
              />

            </div>


            {/* ================= STATUS ================= */}

            {status === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                <CheckCircle size={20} />

                <p>
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}


            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                <AlertCircle size={20} />

                <p>
                  Something went wrong. Please try again.
                </p>
              </div>
            )}


            {/* ================= BUTTON ================= */}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition font-medium"
            >

              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <ArrowUpRight size={18} />
                </>
              )}

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;