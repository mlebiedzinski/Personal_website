/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export const TableOfContents = ({ sections, heroRef }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      if (heroRef?.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setIsSticky(window.scrollY > heroBottom);
      }

      // Find the active section based on scroll position
      // Use the same offset as scrollToSection (100px) to match click navigation exactly
      const scrollOffset = 100; // Same offset used in scrollToSection

      // Filter out hero section
      const nonHeroSections = sections.filter(s => s.id !== 'hero');

      // Find the section whose top is closest to the scroll offset position
      // This matches where the page navigates to when clicking a contents option
      let activeId = nonHeroSections.length > 0 ? nonHeroSections[0].id : '';
      let minDistance = Infinity;

      for (let i = 0; i < nonHeroSections.length; i++) {
        const section = document.getElementById(nonHeroSections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distanceFromTarget = Math.abs(rect.top - scrollOffset);
          
          // Check if this section is at or past the target position
          // and is the closest one (within 50px tolerance)
          if (rect.top <= scrollOffset + 50 && distanceFromTarget < minDistance) {
            minDistance = distanceFromTarget;
            activeId = nonHeroSections[i].id;
          }
        }
      }

      setActiveSection(activeId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, heroRef]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Filter out hero section from display
  const displaySections = sections.filter(s => s.id !== 'hero');

  return (
    <div className={`${isSticky ? 'fixed' : 'absolute'} h-screen overflow-y-auto bg-white z-10 border-r border-gray-200 hidden md:block`} style={{ width: '220px', fontFamily: "'Abhaya Libre', serif", left: 'clamp(1.25rem, 2.5vw, 2rem)', top: isSticky ? 'clamp(2rem, 4vw, 3rem)' : '0' }}>
      <div className="pt-6 pb-6 pl-6 pr-3">
        {/* Table of Contents */}
        <div>
          <h2 className="font-abhaya font-bold text-lg mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>CONTENTS</h2>
          <ul className="space-y-2">
            {displaySections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-2 text-left w-full py-1 transition-colors ${
                      isActive
                        ? 'font-abhaya font-bold text-slate-green'
                        : 'font-abhaya text-slate-green/70 hover:text-slate-green'
                    }`}
                    style={{ fontFamily: "'Abhaya Libre', serif" }}
                  >
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-yellow flex-shrink-0"></div>
                    )}
                    {!isActive && <div className="w-2 h-2 flex-shrink-0"></div>}
                    <span style={{ fontFamily: "'Abhaya Libre', serif" }}>{section.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

