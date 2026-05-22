export type ProjectDetailData = {
  projectType: string;
  fullDescription: string;
  keyLearnings: string[];
  contribution: string;
  screenshots: string[];
};

export const projectDetails: Record<number, ProjectDetailData> = {
  1: {
    projectType: "Internship Project",
    fullDescription: `The Visit Request Portal is an internal web application developed during my 2026 internship at Soudal NV to centralize and streamline visitor scheduling and management. Previously, visitor planning was handled through informal email communication and personal calendars, which made it difficult to maintain visibility, coordinate schedules, and track approvals. This application replaces that process with a structured digital workflow.

Key Features:
• Calendar-based booking with time blocks (Morning, Afternoon, Evening)
• Role-based access for Employee, Admin, Manager, and Operations users
• Structured approval and rejection workflows with comments
• Real-time in-app notifications using SignalR
• Email notifications via Microsoft Graph API
• Room checklist management for operations preparation
• Admin calendar management with block/day status control
• Reporting and statistics dashboard
• Complete logbook for audit tracking
• Azure deployment with CI/CD pipelines`,
    keyLearnings: [
      "Enterprise web application development with ASP.NET Core Razor Pages",
      "Real-time communication using SignalR for live updates",
      "Microsoft Graph API integration for email notifications",
      "Azure AD (Entra ID) authentication and role-based authorization",
      "Infrastructure as Code using Azure Bicep",
      "CI/CD pipeline setup with Azure DevOps",
      "Multi-environment deployment (Dev, QA, Production)",
      "Entity Framework Core with complex relationships",
    ],
    contribution: `I was responsible for the complete realization of this application from requirements to deployment.

Analysis & Design:
• Conducted requirement analysis with stakeholders
• Created use case diagrams and detailed descriptions
• Designed Figma prototypes for all user roles
• Modeled database with ERD and implemented with EF Core

Implementation:
• Built complete visit request management workflow
• Implemented calendar system with dynamic availability
• Developed admin dashboard with approval/rejection features
• Created real-time notification system using SignalR
• Integrated email notifications via Microsoft Graph
• Built room checklist functionality for operations
• Implemented reporting module with interactive charts
• Created logbook with advanced filtering
• Added user management with permission controls

Infrastructure & Deployment:
• Defined Azure infrastructure using Bicep templates
• Set up CI/CD pipelines in Azure DevOps
• Configured multi-environment deployment (Dev/QA/Prod)
• Integrated Azure Key Vault for secrets management
• Implemented Application Insights for monitoring`,
    screenshots: [
      "/assets/visit/1.png",
      "/assets/visit/2.png",
      "/assets/visit/3.png",
      "/assets/visit/4.png",
      "/assets/visit/5.png",
    ],
  },

  2: {
    projectType: "Internship Project",
    fullDescription: `The R&D Formulation Database is an additional MVP application developed during my Soudal internship after completing the main Visit Request Portal project.

This web-based system helps the R&D department manage chemical formulations in a structured way, replacing manual or fragmented tracking with a centralized database.

Key Features:
• 4-step wizard for formulation creation (admin, ingredients, production, tests)
• Ingredient composition with automatic weight calculations
• Parts calculator for maintaining ingredient ratios
• Production instruction management
• Dynamic test definitions with flexible field types
• Test result registration and tracking
• Bulk operations (add tests/results to multiple formulations)
• Advanced search with multiple criteria and operators
• Permission-based access control (View, Add, Edit, Delete, Tests)
• Copy existing formulations for efficiency
• Azure deployment with infrastructure as code`,
    keyLearnings: [
      "Complex data modeling for scientific/laboratory applications",
      "Dynamic form generation with configurable field types",
      "Bulk operations and grid-based data entry",
      "Advanced search with dynamic LINQ queries",
      "Permission-based authorization (granular access control)",
      "Multi-step wizard implementation",
      "Real-time calculation logic in JavaScript",
      "Reusing architectural patterns from previous project",
    ],
    contribution: `I developed this MVP application independently as additional work during the internship.

Analysis & Design:
• Gathered requirements from R&D department
• Created Figma prototypes for formulation workflows
• Designed use case diagram and ERD
• Planned database structure for flexible formulation data

Core Implementation:
• Built 4-step wizard for formulation creation
• Implemented ingredient composition with auto-calculation logic
• Created production instruction management
• Developed dynamic test definition system
• Built test result registration and tracking
• Implemented formulation detail view
• Added copy formulation functionality

Advanced Features:
• Developed advanced search with multiple criteria
• Built bulk test assignment feature
• Created bulk result entry with grid interface
• Implemented permission-based access control
• Added user management module
• Built test definition management interface

Infrastructure:
• Prepared Azure deployment configuration
• Created Bicep templates for infrastructure
• Designed database indexes for search performance
• Implemented EF Core migrations`,
    screenshots: [
      "/assets/rnd/1.png",
      "/assets/rnd/2.png",
      "/assets/rnd/3.png",
      "/assets/rnd/4.png",
      "/assets/rnd/5.png",
    ],
  },

  3: {
    projectType: "Team Project",
    fullDescription: `In this project, I worked as part of Team FusionForce on the CloudWay Integration Platform, a Proof-of-Concept designed to expose CloudWay's Logic Unit through a secure, scalable, and standardized integration layer.

The goal was to make the Logic Unit accessible to external systems (such as CRM or web applications) via a unified REST API, while supporting AI-based pre-processing and post-processing workflows. The platform allows integration administrators to configure endpoints, select AI processing models, define response modes (synchronous, webhook, agentic), monitor usage, and test integrations through an interactive Playground interface.

The system was built using React (TypeScript) for the management portal, NestJS for the backend integration layer, Prisma ORM with MySQL for data persistence, and AWS services including ECS Fargate, SQS, S3, RDS, Bedrock (Amazon Nova), CloudFront, and Cognito. The architecture follows an event-driven orchestration model with asynchronous AI job processing and full observability.`,
    keyLearnings: [
      "Event-Driven Architecture (SQS + Fan-In Synchronization)",
      "Integrating AI Services with Application Logic",
      "NestJS Backend Development with Prisma ORM",
      "Collaborating between AI and Cloud (CCS) team members",
    ],
    contribution: `My main responsibility was within the APP team, focusing on the backend integration layer and management portal. I contributed to designing and implementing the unified /ask API endpoint, request validation, Logic Unit call logging, and token usage tracking.

I worked on the database schema design using Prisma, modeling core entities such as Clients, Integrations, LogicUnitCalls, AIJobs, and CallAttachments. I implemented the orchestration logic that coordinates asynchronous AI preprocessing jobs, aggregates their outputs, and forwards structured case descriptions to the Logic Unit.

On the frontend side, I contributed to building the Integration Management Portal, including the Integrations page, Playground testing interface, Call History view, and Dashboard metrics. I ensured proper API contracts between frontend and backend and supported secure authentication and secret management practices.

Additionally, I collaborated closely with the AI and Cloud (CCS) teams to align on payload schemas, deployment pipelines, and AWS infrastructure setup, ensuring the full end-to-end PoC was deployed, secured, and operational in the cloud.`,
    screenshots: [
      "/assets/cloud/1.png",
      "/assets/cloud/2.jpg",
      "/assets/cloud/3.png",
      "/assets/cloud/4.png",
      "/assets/cloud/5.png",
      "/assets/cloud/6.png",
    ],
  },

  4: {
    projectType: "Team Project",
    fullDescription: `LegoLib is a full-stack web application developed for Ziekenhuis Geel to manage LEGO sets available for hospitalized children.

The hospital maintains a LEGO library where children can borrow sets to play with in their rooms. Previously, there was no tracking system, resulting in lost, damaged, or unreturned sets. LegoLib solves this by providing a centralized platform to manage LEGO inventory, borrowing requests, room delivery tracking, and return status monitoring.

Children can browse available LEGO sets and request one at a time. Staff members receive borrow requests, see the assigned hospital room, deliver the set, and update its status (returned, damaged, lost). Administrators manage LEGO sets, users, and system statistics through a secure dashboard.

Out of 10 teams, our project was selected as the winner of the Ziekenhuis Geel Innovation Challenge for its practical impact and well-executed solution.`,
    keyLearnings: [
      "Nx Monorepo Architecture (apps + libs) for scalable frontend development",
      "Angular (AnalogJS) + Vite configuration and environment management",
      ".NET 9 Web API setup with DI and clean/layered architecture (Application/Domain/Infrastructure)",
      "Auth0 JWT Authentication & Role-Based Authorization Policies",
      "MS Azure Deployment and CI/CD with GitHub Actions",
    ],
    contribution: `I worked as a full-stack developer on this project.

On the backend, I configured Auth0 JWT authentication and implemented role-based authorization policies (Admin, SubAdmin, Staff). I ensured secure access control across API endpoints and enforced permission rules for different user roles.

On the frontend, I developed the Admin dashboard where administrators can:
• Add, edit, and delete LEGO sets
• Manage user accounts (Staff and SubAdmins)
• View borrowing statistics and system overview

I also contributed to backend logic and API endpoints for LEGO set management and borrowing workflows.

Additionally, I implemented CI/CD pipelines in Microsoft Azure to automatically build and deploy the application across Development, Test, and Production environments.`,
    screenshots: [
      "/assets/lego/1.png",
      "/assets/lego/2.jpeg",
      "/assets/lego/3.jpeg",
      "/assets/lego/4.png",
    ],
  },

  5: {
    projectType: "Team Project",
    fullDescription: `In this project, I worked on developing a full-stack web application tailored for managing the training session assignments of Thomas More students. The platform allows students to log in, join teams, and either select an assignment topic or propose a new one along with a client. Students can upload assignment-related documents for their assigned coaches and clients to review. Coaches and clients also have dedicated accounts through which they can view and manage their respective teams and oversee the assignment progress.

This application was built using Laravel, Livewire, and Tailwind CSS. My key responsibilities included designing and implementing the student flow and dashboard, enabling students to join pre-approved teams or create new teams with associated topics and clients.`,
    keyLearnings: [
      "Version Control with GitHub",
      "Team Collaboration",
      "Modular Development",
      "Problem-Solving in Collaboration",
    ],
    contribution: `My main focus was on developing the complete student flow. I implemented the logic and design for students to join pre-approved teams or create new teams with proposed topics and clients. I created a dynamic student dashboard that visually guides users through assignment stages such as team selection, session scheduling, concept submission, and self-reflection. I handled edge cases like rejected topic resubmissions and implemented progress tracking using step indicators.

I also worked on the form management system used by admins, coaches, and clients. I built multi-step forms with tabbed interfaces for better user experience and organized data collection. These forms support conditional layouts based on user type and are validated both on the client and server sides. This helped ensure data consistency and ease of maintenance across the platform.`,
    screenshots: [
      "/assets/eduw/1.png",
      "/assets/eduw/2.png",
      "/assets/eduw/3.png",
    ],
  },

  6: {
    projectType: "Individual Project",
    fullDescription: `TravelBook is a social media platform for travel enthusiasts. I worked on this individual TALL stack project and created an exciting web application that brings travel enthusiasts together to share their journeys, discover new destinations, and connect with like-minded explorers.

Features:
• Share Travel Experiences: Users can create posts with descriptions and photos to showcase their adventures
• Interactive Feeds: Like, comment, and engage with posts
• Notifications: Stay updated with follow requests, likes, and comments
• Search and Filters: Discover users and posts by location or interests
• Weather Integration: Get 5-day weather forecasts for your favorite destinations
• Dark Mode: Browse comfortably with a dark mode feature`,
    keyLearnings: [
      "Full-Stack Development with TALL Stack",
      "Responsive Design",
      "Handling complex database relationships",
      "Implementing real-time features using Livewire",
      "Laravel Development",
      "Database Design",
      "User Authentication",
      "File Uploads",
    ],
    contribution: `I developed this project as part of my web development course. I designed and implemented all features including user authentication, profile management, post creation, and social interactions. I handled all aspects of the application from database schema design to frontend UI implementation.`,
    screenshots: [
      "/assets/tb/1.png",
      "/assets/tb/2.png",
      "/assets/tb/3.png",
      "/assets/tb/4.png",
      "/assets/tb/5.png",
      "/assets/tb/6.png",
      "/assets/tb/7.png",
    ],
  },

  7: {
    projectType: "Team Project",
    fullDescription: `DinoDL is a deep learning project focused on classifying dinosaur images into 7 categories using TensorFlow and Keras.

We explored multiple models including a custom CNN and transfer learning with pretrained architectures (EfficientNet, ResNet, MobileNet, etc). Applied preprocessing techniques like resizing, augmentation, and normalization. Evaluated performance using confusion matrices and visualized training curves. Submitted final predictions via Kaggle.`,
    keyLearnings: [
      "Designed and trained CNN models from scratch",
      "Applied data augmentation techniques for generalization",
      "Implemented transfer learning using EfficientNet, ResNet, DenseNet, MobileNet",
      "Visualized model performance with training curves and confusion matrices",
      "Used modular function-based approach for repeatable training",
      "Submitted predictions to Kaggle for evaluation",
    ],
    contribution: `I worked specifically on the transfer learning part and refined pre-trained models for our requirements. I led data preprocessing, implemented training and evaluation pipelines, and contributed to the comparison of pretrained models.

I also visualized the results using confusion matrices and loss/accuracy graphs and created the final Kaggle submission file.`,
    screenshots: [
      "/assets/dl/1.png",
      "/assets/dl/2.png",
      "/assets/dl/3.png",
      "/assets/dl/4.png",
      "/assets/dl/5.png",
      "/assets/dl/6.png",
    ],
  },

  8: {
    projectType: "Team Project",
    fullDescription: `The project was a cinema-themed website for a client, Starlight Cinema. It consisted of a full-stack web application split into:
• A front-end site for public users to browse movies, events, showtimes, and more
• A back-end API for handling data like movie details, FAQ, newsletters, and showtimes`,
    keyLearnings: [
      "Advanced experience with Bootstrap customization, responsive design, and JavaScript-based interactivity",
      "Developed better understanding of dynamic content rendering and API integration",
      "Gained hands-on experience with frontend-backend communication, form handling, and data submission via POST requests",
      "Learned how to handle project collaboration through Git and address styling conflicts using specific CSS class naming",
    ],
    contribution: `I played a key role in multiple core features of the website and overcame significant front-end and JavaScript challenges (e.g., carousel sliders, dynamic content loading).

Front-end Development:
• Created two complete HTML pages: Now Showing & Membership
• Carousel Slider (used on both homepage & Now Showing page)
• Tabs Navigation for showtimes (Now Showing page)
• Accordion & Forms (Membership page)

Back-end Development:
• GET /now_playing — Retrieves movie details for Now Showing section
• GET /show_time?day=&month= — Fetches showtimes based on selected day and month
• POST /new_customer — Submits membership form data to the database

JavaScript Functionality:
• Function nowPlaying — Loads movies dynamically in chunks of 5 using a "Load More" button
• Function showTime — Fetches and displays showtimes dynamically in tabs
• POST Function addMember(...) — Sends membership form data to the back-end
• Function popUpWindow(data) — Displays a confirmation pop-up after a successful form submission`,
    screenshots: [
      "/assets/sl/1.png",
      "/assets/sl/2.png",
      "/assets/sl/3.png",
      "/assets/sl/4.png",
    ],
  },

  9: {
    projectType: "Team Project",
    fullDescription: `This project was based on finding functional and non-functional requirements for a web application and designing the app in Figma for a client.

The project is a centralized administrative portal for international students enrolling at Thomas More University. It aims to replace multiple disconnected systems and streamline essential processes including:
• Student nomination, registration, and admission
• Course enrollment, housing, and buddy assignments
• Creation and signing of Online Learning Agreements (OLA)
• Real-time coordination among students, international coordinators, admins, and home institutions

This solution improves transparency, reduces manual workload, and enhances the onboarding experience for both degree-seeking and exchange students.`,
    keyLearnings: [
      "Gained deep insights into requirements engineering, especially functional decomposition and user-centric design",
      "Developed hands-on expertise in mapping real-world processes to digital workflows",
      "Strengthened skills in Figma prototyping and UI/UX planning",
      "Understood the importance of workflow optimization and multi-actor system behavior",
      "Learned to work in sprints and manage tasks using Jira",
    ],
    contribution: `I specifically contributed to the International Coordinator and Admin use cases within the system. These are highly critical roles for operational management.

I helped design and define workflows for:
• Approving course enrollments
• Viewing student progress and files
• Managing nominations and communication
• Signing and sending Online Learning Agreements (OLA)
• Managing discussion forums (Connect & Ask)
• Approving new user registrations
• Managing housing, including CRUD operations for landlords and dorms
• Managing users, buddies, and academic programs (courses)
• Ensuring administrative workflows follow university regulations and GDPR compliance`,
    screenshots: [
      "/assets/smd/1.png",
      "/assets/smd/2.png",
      "/assets/smd/3.png",
      "/assets/smd/4.png",
      "/assets/smd/5.png",
    ],
  },

  10: {
    projectType: "Individual Project",
    fullDescription: `This project is an interactive dashboard designed for tourists to help them find the best and most budget-friendly Airbnb listings across major Belgian cities — Brussels, Antwerp, and Ghent.

The dashboard includes several key sections:
• A Home Dashboard summarizing total listings, total hosts, cheapest city, highest rated city, and average price per night
• A Top Rated Listings sheet that maps top-rated listings, compares prices and ratings, and visualizes spread through box plots
• A Cheapest Options section exploring average prices per room type, city, and time (weekends/public holidays/months), along with a sortable room-price table
• An Explore Cities sheet for side-by-side city comparisons including price, ratings, superhost presence, and number of listings
• A Where to Stay sheet that identifies high-rated listings under €30 per night, with filtering options

The project was built using Qlik Sense with various set expressions for filtering and aggregating data.`,
    keyLearnings: [
      "Mastered data visualization techniques using Qlik Sense",
      "Learned to use set expressions to isolate data and perform complex aggregations",
      "Developed skills in map visualization and multi-sheet dashboard design",
      "Understood patterns in seasonal pricing and rating distribution for Airbnb listings",
      "Practiced user-centric design for travel-based analytics",
    ],
    contribution: `I built the entire dashboard independently using Qlik Sense. My contributions include:

• Designing the multi-sheet layout and determining relevant KPIs for tourists
• Implementing set expressions to isolate selections (e.g., average price on weekends/public holidays)
• Creating point layers to filter and highlight listings under €30 with high ratings
• Using visualizations like box plots, combo charts, and map layers to provide deep insights
• Enabling interactive filters by city, room type, and time periods
• Optimizing UX to help tourists make smart booking decisions`,
    screenshots: [
      "/assets/staysc/1.png",
      "/assets/staysc/2.png",
      "/assets/staysc/3.png",
      "/assets/staysc/4.png",
      "/assets/staysc/5.png",
    ],
  },

  11: {
    projectType: "Individual Project",
    fullDescription: `This data science project involved scraping and analyzing lineup data from major Belgian festivals including Tomorrowland, Rock Werchter, Pukkelpop, and Graspop Metal Meeting. The goal was to uncover trends and insights in festival performances over the years.

Web scraping was executed using BeautifulSoup and Selenium to gather detailed festival lineup data. Applied comprehensive data cleaning, normalization, and handling of missing data to prepare the dataset for analysis. Conducted exploratory data analysis (EDA) to identify key trends, answering multiple analytical questions about artist appearances, festival continuity, and lineup evolution. Presented findings through an interactive Jupyter notebook clearly outlining the analytical process and insights.`,
    keyLearnings: [
      "Advanced web scraping techniques using BeautifulSoup and Selenium",
      "Data normalization and cleaning using Regex and Python",
      "Exploratory data analysis (EDA) and data visualization",
      "Formulating analytical questions based on scraped data",
      "Reporting insights effectively using Jupyter notebooks",
    ],
    contribution: `I performed the entire data collection process through web scraping, cleaned and normalized the data, formulated meaningful analytical questions, executed detailed exploratory data analysis, and prepared an insightful report to clearly communicate findings.`,
    screenshots: [
      "/assets/ds/1.png",
      "/assets/ds/2.png",
    ],
  },

  12: {
    projectType: "Individual Project",
    fullDescription: `This project is a Windows Forms-based Car Management System designed using C# for small businesses to manage car inventory. The application allows users to:
• Add, view, delete, reset, and search car records
• Track car details such as model, mileage, color, fuel type, transmission, and price
• Generate unique car IDs on each entry
• Print car data for documentation purposes
• Save and retrieve data using a local SQLite database

The application has been deployed with GitHub Actions using a CI/CD pipeline that builds the project and provides a downloadable artifact.`,
    keyLearnings: [
      "Built a desktop application using Windows Forms and C#",
      "Worked with SQLite for local data storage and retrieval",
      "Implemented search, delete, reset, and print functionality in the application",
      "Used GitHub Actions to create a CI/CD pipeline and generate build artifacts",
      "Practiced object-oriented design with inheritance (base class Vehicle, derived class for Car)",
      "Wrote modular methods for database connection, query execution, and form initialization",
    ],
    contribution: `I independently developed the full application, including:

• UI design and functionality with Windows Forms
• Randomized car ID generation and user-friendly dropdown selections
• Integration with SQLite using custom SQL commands and query methods
• Core features like Add, Reset, Delete, Print, and Search
• Setup of CI/CD pipeline using GitHub Actions for build and deployment
• Creation of a GitHub repository and workflow YAML file for auto-building the application and generating artifacts`,
    screenshots: [
      "/assets/sec.png",
    ],
  },

  13: {
    projectType: "Individual Project",
    fullDescription: `This project is a Spring Boot web application developed to manage daily store operations. The system provides features to:
• Add, view, and manage clients, employees, stores, and their respective sections
• Track client details such as name, birth year, visit frequency, and shopping lists
• Manage employee information including joining date and job student status
• Organize stores into sections (e.g., Fruit, Bread, Vegetables)
• Generate unique card numbers for client registration
• Search for specific sections across all stores
• Assign employees as contact persons for clients
• Assign employees as responsible persons for store sections

The frontend is built using Thymeleaf templates and Bootstrap for responsive design. The application follows object-oriented principles using a base class Person with derived classes Client and Employee.`,
    keyLearnings: [
      "Developed a web application using Spring Boot and Java",
      "Integrated Thymeleaf templates for server-side rendered dynamic pages",
      "Applied object-oriented principles including inheritance and encapsulation",
      "Built a responsive UI using Bootstrap for multi-device compatibility",
      "Designed and implemented complex entity relationships (clients, employees, stores, sections)",
      "Added search functionality across various data entities",
      "Used Spring MVC architecture with controllers, models, and views",
      "Handled forms and processed user inputs via request parameters",
    ],
    contribution: `I solely developed the entire application, including:

• Designing and implementing the domain model with appropriate inheritance structure
• Creating a responsive frontend using Thymeleaf and Bootstrap
• Building controllers for managing user interactions and business logic
• Developing search features for store sections
• Implementing client registration with automated card number generation
• Managing shopping lists associated with each client
• Setting up relational logic to associate employees with clients and store sections
• Handling full CRUD operations for stores, employees, clients, and sections`,
    screenshots: [
      "/assets/onepoint/1.png",
      "/assets/onepoint/2.png",
      "/assets/onepoint/3.png",
    ],
  },

  14: {
    projectType: "Individual Practice Project",
    fullDescription: `This full-stack project integrates a .NET Core Web API backend with a React frontend for managing and displaying MotoGP-related information including teams, riders, races, and sponsors.

Built comprehensive API endpoints with proper HTTP methods and status codes. Utilized Entity Framework Core for ORM and database migrations with SQL Server. Created DTOs and implemented AutoMapper for clear data transfer between layers. Developed React frontend using React Router for client-side routing and Axios for API integration. Structured the application as a Single Page Application (SPA) with reusable components and responsive layout.`,
    keyLearnings: [
      "Developed .NET Core Web API endpoints following REST principles",
      "Implemented database management and migrations using Entity Framework Core",
      "Designed DTOs and used AutoMapper for efficient entity-to-DTO mapping",
      "Integrated React with .NET API using Axios and managed async data fetching",
      "Configured and handled routing using React Router for a seamless SPA experience",
      "Applied best practices for component structure and layout management in React",
    ],
    contribution: `I created the entire backend API using .NET, implemented data modeling and migrations with EF Core, structured data handling using DTOs and AutoMapper, and developed various endpoints for data retrieval and interaction.

On the frontend, I set up the React SPA, managed routing with React Router, integrated Axios for data fetching, and built reusable components for a responsive UI.`,
    screenshots: [
      "/assets/motogp/1.png",
      "/assets/motogp/2.png",
      "/assets/motogp/3.png",
      "/assets/motogp/4.png",
      "/assets/motogp/5.png",
    ],
  },

  15: {
    projectType: "Individual Practice Project",
    fullDescription: `This is a project management web application that I built to practice my skills. The application allows users to create, manage, and track projects with task functionality. Users can add new projects with titles, descriptions, and due dates, create tasks within projects, and organize their workflow through an intuitive sidebar interface. The application features a clean, modern UI with gradient borders and responsive design elements.

Built using vanilla JavaScript, Bootstrap 5, and Sass for styling, this project demonstrates fundamental web development skills including DOM manipulation, event handling, local state management, and responsive design principles.`,
    keyLearnings: [
      "DOM Manipulation with Vanilla JavaScript",
      "Event-Driven Programming",
      "Sass/SCSS Preprocessing",
      "Bootstrap 5 Framework",
      "Responsive Web Design",
      "Build Tools (Gulp)",
      "Version Control with Git",
    ],
    contribution: `I developed the complete project management application from scratch. My main contributions include implementing the core functionality for project creation, editing, and deletion through dynamic form handling. I built the task management system that allows users to add and remove tasks within projects, with real-time DOM updates and event delegation.

I designed and implemented the responsive sidebar navigation with alternating gradient borders for visual appeal. The styling system uses Sass variables and mixins for maintainable code, creating a cohesive design language throughout the application. I set up the build process using Gulp for Sass compilation, autoprefixing, and browser synchronization during development.`,
    screenshots: [
      "/assets/pm/1.png",
      "/assets/pm/2.png",
      "/assets/pm/3.png",
    ],
  },

  16: {
    projectType: "Individual Practice Project",
    fullDescription: `This interactive web-based game allows two players to compete by rolling dice and accumulating scores. The first player to reach the target score wins!

Built using vanilla JavaScript for game logic and DOM manipulation. Styled with CSS for an engaging and responsive user interface. Structured with semantic HTML for accessibility and clarity. Implements dynamic score tracking, turn management, and reset functionality for seamless gameplay.`,
    keyLearnings: [
      "Developed interactive game logic using JavaScript, including random dice rolls and turn-based mechanics",
      "Manipulated the DOM to update scores and visuals in real time",
      "Applied modular coding practices to separate concerns (game logic, UI updates, event handling)",
      "Designed responsive and visually appealing layouts using CSS",
      "Handled user events (clicks, resets) for smooth gameplay experience",
      "Practiced debugging and browser developer tools for rapid iteration",
    ],
    contribution: `I designed and implemented the complete two-player dice game, writing all JavaScript code for game logic, event handling, and DOM updates.

Created and styled the user interface with HTML and CSS, focusing on responsiveness and player experience.`,
    screenshots: [
      "/assets/Game.jpg",
      "/assets/d1.png",
    ],
  },

  17: {
    projectType: "Personal Project",
    fullDescription: `This is the first version of my personal portfolio, built as a React Single Page Application before the current Next.js version you are looking at now. It covers the same content — bio, skills, experience, and all projects — but with a different visual style and layout.

The site uses React with hash-based routing (React Router), allowing navigation between sections without full page reloads. It is deployed on GitHub Pages and served as my primary portfolio before I rebuilt it with Next.js, TypeScript, and Tailwind CSS.

Comparing the two versions shows how my approach to frontend development has evolved — from a React SPA with Bootstrap to a modern Next.js 15 App Router application with TypeScript, Framer Motion animations, an AI-powered chatbot, and server-side rendering.`,
    keyLearnings: [
      "Building a complete SPA with React and hash-based routing",
      "Component-based architecture and reusable UI patterns",
      "Responsive design and layout with Bootstrap/CSS",
      "Deploying a React app to GitHub Pages",
      "Structuring a portfolio project from scratch",
    ],
    contribution: `I designed and developed the entire portfolio independently — from planning the layout and sections to writing every component and deploying it to GitHub Pages. This project was my first significant React project and established the foundation for the current Next.js portfolio.`,
    screenshots: [
      "/assets/react-portfolio/1.png",
      "/assets/react-portfolio/2.png",
      "/assets/react-portfolio/3.png",
    ],
  },
};
