import { CaseStudyLayout } from './CaseStudyLayout';
import {
  HeroSection,
  OverviewSection,
  HighlightsSection,
  ChallengeSection,
  SolutionSection,
  ResearchSection,
  DesignProcessSection,
  VisualDesignSection,
  KeyScreensSection,
  ResultsSection,
  FinalDesignsSection,
  ReflectionsSection
} from './Sections';

export const SINCaseStudy = () => {
  const sections = [
    { id: 'hero', title: 'Hero' },
    { id: 'overview', title: 'Overview' },
    { id: 'highlights', title: 'Highlights' },
    { id: 'challenge', title: 'The Challenge' },
    { id: 'solution', title: 'The Solution' },
    { id: 'research', title: 'Research Summary' },
    { id: 'design-process', title: 'Design Process' },
    { id: 'visual-design', title: 'Visual Design' },
    { id: 'key-screens', title: 'Key Screens' },
    { id: 'results', title: 'Results & Impact' },
    { id: 'final-designs', title: 'Final Design' },
    { id: 'reflections', title: 'Reflections' }
  ];

  return (
    <CaseStudyLayout sections={sections}>
      <HeroSection
        title="Sustainable Innovation Network (SIN)"
          tagline={'Building a brand identity for social entrepreneurs who are "Intentionally Innovators, Accidentally Entrepreneurs"'}
        metadata={{
          'ROLE': 'Brand Designer & Web Developer',
          'PLATFORM': 'Website',
          'TIMELINE': '4 months (Spring 2024)',
          'STATUS': 'Launched & Actively Used',
          'DELIVERABLES': 'Brand Strategy, Logo Design, Color Palette, Typography System, Supporting Visual Elements (Stickers/Icons), Brand Guidelines, Website Design & Development'
        }}
        heroImage="/assets/projects/sinMockup.png"
      />

      <OverviewSection
        content={'The Sustainable Innovation Network (SIN) is a student-led social entrepreneurship organization at Northeastern University with a powerful mission: to bridge impact and business by fostering a culture where "entrepreneurship is for everyone." As the OnCampus Chapter for the Hult Prize—a global social entrepreneurship pitch competition with a $1 million prize—SIN provides education, support, and tools to help students launch startups that are both impactful and profitable.\n\nDespite having an established community and ambitious goals, SIN had no brand identity. They lacked a cohesive visual presence, had no central digital hub for their activities, and struggled to increase publicity and engagement across the Northeastern community. Our challenge was to create a brand from scratch that would capture SIN\'s unique positioning in an era dominated by profit-first companies, attract diverse students passionate about social innovation, and establish a digital home base that could grow with the organization.\n\nWorking as both brand designer and web developer on a team of 6 designers/developers and 1 project manager, I helped build a vibrant, approachable brand identity that emphasizes collaboration, inclusivity, and the intersection of sustainability, innovation, and community—SIN\'s three core pillars.'}
      />

      <HighlightsSection images={[1, 2, 3]} />

      <ChallengeSection
        problemFraming={'SIN existed as an active organization with dedicated members and meaningful programming, but they were operating without a visual identity or centralized digital presence. This created several significant problems:\n\nLack of Recognition: Without a consistent brand, SIN struggled to build recognition across campus. Students couldn\'t easily identify SIN materials, and the organization blended into the crowded landscape of student clubs rather than standing out as a unique voice for social entrepreneurship.\n\nNo Digital Home Base: SIN had no website to serve as a central hub for information, events, and resources. This made it difficult for interested students to learn about the organization, find out about upcoming events, or understand how to get involved. Important information was scattered across social media platforms and email lists.\n\nLimited Recruitment & Engagement: Without clear branding or an online presence, SIN faced challenges in attracting new members and maintaining engagement with existing ones. The organization needed to grow its community to fulfill its mission of making entrepreneurship accessible to everyone.\n\nUnclear Positioning: In a competitive space with other entrepreneurship organizations like Generate, NU Impact, WISE, and REV, SIN needed to differentiate itself and clearly communicate its unique value proposition: a focus on social impact and sustainable innovation, not just profit-driven ventures.'}
        issues={[
          'No Visual Identity: SIN had no logo, color palette, typography, or visual system. Every piece of communication looked different, making the organization feel fragmented and unprofessional.',
          'Missing Digital Infrastructure: Without a website, SIN couldn\'t provide a comprehensive overview of their mission, showcase their connection to the Hult Prize, or maintain an event calendar accessible to all students.',
          'Weak Competitive Positioning: Among several entrepreneurship organizations at Northeastern, SIN\'s focus on social innovation and sustainability wasn\'t clearly articulated or visually differentiated from more traditional business-focused groups.',
          'Accessibility Barriers: Interested students had no easy way to learn about SIN or get involved beyond word-of-mouth recommendations or stumbling across social media posts.',
          'Lack of Professional Polish: To attract partnerships, sponsors, and participants for high-stakes competitions like the Hult Prize, SIN needed a professional brand presence that matched the caliber of their programming.',
          'Identity Crisis in a Profit-First Era: SIN needed to position itself as a credible alternative in an era dominated by profit-first companies, proving that impact and profitability can coexist.'
        ]}
      />

      <SolutionSection
        goals={'We set out to create a comprehensive brand identity and digital presence that would establish SIN as the go-to community for social entrepreneurship at Northeastern. The brand needed to feel energetic and approachable—welcoming students from all majors and backgrounds—while maintaining enough professionalism to be taken seriously in the entrepreneurship ecosystem.\n\nThe elevator pitch we developed became our north star: "SIN is the ONLY student-led organization THAT educates the creation of socially impactful startups FOR Northeastern affiliates IN the global NEU entrepreneurship ecosystem WHO need resources and opportunities for pursuing social entrepreneurship in an ERA of profit-first companies."\n\nThis positioning statement clearly differentiated SIN from competitors and guided every design decision we made.'}
        goalList={[
          'Create a Distinctive Visual Identity: Develop a logo, color palette, typography system, and visual language that would be immediately recognizable and differentiate SIN from other entrepreneurship organizations.',
          'Emphasize Approachability Over Corporate: Design a brand that feels student-led, creative, and collaborative rather than corporate or intimidating—entrepreneurship is for everyone, and the brand should reflect that.',
          'Build a Central Digital Hub: Design and develop a fully functional website that serves as the primary source of information about SIN, their events, and how to get involved.',
          'Communicate Three Pillars Clearly: Ensure the brand visually reinforces SIN\'s three core pillars: Sustainable, Innovation, and Network.',
          'Balance Playfulness with Professionalism: Create a brand that feels fun and creative enough to attract students but professional enough to represent the organization in competition and partnership contexts.',
          'Enable Easy Implementation: Develop a flexible system with supporting elements (stickers, icons, templates) that SIN leadership could easily use across social media, print materials, and events without needing advanced design skills.'
        ]}
      />

      <ResearchSection
        competitiveAnalysis={'We conducted an extensive analysis of other student entrepreneurship organizations at Northeastern and beyond to understand the competitive landscape and identify opportunities for differentiation.\n\nGenerate @ NEU - Northeastern\'s flagship entrepreneurship organization with strong branding featuring bold, vibrant colors and a focus on building ventures. Their visual identity is polished and professional with a startup-culture aesthetic. Their strength lies in their established presence and comprehensive programming, but their broad focus on all types of entrepreneurship (not specifically social impact) created an opportunity for SIN to own the social innovation space.\n\nNU Impact - Focuses on social impact investing and consulting. Their brand uses circular, organic forms with bright, friendly colors. They work on real projects with social enterprises, which gives them credibility. However, their narrower focus on consulting (rather than venture creation) and their more feminine-coded aesthetic gave SIN room to appeal to a broader, more diverse audience interested in actually building social ventures.\n\nWISE (Women in Social Entrepreneurship) - Uses warm, inviting colors and emphasizes community through photos of their events. Their Instagram-first approach with bright visuals and signature colors creates strong brand recognition. However, their gender-specific positioning and focus on network building over education created space for SIN to position as more inclusive and action-oriented.\n\nREV (Renew Entrepreneurship Ventures) - Features a sophisticated black and white brand with minimalist, serious aesthetics. They focus on large-scale climate tech and have a more corporate, professional feel. Their polished but less approachable brand aesthetic highlighted an opportunity for SIN to feel more student-friendly and accessible while still being taken seriously.\n\nKey Insights from Competitive Analysis:\n\nThe market showed a clear divide between organizations that felt too corporate and intimidating (REV) versus those that felt approachable but perhaps too casual (WISE, NU Impact). Most competitors used either very professional corporate aesthetics or Instagram-friendly pastel palettes. There was a gap for a brand that balanced energy and creativity with professionalism—something that felt hand-crafted and student-led but still credible.\n\nNone of the competitors strongly emphasized all three elements that SIN cared about: sustainability, innovation, AND community building for venture creation. This gave us a clear positioning opportunity.'}
        userResearch={'Throughout the four-month project, we held weekly meetings with SIN leadership to understand their vision and gather feedback. These critique sessions were invaluable for iteration and ensuring our design direction aligned with how SIN saw themselves and wanted to be perceived.\n\nKey Insights from SIN Leadership:\n\nInclusive and Collaborative Spirit: SIN emphasized repeatedly that they wanted entrepreneurship to feel accessible to everyone, regardless of major, background, or experience level. The brand needed to invite people in rather than gatekeep.\n\nAction-Oriented, Not Just Discussion: Unlike networking-focused groups, SIN is about actually building ventures. The brand needed to communicate doing, creating, and making tangible impact.\n\nOptimistic About Change: Despite working on serious social and environmental issues, SIN\'s approach is fundamentally optimistic—they believe business can be a force for good and that students can make real change.\n\nHandmade Over Perfection: SIN leadership wanted the brand to feel human and student-made. They preferred something that looked crafted and creative over something that looked like it came from a corporate design agency.\n\nEnergy and Movement: The organization is active, hosting multiple events from ideation workshops to pitch competitions. The brand needed to feel dynamic rather than static.'}
        howMightWe={[]}
      />

      <DesignProcessSection
        tools="Figma, Adobe Illustrator, React, Contentful CMS, Netlify"
        conceptCards={'Based on our competitive analysis and stakeholder conversations, we developed a visual direction that would set SIN apart while authentically representing their personality.\n\nDesign Principles We Established:\n\nEnergetic & Optimistic - Use bright, saturated colors that feel vibrant and forward-looking rather than muted or conservative. Social innovation should feel exciting, not depressing.\n\nHandcrafted & Human - Incorporate hand-drawn elements, sketch-like qualities, and imperfect shapes that communicate student-led creativity rather than corporate polish.\n\nCollaborative & Inclusive - Use visual metaphors of connection, overlap, and community. Avoid hierarchical or exclusive imagery.\n\nPlayful but Purpose-Driven - Balance fun, creative elements with clear communication. The brand should feel approachable but not childish.\n\nSustainable in Aesthetic - Incorporate organic shapes and nature-inspired elements that subtly reinforce the sustainability pillar without being literal or cliché.\n\nThe Mood Board:\n\nWe developed a mood board centered around bright colors, sketchbook aesthetics, and sticker culture—visual languages that feel native to student spaces and creative entrepreneurship. The mood board included:\n\nHand-drawn illustrations and rough sketches that feel in-progress rather than finished\n\nOverlapping sticker compositions suggesting collaboration and layered ideas\n\nBright, optimistic color palettes inspired by innovation and growth\n\nTypography that balances modernity with approachability\n\nVisual metaphors of connection (networks, overlapping circles, linked elements)\n\n[Include mood board images showing color inspiration, sketch styles, sticker compositions, typography references]'}
        iterations={'Throughout the design process, we worked through numerous critique sessions with both our internal team and SIN leadership. The iterative feedback loop was essential for refining the brand direction.\n\nKey Evolution Points:\n\nColor Palette Refinement: Early versions used more muted, "sustainable" colors (greens and earth tones), but feedback revealed these felt too serious and environmental-nonprofit coded. We shifted to a brighter, more energetic palette that better captured SIN\'s optimistic, action-oriented personality.\n\nLogo Complexity: Initial logo concepts were more detailed and illustrative. Through testing, we realized simpler forms would be more versatile across applications (social media avatars, embroidered merchandise, etc.) while still feeling hand-drawn and unique.\n\nTypography Balance: We explored pairing options that balanced modern sans-serifs with more playful display fonts, ultimately landing on combinations that felt contemporary and professional for body text while allowing for creative expression in headlines.\n\nIconography Style: We developed a supporting visual system of icons representing the three pillars (leaf for Sustainable, lightbulb for Innovation, globe for Network) with a consistent hand-drawn style that complemented the logo.\n\nWebsite Layout: Early wireframes were more traditional and corporate. Feedback pushed us toward a more dynamic, asymmetric layout that better matched the brand\'s creative energy.'}
        focus={'To ensure the brand would be successful, we clearly defined what it should and shouldn\'t be:\n\nThis brand IS:\n\nEnergetic, optimistic, and action-oriented\n\nApproachable and inclusive to all students regardless of background\n\nCreative and hand-crafted feeling while maintaining professionalism\n\nDistinctive from other entrepreneurship organizations\n\nFlexible and easy for SIN leadership to implement across touchpoints\n\nThis brand is NOT:\n\nCorporate or intimidating\n\nOnly focused on sustainability (it balances three pillars equally)\n\nChildish or unprofessional despite its playfulness\n\nExclusive or gatekeeping\n\nSo complex it requires professional designers to implement'}
      />

      <VisualDesignSection
        moodBoard=""
        designSystem={'The final brand identity centers around a custom wordmark logo that incorporates SIN\'s three pillars through color and form. The logo uses a bold, confident sans-serif with custom modifications that give it a hand-drawn quality—professional but not corporate.\n\nLogo: The SIN wordmark uses a vibrant green that represents both sustainability and growth. The letters have subtle imperfections and organic qualities that make them feel crafted rather than perfectly geometric. The full lockup includes "Sustainable Innovation Network" in a clean secondary typeface below the wordmark.\n\nWe also created an icon version featuring an abstract symbol that suggests interconnected networks—perfect for social media avatars and small-scale applications.\n\n[Include logo variations: primary wordmark, icon, lockup with full name, black and white versions]\n\nColor Palette\n\nThe color system reflects SIN\'s three pillars and creates a vibrant, energetic feel:\n\nPrimary Colors:\n\nSIN Green (#00A86B) - The hero color representing sustainability and growth, used for the logo and primary brand elements\n\nInnovation Orange (#FF6B35) - A bright, energetic orange representing creativity and innovation\n\nNetwork Blue (#00B4D8) - A vibrant blue representing connection and global community\n\nSupporting Colors:\n\nWarm Yellow (#FFD23F) - For highlights and optimistic accents\n\nDeep Purple (#6A4C93) - For depth and variation in layouts\n\nNeutral Gray (#F5F5F5) - For backgrounds and breathing room\n\nThe palette intentionally avoids muted or pastel tones—every color is saturated and confident. The variety allows for dynamic, multi-color compositions that feel energetic without being chaotic.\n\n[Include color palette with hex codes and usage guidelines]\n\nTypography\n\nPrimary Typeface - Montserrat: A modern geometric sans-serif that feels contemporary and approachable. Used for headlines, the website, and primary brand communications. Its clean forms provide structure while remaining friendly.\n\nSecondary Typeface - Open Sans: A humanist sans-serif for body text that\'s highly readable across digital and print applications. Its slightly rounded forms complement Montserrat without competing.\n\nAccent Use - Hand-Drawn Elements: For special applications (event posters, social media), hand-drawn lettering is encouraged to reinforce the creative, student-made feel.\n\n[Include typography specimen showing hierarchy and pairings]\n\nSupporting Visual Elements\n\nSticker System: We developed a collection of sticker-style graphic elements that can be mixed, layered, and composed in endless ways:\n\nThree pillar icons (leaf, lightbulb, globe) in the brand\'s hand-drawn style\n\nDecorative shapes and frames\n\nMotivational phrases and quotes related to social entrepreneurship\n\nAbstract patterns that suggest connection and networks\n\nThese elements give SIN\'s team flexible building blocks for creating social media graphics, presentation slides, and print materials without needing custom design work for every application.\n\nPhotography Style: Guidelines for photography emphasize authentic, candid shots of SIN events showing diverse students collaborating and engaging. Photos should feel documentary rather than staged, reinforcing the genuine, inclusive community SIN is building.\n\n[Include examples of the sticker system in use, icon set, pattern library]'}
      />

      <KeyScreensSection
        screens={[
          {
            title: 'Homepage - Hero & Mission',
            description: 'Opens with a striking hero image showing SIN community members in action, paired with their tagline "Intentionally Innovators, Accidentally Entrepreneurs." The opening section immediately communicates what makes SIN unique: the only student-led organization educating the creation of socially impactful startups at Northeastern.',
            capabilities: [],
            imagePlaceholder: 'homepage hero'
          },
          {
            title: 'What We Do',
            description: 'Explains SIN\'s role as a bridge between impact and business, emphasizing education, support, and tools for launching for-impact, for-profit startups.',
            capabilities: [],
            imagePlaceholder: 'what we do section'
          },
          {
            title: 'Events',
            description: 'Highlights SIN\'s programming from concept ideation to grant opportunities, including networking, workshops, competitions, and more. Features the Hult Prize connection prominently.',
            capabilities: [],
            imagePlaceholder: 'events section'
          },
          {
            title: 'Three Pillars',
            description: 'Visual representation of Sustainable, Innovation, and Network with custom icons and explanations of each pillar.',
            capabilities: [],
            imagePlaceholder: 'three pillars visualization'
          },
          {
            title: 'Get Involved',
            description: 'Clear call-to-action emphasizing that all members of the Northeastern community can participate, with links to social media and mailing list signup.',
            capabilities: [],
            imagePlaceholder: 'get involved section'
          }
        ]}
      />

      <ResultsSection
        content={'Brand Reception\n\nThe brand identity and website were enthusiastically received by SIN leadership and members. The organization immediately began implementing the brand across all touchpoints:\n\nActive Implementation:\n\nWebsite serves as the primary information hub, regularly updated with events and news\n\nSocial media profiles now feature consistent branding with the logo and color palette\n\nEvent materials (posters, slides, name tags) use the brand system and sticker elements\n\nThe organization reports feeling more professional and confident in their external communications\n\nFeedback from SIN Leadership: SIN leadership expressed that the brand successfully captured their personality and mission. They particularly appreciated the flexibility of the sticker system, which allows them to create varied, on-brand content without needing design expertise for every piece.\n\nDigital Presence Established\n\nThe website successfully established SIN\'s digital home base:\n\nClear, accessible information about the organization for prospective members\n\nCentralized event calendar and programming overview\n\nProfessional presence for partnership and sponsorship conversations\n\nHub for Hult Prize information and competition details\n\nCompetitive Differentiation\n\nThe brand successfully positions SIN distinctly within the Northeastern entrepreneurship ecosystem:\n\nClear visual differentiation from competitors (more energetic than REV, more professional than WISE, more action-oriented than NU Impact, more focused than Generate)\n\nStrong communication of the social innovation focus rather than general entrepreneurship\n\nAuthentic student-led aesthetic that feels genuine rather than trying to mimic corporate brands'}
      />

      <FinalDesignsSection
        liveSiteUrl="https://sin-neu.netlify.app/"
      />

      <ReflectionsSection
        takeaways={'Brand as Foundation for Growth: This project reinforced how essential a strong brand identity is for organizational growth. SIN had valuable programming and community, but without cohesive branding, they struggled to grow beyond word-of-mouth. The brand provided the foundation for scaling their impact.\n\nBalancing Professionalism and Authenticity: The most challenging aspect was finding the sweet spot between approachable/student-led and professional/credible. Through iteration, we learned that authenticity doesn\'t mean sacrificing polish—it means choosing the right kind of polish that matches your audience and values.\n\nFlexibility is a Feature, Not a Bug: Rather than creating rigid brand guidelines that would be ignored, we developed a flexible system that empowers non-designers to create on-brand content. The sticker elements and clear color palette give structure while allowing creativity, which better serves a student organization that won\'t have dedicated designers.\n\nResearch Shapes Everything: The competitive analysis was invaluable for understanding not just what competitors looked like, but what gaps existed in positioning and visual territory. This allowed us to design something distinctive rather than defaulting to category conventions.\n\nStakeholder Collaboration is Critical: Weekly meetings with SIN leadership kept the project aligned and revealed insights we wouldn\'t have discovered otherwise. Their feedback pushed us away from safe, expected solutions toward something more authentic to their actual personality.\n\nHand-Drawn Doesn\'t Mean Unprofessional: We learned that hand-crafted, imperfect aesthetics can actually feel more premium and intentional than perfectly geometric designs when executed thoughtfully. The key is making it look chosen rather than accidental.\n\nTechnical Lessons Learned\n\nContent Management is Key: Building the website with Contentful CMS was crucial—it allows SIN to maintain the site without developers, ensuring it remains current and useful.\n\nPerformance Matters for Credibility: Fast load times and smooth interactions contribute to the perception of professionalism, even for a student organization.\n\nDesign Systems Scale: Creating components and patterns rather than one-off pages made both development faster and future updates easier.\n\nResponsive Design from the Start: Designing mobile experiences alongside desktop prevented the common trap of designing for desktop and cramming everything into mobile later.'}
        nextSteps={'If we were to continue developing the SIN brand system, future opportunities would include:\n\nExpanded Template Library: Create templates for common SIN needs like event posters, social media posts, presentation slides, and email headers that can be easily customized by leadership.\n\nVideo & Motion Guidelines: Develop guidelines for video content and animated elements to extend the brand into moving media, particularly for social media stories and promotional videos.\n\nMerchandise Design: Design branded apparel and promotional items that members would actually want to wear and use, further building brand recognition on campus.\n\nEvent Experience Design: Extend the brand into physical event experiences with signage, name tags, swag, and environmental graphics that create immersive SIN-branded spaces.\n\nBrand Evolution Documentation: Create more comprehensive brand guidelines that document not just what the visual elements are, but why they were chosen and how to think about applying them to new situations.\n\nPartnership Materials: Develop templates for sponsorship decks, annual reports, and other materials needed for external partnerships and funding conversations.\n\nAlumni Network Integration: As SIN grows, design systems for maintaining engagement with alumni entrepreneurs and showcasing their ventures.\n\nAccessibility Audit: Conduct a thorough accessibility review of the website and brand materials to ensure full WCAG compliance and inclusive design.\n\nThis project demonstrated how thoughtful brand design can transform an organization\'s ability to communicate its mission and grow its community. By creating a system that\'s both distinctive and flexible, we gave SIN the tools to authentically represent themselves across all touchpoints while maintaining the creative, collaborative spirit that makes them unique in the entrepreneurship ecosystem.'}
      />
    </CaseStudyLayout>
  );
};
