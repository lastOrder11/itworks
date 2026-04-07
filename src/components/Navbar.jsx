import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// La liste de tous tes raccourcis
const navLinks = [
  { id: "about", title: "À propos" },
  { id: "tech", title: "Compétences" },
  { id: "projects", title: "Projets" },
  { id: "hobby", title: "Passions" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false); // Gère l'ouverture du menu mobile

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary sm:px-16 px-6 shadow-md shadow-primary/50">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Le Logo / Ton Nom */}
        <Link 
          to="/" 
          onClick={() => { setActive(""); window.scrollTo(0, 0); }} 
          className="flex items-center gap-2"
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Vannel &nbsp;<span className="sm:block hidden"> | Développeur IA & Data</span>
          </p>
        </Link>

        {/* Menu classique pour ORDINATEUR */}
        <ul className="list-none hidden md:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li 
              key={nav.id} 
              className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-accent text-[15px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Menu Hamburger pour MOBILE */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <div 
            className="cursor-pointer text-white flex items-center justify-center" 
            onClick={() => setToggle(!toggle)}
          >
            {/* Icône Menu ou Croix en SVG */}
            {toggle ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </div>

          {/* Contenu du menu déroulant mobile */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl bg-tertiary border border-[#1e293b] shadow-card`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <li 
                  key={nav.id} 
                  className={`font-medium cursor-pointer text-[16px] w-full ${active === nav.title ? "text-accent" : "text-white"}`}
                  onClick={() => { setToggle(!toggle); setActive(nav.title); }}
                >
                  <a href={`#${nav.id}`} className="block w-full">{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;