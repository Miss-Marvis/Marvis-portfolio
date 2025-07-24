import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, admin dashboard, and mobile-responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["TypeScript", "React", "Socket.io", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics using modern APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "OpenWeather API", "Chart.js"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-code-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card-gradient border-border overflow-hidden hover:shadow-glow-accent transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'md:flex' : ''}`}>
                <div className={`${project.featured ? 'md:w-1/2' : ''}`}>
                  <div className="aspect-video bg-muted bg-cover bg-center" 
                       style={{ backgroundImage: `url(${project.image})` }}>
                  </div>
                </div>
                
                <div className={`${project.featured ? 'md:w-1/2' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge variant="default" className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;