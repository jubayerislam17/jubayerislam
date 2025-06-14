import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Database, Settings, Brain, Trophy } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "blue",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Dart", "R"]
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    color: "green", 
    skills: ["React.js", "Next.js", "Node.js", "Flutter", "PyTorch", "TensorFlow", "OpenCV"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "purple",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"]
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    color: "orange",
    skills: ["Git", "Docker", "Linux", "Heroku", "Vercel"]
  },
  {
    title: "Concepts & Methodologies",
    icon: Brain,
    color: "indigo",
    skills: ["OOP", "SOLID", "Agile", "REST API", "Microservices"]
  }
];

export function SkillsSection() {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
      red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBadgeClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700",
      green: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700",
      purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700",
      orange: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700",
      indigo: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700",
      red: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(category.color)}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className={`hover:scale-105 transition-transform cursor-default ${getBadgeClasses(category.color)}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Problem Solving */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 ${getColorClasses("red")}`}>
                  <Trophy className="h-6 w-6" />
                </div>
                <span className="text-lg">Problem Solving</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold border ${getBadgeClasses("red")}`}>
                  <Trophy className="mr-2 h-5 w-5" />
                  <span>150+ Problems Solved</span>
                </div>
                <p className="text-muted-foreground mt-3 text-sm">
                  Across various online judges and competitive programming platforms
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
