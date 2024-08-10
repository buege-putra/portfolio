import Image from 'next/image';
import Link from 'next/link';

import instaIcon from '../assets/socialIcons/instagram.png';
import linkedinIcon from '../assets/socialIcons/linkedin.png';
import githubIcon from '../assets/socialIcons/github.png';
import emailIcon from '../assets/socialIcons/email.png';

const Socials = () => {
  const socials = [
    { icon: instaIcon, name: "Instagram", handle: '@buege.putra', link: 'https://instagram.com/buege.putra' },
    { icon: linkedinIcon, name: "LinkedIn", handle: '/in/buege-putra', link: 'https://linked.in/in/buege-putra' },
    { icon: githubIcon, name: "GitHub", handle: 'buege-putra', link: 'https://github.com/buege-putra' },
    { icon: emailIcon, name: "Email", handle: 'buege.putra@gmail.com', link: 'mailto:buege.putra@gmail.com' },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-4 mx-2">
      {socials.map((social, index) => (
        <div key={index}>
          <Link href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center m-2 p-1 h-6 outline outline-1 outline-gray-400 rounded-[4rem] hover:bg-gray-100">
            <Image src={social.icon} alt={social.name} className="w-4 h-4" />
            <span className="px-1 text-sm">{social.handle}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Socials;