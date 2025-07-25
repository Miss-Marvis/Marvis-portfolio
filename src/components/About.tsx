import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";
const About = () => {
  const skills = ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL", "Next.js", "Tailwind CSS", "Redux"];
  const highlights = [{
    icon: Code,
    title: "Clean Code Advocate",
    description: "Writing maintainable, scalable code that stands the test of time"
  }, {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant, user-friendly solutions"
  }, {
    icon: Rocket,
    title: "Performance Focused",
    description: "Optimizing applications for speed, efficiency, and great UX"
  }, {
    icon: Coffee,
    title: "Continuous Learner",
    description: "Always exploring new technologies and best practices"
  }];
  return <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-code-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">I'm a dedicated frontend developer passionate about creating digital experiences that make a difference. What began as curiosity about how websites work has grown into a drive to build robust, scalable web applications that solve real problems.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
          </p>
            <p className="text-lg leading-relaxed">When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers, exploring the latest in web technologies — or learning new languages just for fun. I believe in writing code that's not only functional, but also elegant, maintainable, and built with intention.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => <Card key={index} className="bg-card-gradient border-border hover:shadow-glow-accent transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => <Badge key={index} variant="secondary" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {skill}
              </Badge>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;