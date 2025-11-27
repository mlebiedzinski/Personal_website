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
  MarketingSection,
  FinalDesignsSection,
  ReflectionsSection
} from './Sections';

export const StravaCaseStudy = () => {
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
    { id: 'marketing', title: 'Marketing & Discovery' },
    { id: 'final-designs', title: 'Final Designs' },
    { id: 'reflections', title: 'Reflections' }
  ];

  return (
    <CaseStudyLayout sections={sections}>
      <HeroSection
        title="TrainTogether for Strava"
        tagline="A collaborative training feature that transforms solo workouts into shared journeys"
        metadata={{
          'ROLE': 'Product Designer',
          'PLATFORM': 'iOS & Android (Strava Integration)',
          'TIMELINE': '4 months (2024)',
          'STATUS': 'Concept Project',
          'DELIVERABLES': 'User Research, Competitive Analysis, Concept Sketches, Visual Design, High-Fidelity Prototype, Design System, Marketing Concepts'
        }}
        heroImage="/assets/projects/sttMockup.png"
      />

      <OverviewSection
        content={'In 2023 and 2024, my friends, family, and I spontaneously signed up for quite a few crazy long races together—four half marathons and two triathlons, to be exact. To prepare for these athletic endeavors, I usually threw together a training plan in a Notion database, made a shared Apple Photos album to dump run photos into, and hoped we all remembered to block out time each week for training.\n\nThis chaotic but heartfelt process revealed a gap in the fitness app market: while apps like Strava excel at tracking individual performance and fostering competition, they miss the collaborative accountability that makes training with friends actually enjoyable. TrainTogether is my answer to this problem—a Strava feature that transforms the journey to race day into a shared, supportive experience rather than a solitary grind.\n\nThe feature emphasizes not just staying on track, but enjoying the actual journey leading up to achieving your goal and recognizing the importance of having accountability partners throughout.'}
      />

      <HighlightsSection images={[1, 2, 3]} />

      <ChallengeSection
        problemFraming={'Many fitness enthusiasts struggle with consistency and motivation when pursuing long-term goals like marathons or triathlons. The journey to race day is long, often spanning months of training that requires discipline, time management, and sustained motivation. While the excitement of race day is a powerful motivator, maintaining momentum during the weeks and months leading up to it is where most people struggle.\n\nExisting fitness apps focus primarily on tracking metrics and fostering competition through leaderboards and performance comparisons. While these features work for some users, they miss a crucial element: the collaborative, supportive dynamic that comes from training with friends. Current solutions require users to cobble together multiple tools—shared calendars, photo albums, messaging apps, and tracking platforms—to create even a basic collaborative training experience.\n\nThere\'s a clear opportunity to design a more integrated, purpose-built solution that makes training together as seamless as training alone, while emphasizing accountability and shared celebration over competition.'}
        issues={[
          'Fragmented Experience: Training groups must juggle multiple platforms—calendars for scheduling, photo apps for sharing moments, messaging for coordination, and fitness apps for tracking—creating unnecessary friction and cognitive load.',
          'Lack of Accountability: Without built-in mechanisms for mutual accountability, it\'s easy for training partners to drift apart or for individuals to skip workouts when motivation wanes.',
          'Competition Over Collaboration: Existing fitness apps emphasize leaderboards and performance comparisons, which can feel discouraging rather than motivating for users at different fitness levels.',
          'Rigid Planning Systems: Traditional training plans are inflexible and don\'t account for the reality of coordinating multiple people\'s schedules, life events, and varying fitness levels.',
          'Missed Celebration Moments: There\'s no dedicated space to celebrate milestones and achievements as a group, making it easy to lose sight of progress and small victories along the way.',
          'Motivation Decay: Long-term training goals require sustained motivation over months, but current tools don\'t provide enough emotional reinforcement to keep users engaged throughout the journey.'
        ]}
      />

      <SolutionSection
        goals={'TrainTogether is a Strava feature designed to make collaborative training seamless, supportive, and genuinely enjoyable. It integrates group planning, progress tracking, and milestone celebration into a single, cohesive experience that emphasizes accountability over competition and turns the journey to race day into something users actively look forward to.\n\nUsers can create shared training plans with friends, track progress together through visual motivators like progress bars and shared photo albums, coordinate workout schedules that work for everyone, and celebrate milestones as a group—all within the Strava ecosystem they already know and trust.'}
        goalList={[
          'Create Seamless Collaboration: Design a unified platform where training groups can plan, coordinate, and track progress together without switching between multiple apps.',
          'Foster Accountability Without Competition: Build features that encourage mutual support and consistency while avoiding the discouragement that comes from performance-based comparisons.',
          'Make Training Enjoyable: Transform training from a solitary obligation into a shared journey filled with visual progress indicators, milestone celebrations, and meaningful social interactions.',
          'Provide Flexible Planning: Develop scheduling and planning tools that accommodate real life—different fitness levels, busy schedules, and unexpected changes—without feeling rigid or overwhelming.',
          'Celebrate the Journey: Create dedicated spaces for groups to acknowledge progress, share achievements, and reflect on how far they\'ve come, not just where they\'re going.',
            'Integrate Naturally with Strava: Ensure the feature feels native to Strava\'s existing design language and leverages its powerful tracking capabilities while adding a collaborative layer.'
        ]}
      />

      <ResearchSection
        competitiveAnalysis={'I conducted an in-depth analysis of existing apps that have similar features or serve purposes relevant to the themes I wanted to explore. This included both direct competitors in the fitness space and adjacent products that excel at collaboration, scheduling, or progress tracking.\n\nNike Run Club - Strong social challenges and leaderboards focused on individual performance, with tight integration into the Nike ecosystem. However, the emphasis remains on competition rather than collaboration.\n\nMapMyRun - Solid workout tracking with personal goal-setting and community challenges, but the social features prioritize performance comparisons over mutual support.\n\nApple Fitness - Activity rings, fitness challenges, and leaderboards encourage competition with friends and family. While it tries to create a shared experience, it lacks collaborative planning tools.\n\nClassPass - Allows users to explore and book workout classes with transparency about who\'s participating. Users can invite friends and see bookings, creating natural accountability through visibility.\n\nDay One - A journaling platform that tracks progress and personal reflections, encouraging self-accountability through text entries and visuals. The ability to look back at past entries creates powerful emotional reinforcement.\n\nApple/Google Calendar - Simple yet effective ability to invite friends to events and maintain shared calendars. The transparency and ease of coordination are valuable reference points.\n\nThis analysis revealed opportunities to combine the strongest elements of each platform: Strava\'s tracking power, ClassPass\'s visibility and coordination, Day One\'s reflective celebration, and calendar apps\' scheduling simplicity—all while avoiding the competitive pressure of leaderboards.'}
        userResearch={'To deepen my understanding of the problem, I turned to real people for insight. I conducted interviews with peers to explore their unique perspectives and personal experiences. I talked to 2 aspiring runners, 1 ex-marathoner, 1 overall athlete, and 1 fitness newcomer.\n\nHere\'s what I took away from our discussions:\n\nVisual Motivators Matter: Progress bars, milestones, and shared photos play a key role in fostering engagement and reinforcing accountability. Seeing progress—both your own and your group\'s—creates emotional momentum.\n\nTransparency Builds Involvement: Users value the ability to easily view others\' plans and progress, creating a sense of involvement and collaboration rather than isolation.\n\nCelebration Over Competition: Sharing milestones and achievements is popular, but users prefer it to feel celebratory rather than competitive. They want to cheer each other on, not compare who\'s better.\n\nFlexibility is Essential: Overly rigid systems deter participation. Users want features that integrate smoothly into their schedules without adding unnecessary complexity or guilt when life gets in the way.'}
        howMightWe={[
          'How might we create a more collaborative training experience that encourages accountability over competitiveness?',
          'How might we ease the process of scheduling workouts and planning training sessions with friends and family?',
          'How might we make training together more fun and interactive to keep users motivated and engaged throughout their journey?'
        ]}
      />

      <DesignProcessSection
        tools="[Include logos: Figma, Procreate/iPad, Notion, etc.]"
        conceptCards={'With all the insights and ideas I\'d gathered, it was time to start sketching and exploring concepts. I put (Apple) pencil to (iPad) paper and started experimenting to see what resonated and what my ideas would look like in very primitive concept cards and visual sketches.\n\n[Include your concept card images here]\n\nConcept cards allowed me to get a grasp on the essential experiences I wanted this feature to include. From before you start training, to while you\'re in the meat of the training, to looking back on accomplishments, it was important to acknowledge all parts of the journey.\n\n[Include your visual sketches here]\n\nMy visual sketches are very rudimentary, but some common themes apparent here are the pattern of repeated circles, the use of bento grids, and the rounded-off card designs—most of which were kept in the final iterations.'}
        iterations={'Throughout the design process, I made numerous iterations to refine the experience. Feedback played a crucial role in shaping the project, as I gained valuable insight into how others interpreted and interacted with my designs.\n\nHearing comments about areas of confusion or misunderstanding was particularly helpful—it allowed me to address pain points I hadn\'t initially noticed and reframe certain elements for clarity and usability. Each round of feedback and concept testing pushed me to revisit my assumptions, simplify key components, and better align the design with user expectations.\n\nWhile it was challenging to balance simplicity with functionality, the iterative process was essential in ensuring the design met user needs without overcomplicating the experience.'}
        focus={'To ensure this feature\'s success, I needed to streamline my focus and hone in on the experience I wanted to craft for users.\n\nThis feature IS:\n\nA tool to collaborate with others and track progress as a team\n\nA way to encourage consistent training through mutual support\n\nA space to celebrate milestones together as a group\n\nThis feature is NOT:\n\nA tool for planning individual workouts\n\nFocused on community discovery or networking\n\nA competitive platform for leaderboards or comparing performance'}
      />

      <VisualDesignSection
        moodBoard={'The mood board emulates the overall engaging, connected, optimistic feel that I wanted the feature to have. The design elements stayed mostly consistent with the current style guidelines of Strava, since this feature will live within the existing app.\n\n[Include your mood board images here]'}
        designSystem={'The visual language builds on Strava\'s existing design system while introducing collaborative elements that feel warm and supportive. Key patterns include:\n\nRepeated circular elements for profile representation and progress visualization\n\nBento grid layouts for organizing multiple users\' information\n\nRounded card designs that feel approachable and friendly\n\nVisual progress indicators that make achievements tangible\n\n[Include design system components: colors, typography, UI elements]'}
      />

      <KeyScreensSection
        screens={[
          {
            title: 'Group Training Dashboard',
              description: 'The central hub where training groups can see everyone\'s progress, upcoming workouts, and recent activities at a glance.',
            capabilities: [
              'Visual progress rings showing each member\'s completion status',
              'Shared calendar view for coordinating group workouts',
              'Quick access to group photos and milestone celebrations',
              'At-a-glance view of who\'s on track and who might need encouragement'
            ],
            imagePlaceholder: 'dashboard screenshot'
          },
          {
            title: 'Shared Training Plan',
            description: 'A collaborative space where groups can build and adjust training plans together, with flexibility built in for real life.',
            capabilities: [
              'Drag-and-drop workout scheduling that syncs with calendars',
              'Ability to mark workouts as group or individual sessions',
              'Transparent view of each member\'s commitments and availability',
              'Gentle reminders and encouragement notifications'
            ],
            imagePlaceholder: 'training plan interface'
          },
          {
            title: 'Milestone Celebrations',
            description: 'A dedicated space for groups to acknowledge progress and celebrate achievements together.',
            capabilities: [
              'Automated milestone detection (weeks completed, distance milestones, etc.)',
              'Shared photo albums for memorable training moments',
              'Group reflection prompts and memories',
              'Visual progress timeline showing the journey so far'
            ],
            imagePlaceholder: 'celebration features'
          },
          {
            title: 'Extended Experiences',
            description: 'Components that live outside the app to keep users engaged and connected:',
            capabilities: [
              'Widget showing group progress and upcoming workouts',
              'Notifications celebrating teammate achievements',
              'SMS reminders for group training sessions',
              'Apple Watch complications for quick progress checks'
            ],
            imagePlaceholder: 'widgets, notifications, and text message examples'
          }
        ]}
      />

      <MarketingSection
        content={'How Will This Feature Be Discovered?\n\nI considered how this feature would be branded and promoted, and envisioned where it might be showcased in a marketing campaign.'}
        image="/assets/projects/sttMarketing.png"
      />

      <FinalDesignsSection
        prototypeContent="[Include your final high-fidelity screens and prototype walkthrough]"
      />

      <ReflectionsSection
        takeaways={'Designing for Real Experiences, Not Just Functionality: This project was more than just building a feature—it was about crafting an experience. I focused on creating something I could genuinely see people, including myself, enjoying and engaging with. This approach helped me move beyond the abstract nature of tools and envision how users would interact with the feature in a meaningful way.\n\nPrioritizing Emotional Impact Over Actions: One of the hardest challenges was learning to prioritize how the user would feel while using the feature, rather than focusing solely on the actions they would take—like clicking, tapping, or swiping. This shift in mindset allowed me to design with empathy, ensuring the feature wasn\'t just functional but also enjoyable and motivating.\n\nThe Value of Iterative Design: Throughout this process, I embraced the iterative design approach. I learned that sharing ideas early and often leads to unexpected insights and fresh perspectives. Feedback not only shaped my designs but also revealed hidden opportunities for improvement that I would have missed on my own.\n\nFocusing on What Matters Most: I realized the importance of prioritizing essential, experience-driven features rather than trying to include every possible functionality. This focus helped me refine the feature into something more cohesive and impactful, allowing it to better address the core needs of the users.\n\nPersonal Connection Drives Design: Building this feature around my own experiences training with friends and family gave me authentic insight into the problem space. This personal connection helped me make design decisions that felt genuine rather than theoretical.\n\nCollaboration Requires Different Metrics: Traditional fitness metrics focus on individual performance, but designing for collaboration required rethinking what success looks like—consistency, mutual support, and shared celebration matter more than personal bests.'}
        nextSteps={'If I were to continue developing TrainTogether, my next steps would include:\n\nLive Activity Integration: Design how this feature could integrate live status functionality on your lock screen to see when your friends have started a run and interact or track them in real-time during the workout. Imagine glancing at your phone mid-run and seeing your training partner\'s pace and location, or sending a quick cheer without breaking stride.\n\nData Visualization Refinement: Further explore and refine the visualization of data throughout the design. I feel this could be more effective overall—particularly in how we show group progress over time, comparative effort levels, and milestone achievements in ways that feel motivating rather than overwhelming.\n\nGroup vs Group Challenges: Explore a group vs group feature that could take accountability and motivation to the next level by putting your training group against others. This would add an optional competitive layer for groups who thrive on friendly rivalry, while maintaining the core collaborative spirit within each team.\n\nUsability Testing with Real Training Groups: Conduct multi-week testing with actual training groups preparing for races to validate assumptions and gather authentic feedback on long-term engagement.\n\nAdvanced Scheduling Intelligence: Develop adaptive training plans that automatically adjust based on group progress, weather conditions, and individual recovery needs while keeping everyone aligned.\n\nPost-Race Retrospectives: Expand celebration features to include end-of-training retrospectives where groups can reflect on their journey together and set new goals.\n\nThese takeaways reinforced the importance of designing with purpose, empathy, and an open mind. They have shaped how I will approach future projects, ensuring the end-user experience remains at the heart of the process.'}
      />
    </CaseStudyLayout>
  );
};
