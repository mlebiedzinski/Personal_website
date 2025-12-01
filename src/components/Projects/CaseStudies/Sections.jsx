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
export const Section = ({ id, title, children, bgColor = 'white', marginBottom, marginTop }) => {
  const paddingTop = bgColor === 'gray' ? 'clamp(2.5rem, 5vw, 4rem)' : 'clamp(2rem, 4vw, 3rem)';
  const paddingBottom = bgColor === 'gray' ? 'clamp(2.5rem, 5vw, 4rem)' : 'clamp(2rem, 4vw, 3rem)';
  const mb = marginBottom !== undefined ? marginBottom : '2rem';
  const mt = marginTop !== undefined ? marginTop : '2rem';
  
  return (
    <section id={id} className={`w-full ${bgColor === 'gray' ? 'bg-gray' : 'bg-white'}`} style={{ fontFamily: "'Abhaya Libre', serif", width: '100%', marginLeft: '0', marginTop: mt, marginBottom: mb, paddingTop, paddingBottom }}>
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
export const OverviewSection = ({ content, metadata, image }) => {
  return (
    <Section id="overview" title="OVERVIEW" marginTop="0.5rem" marginBottom="2rem">
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
        <div className={`prose max-w-none ${image ? 'grid md:grid-cols-2 gap-8 items-start' : ''}`}>
          <div>
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                {paragraph}
              </p>
            ))}
          </div>
          {image && (
            <div className="flex justify-start">
              <img 
                src={image} 
                alt="Overview" 
                className="w-full max-w-xs h-auto rounded-lg"
              />
            </div>
          )}
        </div>
      )}
    </Section>
  );
};

// Highlights Section with Image Grid
export const HighlightsSection = ({ images = [] }) => {
  // If there's only one image, make it smaller and centered
  const isSingleImage = images.length === 1;
  
  return (
    <Section id="highlights" title="HIGHLIGHTS" bgColor="white">
      <div className={isSingleImage ? "w-full flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"} style={{ marginTop: '4rem' }}>
        {images.map((img, index) => (
          typeof img === 'string' ? (
            <div key={index} className={`rounded-lg overflow-hidden ${isSingleImage ? 'max-w-2xl' : ''}`}>
              <img 
                src={img} 
                alt={`Highlight ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
                style={{ maxWidth: '100%', minHeight: isSingleImage ? 'auto' : '400px', objectFit: 'cover' }}
              />
            </div>
          ) : (
            <div key={index} className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center" style={{ minHeight: '400px' }}>
              <span className="text-gray-500 font-abhaya text-sm">[highlights img{index + 1}]</span>
            </div>
          )
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
export const ResearchSection = ({ competitiveAnalysis, userResearch, howMightWe = [], competitiveAnalysisImages = {} }) => {
  // Map app names to their icon paths (default for Strava case study)
  const defaultAppIcons = {
    'Nike Run Club': '/assets/projects/StravaTTCaseStudy/sttNRCIcon.png',
    'MapMyRun': '/assets/projects/StravaTTCaseStudy/sttUAIcon.png',
    'Apple Fitness': '/assets/projects/StravaTTCaseStudy/sttAppleFitenessIcon.png',
    'ClassPass': '/assets/projects/StravaTTCaseStudy/sttClasspassIcon.png',
    'Day One': '/assets/projects/StravaTTCaseStudy/sttDayoneIcon.png',
    'Apple/Google Calendar': '/assets/projects/StravaTTCaseStudy/sttGoogleCalIcon.png'
  };

  // Merge default icons with provided images (provided images take precedence)
  const appIcons = { ...defaultAppIcons, ...competitiveAnalysisImages };

  // Function to render paragraph with icon if it starts with an app name
  const renderParagraphWithIcon = (paragraph) => {
    for (const [appName, iconPath] of Object.entries(appIcons)) {
      if (paragraph.startsWith(appName)) {
        const restOfText = paragraph.substring(appName.length);
        // Check if this is a SIN case study image (larger images that should appear above)
        const isSINImage = iconPath.includes('SINCaseStudy');
        
        if (isSINImage) {
          return (
            <div className="mb-6">
              <img 
                src={iconPath} 
                alt={appName}
                className="w-full max-w-2xl mb-3 rounded-lg"
                style={{ height: 'auto' }}
              />
              <p className="font-abhaya text-slate-green leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                <strong>{appName}</strong>{restOfText}
              </p>
            </div>
          );
        } else {
          // For Strava case study, keep the side-by-side layout
          return (
            <div className="flex items-start gap-2 mb-4">
              <img 
                src={iconPath} 
                alt={appName}
                className="flex-shrink-0"
                style={{ width: '36px', height: '36px', marginTop: '2px' }}
              />
              <p className="font-abhaya text-slate-green leading-relaxed flex-1" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                <strong>{appName}</strong>{restOfText}
              </p>
            </div>
          );
        }
      }
    }
    // If no app name match, render as regular paragraph
    return (
      <p className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
        {paragraph}
      </p>
    );
  };

  return (
    <Section id="research" title="RESEARCH SUMMARY">
      {competitiveAnalysis && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Competitive & Comparative Analysis</h3>
          {(() => {
            const paragraphs = competitiveAnalysis.split('\n\n');
            const itemsWithImages = [];
            const itemsWithoutImages = [];
            let introParagraph = null;
            
            // Check if we have SIN case study images (larger images for grid layout)
            const hasSINImages = Object.values(competitiveAnalysisImages).some(path => path.includes('SINCaseStudy'));
            
            if (hasSINImages) {
              // Separate paragraphs with images from those without
              paragraphs.forEach(paragraph => {
                // Check if this is the intro paragraph
                if (paragraph.startsWith('We conducted an extensive analysis')) {
                  introParagraph = paragraph;
                  return;
                }
                
                let hasImage = false;
                for (const [appName] of Object.entries(competitiveAnalysisImages)) {
                  if (paragraph.startsWith(appName)) {
                    const restOfText = paragraph.substring(appName.length);
                    itemsWithImages.push({ appName, text: restOfText, image: competitiveAnalysisImages[appName] });
                    hasImage = true;
                    break;
                  }
                }
                if (!hasImage) {
                  itemsWithoutImages.push(paragraph);
                }
              });
              
              // Separate "Key Insights from Competitive Analysis:" header from its content
              const processedItems = [];
              itemsWithoutImages.forEach(paragraph => {
                if (paragraph.startsWith('Key Insights from Competitive Analysis:')) {
                  // Split the header from the content
                  const lines = paragraph.split('\n\n');
                  processedItems.push({ type: 'insights-header', content: lines[0] });
                  // Add the remaining content as separate paragraphs
                  lines.slice(1).forEach(line => {
                    if (line.trim()) {
                      processedItems.push({ type: 'paragraph', content: line });
                    }
                  });
                } else {
                  processedItems.push({ type: 'paragraph', content: paragraph });
                }
              });
              
              return (
                <>
                  {/* Intro paragraph above the grid */}
                  {introParagraph && (
                    <p className="font-abhaya text-slate-green mb-6 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                      {introParagraph}
                    </p>
                  )}
                  {/* Grid layout for items with images */}
                  {itemsWithImages.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {itemsWithImages.map((item, index) => (
                        <div key={index} className="mb-4">
                          <img 
                            src={item.image} 
                            alt={item.appName}
                            className="w-full mb-3 rounded-lg"
                            style={{ height: 'auto' }}
                          />
                          <p className="font-abhaya text-slate-green leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                            <strong>{item.appName}</strong>{item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Regular paragraphs for items without images */}
                  {processedItems.map((item, index) => {
                    if (item.type === 'insights-header') {
                      return (
                        <h4 key={index} className="font-abhaya font-bold text-xl mb-4 text-slate-green mt-6" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                          {item.content}
                        </h4>
                      );
                    }
                    return (
                      <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                        {item.content}
                      </p>
                    );
                  })}
                </>
              );
            } else {
              // Default rendering for Strava case study
              return paragraphs.map((paragraph, index) => (
                <div key={index}>
                  {renderParagraphWithIcon(paragraph)}
                </div>
              ));
            }
          })()}
        </div>
      )}

      {userResearch && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Foundational Interviews</h3>
          {(() => {
            const paragraphs = userResearch.split('\n\n');
            const introParagraphs = [];
            const keyPoints = [];
            const sinLeadershipInsights = [];
            let foundSINInsightsHeader = false;
            
            paragraphs.forEach(paragraph => {
              // Check if this is the SIN Leadership insights header
              if (paragraph === 'Key Insights from SIN Leadership:') {
                foundSINInsightsHeader = true;
                return;
              }
              
              // Check if this paragraph is one of the SIN Leadership insights
              if (foundSINInsightsHeader && paragraph.includes(':')) {
                const colonIndex = paragraph.indexOf(':');
                const title = paragraph.substring(0, colonIndex);
                const explanation = paragraph.substring(colonIndex + 1).trim();
                sinLeadershipInsights.push({ title, explanation });
                return;
              }
              
              // Check if this paragraph is one of the Strava key points
              if (paragraph.startsWith('Visual Motivators Matter:') ||
                  paragraph.startsWith('Transparency Builds Involvement:') ||
                  paragraph.startsWith('Celebration Over Competition:') ||
                  paragraph.startsWith('Flexibility is Essential:')) {
                const colonIndex = paragraph.indexOf(':');
                const title = paragraph.substring(0, colonIndex);
                const explanation = paragraph.substring(colonIndex + 1).trim();
                keyPoints.push({ title, explanation });
              } else {
                introParagraphs.push(paragraph);
              }
            });

            return (
              <>
                {/* Intro paragraphs */}
                {introParagraphs.map((paragraph, index) => (
                  <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                    {paragraph}
                  </p>
                ))}
                
                {/* SIN Leadership Insights with leaf bullets */}
                {sinLeadershipInsights.length > 0 && (
                  <>
                    <h4 className="font-abhaya font-bold text-xl mb-4 text-slate-green mt-6" style={{ fontFamily: "'Abhaya Libre', serif" }}>Key Insights from SIN Leadership:</h4>
                    <ul className="space-y-3">
                      {sinLeadershipInsights.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-yellow text-xl mt-1">🌱</span>
                          <span className="font-abhaya text-slate-green flex-1 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                            {point.title}: {point.explanation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                {/* Strava key points in columns */}
                {keyPoints.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="mb-4">
                        <p className="font-abhaya text-slate-green leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                          <span style={{ textDecoration: 'underline', fontFamily: "'Abhaya Libre', serif" }}>{point.title}:</span> {point.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })()}
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

// Tools Section
export const ToolsSection = ({ tools }) => {
  if (!tools) return null;
  
  return (
    <Section id="tools" title="TOOLS" marginTop="0" marginBottom="0">
      {tools.includes('[Include logos') ? (
        <div className="flex gap-6 items-center">
          <img 
            src="/assets/projects/figmaIcon.png" 
            alt="Figma" 
            className="h-12 w-auto"
          />
          <img 
            src="/assets/projects/notionIcon.png" 
            alt="Notion" 
            className="h-12 w-12 object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <img 
            src="/assets/projects/procreateIcon.png" 
            alt="Procreate" 
            className="h-12 w-auto"
          />
        </div>
      ) : tools.includes('Figma, Adobe Illustrator, React, Contentful CMS, Netlify') ? (
        <div className="flex gap-6 items-center">
          <img 
            src="/assets/projects/figmaIcon.png" 
            alt="Figma" 
            className="h-12 w-auto"
          />
          <img 
            src="/assets/projects/illustratorIcon.png" 
            alt="Adobe Illustrator" 
            className="h-12 w-auto"
          />
          <img 
            src="/assets/projects/reactIcon.png" 
            alt="React" 
            className="h-12 w-auto"
          />
          <img 
            src="/assets/projects/contentfulIcon.png" 
            alt="Contentful CMS" 
            className="h-12 w-auto"
          />
          <img 
            src="/assets/projects/netlifyIcon.png" 
            alt="Netlify" 
            className="h-12 w-auto"
          />
        </div>
      ) : tools.includes('SwiftUI, Xcode, Figma, Paper Prototyping Materials') ? (
        <div className="flex gap-6 items-center">
          <img 
            src="/assets/projects/figmaIcon.png" 
            alt="Figma" 
            className="h-12 w-auto"
          />
          <img 
            src="/assets/projects/xcodeIcon.png" 
            alt="Xcode" 
            className="h-12 w-auto"
          />
          <img 
            src="/assets/projects/swiftIcon.png" 
            alt="Swift" 
            className="h-12 w-auto"
          />
          <img 
            src="/assets/projects/testFlightIcon.png" 
            alt="TestFlight" 
            className="h-12 w-auto"
          />
        </div>
      ) : (
        <p className="font-abhaya text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>{tools}</p>
      )}
    </Section>
  );
};

// Design Process Section
export const DesignProcessSection = ({ conceptCards, iterations, focus }) => {
  return (
    <Section id="design-process" title="DESIGN PROCESS" bgColor="gray">

      {conceptCards && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Concept Cards & Visual Sketches</h3>
          {(() => {
            // Check if this is ScreenDime case study (has paper prototype text)
            const isScreenDime = conceptCards.includes('paper prototype') || conceptCards.includes('Paper Prototype');
            
            return conceptCards.split('\n\n').map((paragraph, index) => {
            // Check if this paragraph ends with "Design Principles We Established:" and add image after it
            if (paragraph.trim().endsWith('Design Principles We Established:')) {
              return (
                <div key={index}>
                  <p className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                    {paragraph}
                  </p>
                  <img 
                    src="/assets/projects/SINCaseStudy/sinPersonalityLovers.png" 
                    alt="Personality Lovers" 
                    className="w-full max-w-md mb-4 rounded-lg"
                    style={{ height: 'auto' }}
                  />
                </div>
              );
            }
            // Check if this paragraph ends with "The Mood Board:" and add image after it
            if (paragraph.trim().endsWith('The Mood Board:')) {
              return (
                <div key={index}>
                  <p className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                    {paragraph}
                  </p>
                  <img 
                    src="/assets/projects/SINCaseStudy/sinMoodBoard.png" 
                    alt="Mood Board" 
                    className="w-full max-w-3xl mb-4 rounded-lg"
                    style={{ height: 'auto' }}
                  />
                </div>
              );
            }
            
            if (paragraph.includes('[Include your concept card images here]')) {
              // Only show Strava images if not ScreenDime
              if (!isScreenDime) {
                return (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttConceptCard1.png" 
                      alt="Concept Card 1" 
                      className="w-full h-auto rounded-lg max-w-xs mx-auto"
                    />
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttConceptCard2.png" 
                      alt="Concept Card 2" 
                      className="w-full h-auto rounded-lg max-w-xs mx-auto"
                    />
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttConceptCard3.png" 
                      alt="Concept Card 3" 
                      className="w-full h-auto rounded-lg max-w-xs mx-auto"
                    />
                  </div>
                );
              }
              // For ScreenDime, don't show images
              return null;
            }
            if (paragraph.includes('[Include your visual sketches here]')) {
              // Only show Strava images if not ScreenDime
              if (!isScreenDime) {
                return (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttVisualSketches1.png" 
                      alt="Visual Sketch 1" 
                      className="w-full h-auto rounded-lg max-w-xs mx-auto"
                    />
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttVisualSketches2.png" 
                      alt="Visual Sketch 2" 
                      className="w-full h-auto rounded-lg max-w-xs mx-auto"
                    />
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttVisualSketches3.png" 
                      alt="Visual Sketch 3" 
                      className="w-full h-auto rounded-lg max-w-xs mx-auto"
                    />
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttVisualSketches4.png" 
                      alt="Visual Sketch 4" 
                      className="w-full h-auto rounded-lg max-w-xs mx-auto"
                    />
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttVisualSketches5.png" 
                      alt="Visual Sketch 5" 
                      className="w-full h-auto rounded-lg max-w-xs mx-auto"
                    />
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttVisualSketches6.png" 
                      alt="Visual Sketch 6" 
                      className="w-full h-auto rounded-lg max-w-xs mx-auto"
                    />
                  </div>
                );
              }
              // For ScreenDime, don't show images
              return null;
            }
            // Check if this is one of the mood board bullet points
            const moodBoardBulletPoints = [
              'Hand-drawn illustrations and rough sketches that feel in-progress rather than finished',
              'Overlapping sticker compositions suggesting collaboration and layered ideas',
              'Bright, optimistic color palettes inspired by innovation and growth',
              'Typography that balances modernity with approachability',
              'Visual metaphors of connection (networks, overlapping circles, linked elements)'
            ];
            
            if (moodBoardBulletPoints.includes(paragraph.trim())) {
              return (
                <div key={index} className="flex items-start gap-3 mb-4">
                  <span className="text-yellow text-xl mt-1" style={{ color: '#ECD082' }}>•</span>
                  <p className="font-abhaya text-slate-green leading-relaxed flex-1" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                    {paragraph}
                  </p>
                </div>
              );
            }
            
            return (
              <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                {paragraph}
              </p>
            );
            });
          })()}
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
          {/* Check if this is SIN case study (contains SIN-specific text) */}
          {(iterations.includes('SIN leadership') || iterations.includes('brand direction')) ? (
            <div className="my-6">
              <img 
                src="/assets/projects/SINCaseStudy/sinLoFis.png" 
                alt="Low Fidelity Wireframes" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          ) : (iterations.includes('Round 1 - Test User') || iterations.includes('Paper Prototype Testing')) ? (
            // ScreenDime case study - don't show iteration images
            null
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <img 
                src="/assets/projects/StravaTTCaseStudy/sttIterations1.png" 
                alt="Iteration 1" 
                className="w-full h-auto rounded-lg"
              />
              <img 
                src="/assets/projects/StravaTTCaseStudy/sttIterations2.png" 
                alt="Iteration 2" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>
      )}

      {focus && (
        <div>
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Focus on Key Experiences</h3>
          {(() => {
            const paragraphs = focus.split('\n\n');
            const introParagraphs = [];
            let isSection = null;
            let isItems = [];
            let notSection = null;
            let notItems = [];
            
            paragraphs.forEach((paragraph) => {
              if (paragraph === 'This feature IS:' || paragraph === 'This brand IS:') {
                isSection = paragraph;
                isItems = [];
              } else if (paragraph === 'This feature is NOT:' || paragraph === 'This brand is NOT:') {
                notSection = paragraph;
                notItems = [];
              } else if (isSection && !notSection) {
                // Collecting IS items
                if (paragraph.trim() && !paragraph.startsWith('This feature') && !paragraph.startsWith('This brand')) {
                  isItems.push(paragraph);
                }
              } else if (notSection) {
                // Collecting NOT items
                if (paragraph.trim() && !paragraph.startsWith('This feature') && !paragraph.startsWith('This brand')) {
                  notItems.push(paragraph);
                }
              } else {
                // Intro paragraphs
                introParagraphs.push(paragraph);
              }
            });

            return (
              <>
                {/* Intro paragraphs */}
                {introParagraphs.map((paragraph, index) => (
                  <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                    {paragraph}
                  </p>
                ))}
                
                {/* Two column layout for IS and NOT */}
                {(isSection || notSection) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* IS column */}
                    <div>
                      {isSection && (
                        <>
                          <p className="font-abhaya font-bold text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                            {isSection}
                          </p>
                          {isItems.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 mb-4">
                              <span className="text-yellow text-xl mt-1" style={{ color: '#ECD082' }}>•</span>
                              <p className="font-abhaya text-slate-green leading-relaxed flex-1" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                                {item}
                              </p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    
                    {/* NOT column */}
                    <div>
                      {notSection && (
                        <>
                          <p className="font-abhaya font-bold text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                            {notSection}
                          </p>
                          {notItems.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 mb-4">
                              <span className="text-xl mt-1" style={{ color: '#ECD082' }}>•</span>
                              <p className="font-abhaya text-slate-green leading-relaxed flex-1" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                                {item}
                              </p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </>
            );
          })()}
        </div>
      )}
    </Section>
  );
};

// Visual Design Section
export const VisualDesignSection = ({ moodBoard, designSystem }) => {
  // Detect if this is ScreenDime case study
  const isScreenDime = designSystem && (
    designSystem.includes('friendly competition') ||
    designSystem.includes('Leaderboard visualizations') ||
    designSystem.includes('Profile customization options')
  );
  
  return (
    <Section id="visual-design" title="VISUAL DESIGN">
      {moodBoard && (
        <div className="mb-8">
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Mood Board</h3>
          {moodBoard.split('\n\n').map((paragraph, index) => {
            if (paragraph.includes('[Include your mood board images here]')) {
              // Only show Strava mood board if not ScreenDime
              if (!isScreenDime) {
                return (
                  <div key={index} className="my-6">
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttMoodboard.png" 
                      alt="Mood Board" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                );
              }
              // For ScreenDime, don't show images
              return null;
            }
            return (
              <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                {paragraph}
              </p>
            );
          })}
        </div>
      )}

      {designSystem && (
        <div>
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Design System</h3>
          {designSystem.split('\n\n').map((paragraph, index) => {
            // Add space above Typography section
            if (paragraph === 'Typography') {
              return (
                <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed mt-8" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                  {paragraph}
                </p>
              );
            }
            // Add space above Supporting Visual Elements section
            if (paragraph === 'Supporting Visual Elements') {
              return (
                <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed mt-8" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                  {paragraph}
                </p>
              );
            }
            if (paragraph.includes('[Include logo variations')) {
              return (
                <div key={index} className="my-6">
                  <img 
                    src="/assets/projects/SINCaseStudy/sinLogo.png" 
                    alt="Logo Variations" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              );
            }
            if (paragraph.includes('[Include color palette')) {
              return (
                <div key={index} className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <img 
                    src="/assets/projects/SINCaseStudy/sinColors.png" 
                    alt="Color Palette" 
                    className="w-full h-auto rounded-lg"
                  />
                  <img 
                    src="/assets/projects/SINCaseStudy/sinOtherColors.png" 
                    alt="Other Colors" 
                    className="w-full h-auto rounded-lg"
                  />
                  <img 
                    src="/assets/projects/SINCaseStudy/sinColorRatios.png" 
                    alt="Color Ratios" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              );
            }
            if (paragraph.includes('[Include typography specimen')) {
              return (
                <div key={index} className="my-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <img 
                      src="/assets/projects/SINCaseStudy/sinHeaderType.png" 
                      alt="Header Typography" 
                      className="w-full h-auto rounded-lg"
                    />
                    <img 
                      src="/assets/projects/SINCaseStudy/sinBodytext.png" 
                      alt="Body Text Typography" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <img 
                    src="/assets/projects/SINCaseStudy/sinTextDesc.png" 
                    alt="Text Description" 
                    className="w-full h-auto rounded-lg mb-8"
                  />
                </div>
              );
            }
            if (paragraph.includes('[Include examples of the sticker system')) {
              return (
                <div key={index} className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img 
                    src="/assets/projects/SINCaseStudy/sinStickers.png" 
                    alt="Sticker System" 
                    className="w-full h-auto rounded-lg"
                  />
                  <img 
                    src="/assets/projects/SINCaseStudy/sinStickers2.png" 
                    alt="Sticker System 2" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              );
            }
            if (paragraph.includes('[Include design system components')) {
              // Only show Strava components if not ScreenDime
              if (!isScreenDime) {
                return (
                  <div key={index} className="my-6">
                    <img 
                      src="/assets/projects/StravaTTCaseStudy/sttComponents.png" 
                      alt="Design System Components" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                );
              }
              // For ScreenDime, don't show images
              return null;
            }
            // Check if this is one of the sticker system bullet points
            const stickerBulletPoints = [
              'Three pillar icons (leaf, lightbulb, globe) in the brand\'s hand-drawn style',
              'Decorative shapes and frames',
              'Motivational phrases and quotes related to social entrepreneurship',
              'Abstract patterns that suggest connection and networks'
            ];
            
            if (stickerBulletPoints.includes(paragraph.trim())) {
              return (
                <div key={index} className="flex items-start gap-3 mb-4">
                  <span className="text-yellow text-xl mt-1" style={{ color: '#ECD082' }}>•</span>
                  <p className="font-abhaya text-slate-green leading-relaxed flex-1" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                    {paragraph}
                  </p>
                </div>
              );
            }
            
            return (
              <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                {paragraph}
              </p>
            );
          })}
        </div>
      )}
    </Section>
  );
};

// Key Screens Section
export const KeyScreensSection = ({ screens = [], description }) => {
  // Detect if this is SIN case study by checking screen titles
  const isSINCaseStudy = screens.length > 0 && (
    screens[0].title?.includes('Homepage - Hero & Mission') ||
    screens[0].title?.includes('What We Do') ||
    screens.some(screen => screen.title?.includes('Three Pillars'))
  );
  
  // Detect if this is ScreenDime case study
  const isScreenDimeCaseStudy = screens.length > 0 && (
    screens[0].title?.includes('Group Dashboard') ||
    screens.some(screen => screen.title?.includes('Bet Creation'))
  );
  
  return (
    <Section id="key-screens" title="KEY SCREENS" bgColor="white">
      {description && (
        <p className="font-abhaya text-slate-green mb-6 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
          {description}
        </p>
      )}
      <div className="space-y-6">
        {screens.map((screen, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-yellow text-xl mt-1 flex-shrink-0">🌱</span>
            <div className="flex-1" style={{ paddingLeft: '0.5rem' }}>
              <p className="font-abhaya font-bold text-slate-green mb-2" style={{ fontFamily: "'Abhaya Libre', serif" }}>{screen.title}</p>
              {screen.description && (
                <p className="font-abhaya text-slate-green leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>{screen.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Check if this is SIN case study vs Strava vs ScreenDime */}
      {isSINCaseStudy ? (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8 mb-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <img 
              key={num}
              src={`/assets/projects/SINCaseStudy/sinImg${num}.png`}
              alt={`SIN Screen ${num}`}
              className="w-full h-auto rounded-lg"
              style={{ minHeight: '250px', objectFit: 'cover' }}
            />
          ))}
        </div>
      ) : isScreenDimeCaseStudy ? (
        // ScreenDime case study - don't show key screen images
        null
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 mt-8 mb-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
            <img 
              key={num}
              src={`/assets/projects/StravaTTCaseStudy/sttKeyScreens${num}.png`}
              alt={`Key Screen ${num}`}
              className="w-full h-auto rounded-lg"
              style={{ minHeight: '250px', objectFit: 'cover' }}
            />
          ))}
          <img 
            src="/assets/projects/StravaTTCaseStudy/sttSmallWidget.png"
            alt="Small Widget"
            className="w-full h-auto rounded-lg"
            style={{ minHeight: '350px', objectFit: 'cover' }}
          />
          <img 
            src="/assets/projects/StravaTTCaseStudy/sttNotifMockup.png"
            alt="Notification Mockup"
            className="w-full h-auto rounded-lg"
            style={{ minHeight: '350px', objectFit: 'cover' }}
          />
          <img 
            src="/assets/projects/StravaTTCaseStudy/sttBigWidget.png"
            alt="Big Widget"
            className="w-full h-auto rounded-lg"
            style={{ minHeight: '350px', objectFit: 'cover' }}
          />
          <img 
            src="/assets/projects/StravaTTCaseStudy/sttText.png"
            alt="Text"
            className="w-full h-auto rounded-lg"
            style={{ minHeight: '350px', objectFit: 'cover' }}
          />
        </div>
      )}
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
  // List of items that should have leaf bullets
  const leafBulletItems = [
    'Website serves as the primary information hub, regularly updated with events and news',
    'Social media profiles now feature consistent branding with the logo and color palette',
    'Event materials (posters, slides, name tags) use the brand system and sticker elements',
    'The organization reports feeling more professional and confident in their external communications',
    'Feedback from SIN Leadership: SIN leadership expressed that the brand successfully captured their personality and mission. They particularly appreciated the flexibility of the sticker system, which allows them to create varied, on-brand content without needing design expertise for every piece.',
    'Clear, accessible information about the organization for prospective members',
    'Centralized event calendar and programming overview',
    'Professional presence for partnership and sponsorship conversations',
    'Hub for Hult Prize information and competition details',
    'Clear visual differentiation from competitors (more energetic than REV, more professional than WISE, more action-oriented than NU Impact, more focused than Generate)',
    'Strong communication of the social innovation focus rather than general entrepreneurship',
    'Authentic student-led aesthetic that feels genuine rather than trying to mimic corporate brands'
  ];
  
  return (
    <Section id="results" title="RESULTS & IMPACT" bgColor="gray">
      {content.split('\n\n').map((paragraph, index) => {
        // Check if paragraph is a section header like "Brand Reception"
        if (paragraph.trim() === 'Brand Reception' || 
            paragraph.trim() === 'Digital Presence Established' ||
            paragraph.trim() === 'Competitive Differentiation' ||
            paragraph.trim() === 'Active Implementation:') {
          return (
            <p key={index} className="font-abhaya font-bold text-slate-green mb-4 leading-relaxed mt-6" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              {paragraph}
            </p>
          );
        }
        // Check if this is one of the leaf bullet items
        const trimmedParagraph = paragraph.trim();
        if (leafBulletItems.some(item => {
          const trimmedItem = item.trim();
          return trimmedParagraph === trimmedItem || 
                 trimmedParagraph.startsWith(trimmedItem) ||
                 (trimmedItem.includes(':') && trimmedParagraph.startsWith(trimmedItem.split(':')[0]));
        })) {
          return (
            <div key={index} className="flex items-start gap-3 mb-4">
              <span className="text-yellow text-xl mt-1">🌱</span>
              <p className="font-abhaya text-slate-green leading-relaxed flex-1" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                {paragraph}
              </p>
            </div>
          );
        }
        return (
          <p key={index} className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
            {paragraph}
          </p>
        );
      })}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <img 
          src="/assets/projects/StravaTTCaseStudy/sttPoster.png"
          alt="Marketing Poster"
          className="w-full h-auto rounded-lg"
        />
        <img 
          src="/assets/projects/StravaTTCaseStudy/sttStoryMockup.png"
          alt="Story Mockup"
          className="w-full h-auto rounded-lg md:col-span-2"
        />
      </div>
    </Section>
  );
};

// Final Designs Section
export const FinalDesignsSection = ({ prototypeContent, liveSiteUrl, videoPath }) => {
  return (
    <Section id="final-designs" title="FINAL DESIGN" bgColor="white">
      <div>
        {videoPath && (
          <div className="mt-6 flex justify-center">
            <video 
              src={videoPath}
              controls
              className="w-full max-w-xl h-auto rounded-lg"
              style={{ maxWidth: '100%', maxHeight: '66vh' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {prototypeContent && (
          <>
            <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Video Prototypes</h3>
            {prototypeContent.includes('[Include your final high-fidelity screens and prototype walkthrough]') ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                {[
                  { num: 1, label: 'Setup and Onboarding' },
                  { num: 2, label: 'Sending a Run Reminder' },
                  { num: 3, label: 'Adding a Run to Calendar' },
                  { num: 4, label: 'Viewing Photos' }
                ].map(({ num, label }) => (
                  <div key={num}>
                    <video 
                      src={`/assets/projects/StravaTTCaseStudy/demo${num}.mov`}
                      controls
                      className="w-full h-auto rounded-lg"
                      style={{ maxWidth: '100%' }}
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <p className="font-abhaya text-slate-green text-sm text-center mt-2" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-abhaya text-slate-green mb-4 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                {prototypeContent}
              </p>
            )}
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
          <ul className="space-y-3">
            {takeaways.split('\n\n').map((paragraph, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow text-xl mt-1 flex-shrink-0">🌱</span>
                <span className="font-abhaya text-slate-green flex-1 leading-relaxed" style={{ fontFamily: "'Abhaya Libre', serif" }}>
                  {paragraph}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {nextSteps && (
        <div>
          <h3 className="font-abhaya font-bold text-2xl mb-4 text-slate-green" style={{ fontFamily: "'Abhaya Libre', serif" }}>Next Steps & Future Opportunities</h3>
          <ul className="space-y-3">
            {nextSteps.split('\n\n').map((paragraph, index, array) => {
              const isFirst = index === 0;
              const isLast = index === array.length - 1;
              return (
                <li key={index} className={isFirst || isLast ? "" : "flex items-start gap-3"}>
                  {!(isFirst || isLast) && (
                    <span className="text-yellow text-xl mt-1 flex-shrink-0">🌱</span>
                  )}
                  <span className={`font-abhaya text-slate-green ${isFirst || isLast ? "" : "flex-1"} leading-relaxed`} style={{ fontFamily: "'Abhaya Libre', serif" }}>
                    {paragraph}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Section>
  );
};

