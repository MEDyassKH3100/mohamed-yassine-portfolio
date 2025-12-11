import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Github, ExternalLink, Trophy, Smartphone, Globe, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "MSAware",
    description:
      "Application mobile pour les patients atteints de sclérose en plaques avec fonctionnalités IA pour le suivi et l'accompagnement.",
    technologies: ["Flutter", "AI/ML", "Firebase", "Python"],
    type: "Mobile",
    icon: Smartphone,
    award: "🏆 1er Prix ESPRIT 2025",
    github: "https://github.com/MEDyassKH3100",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "IQRAA",
    description:
      "Plateforme complète pour l'apprentissage du Coran avec streaming vidéo, chat en temps réel et géolocalisation.",
    technologies: ["Flutter", "NestJS", "Firebase", "Swagger"],
    type: "Mobile",
    icon: Smartphone,
    github: "https://github.com/MEDyassKH3100",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "PetConnect",
    description:
      "PWA pour la gestion des soins des animaux de compagnie avec authentification JWT et fonctionnalités offline.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "JWT", "Tailwind", "PWA"],
    type: "Web",
    icon: Globe,
    github: "https://github.com/MEDyassKH3100",
    color: "from-primary to-blue-500",
  },
  {
    name: "CarthaGreen",
    description:
      "Solution IoT pour l'hydroponie intelligente avec monitoring en temps réel et automatisation.",
    technologies: ["Flutter", "NestJS", "MongoDB", "IoT"],
    type: "Mobile + IoT",
    icon: Smartphone,
    github: "https://github.com/MEDyassKH3100",
    color: "from-green-400 to-teal-500",
  },
  {
    name: "Gami",
    description:
      "Plateforme gaming multi-plateforme (web et desktop) pour les passionnés de jeux vidéo.",
    technologies: ["React", "Electron", "Node.js", "WebSocket"],
    type: "Web + Desktop",
    icon: Monitor,
    github: "https://github.com/MEDyassKH3100",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Viby",
    description:
      "Application mobile de streaming musical avec interface moderne et fonctionnalités sociales.",
    technologies: ["Flutter", "Firebase", "Spotify API"],
    type: "Mobile",
    icon: Smartphone,
    github: "https://github.com/MEDyassKH3100",
    color: "from-rose-500 to-red-500",
  },
  {
    name: "Airport Management",
    description:
      "Système de gestion aéroportuaire complet avec architecture orientée objet et Entity Framework.",
    technologies: [".NET Core", "C#", "Entity Framework", "SQL Server"],
    type: "Desktop",
    icon: Monitor,
    github: "https://github.com/MEDyassKH3100",
    color: "from-slate-500 to-zinc-600",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Projets <span className="text-gradient">Phares</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Une sélection de mes projets les plus significatifs.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.name} delay={index * 0.1}>
              <motion.div
                className="glass rounded-2xl overflow-hidden h-full flex flex-col group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Project Image Placeholder */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-white/80" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-lg rotate-45" />
                  
                  {/* Award Badge */}
                  {project.award && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs font-bold">{project.award}</span>
                    </motion.div>
                  )}

                  {/* Type Badge */}
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium">{project.type}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs bg-muted rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-xs bg-muted rounded-md text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
