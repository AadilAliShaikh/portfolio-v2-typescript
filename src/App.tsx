{/* Previous imports remain the same */}
import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Code2, 
  BookOpen,
  Mail,
  Download,
  Moon,
  Sun,
  Trophy,
  Briefcase,
  Award
} from 'lucide-react';
import { BentoTile } from './components/BentoTile';
import { SkillBadge } from './components/SkillBadge';
import { ProjectCard } from './components/ProjectCard';
import { CertificationButton } from './components/CertificationButton';

{/* All const declarations (projects, experiences, certifications, skills) remain the same */}
const projects = [
  {
    title: 'AyuMonk',
    description: '"AyuMonk" is an all-in-one web portal offering Ayurveda education, AI-driven Prakruti analysis, personalized recommendations, community interaction, and a credit-based system for Ayurvedic product discounts.',
    technologies: ['MERN Stack', 'Chatbot Development', 'Machine Learning', 'User Interaction (UI)', 'User Experience (UX)', 'Responsive Web Design'],
    githubLink: 'https://github.com/AadilAliShaikh/Prakruti-Phenotype-Prediction-Model',
    demoLink: 'https://github.com/AadilAliShaikh/Prakruti-Phenotype-Prediction-Model'
  },
  {
    title: "Attendance Management System",
    description: "An innovative attendance management system where teachers generate QR codes through the web app, allowing students to mark their attendance by scanning the QR code using the project's Android app. Students can also log in to the web app to view their attendance statistics. This solution streamlines the attendance process and improves overall efficiency.",
    technologies: ["Node.js", "Express.js", "React", "Flutter", "JavaScript", "MongoDB", "QR Code Generation"],
    githubLink: "https://github.com/AadilAliShaikh/ams",
    demoLink: "https://github.com/AadilAliShaikh/MSI-AMS-Flutter-App"
  },
  {
    title: 'ID Card Generator',
    description: 'Automated ID card generation for over 500 college freshers, reducing administrative workload by 60%. The intuitive interface & efficient backend processing led to a 40% reduction in onboarding time for both students and faculty.Implemented automation scripts, reducing manual effort by 80%.',
    technologies: ["Python", "fpdf", "htm2Image", "Tkinter", "Jinja", "User Interaction (UI)", "User Experience (UX)"],
    githubLink: 'https://github.com/AadilAliShaikh/Id-Card-Generator',
    demoLink: 'https://github.com/AadilAliShaikh/Id-Card-Generator'
  },
  {
    title: 'Alumni Management Portal',
    description: 'An online platform fostering seamless communication and engagement between alumni and their alma mater, facilitating collaboration and networking opportunities for both parties.',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL', 'User Interaction', 'User Experience (UX)', 'Responsive Web Design'],
    githubLink: 'https://github.com/AadilAliShaikh/MPR-PROJECT',
    demoLink: 'https://github.com/AadilAliShaikh/MPR-PROJECT'
  }
];

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Accenture',
    duration: 'Sep 2024 - Present',
    type: 'Full-time'
  },
  {
    title: 'Machine Learning Intern',
    company: 'Suvidha Foundation (Suvidha Mahila Mandal)',
    duration: 'Feb 2024 - Mar 2024',
    type: 'Internship'
  },
  {
    title: 'AI Engineer Intern',
    company: 'Open Weaver',
    duration: 'Aug 2023 - Sep 2023 ',
    type: 'Internship'
  },
  {
    title: 'Hackathon Winner',
    event: 'Smart India Hackathon - Internal Hackathon',
    achievement: '1st Place'
  },
  {
    title: 'Vice President',
    organization: 'Software Development Cell, MSI',
    duration: 'Mar 2023 - Jul 2024',
    type: 'College Society'
  }
];

const certifications = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'ICT Academy',
    verificationUrl: '/aws.pdf'
  },
  {
    name: 'Google Cloud Career Programme',
    issuer: 'Google Cloud',
    verificationUrl: '/gccp.pdf'
  },
  {
    name: 'NPTEL Programming',
    issuer: 'NPTEL',
    verificationUrl: '/nptel.pdf'
  }
];

const education = [
  {
    degree: "Masters of Computer Applications",
    institution: "Chandigarh University",
    passoutYear: "2026"
  },
  {
    degree: "Bachelors of Computer Applications",
    institution: "Guru Gobind Singh Indraprastha University",
    passoutYear: "2024"
  },
  {
    degree: "10th and 12th(Commerce with Maths)",
    institution: "Banasthali Public School",
    passoutYear: "2021"
  }
];


const skills = [
  'C/C++',
  'Python',
  'Java',
  'Kotlin',
  'Latex',
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'ReactJS',
  'MongoDB',
  'Express',
  'NodeJS',
  'PHP',
  'MySQL',
  'Jupyter',
  'Visual Studio',
  'Git',
  'GitHub',
  'AWS',
  'Google Cloud',
  'Overleaf',
  'Streamlit',
  'Android Studio'
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <header className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800'} shadow-lg`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoTile 
            backgroundUrl="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&w=1200"
            hoverSoundUrl="/hover2.mp3"
            colSpan
          >
            <div className="p-8 h-full flex items-center">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-white">Hi, I'm Aadil Ali Shaikh</h1>
                <p className="text-xl text-blue-300">Full Stack Web Developer | Machine Learning Engineer | Android Developer</p>
              </div>
            </div>
          </BentoTile>

          <BentoTile backgroundUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
              <p className="text-gray-200">
              I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
            </div>
          </BentoTile>

          <BentoTile backgroundUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </BentoTile>

          <BentoTile backgroundUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80">
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4 text-white">Education</h2>
    <div className="space-y-4">
      {education.map((item, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-colors"
        >
          <p className="font-semibold text-white">{item.degree}</p>
          <p className="text-gray-200">{item.institution}</p>
          <p className="text-gray-200">Passout Year: {item.passoutYear}</p>
        </div>
      ))}
    </div>
  </div>
</BentoTile>



          

          <BentoTile 
  backgroundUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
  colSpan
>
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
      <Briefcase className="w-6 h-6" />
      Experience
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {experiences.map((exp) => (
        <div
          key={exp.title}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:bg-white/10"
        >
          <h3 className="font-bold text-white">{exp.title}</h3>
          {exp.company && <p className="text-blue-300">{exp.company}</p>}
          {exp.event && <p className="text-blue-300">{exp.event}</p>}
          {exp.organization && <p className="text-blue-300">{exp.organization}</p>}
          <div className="flex items-center gap-2 mt-2">
            {exp.duration && (
              <span className="text-sm text-gray-300">{exp.duration}</span>
            )}
            {exp.type && (
              <span className="text-xs px-2 py-1 bg-blue-500/30 rounded-full text-blue-200">
                {exp.type}
              </span>
            )}
            {exp.achievement && (
              <span className="text-xs px-2 py-1 bg-yellow-500/30 rounded-full text-yellow-200 flex items-center gap-1">
                <Trophy className="w-3 h-3" />
                {exp.achievement}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</BentoTile>


          <BentoTile 
            backgroundUrl="https://images.unsplash.com/photo-1537884944318-390069bb8665?auto=format&fit=crop&w=1200&q=80"
            colSpan
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                  />
                ))}
              </div>
            </div>
          </BentoTile>

          <BentoTile backgroundUrl="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=600&q=80">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <Award className="w-6 h-6" />
                Certifications
              </h2>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <CertificationButton
                    key={cert.name}
                    name={cert.name}
                    issuer={cert.issuer}
                    verificationUrl={cert.verificationUrl}
                  />
                ))}
              </div>
            </div>
          </BentoTile>

          <BentoTile backgroundUrl="https://images.unsplash.com/photo-1557853197-aefb550b6fdc?auto=format&fit=crop&w=600&q=80">
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4 text-white">Professional Links</h2>
    <ul className="space-y-4">
      {[
        { Icon: Github, href: 'https://github.com/AadilAliShaikh', name: 'GitHub' },
        { Icon: Linkedin, href: 'https://www.linkedin.com/in/aadilalishaikh/', name: 'LinkedIn' },
        { Icon: Code2, href: 'https://leetcode.com/u/aadilalishaikh4745/', name: 'LeetCode' },
        { Icon: BookOpen, href: 'https://www.geeksforgeeks.org/user/aadilalishdhcz/', name: 'GeeksforGeeks' }
      ].map(({ Icon, href, name }) => (
        <li
          key={href}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white"
          >
            <Icon className="w-8 h-8" />
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
</BentoTile>



<BentoTile backgroundUrl="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=600&q=80">
  <div className="p-6">
    <div className="flex justify-between items-start flex-col">
      <div>
        <h2 className="text-2xl font-bold text-white">Contact</h2>
        
        <div className="mt-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4 hover:scale-[1.02] transition-all duration-300 hover:bg-white/20">
            <p className="text-gray-200">
              <a
                href="mailto:aadilalishaikh4745@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                aadilalishaikh4745@gmail.com
              </a>
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4 hover:scale-[1.02] transition-all duration-300 hover:bg-white/20">
            <p className="text-gray-200">
              <a
                href="tel:+919953824410"
                className="hover:text-blue-400 transition-colors"
              >
                +91 99538 24410
              </a>
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4 hover:scale-[1.02] transition-all duration-300 hover:bg-white/20">
            <p className="text-gray-200">
              <a
                href="https://aadilali.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                aadilali.me
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <button
        className="flex items-center gap-2 px-4 py-2 mt-4 bg-blue-500/80 text-white rounded-lg backdrop-blur-sm hover:bg-blue-600/80 transition-colors"
        onClick={() => window.open('/cv.pdf', '_blank')}
      >
        <Download size={20} />
        Resume
      </button>
    </div>
  </div>
</BentoTile>



        </div>
      </main>

      <footer className="text-center py-8 text-gray-400">
        <p>© 2024 Aadil Ali Shaikh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;