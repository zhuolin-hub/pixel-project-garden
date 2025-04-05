
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: "research" | "technical" | "teaching";
}

const Skills = () => {
  const skills: Skill[] = [
    // Research Skills
    { name: "Sentiment Analysis", level: 90, category: "research" },
    { name: "Topic Modelling", level: 85, category: "research" },
    { name: "Text Mining", level: 85, category: "research" },
    { name: "Thematic Analysis", level: 90, category: "research" },
    { name: "Mixed Methods Research", level: 85, category: "research" },
    
    // Technical Skills
    { name: "R Programming", level: 80, category: "technical" },
    { name: "SPSS", level: 75, category: "technical" },
    { name: "Data Analytics", level: 85, category: "technical" },
    { name: "Data Visualization", level: 80, category: "technical" },
    { name: "Academic Writing", level: 90, category: "technical" },
    
    // Teaching Skills
    { name: "Course Development", level: 85, category: "teaching" },
    { name: "Student Mentoring", level: 90, category: "teaching" },
    { name: "Online Learning", level: 80, category: "teaching" },
    { name: "Research Supervision", level: 85, category: "teaching" },
    { name: "Public Engagement", level: 80, category: "teaching" },
  ];

  const research = skills.filter(skill => skill.category === "research");
  const technical = skills.filter(skill => skill.category === "technical");
  const teaching = skills.filter(skill => skill.category === "teaching");

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
            I've developed expertise in various research methodologies and technical skills 
            throughout my academic career, with a focus on digital business analysis and education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Research Methods" skills={research} />
          <SkillCategory title="Technical Skills" skills={technical} />
          <SkillCategory title="Teaching & Communication" skills={teaching} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
