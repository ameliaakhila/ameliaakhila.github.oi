import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`min-h-screen hero w-full flex items-center justify-center relative overflow-hidden ${
        darkMode 
          ? "bg-linear-to-br from-slate-950 via-slate-900 to-slate-900" 
          : "bg-linear-to-br from-blue-50 via-cyan-50 to-blue-100"
      } pt-20`}
      data-aos="fade-up"
    >
      {/* Animated Background Gradients */}
      {darkMode && (
        <>
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-50 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
            transition={{ duration: 25, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
          />
        </>
      )}

      {!darkMode && (
        <>
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl w-full relative z-10 py-16 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[calc(100vh-140px)]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`padding-badge my-3 inline-flex items-center gap-2 rounded-full backdrop-blur border w-fit text-xs sm:text-sm font-bold ${
                darkMode
                  ? "bg-blue-500/15 border-blue-500/40 text-blue-300 shadow-lg shadow-blue-500/10"
                  : "bg-blue-100/70 border-blue-300/60 text-blue-700 shadow-lg shadow-blue-300/20"
              }`}
            >
              <Code2 className="w-5 h-5" />
              <span>Software Enginer</span>
            </motion.div>

            {/* Main Headline */}
            <div className="flex flex-col gap-3 sm:gap-5">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className={`title-hero text-4xl sm:text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${
                  darkMode ? "text-white" : "text-slate-950"
                }`}
              >
                Amelia
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="title-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                Akhila Aqna
              </motion.h2>
            </div>

            {/* Subheading with Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-col gap-5 pt-2 pr-4 sm:pr-6 lg:pr-8"
            >
              <p
                className={`text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed font-semibold ${
                  darkMode ? "text-gray-200" : "text-slate-700"
                }`}
              >
                Software engineer in building modern web using{" "}
                <span className={`font-black ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                  Laravel,
                </span>{" "}
                <span className={`font-black ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                  React.js,
                </span>
                {" "}and{" "}
                <span className={`font-black ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                  with an interest in AI.
                </span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 md:gap-6 pt-8 sm:pt-6"
            >
              <motion.a
                href="/cv/CV-Amelia-Akhila-Aqna.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-primary flex items-center justify-center gap-2 w-full sm:w-auto ${
                  darkMode ? "shadow-blue-500/30" : "shadow-blue-400/30"
                }`}
              >
                See My CV <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-secondary w-full sm:w-auto text-center ${
                  darkMode 
                    ? "border-cyan-500/60 text-cyan-400 hover:text-white" 
                    : "border-blue-600 text-blue-600"
                }`}
              >
                Say Hello
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center relative h-96"
          >
            {/* Rotating Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className={`absolute w-80 h-80 rounded-full border-2 ${
                darkMode ? "border-blue-500/25" : "border-blue-400/25"
              }`}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className={`absolute w-96 h-96 rounded-full border-2 ${
                darkMode ? "border-cyan-500/20" : "border-cyan-400/20"
              }`}
            />

            {/* Glass Card Container */}
            <motion.div
              whileHover={{ y: -12 }}
              className={`relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 backdrop-blur card-premium ${
                darkMode
                  ? "border-slate-700/50 bg-linear-to-br from-slate-800/40 to-slate-900/40 shadow-blue-500/25"
                  : "border-white/60 bg-linear-to-br from-white/40 to-blue-100/30 shadow-blue-300/30"
              }`}
            >
              {/* Animated gradient background inside card */}
              <motion.div
                animate={{ 
                  background: darkMode ? [
                    "radial-gradient(circle, rgba(200,230,255,0.8) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(165,243,252,0.8) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(200,230,255,0.8) 0%, transparent 70%)"
                  ] : [
                    "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute inset-0 z-0"
              />
              
              {/* Card Content */}
              <div className="relative w-full h-full flex items-center justify-center z-10">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-center space-y-4 flex flex-col items-center justify-center"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`w-40 h-40 flex items-center justify-center rounded-2xl `}
                  >
                    <img
                      src="/image/logo.png"
                      alt="Logo"
                      className="w-36 h-36 object-contain"
                    />
                  </motion.div>
                  <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className={`text-sm font-bold tracking-wider ${
                      darkMode ? "text-blue-400" : "text-blue-600/70"
                    }`}
                  >
                    Software Engineer
                  </motion.p>
                </motion.div>
              </div>

              {/* Floating particles effect */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.random() * 100 - 50, 0],
                    y: [0, Math.random() * 100 - 50, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 5 + i * 1, repeat: Infinity }}
                  className={`absolute w-2 h-2 rounded-full ${
                    darkMode ? "bg-blue-400" : "bg-blue-500"
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    zIndex: 10
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden */}
        {/* Removed for cleaner design */}
      </div>
    </section>
  );
}
