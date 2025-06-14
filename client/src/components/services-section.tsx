import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Bot, Eye, Server, Search } from "lucide-react";

const services = [
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using Flutter framework with beautiful UI, seamless performance, and native-like experience across iOS and Android.",
    icon: Smartphone,
    technologies: ["Flutter", "Dart", "REST API"],
    color: "blue"
  },
  {
    id: "web-dev", 
    title: "Web Development",
    description: "Modern, responsive web applications using React.js, Next.js, and Node.js. From simple landing pages to complex full-stack applications.",
    icon: Globe,
    technologies: ["React.js", "Next.js", "Node.js"],
    color: "green"
  },
  {
    id: "ml-dl",
    title: "Machine Learning & Deep Learning",
    description: "Custom ML models and deep learning solutions for classification, prediction, and intelligent automation using PyTorch, TensorFlow, and scikit-learn.",
    icon: Bot,
    technologies: ["PyTorch", "TensorFlow", "Scikit-learn"],
    color: "purple"
  },
  {
    id: "cv-nlp",
    title: "Computer Vision & NLP",
    description: "Advanced computer vision and natural language processing solutions including image classification, object detection, and text analysis for various domains.",
    icon: Eye,
    technologies: ["OpenCV", "NLTK", "Transformers"],
    color: "indigo"
  },
  {
    id: "api-dev",
    title: "RESTful API Development", 
    description: "Robust and scalable RESTful APIs with proper authentication, documentation, and performance optimization for seamless integration.",
    icon: Server,
    technologies: ["Express.js", "FastAPI", "Flask"],
    color: "orange"
  },
  {
    id: "ai-research",
    title: "AI Research",
    description: "Research and development in AI-driven healthcare solutions, with focus on medical image analysis and diagnostic accuracy improvement.",
    icon: Search,
    technologies: ["Healthcare AI", "Medical Imaging", "Research"],
    color: "red"
  }
];

export function ServicesSection() {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBadgeClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
      green: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300",
      purple: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
      indigo: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300",
      orange: "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300",
      red: "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive solutions from concept to deployment, leveraging cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(service.color)}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className={getBadgeClasses(service.color)}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
