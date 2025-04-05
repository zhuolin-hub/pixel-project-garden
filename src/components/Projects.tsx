
import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { Button } from "@/components/ui/button";

const Projects = () => {
  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration.",
      image: "https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task manager with drag and drop functionality.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with interactive maps and forecasts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      techStack: ["JavaScript", "OpenWeather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts.",
      image: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      techStack: ["React", "Redux", "Material UI", "Social APIs"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project"
    }
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const showMoreProjects = () => {
    setVisibleProjects(prevCount => Math.min(prevCount + 3, projects.length));
  };

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each demonstrates different skills
            and technologies from my development toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0, visibleProjects).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <Button onClick={showMoreProjects}>
              Show More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
