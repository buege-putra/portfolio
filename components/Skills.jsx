import Image from 'next/image';

import python from "../assets/skillIcons/python.png";
import cpp from "../assets/skillIcons/cpp.png";
import haskell from "../assets/skillIcons/haskell.png";
import js from "../assets/skillIcons/js.png";
import html from "../assets/skillIcons/html-5.png";
import css from "../assets/skillIcons/css-3.png";
import react from "../assets/skillIcons/react.svg";

export const skillsList = [
  { name: "Python", icon: python },
  { name: "C++", icon: cpp },
  { name: "Haskell", icon: haskell},
  { name: "JavaScript", icon: js },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "React", icon: react }
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skillsList.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <Image src={skill.icon} alt={skill.name} className="w-12 h-12" />
            <span className="mt-4 text-center ">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;