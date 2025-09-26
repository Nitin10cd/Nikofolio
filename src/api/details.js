import { Sun } from "lucide-react";
const projectDetails = [
    {
    id: 1,
    title: 'LuminaSocial',
    details: 'LuminaSocial is a feature-rich social media web application built from scratch using the MERN stack. It allows authenticated users to create, edit, and delete posts, interact through likes, comments, bookmarks, follow/unfollow, and engage in one-to-one real-time messaging. The platform supports trending tags, customizable profiles, and secure authentication using JWT and bcryptjs, all while maintaining optimal and clean code on both frontend and backend.',
    version: '1.0',
    completionDate: '2025-07-31',
    logoText: 'LS',
    skills: ['React.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Tailwind CSS', 'JWT', 'bcryptjs'],
    theme: {
        accent: '#FFC107', // bright yellow
        shine: 'rgba(255, 193, 7, 0.4)',
    },
    icon: Sun,
    demoLink: 'https://www.youtube.com/watch?v=xxxxxxxx',
    githubLink: 'https://github.com/Nikhil2253/LuminaSocial',
    startDate: '2025-06-24',
    endDate: '2025-07-31',
    features: [
        'Posts: create, edit, delete text/media posts with tags',
        'Trending: popular tags displayed, select posts from tags',
        'Interactions: follow/unfollow, like/unlike, bookmark/remove, comment',
        'Real-time Messaging: one-to-one chat via Socket.IO',
        'Home: refreshable random set of posts',
        'Profile: profile image, cover image, description, editable with password security',
        'Authentication: secure JWT-based login with bcryptjs password hashing'
    ],
    goals: [
        'Write optimal and efficient code on both server and client sides',
        'Maintain clean, maintainable architecture throughout the project'
    ]
}
,
    {
    id: 2,
    title: 'Sorting Algorithms Visualizer',
    details: 'The Sorting Algorithm Visualizer is a React.js application that visualizes how various sorting algorithms operate on a dataset of 100 elements. The UI is styled with external CSS to provide a clear and interactive experience.',
    version: '1.0',
    completionDate: '2024-11-18',
    logoText: 'SAV',
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    theme: {
        accent: '#4CAF50', // green accent for visualization
        shine: 'rgba(76, 175, 80, 0.3)',
    },
    icon: null, // assign an icon if needed
    demoLink: '',
    githubLink: '',
    startDate: '2024-11-16',
    endDate: '2024-11-18',
    features: [
        'Merge Sort visualization',
        'Quick Sort visualization',
        'Bubble Sort visualization',
        'Insertion Sort visualization',
        'Selection Sort visualization',
        'Heap Sort visualization',
        'Radix Sort visualization',
        'Count Sort visualization'
    ],
    goals: [
        'Demonstrate how different sorting algorithms work in real-time',
        'Provide a clear, interactive, and educational user interface'
    ]
}
,
   {
    id: 3,
    title: 'Campus Connect',
    details: 'Campus Connect is a comprehensive college dashboard platform developed as a group project. It provides real-time chat, classroom management, events and notices, placement cell, blogs, and an admin dashboard for centralized campus communication and security.',
    version: '1.0',
    completionDate: '', // add actual completion date if available
    logoText: 'CC',
    skills: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'Socket.IO', 'AI Integration', 'MERN Stack', 'UI/UX Design'],
    theme: {
        accent: '#1976D2', // blue accent
        shine: 'rgba(25, 118, 210, 0.3)',
    },
    icon: null, // assign an icon if needed
    demoLink: '',
    githubLink: '',
    startDate: '', // add start date if available
    endDate: '',   // add end date if available
    features: [
        'Real-time Chat: one-to-one and group chat with colleagues and teachers',
        'Classroom: teachers can create classes, share text, images, videos, files, and assign timed MCQ tests with results for students and teachers',
        'Events and Notices: centralized list of upcoming events and notices with AI-powered event description generation',
        'Placement Cell: dashboard for real-time job openings and on-campus placement postings',
        'Blogs: students can create, edit, and tag blogs',
        'Admin Dashboard: manage campus communication with privileges to remove users, create events and announcements'
    ],
    goals: [
        'Develop a fully functional college dashboard integrating real-time communication, classroom management, and placement features',
        'Implement modular system design and maintain secure, efficient backend architecture',
        'Collaborate effectively within a group to divide tasks and complete features during hackathon'
    ],
    contributions: [
        {
            name: 'Nikhil Saxena',
            tasks: 'Realtime Chat, Admin Dashboard, Modelling and System Design, Debugging'
        },
        {
            name: 'Nitin Saxena',
            tasks: 'Classroom implementation, Placement Cell, Data flow setup, MCQ test feature'
        },
        {
            name: 'Ronak Varshney',
            tasks: 'Events and Notices dashboard with AI integration, Blogs implementation'
        },
        {
            name: 'Pratham Gupta',
            tasks: 'Designed the UI using Figma and Photoshop'
        }
    ]
}
,
   {
    id: 4,
    title: 'MyMBTI',
    details: 'MyMBTI is a fun project built to implement a Myers-Briggs Type Indicator (MBTI). It consists of 40 questions answered based on the user’s level of agreement, and it outputs a personality type from the 16 MBTI types. The project utilizes React.js and strong problem-solving skills to deliver an interactive personality test.',
    version: '1.0',
    completionDate: '2025-02-28',
    logoText: 'MBTI',
    skills: ['React.js', 'Problem Solving'],
    theme: {
        accent: '#9C27B0', // purple accent
        shine: 'rgba(156, 39, 176, 0.3)',
    },
    icon: null, // assign an icon if needed
    demoLink: '',
    githubLink: '',
    startDate: '2025-02-01',
    endDate: '2025-02-28',
    features: [
        '40-question interactive MBTI test',
        'Determines personality type out of 16 MBTI types based on user responses',
        'Dynamic result calculation and display based on user choices'
    ],
    goals: [
        'Practice problem-solving and logic implementation in React.js',
        'Create an interactive and fun user experience for personality testing'
    ]
}
,
   {
    id: 5,
    title: 'World Conqueror',
    details: 'World Conqueror is a web-based idle game simulator where players can create an account, select a country, and manipulate its economy and military to expand territories and grow national GDP. The project uses React.js for frontend state management with useReducer and Context API, Express.js for backend, Mongoose for CRUD operations and schema design, and React-Google-Charts for interactive geo visualization.',
    version: '1.0',
    completionDate: '2025-03-10',
    logoText: 'WC',
    skills: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'MERN Stack', 'State Management', 'Databases', 'Problem Solving'],
    theme: {
        accent: '#FF5722', // orange accent
        shine: 'rgba(255, 87, 34, 0.3)',
    },
    icon: null, // assign an icon if needed
    demoLink: '',
    githubLink: '', // to be updated
    startDate: '2025-02-23',
    endDate: '2025-03-10',
    features: [
        'Player account creation and country selection',
        'Manipulate country economy and military to expand territories',
        'Interactive geo chart visualization of countries using React-Google-Charts',
        'State management using React useReducer and Context API',
        'CRUD operations on backend database with Mongoose'
    ],
    goals: [
        'Create an interactive idle game with real-time state management',
        'Integrate frontend and backend seamlessly using MERN stack',
        'Provide educational insight into strategic resource management through gameplay'
    ]
}
,
  {
    id: 6,
    title: 'Hospital Management System',
    details: 'Hospital Management System (HMS) is a MERN stack-based application associated with Aligarh College of Engineering and Technology. It manages hospital operations for three types of users: Hospital/Admin, Doctor, and Patient, including appointment management, dashboards, patient history, and profile updates.',
    version: '1.0',
    completionDate: '2025-04-08',
    logoText: 'HMS',
    skills: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'MERN Stack', 'Problem Solving', 'Debugging'],
    theme: {
        accent: '#E91E63', // pink accent
        shine: 'rgba(233, 30, 99, 0.3)',
    },
    icon: null, // assign an icon if needed
    demoLink: '',
    githubLink: '',
    startDate: '2025-03-22',
    endDate: '2025-04-08',
    features: [
        'Three user types: Hospital/Admin, Doctor, and Patient',
        'Hospital dashboard with stats: gender ratio, problem vs patient graph, monthly appointments',
        'Hospital can add/remove doctors, assign, cancel, or reschedule appointments',
        'Doctors can accept/reject appointments and view past patients',
        'Patients can book appointments with specific doctors or hospitals and view medical history',
        'Registration and login for all users with fixed alphanumeric IDs',
        'Profile editing and password change for all users',
        'Real-time updates using MongoDB and Mongoose',
        'Data visualization using Recharts',
        'Styled with external CSS and React Styled Components'
    ],
    goals: [
        'Provide a fully functional hospital management platform for doctors, patients, and admin',
        'Ensure real-time data updates and efficient appointment management',
        'Implement interactive dashboards and visualizations for hospital statistics',
        'Build a secure and user-friendly system with proper authentication and profile management'
    ]
}
,
   {
    id: 7,
    title: 'Snake and Ladder',
    details: 'Snake and Ladder is a mini project where the game logic is implemented using DOM properties of HTML objects. The game follows all traditional rules, including moving up ladders, sliding down snakes, and using a dice to generate random numbers (1-6) for two players alternately.',
    version: '1.0',
    completionDate: '2024-01-01',
    logoText: 'SL',
    skills: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'Problem Solving'],
    theme: {
        accent: '#FF9800', // orange accent
        shine: 'rgba(255, 152, 0, 0.3)',
    },
    icon: null, // assign an icon if needed
    demoLink: '',
    githubLink: '',
    startDate: '2023-12-31',
    endDate: '2024-01-01',
    features: [
        'Two-player gameplay following traditional Snake and Ladder rules',
        'Dice rolls generate random numbers from 1-6',
        'Players move up ladders and down snakes according to the board',
        'Interactive gameplay implemented using DOM manipulation'
    ],
    goals: [
        'Implement game logic using DOM properties and JavaScript',
        'Provide a fully functional interactive board game experience in a web browser'
    ]
}
,
   {
    id: 8,
    title: 'Ludo Game',
    details: 'Ludo Game is a fully functional browser-based game implemented using JavaScript and DOM manipulation. It follows all traditional Ludo rules, supporting 4 players with 4 pieces each. The game includes features like opening on six or one, double chance, cutting opponents\' pieces if they are not on a safe spot, and determining the first player to reach the winning spot.',
    version: '1.0',
    completionDate: '2024-04-04',
    logoText: 'LUDO',
    skills: ['JavaScript', 'DOM Manipulation', 'Problem Solving'],
    theme: {
        accent: '#3F51B5', // indigo accent
        shine: 'rgba(63, 81, 181, 0.3)',
    },
    icon: null, // assign an icon if needed
    demoLink: '',
    githubLink: '',
    startDate: '2024-03-24',
    endDate: '2024-04-04',
    features: [
        'Supports 4 players with 4 pieces each',
        'Traditional Ludo rules: open on six or one, double chance on rolls',
        'Cutting opponent pieces if not on a safe spot',
        'Determines the first player to reach the winning spot',
        'Fully functional gameplay implemented using DOM manipulation in the browser'
    ],
    goals: [
        'Implement a fully interactive and playable Ludo game in the browser',
        'Use JavaScript and DOM manipulation to simulate traditional board game rules'
    ]
}
,
  {
    id: 9,
    title: 'MyTravelHub',
    details: 'MyTravelHub is a ticket booking web application developed as a mini project for the 5th semester at Aligarh College of Engineering and Technology. It is built on the MERN stack, using React.js for frontend design and data display from custom APIs, Express.js for creating RESTful APIs and handling data transfer, Bcrypt for authentication, and Mongoose for schema design and data storage in MongoDB.',
    version: '1.0',
    completionDate: '2024-11-08',
    logoText: 'MTH',
    skills: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'MERN Stack', 'Full-Stack Development', 'Problem Solving', 'Authentication'],
    theme: {
        accent: '#009688', // teal accent
        shine: 'rgba(0, 150, 136, 0.3)',
    },
    icon: null, // assign an icon if needed
    demoLink: '',
    githubLink: '',
    startDate: '2024-09-27',
    endDate: '2024-11-08',
    features: [
        'Frontend built with React.js displaying data from custom APIs',
        'Backend RESTful API created with Express.js for data handling',
        'User authentication using Bcrypt for secure login and signup',
        'Schema design and database operations handled with Mongoose and MongoDB',
        'Full-stack integration ensuring seamless data flow between frontend and backend'
    ],
    goals: [
        'Develop a fully functional ticket booking system using MERN stack',
        'Implement secure authentication and efficient data management',
        'Gain experience in full-stack development and problem-solving'
    ]
}

];

export default projectDetails;