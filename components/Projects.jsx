import Image from 'next/image';
import Link from 'next/link';
import { skillsList } from './Skills';

import linkArrow from '../assets/projectsImage/linkArrow.png';

import tubesDaspro from "../assets/projectsImage/tubesDaspro.png";
import tubesPengkom from "../assets/projectsImage/tubesPengkom.png";

const projects = [
  { title: "Tubes IF1210 Dasar Pemrograman",
    desc: "A bootleg Pokemon CLI game.",
    picture: tubesDaspro,
    stacks: ["Python"],
    link: "https://github.com/Labpro-21/if1210-2024-tubes-k07-b"},
  { title: "Tubes KU1102 Pengenalan Komputasi: Taskmaster",
    desc: "A CLI to-do list app.",
    picture: tubesPengkom,
    stacks: ["Python"],
    link: "https://drive.google.com/file/d/1LVNiFqZvpdX3sv-iQWWBxJwL7T7qX-co/view?usp=sharing"},
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="flex flex-wrap justify-center items-center">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col p-4 outline outline-1 outline-gray-300 rounded-lg m-2 w-[22rem] elevated-hover">
            <Image src={project.picture} alt={"Screenshot "+project.title} className="w-80 mb-2 rounded-md self-center" />
            
            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p>{project.desc}</p>

              <div className="flex w-full mt-2 justify-between items-center">
                <div className="flex">
                {project.stacks.map((stackName, index) => {
                  const stacks = skillsList.find(skill => skill.name === stackName);
                  return stacks ? (
                    <Image key={index} src={stacks.icon} alt={stacks.name} className="w-4 h-4 mr-2" />
                  ) : null;
                })}
                </div>

                <Link href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex bg-gray-100 p-1.5 rounded-full hover:bg-gray-200">
                  <Image src={linkArrow} alt="Link" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;