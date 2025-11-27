/* eslint-disable react/prop-types */
import React from 'react';

// Hero Section Component
export const HeroSection = React.forwardRef(({ title, tagline, metadata, heroImage }, ref) => {
  return (
    <section ref={ref} id="hero" className="w-full" style={{ marginBottom: '2rem' }}>
      <div 
        className="bg-pink rounded-2xl md:rounded-3xl relative overflow-hidden" 
        style={{ 
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          marginLeft: 'clamp(1.25rem, 2.5vw, 2rem)',
          marginRight: 'clamp(1.25rem, 2.5vw, 2rem)',
          marginTop: '2rem'
        }}
      >
        {/* Small dark circular bullet point in top-left corner */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-4">
          {/* Left: Title and Metadata */}
          <div>
            <h1 className="font-abhaya font-bold text-4xl md:text-5xl mb-4 text-black" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {title}
            </h1>
            {tagline && (
              <p className="font-abhaya text-xl md:text-2xl mb-12 text-black/80" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                {tagline}
              </p>
            )}

            {metadata && (
              <div className="space-y-3" style={{ marginTop: '2rem', paddingLeft: '1rem' }}>
                {Object.entries(metadata).map(([key, value]) => (
                  <div key={key} className="font-abhaya" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                    <div className="font-bold text-black" style={{ fontFamily: "'Abhaya Libre', serif" }}>{key}</div>
                    <div className="text-black/70" style={{ fontFamily: "'Abhaya Libre', serif" }}>{value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Hero Image */}
          {heroImage && (
            <div className="rounded-lg overflow-hidden min-h-[300px] flex items-center justify-center">
              {typeof heroImage === 'string' ? (
                <img 
                  src={heroImage} 
                  alt="Hero" 
                  className="w-full h-auto object-contain"
                />
              ) : (
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center min-h-[300px] w-full">
                  <span className="text-gray-500 font-abhaya text-sm">[hero img]</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Generic Section Component
export const Section = ({ id, title, children, bgColor = 'white' }) => {
  const paddingTop = bgColor === 'gray' ? 'clamp(2.5rem, 5vw, 4rem)' : 'clamp(2rem, 4vw, 3rem)';
  const paddingBottom = bgColor === 'gray' ? 'clamp(2.5rem, 5vw, 4rem)' : 'clamp(2rem, 4vw, 3rem)';
  
  return (
    <section id={id} className={`w-full ${bgColor === 'gray' ? 'bg-gray' : 'bg-white'}`} style={{ fontFamily: "'Abhaya Libre', serif", width: '100%', marginLeft: '0', marginTop: '2rem', marginBottom: '2rem', paddingTop, paddingBottom }}>
      <div className="px-4 md:px-8 lg:px-12" style={{ paddingLeft: 'clamp(1rem, 2vw, 3rem)', paddingRight: 'clamp(1rem, 2vw, 3rem)' }}>
        <h2 className="font-abhaya font-bold text-3xl md:text-4xl mb-8 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

// Overview Section with Metadata Grid
export const OverviewSection = ({ content, metadata }) => {
  return (
    <Section id="overview" title="OVERVIEW">
      {metadata && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {Object.entries(metadata).map(([key, value]) => (
            <div key={key} className="bg-pink/30 rounded-lg p-4">
              <div className="font-abhaya font-bold text-slate-green mb-1" style={{ fontFamily: "'Abhaya Libre', serif" }}>{key}</div>
              <div className="font-abhaya text-slate-green/80" style={{ fontFamily: "'Abhaya Libre', serif" }}>{value}</div>
            </div>
          ))}
        </div>
      )}
      {content && (
        <div className="prose max-w-none">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </Section>
  );
};

// Highlights Section with Image Grid
export const HighlightsSection = ({ images = [] }) => {
  return (
    <Section id="highlights" title="HIGHLIGHTS" bgColor="white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-gray-500 font-abhaya text-sm">[highlights img{index + 1}]</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Challenge Section
export const ChallengeSection = ({ problemFraming, issues = [] }) => {
  return (
    <Section id="challenge" title="THE CHALLENGE">
      {problemFraming && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Problem Framing</h3>
          {problemFraming.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {issues.length > 0 && (
        <div>
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Pinpointing Issues</h3>
          <ul className="space-y-3">
            {issues.map((issue, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow text-xl mt-1">🌱</span>
                <span className="font-abhaya text-slate-green flex-1" style={{ fontFamily: "'Abhaya Libre', serif" }}>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
};

// Solution Section
export const SolutionSection = ({ goals, goalList = [] }) => {
  return (
    <Section id="solution" title="THE SOLUTION" bgColor="gray">
      {goals && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Our Goals</h3>
          {goals.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {goalList.length > 0 && (
        <div>
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>High Level Goals</h3>
          <ul className="space-y-3">
            {goalList.map((goal, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow text-xl mt-1">🌱</span>
                <span className="font-abhaya text-slate-green flex-1" style={{ fontFamily: "'Abhaya Libre', serif" }}>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
};

// Research Summary Section
export const ResearchSection = ({ competitiveAnalysis, userResearch, howMightWe = [] }) => {
  return (
    <Section id="research" title="RESEARCH SUMMARY">
      {competitiveAnalysis && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Competitive & Comparative Analysis</h3>
          {competitiveAnalysis.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {userResearch && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Foundational Interviews</h3>
          {userResearch.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {howMightWe.length > 0 && (
        <div>
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>How Might We...</h3>
          <ul className="space-y-3">
            {howMightWe.map((question, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow text-xl mt-1">🌱</span>
                <span className="font-abhaya text-slate-green flex-1 italic" style={{ fontFamily: "'Abhaya Libre', serif" }}>{question}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
};

// Design Process Section
export const DesignProcessSection = ({ tools, conceptCards, iterations, focus }) => {
  return (
    <Section id="design-process" title="DESIGN PROCESS" bgColor="gray">
      {tools && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Tools</h3>
          <p className="font-abhaya text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>{tools}</p>
        </div>
      )}

      {conceptCards && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Concept Cards & Visual Sketches</h3>
          {conceptCards.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {iterations && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Iteration & Feedback</h3>
          {iterations.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {focus && (
        <div>
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Focus on Key Experiences</h3>
          {focus.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </Section>
  );
};

// Visual Design Section
export const VisualDesignSection = ({ moodBoard, designSystem }) => {
  return (
    <Section id="visual-design" title="VISUAL DESIGN">
      {moodBoard && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Mood Board</h3>
          {moodBoard.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {designSystem && (
        <div>
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Design System</h3>
          {designSystem.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </Section>
  );
};

// Key Screens Section
export const KeyScreensSection = ({ screens = [] }) => {
  return (
    <Section id="key-screens" title="KEY SCREENS" bgColor="white">
      <div className="space-y-12">
        {screens.map((screen, index) => (
          <div key={index}>
            <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>{screen.title}</h3>
            {screen.description && (
              <p className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>{screen.description}</p>
            )}
            {screen.capabilities && screen.capabilities.length > 0 && (
              <div className="mb-4">
                <h4 className="font-abhaya font-bold text-lg mb-2 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Key capabilities:</h4>
                <ul className="space-y-2">
                  {screen.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start gap-3">
                      <span className="text-yellow text-xl mt-1">🌱</span>
                      <span className="font-abhaya text-slate-green flex-1" style={{ fontFamily: "'Abhaya Libre', serif" }}>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {screen.imagePlaceholder && (
              <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center mt-4 mb-8">
                <span className="text-gray-500 font-abhaya">[IMAGE: {screen.imagePlaceholder}]</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

// Implementation Section
export const ImplementationSection = ({ content }) => {
  return (
    <Section id="implementation" title="IMPLEMENTATION">
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
          {paragraph}
        </p>
      ))}
    </Section>
  );
};

// Results/Marketing Section
export const ResultsSection = ({ content }) => {
  return (
    <Section id="results" title="RESULTS & IMPACT" bgColor="gray">
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
          {paragraph}
        </p>
      ))}
    </Section>
  );
};

// Marketing & Discovery Section
export const MarketingSection = ({ content, image }) => {
  return (
    <Section id="marketing" title="MARKETING & DISCOVERY">
      {content && (
        <div className="mb-8">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}
      {image && (
        <div className="mt-10">
          <img 
            src={image} 
            alt="Marketing materials" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
    </Section>
  );
};

// Final Designs Section
export const FinalDesignsSection = ({ prototypeContent, liveSiteUrl }) => {
  return (
    <Section id="final-designs" title="FINAL DESIGN" bgColor="gray">
      <div>
        {prototypeContent && (
          <>
            <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Final Prototype</h3>
            <p className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {prototypeContent}
            </p>
          </>
        )}
        {liveSiteUrl && (
          <div className="mt-6">
            <a 
              href={liveSiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-abhaya text-blue hover:text-slate-green underline text-lg"
              style={{ fontFamily: "'Abhaya Libre', serif" }}
            >
              View Live Site →
            </a>
          </div>
        )}
      </div>
    </Section>
  );
};

// Reflections Section
export const ReflectionsSection = ({ takeaways, nextSteps }) => {
  return (
    <Section id="reflections" title="REFLECTIONS" bgColor="gray">
      {takeaways && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Key Takeaways</h3>
          {takeaways.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {nextSteps && (
        <div>
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Next Steps & Future Opportunities</h3>
          {nextSteps.split('\n\n').map((paragraph, index) => (
            <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </Section>
  );
};

