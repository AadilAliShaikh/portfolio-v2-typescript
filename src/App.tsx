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
    title: 'Cloud Infrastructure',
    description: 'AWS-based scalable architecture with auto-scaling and load balancing features',
    technologies: ['AWS', 'Terraform', 'Docker'],
    githubLink: 'https://github.com/username/cloud-infra',
    demoLink: 'https://demo.project.com'
  },
  {
    title: 'E-Learning Platform',
    description: 'Full-stack educational platform with real-time collaboration features',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/username/elearning',
    demoLink: 'https://elearning.project.com'
  }
];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    duration: '2022 - Present',
    type: 'Full-time'
  },
  {
    title: 'Software Developer Intern',
    company: 'StartUp Inc',
    duration: 'Summer 2021',
    type: 'Internship'
  },
  {
    title: 'Hackathon Winner',
    event: 'Global Tech Hack 2023',
    achievement: '1st Place'
  },
  {
    title: 'Technical Lead',
    organization: 'College Tech Society',
    duration: '2020 - 2021'
  }
];

const certifications = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    verificationUrl: 'https://aws.amazon.com/verification'
  },
  {
    name: 'Google Cloud Associate',
    issuer: 'Google Cloud',
    verificationUrl: 'https://cloud.google.com/certification/verification'
  },
  {
    name: 'NPTEL Programming',
    issuer: 'NPTEL',
    verificationUrl: 'https://nptel.ac.in/verification'
  }
];

const skills = ['Python', 'Java', 'AWS', 'React', 'Node.js', 'Docker', 'Kubernetes'];

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
                <p className="text-xl text-blue-300">Tech Enthusiast | Lifelong Learner</p>
              </div>
            </div>
          </BentoTile>

          <BentoTile backgroundUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
              <p className="text-gray-200">
                Passionate developer with a keen interest in cloud computing and software engineering. Always exploring new technologies and building innovative solutions.
              </p>
            </div>
          </BentoTile>

          <BentoTile backgroundUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">Tech Stack</h2>
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
              <div className="space-y-2">
                <p className="font-semibold text-white">Computer Engineering</p>
                <p className="text-gray-200">University of Mumbai</p>
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
                  <div key={exp.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
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
              <div className="flex space-x-4">
                {[
                  { Icon: Github, href: 'https://github.com' },
                  { Icon: Linkedin, href: 'https://linkedin.com' },
                  { Icon: Code2, href: 'https://leetcode.com' },
                  { Icon: BookOpen, href: 'https://geeksforgeeks.org' }
                ].map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-transform hover:scale-110"
                  >
                    <Icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </BentoTile>

          <BentoTile backgroundUrl="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=600&q=80">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white">Contact</h2>
                  <p className="mt-2 text-gray-200">aadil.shaikh@email.com</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/80 text-white rounded-lg backdrop-blur-sm hover:bg-blue-600/80 transition-colors">
                  <Download size={20} />
                  CV
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