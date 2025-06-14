import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Professional Background</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CSE Graduate, Computer Vision Researcher, and NLP Enthusiast with strong foundations in software development,
              machine learning, and deep learning. Passionate about building intelligent systems, solving real-world problems,
              and contributing to research in AI-driven healthcare solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience in mobile app development and computer vision research, I bridge the gap between
              theoretical knowledge and practical implementation, always aiming to create solutions that make a
              meaningful impact.
            </p>
          </div>

          {/* Education & Experience */}
          <div className="space-y-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="text-primary mr-3 h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground">B.Sc (Engg.) in Computer Science and Engineering</h4>
                    <p className="text-muted-foreground">Islamic University of Technology</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        2019 – 2024
                      </span>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        CGPA: 3.48/4.00
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="text-primary mr-3 h-5 w-5" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* App Developer Intern */}
                  <div className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2"></div>
                    <h4 className="font-medium text-foreground">App Developer Intern</h4>
                    <p className="text-primary font-medium">Battery Low Interactive Limited</p>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      May 2023 – June 2023
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Developed a prayer-time app for Android using RESTful APIs</li>
                      <li>• Designed adaptive UI with Flutter and integrated shared preferences</li>
                    </ul>
                  </div>

                  {/* Research */}
                  <div className="relative pl-6 border-l-2 border-secondary/30">
                    <div className="absolute w-3 h-3 bg-secondary rounded-full -left-2 top-2"></div>
                    <h4 className="font-medium text-foreground">Computer Vision Research</h4>
                    <p className="text-secondary font-medium">Independent Research</p>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      May 2023 – June 2023
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Proposed a model to classify Alzheimer's Disease from 3D MRI images</li>
                      <li>• Enhanced diagnostic accuracy and disease progression understanding</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
