import { motion } from "framer-motion";
import { SKILLS } from "../constants/data.jsx";

export default function Skills({ darkMode }) {

  const getLevelColor = (level) => {
    switch (level) {
      case "advanced":
        return darkMode
          ? "bg-emerald-500/20 text-emerald-400"
          : "bg-emerald-100 text-emerald-700";
      case "intermediate":
        return darkMode
          ? "bg-blue-500/20 text-blue-400"
          : "bg-blue-100 text-blue-700";
      case "beginner":
        return darkMode
          ? "bg-amber-500/20 text-amber-400"
          : "bg-amber-100 text-amber-700";
      default:
        return "";
    }
  };

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case "advanced":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-400";
      case "intermediate":
        return "bg-blue-500/20 text-blue-400 border-blue-400";
      case "beginner":
        return "bg-amber-500/20 text-amber-400 border-amber-400";
      default:
        return "";
    }
  };

  const groupedSkills = {
    frontend: SKILLS.filter((s) => s.category === "frontend"),
    backend: SKILLS.filter((s) => s.category === "backend"),
    ai: SKILLS.filter((s) => s.category === "ai"),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className={`skills min-h-screen w-full flex items-center justify-center relative overflow-hidden py-24 ${
        darkMode 
          ? "bg-linear-to-br from-slate-950 via-slate-900 to-slate-900" 
          : "bg-linear-to-br from-emerald-50 via-green-50 to-cyan-50"
      }`}
      data-aos="fade-up"
    >
      {/* Animated Background Gradients */}
      {darkMode && (
        <>
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"
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
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-green-300/30 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 relative z-10 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
          >
            Technical Skills
          </h2>
          <p
            className={`skill text-base sm:text-lg ${
              darkMode ? "text-gray-300" : "text-slate-700"
            }`}
          >
            Expertise across full stack development and AI engineering
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`skill rounded-2xl border-2 p-5 sm:p-7 backdrop-blur-md transition-all duration-300 ${
                darkMode
                  ? "border-slate-700/50 hover:border-emerald-600/40"
                  : "border-slate-200/60 hover:border-emerald-400/60"
              }`}
            >
              <h3
                className={`skills text-lg md:text-xl font-bold mb-5 capitalize text-center ${
                  darkMode ? "text-white" : "text-slate-950"
                }`}
              >
                {category === "ai" ? "AI Engineering & Other Tools" : `${category} Development`}
              </h3>

              <motion.div
                className="grid p-10 grid-cols-3 gap-3 sm:gap-4"
                variants={containerVariants}
              >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1 }}
                  className={`p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-2 ${
                    darkMode
                      ? "hover:bg-slate-700/30"
                      : "hover:bg-white/40"
                  }`}
                >
                  {/* Logo/Image Container */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl backdrop-blur flex items-center justify-center overflow-hidden`}>
                    {skill.image ? (
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        loading="lazy"
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                    )}
                  </div>

                  {/* Skill Name */}
                  <h4
                    className={`skill-font text-xs sm:text-sm font-bold text-center ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {skill.name}
                  </h4>

                  {/* Level Badge */}
                  {/* <span
                    className={`skill-font skill-badge text-xs sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border backdrop-blur ${getLevelBadgeColor(
                      skill.level
                    )}`}
                  >
                    {skill.level.charAt(0).toUpperCase() +
                      skill.level.slice(1)}
                  </span> */}
                </motion.div>
              ))}
            </motion.div>
            </motion.div>
          ))}
        </div>

              {/* Proficiency Legend */}
        {/* <div className="grid m-20 grid-cols-3 lg:gap-4 mt-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-emerald-500"></div>
                <span
                  className={`text-xs sm:text-sm font-semibold ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  }`}
                >
                  Advanced
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-blue-500"></div>
                <span
                  className={`text-xs sm:text-sm font-semibold ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  }`}
                >
                  Intermediate
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-amber-500"></div>
                <span
                  className={`text-xs sm:text-sm font-semibold ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  }`}
                >
                  Beginner
                </span>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  );
}
