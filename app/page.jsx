import Hero from '../components/Hero.jsx';
import Socials from '../components/Socials.jsx';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero/>
      <Socials/>
    </div>
  );
}