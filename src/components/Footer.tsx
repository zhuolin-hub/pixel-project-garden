
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github className="h-5 w-5" />, 
      url: "https://github.com/yourusername" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />, 
      url: "https://linkedin.com/in/yourusername" 
    },
    { 
      name: "Twitter", 
      icon: <Twitter className="h-5 w-5" />, 
      url: "https://twitter.com/yourusername" 
    },
    { 
      name: "Email", 
      icon: <Mail className="h-5 w-5" />, 
      url: "mailto:your.email@example.com" 
    }
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Your Name</h3>
            <p className="text-white/80 mt-1">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and built with ❤️ using React, Tailwind CSS, and TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
