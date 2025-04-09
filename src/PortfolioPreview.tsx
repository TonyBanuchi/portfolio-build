import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

// TypeScript interface for our color theme
interface ColorTheme {
  primaryDarkBlue: string;
  primaryLighterBlue: string;
  primaryDeepestBlue: string;
  accentTeal: string;
  accentGold: string;
  neutralWarmGray: string;
  neutralOffWhite: string;
  neutralDarkGray: string;
  textPrimary: string;
  textSecondary: string;
  textDark: string;
  borderColor: string;
}

const PortfolioPreview: React.FC = () => {
  // Your color palette - now as a typed object
  const colors: ColorTheme = {
    primaryDarkBlue: '#123139',
    primaryLighterBlue: '#1E4D5A',
    primaryDeepestBlue: '#0B1F24',
    accentTeal: '#2A9D8F',
    accentGold: '#E9C46A',
    neutralWarmGray: '#EBEBEB',
    neutralOffWhite: '#F8F8F8', 
    neutralDarkGray: '#333333',
    textPrimary: '#FFFFFF',
    textSecondary: '#EBEBEB',
    textDark: '#333333',
    borderColor: 'rgba(255, 255, 255, 0.1)'
  };

  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageBackground: colors.primaryLighterBlue
    },
    {
      id: 2,
      title: 'Data Visualization Tool',
      description: 'Interactive dashboard for visualizing complex datasets.',
      technologies: ['D3.js', 'TypeScript', 'Python'],
      imageBackground: colors.accentTeal
    }
  ];

  return (
    <div className="font-sans">
      {/* SCSS Variables & Tailwind Config Reference */}
      <div className="p-5 mb-5 rounded-lg text-sm" style={{ backgroundColor: colors.neutralOffWhite, color: colors.textDark }}>
        <h3 className="mt-0 mb-3 text-lg font-bold" style={{ color: colors.primaryDarkBlue }}>Tailwind Config</h3>
        <pre className="p-4 rounded overflow-x-auto" style={{ backgroundColor: colors.neutralWarmGray }}>
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '${colors.primaryDarkBlue}',
          medium: '${colors.primaryLighterBlue}',
          deepest: '${colors.primaryDeepestBlue}',
        },
        accent: {
          teal: '${colors.accentTeal}',
          gold: '${colors.accentGold}',
        },
        neutral: {
          warmGray: '${colors.neutralWarmGray}',
          offWhite: '${colors.neutralOffWhite}',
          darkGray: '${colors.neutralDarkGray}',
        },
        text: {
          primary: '${colors.textPrimary}',
          secondary: '${colors.textSecondary}',
          dark: '${colors.textDark}',
        }
      },
    },
  },
  plugins: [],
}`}
        </pre>
      </div>

      {/* Website Preview */}
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center p-5" style={{ backgroundColor: colors.primaryDarkBlue, color: colors.textPrimary }}>
          <div className="text-xl font-bold">Tony Banuchi</div>
          <nav className="flex gap-5">
            <a href="#" className="hover:opacity-80" style={{ color: colors.textPrimary }}>Home</a>
            <a href="#" className="hover:opacity-80" style={{ color: colors.textPrimary }}>Projects</a>
            <a href="#" className="hover:opacity-80" style={{ color: colors.textPrimary }}>About</a>
            <a href="#" className="hover:opacity-80" style={{ color: colors.accentTeal }}>Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-5 text-center" style={{ 
          backgroundColor: colors.primaryDeepestBlue, 
          color: colors.textPrimary,
          borderBottom: `1px solid ${colors.borderColor}`
        }}>
          <h1 className="text-4xl mb-4">Hello, I'm Tony Banuchi</h1>
          <h2 className="text-2xl font-normal mb-8" style={{ color: colors.textSecondary }}>
            Software Engineer & Problem Solver
          </h2>
          <p className="max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: colors.textSecondary }}>
            I build elegant solutions to complex problems using modern technologies. 
            My passion is creating efficient, accessible, and maintainable code.
          </p>
          <button className="py-3 px-6 rounded font-bold text-base" 
            style={{ backgroundColor: colors.accentGold, color: colors.primaryDeepestBlue }}>
            View My Work
          </button>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-5" style={{ backgroundColor: colors.neutralOffWhite, color: colors.textDark }}>
          <h2 className="text-2xl text-center mb-10" style={{ color: colors.primaryDarkBlue }}>
            Featured Projects
          </h2>
          
          <div className="flex flex-wrap justify-center gap-5">
            {projects.map(project => (
              <div key={project.id} className="w-72 rounded-lg overflow-hidden shadow-md bg-white">
                <div className="h-36 flex items-center justify-center text-white" 
                  style={{ backgroundColor: project.imageBackground }}>
                  Project Screenshot
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-2" style={{ color: colors.primaryDarkBlue }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: colors.textDark }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 text-xs rounded" 
                        style={{ backgroundColor: colors.neutralWarmGray }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-block font-bold text-sm" style={{ color: colors.accentTeal }}>
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-10 px-5 text-center" style={{ backgroundColor: colors.primaryLighterBlue, color: colors.textPrimary }}>
          <h2 className="text-2xl mt-0 mb-4">Let's Work Together</h2>
          <p className="max-w-xl mx-auto mb-5" style={{ color: colors.textSecondary }}>
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out if you think we'd be a good fit!
          </p>
          <div className="flex justify-center gap-5">
            <a href="#" className="flex items-center gap-1 hover:opacity-80" style={{ color: colors.accentGold }}>
              <Mail size={16} />
              <span>Email Me</span>
            </a>
            <a href="#" className="flex items-center gap-1 hover:opacity-80" style={{ color: colors.accentGold }}>
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-1 hover:opacity-80" style={{ color: colors.accentGold }}>
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-5 px-5 text-center text-sm" style={{ backgroundColor: colors.primaryDeepestBlue, color: colors.textSecondary }}>
          <p>© 2025 Tony Banuchi. All rights reserved.</p>
        </footer>
      </div>

      {/* Color Palette Showcase */}
      <div className="mt-8 p-5 rounded-lg" style={{ backgroundColor: colors.neutralOffWhite }}>
        <h3 className="mt-0 mb-4 text-lg font-bold" style={{ color: colors.primaryDarkBlue }}>Color Palette</h3>
        <div className="flex flex-wrap gap-4">
          {Object.entries(colors).map(([name, hex]) => (
            <div key={name} className="w-28">
              <div className="h-16 rounded mb-1" 
                style={{ 
                  backgroundColor: hex,
                  border: hex.includes('rgba') || hex === colors.neutralOffWhite ? '1px solid #ddd' : 'none'
                }}></div>
              <div className="text-xs font-bold">
                {name.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="text-xs" style={{ color: colors.neutralDarkGray }}>{hex}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;