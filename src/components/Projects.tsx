
import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { Button } from "@/components/ui/button";

const Projects = () => {
  // Research projects data based on the CV
  const projects: Project[] = [
    {
      id: 1,
      title: "Influencer Critiques of Brand Purpose",
      description: "Examining follower engagement and sentiment across CSR themes on social media. Presented at the 18th Global Brand Conference 2025.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      techStack: ["Sentiment Analysis", "Social Media", "CSR", "Brand Purpose"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "CancelWalmart: Influencer Criticism Analysis",
      description: "Conceptualizing the values for which influencers criticize retailers. Presented at RARCS Conference 2024.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      techStack: ["Text Mining", "Thematic Analysis", "Consumer Behavior", "Digital Ethics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "The External Drivers of Sustainable Transition",
      description: "A stage view of automotive electrification in China from 2000-2020. Co-authored research paper currently under review.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba13938c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      techStack: ["Policy Analysis", "Sustainability", "China", "Automotive Industry"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Moralizing Brand Influencers",
      description: "Conceptualizing the 'Missing SDG' - how social media influencers reprimand unsustainable consumption. Working paper targeting ABS 3 journal.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      techStack: ["Sustainable Development", "Influencer Marketing", "Social Media", "Brand Ethics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "#CallingoutNestle",
      description: "Investigating the profile, communication intentions and message framing techniques of Moralizing Brand Influencers (MBIs).",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      techStack: ["Communication Strategy", "Message Framing", "Influencer Analysis", "Brand Criticism"],
      liveUrl: "#",
      githubUrl: "#"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Research</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My research explores how social media influencers reprimand unsustainable consumption and 
            influence corporate sustainability practices. Here are some of my recent and ongoing projects.
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
