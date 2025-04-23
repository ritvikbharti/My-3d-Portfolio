import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Resume = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Header Section */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>learn more about me</p>
          <h2 className={styles.sectionHeadText}>My Resume</h2>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <div className="bg-black-200 mt-4 text-white rounded-xl p-6 shadow-lg mb-6 text-sm sm:text-base leading-relaxed">
          <p>
            I'm a passionate developer with experience in full-stack development, problem solving, and AI model training. 
            Click the button below to download my resume and know more about my journey.
          </p>
        </div>

        <div className="flex justify-center sm:justify-start">
          <a 
            href="/Ritvik_Resume.pdf" 
            download="Ritvik_Bharti_Resume.pdf"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            ⬇️ Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
