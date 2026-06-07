// portfolioData.ts - All portfolio data for Nitin Dubey

import { ProfileBanner, TimelineItem, Project, Certification, ContactMe, Skill } from '../types';

// ============ PROFILE BANNER ============
export const profileBannerData: ProfileBanner = {
  backgroundImage: { url: '' },
  headline: 'Nitin Dubey — CS Engineering Student & Developer',
  resumeLink: {
    url: 'https://github.com/NitinDubey472',
  },
  linkedinLink: 'https://linkedin.com/in/nitindubey7',
  profileSummary:
    'Computer Science Engineering student with hands-on experience in software development, machine learning, and IoT systems. Strong problem-solving ability with a customer-first mindset and a passion for learning new technologies. Proven experience working in collaborative environments through internships, hackathons, and project exhibitions.',
};

// ============ SKILLS ============
export const skillsData: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming Languages', description: 'Machine Learning, Data Analysis, Scripting', icon: 'FaPython' },
  { name: 'Java', category: 'Programming Languages', description: 'Object-Oriented Programming, Android Development', icon: 'FaJava' },
  { name: 'JavaScript', category: 'Programming Languages', description: 'Web Development, React Native, Frontend', icon: 'SiJavascript' },
  { name: 'C', category: 'Programming Languages', description: 'System Programming, Data Structures', icon: 'SiC' },
  { name: 'C++', category: 'Programming Languages', description: 'Competitive Programming, DSA', icon: 'SiCplusplus' },
  { name: 'SQL', category: 'Programming Languages', description: 'Database Queries, MySQL, Data Management', icon: 'SiMysql' },

  // Technologies & Frameworks
  { name: 'React Native', category: 'Technologies & Frameworks', description: 'Cross-platform Mobile App Development', icon: 'FaReact' },
  { name: 'Firebase', category: 'Technologies & Frameworks', description: 'Real-time Database, Authentication, Hosting', icon: 'SiFirebase' },
  { name: 'Machine Learning', category: 'Technologies & Frameworks', description: 'Decision Tree, Random Forest, CNN, Deep Learning', icon: 'FaPython' },
  { name: 'IoT Systems', category: 'Technologies & Frameworks', description: 'Raspberry Pi, Arduino, Home Automation', icon: 'SiArduino' },

  // Tools & Platforms
  { name: 'Git', category: 'Tools & Platforms', description: 'Version Control, Collaboration, GitHub', icon: 'FaGitAlt' },
  { name: 'VS Code', category: 'Tools & Platforms', description: 'Primary IDE for Development', icon: 'SiVisualstudiocode' },
  { name: 'Android Studio', category: 'Tools & Platforms', description: 'Android & React Native Development', icon: 'SiAndroidstudio' },
  { name: 'MySQL Workbench', category: 'Tools & Platforms', description: 'Database Design & Administration', icon: 'SiMysql' },
  { name: 'Arduino IDE', category: 'Tools & Platforms', description: 'IoT & Embedded Systems Programming', icon: 'SiArduino' },

  // Core Strengths
  { name: 'Problem Solving', category: 'Core Strengths', description: 'Analytical thinking & debugging complex issues', icon: 'FaCode' },
  { name: 'Communication', category: 'Core Strengths', description: 'Effective team collaboration & presentations', icon: 'SiImessage' },
  { name: 'Teamwork', category: 'Core Strengths', description: 'Cross-functional collaboration in internships & hackathons', icon: 'FaHandsHelping' },
  { name: 'Adaptability', category: 'Core Strengths', description: 'Quick learner in fast-paced environments', icon: 'FaRocket' },
  { name: 'Debugging', category: 'Core Strengths', description: 'Systematic code analysis & issue resolution', icon: 'FaBug' },
];

// ============ TIMELINE (WORK EXPERIENCE & EDUCATION) ============
export const timelineData: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Exaflair Pvt. Ltd.',
    title: 'React Native Developer Intern',
    techStack: 'React Native, Firebase, JavaScript',
    summaryPoints: [
      'Developed responsive user interfaces for a crypto wallet mobile application.',
      'Collaborated with team members to improve user experience and application usability.',
      'Participated in debugging, testing, and iterative feature enhancement.',
    ],
    dateRange: 'Jun 2025 – Aug 2025',
  },
  {
    timelineType: 'work',
    name: 'IIIT Una',
    title: 'Machine Learning Intern',
    techStack: 'Python, Scikit-learn, Pandas, NumPy',
    summaryPoints: [
      'Developed machine learning models using Decision Tree and Random Forest algorithms.',
      'Performed data preprocessing, analysis, and model optimization using Python.',
      'Presented findings and collaborated effectively within the project team.',
    ],
    dateRange: 'May 2024 – Jul 2024',
  },
  {
    timelineType: 'education',
    name: 'Chandigarh University',
    title: 'B.E. in Computer Science Engineering',
    techStack: '',
    summaryPoints: [
      'CGPA: 7.34',
      'Active participant in hackathons and project exhibitions.',
      'Engaged in peer learning and knowledge-sharing activities.',
    ],
    dateRange: '2023 – 2027',
  },
];

// ============ PROJECTS ============
export const projectsData: Project[] = [
  {
    title: 'Deepfake Detection Using CNN',
    description:
      'Developed a deepfake detection system using Convolutional Neural Networks. Designed an interactive interface to simplify prediction visualization. Strengthened analytical thinking and problem-solving skills through experimentation.',
    techUsed: 'Python, Deep Learning, CNN',
    image: { url: 'https://picsum.photos/seed/deepfake/600/400' },
  },
  {
    title: 'Smart Home Automation System',
    description:
      'Built an IoT-based home automation solution using Firebase and Raspberry Pi. Enabled real-time monitoring and remote device control. Demonstrated integration of hardware and software technologies.',
    techUsed: 'Firebase, Raspberry Pi, IoT',
    image: { url: 'https://picsum.photos/seed/smarthome/600/400' },
  },
];

// ============ CERTIFICATIONS ============
export const certificationsData: Certification[] = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    issuedDate: '2025',
    link: '#',
    iconName: 'university',
  },
  {
    title: 'Samsung Innovation Campus',
    issuer: 'Samsung Innovation Campus, Chandigarh University',
    issuedDate: '2026',
    link: '#',
    iconName: 'university',
  },
  {
    title: 'Tech Path Finder',
    issuer: 'Technical Certification',
    issuedDate: '2025',
    link: '#',
    iconName: 'university',
  },
  {
    title: 'Tech Vizard',
    issuer: 'Technical Certification',
    issuedDate: '2025',
    link: '#',
    iconName: 'university',
  },
  {
    title: 'React Native Development',
    issuer: 'Completed during Exaflair Internship',
    issuedDate: '2025',
    link: '#',
    iconName: 'university',
  },
  {
    title: 'Machine Learning Fundamentals',
    issuer: 'Completed during IIIT Una Internship',
    issuedDate: '2024',
    link: '#',
    iconName: 'university',
  },
];

// ============ CONTACT ME ============
export const contactMeData: ContactMe = {
  profilePicture: { url: '' },
  name: 'Nitin Dubey',
  title: 'Computer Science Engineering Student',
  summary:
    'Passionate CS Engineering student at Chandigarh University with hands-on experience in software development, machine learning, and IoT systems. Always eager to learn and collaborate on exciting projects.',
  companyUniversity: 'Chandigarh University, Punjab',
  linkedinLink: 'https://linkedin.com/in/nitindubey7',
  email: 'dnitin472@gmail.com',
  phoneNumber: '',
};

// ============ EDUCATION STATUS (replaces Work Permit) ============
export const educationData = {
  university: 'Chandigarh University',
  degree: 'Bachelor of Engineering in Computer Science Engineering',
  cgpa: '7.34',
  duration: '2023 – 2027',
  location: 'Punjab, India',
  additionalInfo:
    'Currently pursuing B.E. in Computer Science Engineering with a focus on software development, machine learning, and IoT systems. Actively participating in hackathons, project exhibitions, and technical competitions.',
};

// ============ LEADERSHIP & ACTIVITIES ============
export const leadershipData = [
  {
    title: 'HackEarth Participant',
    description: 'Participated in HackEarth hackathon, building innovative solutions under time constraints.',
    date: '2025',
  },
  {
    title: 'ZiInnovation Competitor',
    description: 'Competed in ZiInnovation technical competition, showcasing problem-solving skills.',
    date: '2025',
  },
  {
    title: 'University Project Expo',
    description: 'Presented projects during university Project Expo events, demonstrating technical capabilities.',
    date: '2024 – 2025',
  },
  {
    title: 'Cross-functional Team Collaboration',
    description: 'Collaborated with multidisciplinary teams during internships and hackathons.',
    date: 'Ongoing',
  },
  {
    title: 'Peer Learning & Knowledge Sharing',
    description: 'Actively engaged in peer learning and knowledge-sharing activities within the university.',
    date: 'Ongoing',
  },
];

// ============ GITHUB PROJECTS (replaces Blogs) ============
export const githubProjectsData = [
  {
    title: 'Deepfake Detection System',
    platform: 'GitHub',
    link: 'https://github.com/NitinDubey472',
    description: 'A CNN-based deepfake detection system with an interactive prediction interface.',
  },
  {
    title: 'Smart Home Automation',
    platform: 'GitHub',
    link: 'https://github.com/NitinDubey472',
    description: 'IoT-based home automation using Firebase & Raspberry Pi for real-time device control.',
  },
  {
    title: 'Portfolio Website',
    platform: 'GitHub',
    link: 'https://github.com/NitinDubey472',
    description: 'Netflix-themed portfolio website built with React and TypeScript.',
  },
];
