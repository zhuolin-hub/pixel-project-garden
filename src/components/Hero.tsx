
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      <div className="container mx-auto px-4 md:px-8 z-10 py-20 mt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hello, I'm <span className="text-secondary">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl">
            I build responsive, user-friendly web applications with modern technologies.
            Passionate about clean code and creative solutions to complex problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-secondary"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="text-white/80 hover:text-white">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
