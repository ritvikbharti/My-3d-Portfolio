import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

// Add your platforms and profile links here
const codingProfiles = [
  {
    name: "LeetCode",
    icon: "/leetcode.png", // Put icons in /public or use URLs
    link: "https://leetcode.com/ritvikbharti_01",
    bgColor: "bg-yellow-100",
  },
  {
    name: "Codechef",
    icon: "/codechef.png",
    link: "https://codeforces.com/profile/ritvik_bharti",
    bgColor: "bg-blue-100",
  },
  {
    name: "GitHub",
    icon: "/github.png",
    link: "https://github.com/ritvikbharti",
    bgColor: "bg-gray-200",
  },
  {
    name: "HackerRank",
    icon: "/hackerrank.png",
    link: "https://www.hackerrank.com/ritvik_bharti",
    bgColor: "bg-green-100",
  },
];

const ProfileCard = ({ index, name, icon, link, bgColor }) => (
  <motion.a
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-full sm:w-[220px] p-5 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 cursor-pointer ${bgColor}`}
  >
    <div className="flex items-center gap-4">
      <img src={icon} alt={name} className="w-10 h-10 object-contain" />
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-xs text-gray-600">View Profile</p>
      </div>
    </div>
  </motion.a>
);

const CodingProfiles = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Heading */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>my online presence</p>
          <h2 className={styles.sectionHeadText}>Coding Profiles</h2>
        </motion.div>
      </div>

      {/* Profile cards */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-6`}>
        {codingProfiles.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(CodingProfiles, "profiles");
