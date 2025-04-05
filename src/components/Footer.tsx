
import { Github, Linkedin, Twitter, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: "Email", 
      icon: <Mail className="h-5 w-5" />, 
      url: "mailto:xxxxxxxxx@glasgow.ac.uk" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />, 
      url: "#" 
    },
    { 
      name: "Academia", 
      icon: <BookOpen className="h-5 w-5" />, 
      url: "#" 
    },
    { 
      name: "Twitter", 
      icon: <Twitter className="h-5 w-5" />, 
      url: "#" 
    }
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Z.</h3>
            <p className="text-white/80 mt-1">Researcher & Educator in Digital Business</p>
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
          <p>© {currentYear} Z. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Adam Smith Business School, University of Glasgow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
