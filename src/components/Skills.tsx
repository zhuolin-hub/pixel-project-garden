import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "other";
}

const Skills = () => {
  const skills: Skill[] = [
    // Frontend Skills
    { name: "HTML & CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "TypeScript", level: 75, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    
    // Backend Skills
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Express", level: 70, category: "backend" },
    { name: "MongoDB", level: 65, category: "backend" },
    { name: "SQL", level: 60, category: "backend" },
    { name: "GraphQL", level: 55, category: "backend" },
    
    // Other Skills
    { name: "Git & GitHub", level: 80, category: "other" },
    { name: "Docker", level: 60, category: "other" },
    { name: "Testing", level: 65, category: "other" },
    { name: "CI/CD", level: 60, category: "other" },
    { name: "Agile/Scrum", level: 75, category: "other" },
  ];

  const frontend = skills.filter(skill => skill.category === "frontend");
  const backend = skills.filter(skill => skill.category === "backend");
  const other = skills.filter(skill => skill.category === "other");

  const SkillCategory = ({ title, skills }: { title: string, skills: Skill[] }) => (
    <div className="mb-10">
      <h3 className="text-xl font-bold mb-6 text-primary">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I've developed expertise in various technologies across the full stack.
            Here's a breakdown of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontend} />
          <SkillCategory title="Backend Development" skills={backend} />
          <SkillCategory title="Other Skills" skills={other} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
