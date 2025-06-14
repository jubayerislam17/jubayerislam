import { Github, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Get In touch</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building intelligent systems and solving real-world problems through innovative technology solutions.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/jubayerislam17"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:jubayer.islam.0182@gmail.com"
              className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="tel:+8801829977462"
              className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              &copy; 2024 MD. JUBAYER ISLAM. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
