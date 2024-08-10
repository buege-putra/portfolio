import Hero from '../components/Hero.jsx';
import Socials from '../components/Socials.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero/>
      <Socials/>
      <Skills/>
      <Projects/>
    </div>
  );
}