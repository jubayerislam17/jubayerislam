import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";
import type { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: "alzheimer-classification",
    title: "Alzheimer's Disease Classification",
    description: "Advanced deep learning model for classifying Alzheimer's Disease from 3D MRI scans, enhancing diagnostic accuracy and understanding of disease progression.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "PyTorch", "3D CNN", "Medical AI"],
    year: "2023",
    category: "AI Research",
    // githubUrl: "https://github.com/jubayerislam17"
  },
  {
    id: "vegetable-classification",
    title: "Vegetable Classification & Quality Assessment",
    description: "Intelligent system for automatic vegetable classification and quality assessment using the VegNet dataset with advanced computer vision techniques.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "PyTorch", "OpenCV", "CNN"],
    year: "2024",
    category: "Computer Vision",
    githubUrl: "https://github.com/ir-rafio/Vegetable-Classification-and-Quality-Assessment"
  },
  {
    id: "abaash-rental",
    title: "Abaash - Flat Rental Platform",
    description: "Comprehensive web application for flat search and rental services specifically designed for IUT students and property owners with advanced filtering and matching capabilities.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["JavaScript", "Node.js", "HTML/CSS", "MongoDB"],
    year: "2023",
    category: "Web App",
    githubUrl: "https://github.com/Dcoders-IUT/Abaash"
  },
  {
    id: "aqsa-prayer",
    title: "AQSA - Prayer Time App",
    description: "Location-based prayer time application for Android with accurate timing calculations, customizable notifications, and beautiful Islamic design elements.",
    image: "https://images.unsplash.com/photo-1527838700789-f9b453e73655?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Flutter", "Dart", "REST API", "GPS"],
    year: "2023",
    category: "Mobile App",
    githubUrl: "https://github.com/505-NN-505/AQSA"
  }
];

export function PortfolioSection() {
  const getCategoryColor = (category: string) => {
    const colors = {
      "AI Research": "bg-blue-500",
      "Computer Vision": "bg-green-500",
      "Web App": "bg-orange-500",
      "Mobile App": "bg-purple-500"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI research, mobile development, and web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(project.category)} text-white border-0`}>
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="group/link"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          <span>GitHub</span>
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="group/link"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span>Live</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            className="group bg-primary hover:bg-primary/90"
          >
            <a href="https://github.com/jubayerislam17" target="_blank" rel="noopener noreferrer">
              <span>View All Projects</span>
              <Github className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
