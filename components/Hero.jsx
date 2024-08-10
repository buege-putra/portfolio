import Image from 'next/image';
import photo from '../assets/photo.png';

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center border rounded-b-lg shadow-md px-2 pt-2">
      {/*<Image src={photo} alt="Photo" className="w-full max-w-sm md:pr-2 max-md:mb-2"/>*/}
      {/*on small devices, the photo is on the bottom, but on large devices, the photo is on the left*/}
      <Image src={photo} alt="Photo" className="w-full max-w-sm pr-4 max-md:hidden"/>
      <div className="relative text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2 max-md:mt-4 md:text-justify max-w-[22rem]"
          >Buege Mahara <span className="text-blue-500">Putra</span>
        </h1>
        <h3 className="text-xl font-semibold mb-2">
          Informatics Engineering<br/>
          <span className="font-extralight italic">at Bandung Institute of Technology</span>
        </h3>
        <p className="text-base text-justify max-md:text-center max-w-[22rem] max-md:mb-[-0.5rem]">
          Hello! I am a second-year student aspiring to be a full-stack developer. 
          I'm eager to take on opportunities to further develop my skills in this field and embrace new challenges.
        </p>
      </div>
      <Image src={photo} alt="Photo" className="w-full max-w-sm md:hidden"/>
    </div>
  );
};

export default Hero;
