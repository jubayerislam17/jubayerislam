import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { useTypingAnimation } from "@/hooks/use-typing-animation";

const typingTexts = [
  "CSE Graduate & Researcher",
  "Computer Vision Specialist",
  "NLP Enthusiast",
  "Mobile App Developer",
  "Full-Stack Developer",
  "AI Healthcare Researcher"
];

export function HeroSection() {
  const typingText = useTypingAnimation(typingTexts);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 0%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 20% 100%, rgba(14, 165, 233, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, hsl(222, 47%, 11%) 0%, hsl(220, 38%, 16%) 25%, hsl(218, 34%, 16%) 50%, hsl(217, 33%, 14%) 75%, hsl(222, 47%, 11%) 100%)
        `
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/3 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-400/8 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                alt="MD. JUBAYER ISLAM - Professional Headshot"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full border-4 border-background animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Hi, I'm <span className="text-primary">MD. JUBAYER ISLAM</span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-300 min-h-[80px] flex items-center justify-center">
            <span className="typing">{typingText}</span>
          </div>

          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 text-gray-400 leading-relaxed">
            CSE graduate, CV researcher, and NLP enthusiast. I specialize in building intelligent systems,
            solving real-world problems, and conducting AI-driven healthcare research.
          </p>

          {/* Role Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              App Developer
            </span>
            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-secondary/20">
              ML Practitioner
            </span>
            <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700">
              Problem Solver
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#portfolio")}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="group border-2 hover:border-primary hover:text-primary"
            >
              <span>Get in Touch</span>
              <Download className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
