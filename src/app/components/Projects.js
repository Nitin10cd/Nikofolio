import React, { useState } from 'react';
import { Building2, Sparkles, Globe, Stethoscope, Dices, Trophy, Ticket, Sun, BarChart, Github, PlayCircle } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'LuminaSocial',
        details: 'This project stands as a meticulously crafted social platform, offering users a sophisticated and streamlined environment for real-time interaction and community engagement. Its architectural integrity ensures a seamless user experience, underpinned by robust back-end systems.',
        version: '1.0',
        completionDate: '2024-07-31',
        logoText: 'LS',
        skills: ['React.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Tailwind'],
        theme: {
            accent: '#FFC107',
            shine: 'rgba(255, 193, 7, 0.4)',
        },
        icon: Sun,
        demoLink: 'https://www.youtube.com/watch?v=xxxxxxxx', 
        githubLink: 'https://github.com/Nikhil2253/LuminaSocial', 
    },
    {
        id: 2,
        title: 'Sorting Algorithm Visualizer',
        details: 'This project is a dynamic sorting algorithm visualiser, designed to illustrate complex sorting principles through clear and interactive animations. The platform provides a compelling visual aid for understanding algorithmic efficiency and performance, making it a valuable educational tool.',
        version: '1.0',
        completionDate: '2024-11-16',
        logoText: 'SAV',
        skills: ['React.js', 'Algorithm', 'Javascript', 'Problem Solving'],
        theme: {
            accent: '#3182CE',
            shine: 'rgba(144, 205, 244, 0.4)',
        },
        icon: BarChart,
        demoLink: 'https://www.youtube.com/watch?v=xxxxxxxx',
        githubLink: 'https://github.com/Nikhil2253/Sorting_Algo_Visualizism-',
    },
    {
        id: 3,
        title: 'Campus - Connect',
        details: 'This award-winning project is a cutting-edge college dashboard platform that redefines campus communication. Built during a 36-hour inter-college hackathon, it seamlessly connects students, teachers, and admins in real-time, combining learning, announcements, placements, and collaboration into one sleek ecosystem.',
        version: '1.5',
        completionDate: '2025-04-29',
        logoText: 'CC',
        skills: ['React.js', 'Express.js', 'MongoDB', 'Socket.IO', 'OpenAI API'],
        theme: {
            accent: '#6B46C1',
            shine: 'rgba(183, 148, 244, 0.4)',
        },
        icon: Building2,
        demoLink: 'https://www.youtube.com/watch?v=xxxxxxxx',
        githubLink: 'https://github.com/Nikhil2253/Campus-Connect',
    },
    {
        id: 4,
        title: 'MyMBTI',
        details: 'MyMBTI is a fun project built to create a personal Myers-Briggs Type Indicator. It showcases problem-solving skills and React.js to build a dynamic personality test with 40 questions. It provides users with a result based on their choices, out of 16 possible personalities.',
        version: '1.0',
        completionDate: '2025-02-28',
        logoText: 'MB',
        skills: ['Javascript', 'Problem Solving', 'React.js'],
        theme: {
            accent: '#65FE00',
            shine: 'rgba(159, 255, 150, 0.4)',
        },
        icon: Sparkles,
        demoLink: 'https://www.youtube.com/watch?v=xxxxxxxx',
        githubLink: 'https://github.com/Nikhil2253/MyMBTI',
    },
    {
        id: 5,
        title: 'World Conqueror',
        details: 'World Conqueror is a web-based idle game simulator where players can create an account, select a country, and manipulate its economy and military to expand territories and grow their national GDP. This project showcases proficiency in full-stack development and interactive data visualization.',
        version: '1.0',
        completionDate: '2025-03-10',
        logoText: 'WC',
        skills: ['React.js', 'Express.js', 'Mongoose', 'React-Google-Charts'],
        theme: {
            accent: '#FF000D',
            shine: 'rgba(255, 90, 100, 0.4)',
        },
        icon: Globe,
        demoLink: 'https://www.youtube.com/watch?v=xxxxxxxx',
        githubLink: 'https://github.com/Nikhil2253/WorldGame',
    },
    {
        id: 6,
        title: 'Hospital Management System',
        details: 'Associated with Aligarh College of Engineering and Technology, this project is a comprehensive hospital management system built using the MERN stack. It features three user roles—Hospital Admin, Doctor, and Patient—and provides dashboards for managing appointments, patient history, and statistical data visualization.',
        version: '1.0',
        completionDate: '2025-04-30',
        logoText: 'HMS',
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'recharts'],
        theme: {
            accent: '#00C8FE',
            shine: 'rgba(170, 242, 239, 0.4)',
        },
        icon: Stethoscope,
        demoLink: 'https://www.youtube.com/watch?v=xxxxxxxx',
        githubLink: 'https://github.com/Nikhil2253/Hospital-Management-System--HMS-NICK',
    },
    {
        id: 7,
        title: 'Snake and Ladder Game',
        details: 'A nostalgic game built with pure JavaScript, showcasing proficiency in problem-solving and dynamic DOM manipulation. This project was a fun exercise in creating an interactive, browser-based game from scratch, highlighting core web development skills.',
        version: '1.0',
        completionDate: '2023-12-31',
        logoText: 'SNL',
        skills: ['JavaScript', 'Problem Solving', 'DOM Manipulation', 'HTML', 'CSS'],
        theme: {
            accent: '#FFA500',
            shine: 'rgba(255, 165, 0, 0.4)',
        },
        icon: Dices,
        demoLink: 'https://www.youtube.com/watch?v=xxxxxxxx',
        githubLink: 'https://github.com/Nikhil2253/SNAKE-AND-LADDER',
    },
    {
        id: 8,
        title: 'Ludo Game',
        details: 'A classic game built for the web, demonstrating the application of core programming concepts and logic. The project focuses on creating an engaging user experience with intuitive controls and real-time game state management.',
        version: '1.0',
        completionDate: '2024-04-04',
        logoText: 'L',
        skills: ['JavaScript', 'DOM manipulation', 'HTML', 'CSS', 'Problem Solving'],
        theme: {
            accent: '#FF007F',
            shine: 'rgba(255, 192, 203, 0.4)',
        },
        icon: Trophy,
        demoLink: 'https://www.youtube.com/watch?v=xxxxxxxx',
        githubLink: 'https://github.com/Nikhil2253/',
    },
    {
        id: 9,
        title: 'MyTravelHub',
        details: 'A mini-project created for an academic assessment, MyTravelHub is a full-stack MERN application that serves as a ticket booking site. It showcases key skills in developing RESTful APIs, handling user authentication with Bcrypt, and using Mongoose for robust data schema design.',
        version: '1.0',
        completionDate: '2024-11-08',
        logoText: 'MTH',
        skills: ['React', 'Express.js', 'Mongoose', 'RESTful API'],
        theme: {
            accent: '#1A202C',
            shine: 'rgba(160, 174, 192, 0.4)',
        },
        icon: Ticket,
        demoLink: 'https://www.youtube.com/watch?v=xxxxxxxx',
        githubLink: 'https://github.com/Nikhil2253',
    },
];

const ProjectCard = ({ project }) => {
    const { theme, icon: Icon } = project;
    const logoStyle = {
        WebkitTextStroke: `2px ${theme.accent}`,
        color: 'transparent',
    };

    const [shinePosition, setShinePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const cardRect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.y; 
        setShinePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            className={`group relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl p-0 shadow-xl transition-transform duration-300 hover:scale-105`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          
            <div
                className={`absolute inset-0 z-0 transition-opacity duration-300`}
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(100px circle at ${shinePosition.x}px ${shinePosition.y}px, ${theme.shine}, transparent)`,
                }}
            ></div>

      
            <div className={`relative z-10 w-full rounded-2xl font-sans flex flex-col`}>

             
                <div className={`flex justify-between items-center p-4 rounded-t-[18px]`}>
                    <div className="flex items-center gap-2">
                        <Icon size={24} color={`${project.theme.accent}`} />
                        <h2 className="text-[15px] font-bold tracking-wide text-gray-800">{project.title}</h2>
                    </div>
                    <div className="text-right text-sm text-gray-600 leading-tight">
                        <p className="font-medium">V. {project.version}</p>
                    </div>
                </div>

           
                <div className="relative w-full h-[220px] overflow-hidden mx-auto px-6">
                 
                    <div
                        className={`absolute inset-0`}
                        style={{
                            background: `radial-gradient(circle, #ffffff, ${theme.accent}33 80%)`,
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
                    <div className="absolute inset-0 flex justify-center items-center z-20">
                        <div className="text-8xl font-bold tracking-tighter" style={logoStyle}>{project.logoText}</div>
                    </div>
                </div>

                
                <div className={`p-4 rounded-b-[18px] flex-grow flex flex-col justify-between`}>
                    
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {project.details}
                        </p>
                    </div>

                    
                    <div className="mt-2 text-center">
                        <h4 className={`text-sm font-bold text-gray-800 mb-2`}>Skills</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                            {project.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 rounded-full text-xs font-medium text-white shadow-md transition-transform duration-200 hover:scale-105"
                                    style={{ backgroundColor: theme.accent }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

     
                <div className="flex justify-between items-center p-4">
                   
                    <a
                        href="/details"
                        className="flex-grow text-center text-sm font-bold text-white py-2 rounded-[10px] transition-colors bg-gray-900 duration-300 hover:bg-opacity-80"
                    >
                        Details
                    </a>

                   
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 p-2 rounded-full text-white bg-blue-400 transition-transform duration-200 hover:scale-110"
                            title="Watch Demo Video"
                        >
                            <PlayCircle size={20} />
                        </a>
                    )}

                
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 p-2 rounded-full bg-black text-white transition-transform duration-200 hover:scale-110"
                            title="View GitHub Code"
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default App;