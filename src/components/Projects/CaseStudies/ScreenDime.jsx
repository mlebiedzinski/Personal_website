import { CaseStudyLayout } from './CaseStudyLayout';
import {
  HeroSection,
  ToolsSection,
  OverviewSection,
  HighlightsSection,
  ChallengeSection,
  SolutionSection,
  ResearchSection,
  DesignProcessSection,
  VisualDesignSection,
  KeyScreensSection,
  ImplementationSection,
  FinalDesignsSection,
  ReflectionsSection
} from './Sections';

export const ScreenDimeCaseStudy = () => {
  const sections = [
    { id: 'hero', title: 'Hero' },
    { id: 'tools', title: 'Tools' },
    { id: 'overview', title: 'Overview' },
    { id: 'highlights', title: 'Highlights' },
    { id: 'challenge', title: 'The Challenge' },
    { id: 'solution', title: 'The Solution' },
    { id: 'research', title: 'Research Summary' },
    { id: 'design-process', title: 'Design Process' },
    { id: 'visual-design', title: 'Visual Design' },
    { id: 'key-screens', title: 'Key Screens' },
    { id: 'implementation', title: 'Implementation' },
    { id: 'final-designs', title: 'Final Design' },
    { id: 'reflections', title: 'Reflections' }
  ];

  return (
    <CaseStudyLayout sections={sections}>
      <HeroSection
        title="ScreenDime"
        tagline="Bet on your screen time—turn reducing phone use into a shared experience"
        metadata={{
          'ROLE': 'Product Designer & Developer | Team of 3',
          'PLATFORM': 'iOS',
          'TIMELINE': '4 months (2024)',
          'STATUS': 'Launched (TestFlight Beta)',
          'DELIVERABLES': 'User Research, Storyboards, Paper Prototyping, Usability Testing, High-Fidelity Prototype, iOS App Development, Heuristic Evaluation'
        }}
        heroImage="/assets/projects/ScreenDimeCaseStudy/sdMockup.png"
      />

      <ToolsSection tools="SwiftUI, Xcode, Figma, Paper Prototyping Materials" />

      <OverviewSection
        content={'The project emerged from a simple but universal challenge: college students and young adults want to spend more time connecting with friends in person, but find themselves constantly pulled back to their phones.\n\nWhile many screen time management apps exist, they typically approach the problem through restriction and guilt—blocking apps, setting timers, or shaming users with statistics. ScreenDime takes a different approach: it transforms reducing screen time into a social, competitive experience. By creating friendly wagers with friends around screen time goals, the app makes the journey toward healthier phone habits something to look forward to rather than dread.\n\nThe core insight driving our design was that social accountability and friendly competition are far more motivating than solo willpower. We wanted to create an app that doesn\'t just help you use your phone less—it helps you connect more deeply with the people who matter most.'}
      />

      <HighlightsSection images={["/assets/projects/ScreenDimeCaseStudy/sdHighlights.png"]} />

      <ChallengeSection
        problemFraming={'College students and young adults are acutely aware they spend too much time on their phones, often at the expense of in-person social connections and meaningful activities. Despite this awareness, breaking phone habits is incredibly difficult. The dopamine-driven design of social media and entertainment apps creates powerful behavioral loops that are hard to escape alone.\n\nExisting screen time management solutions largely focus on individual willpower: app blockers, timers, and analytics dashboards that show you just how much time you\'re "wasting." These tools can be helpful, but they position phone use as a personal failing rather than a shared challenge. They\'re also easy to ignore or disable when motivation wanes, which it inevitably does.\n\nThere\'s an opportunity to reframe screen time reduction as a social activity—something you do with friends rather than in isolation. By adding elements of friendly competition, shared goals, and accountability to trusted peers, we hypothesized that reducing phone use could become not just easier, but actually enjoyable.'}
        issues={[
          'Lack of Social Accountability: Current screen time apps are solitary experiences. When you\'re trying to change behavior alone, it\'s easy to give up or make exceptions without anyone noticing.',
          'Guilt-Based Motivation: Apps that show negative statistics (hours wasted, apps blocked) make users feel bad about themselves without providing positive motivation to change.',
          'Easy to Ignore or Disable: When app blockers or timers become inconvenient, users simply turn them off. There\'s no external accountability to keep users committed.',
          'Disconnection from Real Goals: Screen time apps focus on phone use as the problem, not on what you\'re missing out on—quality time with friends, hobbies, experiences, and real-world connections.',
          'Missing Competitive Element: Young adults respond well to gamification and friendly competition with peers, but existing apps don\'t leverage this motivational tool.',
          'No Connection to Social Circle: Parents, teachers, and other important adults in young people\'s lives want to support healthier phone habits but have no visibility or way to participate in the journey.'
        ]}
      />

      <SolutionSection
        goals={'ScreenDime addresses the screen time challenge by making it a shared, competitive experience. The app allows users to create groups with friends and set up "bets" around screen time goals—friendly wagers where everyone commits to staying under a certain daily limit for a set period.\n\nUsers can track their progress on leaderboards, see how friends are doing, and earn bragging rights for winning bets. By transforming screen time reduction from a solo struggle into a group challenge, we tap into powerful social motivations: not wanting to let your friends down, the satisfaction of friendly competition, and the shared experience of working toward a goal together.\n\nThe app is designed for college students and young adults as primary users, with secondary consideration for parents and teachers who want to stay connected and support healthier habits.'}
        goalList={[
          'Create Social Accountability: Design a system where reducing screen time becomes a shared commitment with friends, making it harder to give up and more rewarding to succeed.',
          'Make It Fun, Not Punishing: Replace guilt-based motivation with friendly competition, achievement celebration, and positive reinforcement for meeting goals.',
          'Foster Real-World Connection: Position the app as a tool for spending more quality time with friends in person, not just using your phone less in isolation.',
          'Provide Transparency: Allow users to see their friends\' progress and challenges, creating empathy and mutual support rather than just competition.',
          'Keep It Flexible: Design around real life—allow users to set their own goals, create multiple groups for different friend circles, and participate at their own comfort level.',
          'Enable Meaningful Participation for Secondary Users: Give parents and important adults visibility and ways to support young people\'s goals without being intrusive or controlling.'
        ]}
      />

      <ResearchSection
        competitiveAnalysis={'We began by clearly defining our target users and their core needs:\n\nPrimary Users: College students and young adults (18+)\n\nWant: Increased in-person social connection\n\nNeed: A way to reduce time spent on phones without feeling restricted or judged\n\nSecondary/Tertiary Users: Important adults in the lives of primary users, such as parents and teachers\n\nWant: Greater connection with primary users\n\nNeed: Ways to support healthier habits without being overbearing\n\nPOV Statement\n\nSocial university students want to spend more time with friends and activities, and can achieve this by reducing phone time through friendly competition.\n\nWe addressed this by making reducing screen time a shared experience, allowing users to connect with friends through friendly competition. This led us to identify core tasks:\n\nCreating a group\n\nCreating a bet within a group\n\nViewing details of groups and bets\n\nTracking progress on leaderboards'}
        userResearch={'We started by creating storyboards to envision user stories and scenarios in which users would be exposed to our app or encounter the possibility of using it. These helped us understand the emotional journey and context around phone use.\n\n[Include storyboard images showing scenarios like: friends making plans and realizing they\'re all on their phones, someone wanting to focus on studying but getting distracted, a group deciding to make a bet together]'}
        howMightWe={[]}
      />

      <DesignProcessSection
        tools="SwiftUI, Xcode, Figma, Paper Prototyping Materials"
        conceptCards={'We created an initial paper prototype to lay out the main screens and interactions we knew we wanted to include. The core tasks we prototyped were:\n\nCreate a profile\n\nJoin a group\n\nJoin a bet\n\nCheck leaderboard of a bet\n\nCreate a group\n\nInitialize a bet within a group\n\n[Include images of paper prototype screens]'}
        iterations={'Round 1 - Test User 1:\n\nIssue: Confused by some screen elements such as the unique group pages, expressed desire for dropdowns\n\nSolution: Implemented dropdown menu to display groups\n\nIssue: Scrolling to different screens feeling unintuitive, user was confused about how to advance screens\n\nSolution: Reconsidered navigation structure\n\nRound 2 - Test User 2:\n\nIssue: Frustrated with the length of some of the inputs, user was not filling out all fields in "new bet" screen\n\nSolution: Implemented autofill for expected information fields\n\nIssue: Lack of feedback makes some tasks confusing, user was unsure if they were finished with tasks\n\nSolution: Added popup confirmation dialogs to indicate successful actions\n\nRound 3 - Test User 3:\n\nIssue: Encountered confusion with the bottom pill menu and what it indicated\n\nSolution: Clarified menu affordances and visual hierarchy\n\nIssue: Got confused about bets within a group, lack of information on app concepts\n\nSolution: Added onboarding flow and contextual information\n\nIterative Design Process\n\nInitial Design: We initially designed it to have a single page swipe interface for navigating groups\n\nPaper Prototype Testing: Revealed user confusion with swipe gestures, leading to a switch to a dropdown menu\n\nKey Lesson: Early usability testing helped catch major design issues. Initial designs should prioritize visibility and user understanding over flexibility for advanced users.\n\nHigh-Fidelity Testing Insights\n\nAs we moved to high-fidelity prototypes, new issues emerged:\n\nUsers struggled to determine when tasks were completed, such as joining bets or creating groups\n\nFeedback prompted the addition of pop-up confirmation dialogs and countdowns for bet end dates\n\nHeuristic evaluations highlighted issues with user control, leading to adjustments in date selection and back buttons for intuitive navigation\n\n[Include images showing before/after of key design iterations]'}
        focus={'To ensure ScreenDime\'s success, we needed to focus on the experiences that mattered most:\n\nThis app IS:\n\nA tool to make reducing screen time social and fun through friendly competition\n\nA way to create accountability with friends you trust\n\nA space to celebrate progress and wins together\n\nThis app is NOT:\n\nA restrictive app blocker that prevents phone use\n\nA guilt-inducing tracker that shames you for using your phone\n\nA public social network for broadcasting to strangers'}
      />

      <VisualDesignSection
        moodBoard=""
        designSystem={'The visual language emphasizes friendly competition and social connection. Key patterns include:\n\nBright, energetic colors that feel motivating rather than clinical\n\nLeaderboard visualizations that make competition fun\n\nClear status indicators showing who\'s winning, who\'s struggling, and when bets end\n\nProfile customization options including picture uploads to personalize the experience\n\n[Include design system components: color palette, typography, button styles, card layouts]'}
      />

      <KeyScreensSection
        screens={[
          {
            title: 'Group Dashboard',
            description: 'The central hub where users can see all their groups, switch between them via dropdown, and get an at-a-glance view of active bets.',
            capabilities: [
              'Dropdown menu for easy navigation between multiple friend groups',
              'Visual overview of current and upcoming bets within each group',
              'Quick access to create new bets or join existing ones',
              'Settings and group management options'
            ],
            imagePlaceholder: 'dashboard'
          },
          {
            title: 'Bet Creation & Management',
            description: 'The interface for setting up a new bet within a group, with autofilled suggestions to reduce friction.',
            capabilities: [
              'Simple form for setting bet parameters (screen time limit, duration, stakes)',
              'Date selection that prevents invalid date ranges',
              'Preview of bet terms before finalizing',
              'Confirmation dialog when bet is created'
            ],
            imagePlaceholder: 'bet creation flow'
          },
          {
            title: 'Leaderboard & Progress Tracking',
            description: 'Real-time view of how everyone in a bet is performing, with visual indicators and competitive rankings.',
            capabilities: [
              'Live leaderboard showing each participant\'s progress',
              'Visual progress bars and status indicators',
              'Countdown to bet end date',
              'Weekly report summaries of performance'
            ],
            imagePlaceholder: 'leaderboard views'
          },
          {
            title: 'Profile & Settings',
            description: 'Personal customization space and group management tools.',
            capabilities: [
              'Profile picture upload and username customization',
              'Group settings (rename, leave group, view members)',
              'Bet history (current and past bets with outcomes)',
              'Account preferences'
            ],
            imagePlaceholder: 'profile and settings'
          }
        ]}
      />

      <ImplementationSection
        content={'Technical Architecture\n\nCode Structure: We used the SwiftUI environment to create a series of Views connected through a final Global class, with Models for any objects we need to be able to access and edit. Our Models include Users, Groups, and Bets, as well as helpers such as Screen Time (for formatting timestamps) and Tabs (for the swipe dashboard interface).\n\nDummy Data: In place of a dedicated backend server for keeping track of the social network of the app, we created a series of dummy users and groups in the Global class at instantiation, which allows us to demonstrate the capabilities of the app in an easy way.\n\nCustomization: App-wide color styling and profile picture uploads enhance usability and personalization.\n\nCohesion Throughout Views: Each View has a number of local variables and popup menus they can access, as well as general access to both updating and reading from the Global tab to keep track of the app\'s overall status and keeping the rest of the Views informed. We found this was an effective way to have things work together seamlessly.\n\nDevelopment Challenges & Solutions\n\nChallenge: Maintaining consistency across multiple Views with shared state\n\nSolution: Implemented a Global class that all Views could access for reading and updating app state\n\nChallenge: Preventing invalid bet configurations (dates, parameters)\n\nSolution: Added validation logic that disables invalid options in the UI rather than showing error messages after submission\n\nChallenge: Managing group membership and ensuring users always have at least one group\n\nSolution: Built constraints into the leave group functionality to maintain minimum group membership\n\nChallenge: Coordinating team development without version conflicts\n\nSolution: Established clear role divisions and improved version control practices'}
      />

      <FinalDesignsSection
        videoPath="/assets/projects/ScreenDimeCaseStudy/Demo.mov"
      />

      <ReflectionsSection
        takeaways={'Social Accountability Changes Everything: The most powerful insight from this project was seeing how adding a social layer transformed users\' relationship with screen time management. Instead of feeling restrictive or punishing, the competitive element made it genuinely fun. Users reported feeling more motivated to succeed because they didn\'t want to let their friends down.\n\nDesign for Clarity Over Cleverness: Our initial swipe-based navigation seemed elegant, but users found it confusing. Switching to a dropdown menu—while less "innovative"—dramatically improved usability. Sometimes the familiar pattern is the right choice, especially when users need to accomplish tasks quickly.\n\nFeedback Confirmation is Critical: One of our biggest learnings from testing was that users felt uncertain when they couldn\'t tell if actions were successful. Adding confirmation dialogs and visual feedback for completed tasks resolved significant anxiety and improved the overall experience dramatically.\n\nIteration Saves Time: While it felt time-consuming to do multiple rounds of paper prototyping and user testing, catching major design issues early prevented costly refactors later in development. Testing early and often is always worth the investment.\n\nConstraints Create Focus: Having a clear problem statement and defined user needs helped us make decisions quickly and avoid scope creep. When evaluating features, we constantly returned to: "Does this help friends reduce screen time together through friendly competition?"\n\nTechnical Decisions Have UX Impact: Choosing SwiftUI and creating a Global state management system had significant implications for the user experience. Better upfront planning about technical architecture would have saved refactoring time and made certain features easier to implement smoothly.\n\nKey Takeaways from Development\n\nRole Clarity: Clearly defined and consistently followed roles would streamline collaboration. In future projects, establishing who owns which Views or features from the start would prevent duplicate work.\n\nVersion Control: Improved diligence in version management would prevent conflicts and redundant work. We learned the hard way that clear commit messages and regular syncing are essential.\n\nIdeation Time: More planning upfront would reduce refactors and save time during coding. Spending more time in the design phase prevents costly technical changes later.\n\nLanguage Choice: Developing in a familiar language could have increased efficiency. While SwiftUI was a good choice for the platform, team familiarity with the tools matters significantly.'}
        nextSteps={'If we were to continue developing ScreenDime, our next steps would include:\n\nBackend Infrastructure: Build a proper backend server to replace dummy data, enabling real user accounts, persistent data, and true social networking capabilities. This would allow the app to scale beyond TestFlight beta.\n\nPush Notifications: Implement strategic notifications to remind users when bets are ending, congratulate winners, and gently encourage struggling participants without being annoying.\n\nEnhanced Social Features: Add messaging within groups, the ability to cheer on friends in real-time, and custom celebration animations when someone wins a bet.\n\nScreen Time Integration: Develop deeper integration with iOS Screen Time APIs to automatically track and verify bet compliance, removing the need for manual reporting.\n\nReward System: Explore meaningful rewards beyond bragging rights—perhaps unlocking custom profile themes, earning badges, or integrating with real-world rewards that groups can define together.\n\nParent/Teacher Dashboard: Create a separate interface for secondary users (parents, teachers) that gives them visibility into their students\' or children\'s progress without being intrusive, and allows them to participate in supportive ways.\n\nData Visualization: Build richer analytics showing trends over time, insights into which apps consume the most time, and patterns that help users understand their phone habits better.\n\nAccessibility Improvements: Conduct focused testing with users who have various accessibility needs and implement improvements to ensure ScreenDime is usable by everyone.\n\nDespite the challenges we encountered during development, feedback from our testing and beta users suggests our solution addresses a real need. By combining screen time management with social and competitive elements, ScreenDime offers a unique approach to fostering deeper relationships and healthier habits. The journey from initial concept to working iOS app taught us invaluable lessons about user-centered design, iterative development, and the power of social accountability in behavior change.'}
      />
    </CaseStudyLayout>
  );
};
