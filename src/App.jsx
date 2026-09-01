import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "dark bg-dark text-white" : "bg-white text-gray-900"
      }`}
    >
      <Cursor darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Certificates darkMode={darkMode} setSelectedCert={setSelectedCert} />
      <Contact darkMode={darkMode} />
      {/* <Footer darkMode={darkMode} /> */}

      {/* Certificate Modal - Global */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop - di belakang navbar tapi di depan content lain */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
              style={{ pointerEvents: 'auto' }}
            />

            {/* Modal - paling depan (z-40), di atas navbar (z-50) dan backdrop (z-30) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed m-10 inset-0 flex items-center justify-center p-2 sm:p-4"
              style={{ zIndex: 40, pointerEvents: 'auto' }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setSelectedCert(null);
                }
              }}
            >
              <motion.div
                className={`relative w-auto rounded-sm overflow-hidden shadow-2xl ${
                  darkMode ? "bg-slate-900" : "bg-white"
                }`}
              >
                {/* Close Button - Top Right Corner */}
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCert(null)}
                  className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-lg transition-all z-20 ${
                    darkMode
                      ? "bg-red-500/40 hover:bg-red-500/60 text-red-300 backdrop-blur"
                      : "bg-red-200/60 hover:bg-red-300 text-red-700 backdrop-blur"
                  }`}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Modal Image Container - Full Size, No Padding */}
                <div className="relative flex items-center justify-center max-w-full max-h-[70vh]">
                  {selectedCert.image ? (
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="block h-full w-full max-w-full max-h-[70vh] object-contain"
                    />
                  ) : (
                    <Award className="w-24 h-24 text-purple-400/50" />
                  )}
                </div>

                {/* Modal Content */}
                <div className="p-6 m-10 sm:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`p-10 rounded-xl backdrop-blur shrink-0 ${
                        darkMode
                          ? "bg-linear-to-br from-purple-500/30 to-pink-500/20 text-purple-300"
                          : "bg-linear-to-br from-purple-100 to-pink-100 text-purple-600"
                      }`}
                    >
                      <Award className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {selectedCert.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base font-semibold ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Published by <span className="text-purple-600 font-bold">{selectedCert.issuer}</span>
                      </p>
                    </div>
                  </div>
                  {/* View Credential Button */}
                  <motion.a
                    href={selectedCert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-block rounded p-10 m-10 w-fit text-sm sm:text-base font-bold px-6 sm:px-8 transition-all ${
                      darkMode
                        ? "bg-linear-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-600/50"
                        : "bg-linear-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50"
                    }`}
                  >
                    View Credential
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
