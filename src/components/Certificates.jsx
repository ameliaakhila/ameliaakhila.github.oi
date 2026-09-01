import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES } from "../constants/data.jsx";
import { ChevronDown, Award } from "lucide-react";
import { useState } from "react";

export default function Certificates({ darkMode, setSelectedCert }) {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? CERTIFICATES : CERTIFICATES.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="certificates"
      className={`certificates flex items-center justify-center py-20 relative overflow-hidden ${
        darkMode
          ? "bg-linear-to-br from-slate-900 via-purple-900/30 to-slate-900"
          : "bg-linear-to-br from-gray-50 via-purple-50 to-gray-50"
      }`}
      data-aos="fade-up"
    >
      {/* Animated Background Elements */}
      {darkMode && (
        <>
          <motion.div
            animate={{ x: [0, 80, 0], y: [0, 120, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, -120, 0] }}
            transition={{ duration: 22, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r ${
              darkMode
                ? "from-purple-400 to-pink-400"
                : "from-purple-600 to-pink-600"
            }`}
          >
            Certifications & Achievements
          </h2>
          <p
            className={`certificates text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Proof of my dedication to continuous learning and professional growth in technology.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          key={showAll}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                exit="exit"
                className={`rounded-2xl backdrop-blur-lg border transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden group ${
                  darkMode
                    ? "bg-linear-to-br from-slate-800/70 to-purple-900/50 border-purple-800/20 hover:border-purple-600/50"
                    : "bg-linear-to-br from-white/70 to-purple-50/50 border-purple-200/30 hover:border-purple-400/50"
                }`}
              >
                {/* Certificate Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-40 bg-linear-to-br from-purple-500/30 to-pink-500/30 cursor-pointer overflow-hidden"
                >
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Award className="w-16 h-16 text-purple-400/50" />
                    </div>
                  )}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-sm">View Full</span>
                  </motion.div>
                </motion.div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`p-2 rounded-lg backdrop-blur ${
                        darkMode
                          ? "bg-linear-to-br from-purple-500/30 to-pink-500/20 text-purple-300"
                          : "bg-linear-to-br from-purple-100 to-pink-100 text-purple-600"
                      }`}
                    >
                      <Award className="w-5 h-5" />
                    </motion.div>
                    <div className="flex-1">
                      <h3
                        className={`font-bold text-base mb-1 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {cert.title}
                      </h3>
                      <p
                        className={`p-10 text-xs font-semibold ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Published by a <span className="text-purple-600 fw-bolder">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>

                  <motion.a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className={`mt-4 p-5 block text-center text-xs font-bold py-2 rounded-lg transition-all ${
                      darkMode
                        ? "bg-purple-600/50 text-white hover:bg-purple-600/70"
                        : "bg-purple-500/30 text-purple-700 hover:bg-purple-500/50"
                    }`}
                  >
                    View Credential
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>



        {/* See More Button */}
        {CERTIFICATES.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-20 text-center"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-5 rounded-xl font-bold flex items-center gap-3 mx-auto transition-all backdrop-blur border ${
                darkMode
                  ? "bg-linear-to-r from-purple-600/30 to-pink-600/30 text-purple-300 hover:from-purple-600/50 hover:to-pink-600/50 border-purple-500/30 shadow-lg hover:shadow-purple-500/20"
                  : "bg-linear-to-r from-purple-500/20 to-pink-500/20 text-purple-700 hover:from-purple-500/40 hover:to-pink-500/40 border-purple-400/30 shadow-lg hover:shadow-purple-400/20"
              }`}
            >
              {showAll ? "Show Less" : "See All Certificates"}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {/* Certificate Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`text-center mt-8 font-semibold ${
            darkMode ? "bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400" : "text-purple-700"
          }`}
        >
          <p className="text-sm">
            Displaying {displayedCerts.length} of {CERTIFICATES.length}{" "}
            certifications
          </p>
        </motion.div>
      </div>
    </section>
  );
}
