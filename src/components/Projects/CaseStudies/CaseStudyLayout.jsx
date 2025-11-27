import React, { useRef } from 'react';
import { TableOfContents } from './TableOfContents';
import { useNavigate } from 'react-router-dom';

export const CaseStudyLayout = ({ children, sections }) => {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Abhaya Libre', serif" }}>
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-green hover:text-blue transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-abhaya font-bold" style={{ fontFamily: "'Abhaya Libre', serif" }}>Home</span>
        </button>
      </div>

      {/* Under Construction Message */}
      <div className="px-6 pt-2 pb-1">
        <p className="text-sm text-red pl-6" style={{ fontFamily: "'Abhaya Libre', serif" }}>
          💬 This page is slightly under construction, please excuse the incomplete appearance. I promise it'll be pretty soon :)
        </p>
      </div>

      {/* Hero Section - Full Width */}
      <div className="w-full">
        {React.Children.map(children, (child, index) => {
          if (index === 0 && React.isValidElement(child)) {
            // First child is the hero section
            return React.cloneElement(child, { ref: heroRef });
          }
          return null;
        })}
      </div>

      {/* Main Content Area with TOC and Content */}
      <div className="flex relative">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} heroRef={heroRef} />

        {/* Main Content Area */}
        <div className="flex-1 w-full" style={{ minWidth: 0, marginLeft: 'calc(220px + clamp(1rem, 2vw, 2rem))' }}>
          <div className="w-full">
            {React.Children.map(children, (child, index) => {
              if (index === 0) {
                // Skip hero section, already rendered
                return null;
              }
              return child;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

