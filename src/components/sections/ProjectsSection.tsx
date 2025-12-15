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
    name: "NewsAPP",
    description:
      "Application mobile d'actualités en temps réel avec recherche par catégories, pays et mots-clés.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM/MVI",
      "Paging 3",
      "Room",
      "Dagger Hilt",
      "Retrofit",
    ],
    type: "Mobile",
    icon: Smartphone,
    github: "https://github.com/MEDyassKH3100/NewsAPP",
    color: "from-cyan-500 to-blue-600",
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
    name: "SOTACIB Delivery Backend",
    description:
      "API backend pour l'application mobile de gestion de livraison de ciment de SOTACIB Tunisie.",
    technologies: ["NestJS", "TypeScript", "MongoDB", "JWT", "Swagger", "Docker"],
    type: "Backend",
    icon: Globe, // ou Monitor si tu préfères pour backend
    github: "https://github.com/MEDyassKH3100/hackathon",
    color: "from-indigo-500 to-purple-600",
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
    technologies: ["Flutter", "NestJS", "MongoDB", "SwiftUi", "Kotlin"],
    type: "Mobile",
    icon: Smartphone,
    github: "https://github.com/MEDyassKH3100/VIBY-APP-mobile",
    color: "from-rose-500 to-red-500",
  },
  {
    name: "Rick & Morty Characters",
    description:
      "Application web de browsing des personnages de Rick & Morty.",
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "REST API", "Vite"],
    type: "Web",
    icon: Globe,
    github: "https://github.com/MEDyassKH3100/Rick-and-Morty",
    color: "from-lime-500 to-green-600",
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
  {
    name: "ChatBot Service Client - Backend",
    description:
      "Backend d'une plateforme de chatbot pour service client avec intégration IA Gemini. Architecture MVC scalable et persistance MongoDB.",
    technologies: ["Node.js", "Express", "MongoDB", "Gemini API", "JWT"],
    type: "Backend",
    icon: Globe,
    github: "https://github.com/MEDyassKH3100/ChatBot-Backend",
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "ChatBot Service Client - Frontend",
    description:
      "Application mobile compagnon Flutter pour interagir avec le chatbot IA. Interface intuitive avec chat en temps réel et gestion des conversations.",
    technologies: ["Flutter", "Dart", "Provider", "HTTP"],
    type: "Mobile",
    icon: Smartphone,
    github: "https://github.com/MEDyassKH3100/ChatBot_Front",
    color: "from-cyan-400 to-blue-500",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4">
            Projets{" "}
            <span className="text-gradient">Phares</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
            Une sélection de mes projets les plus significatifs.
          </p>
        </AnimatedSection>

        {/* Grid responsive : 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.name} delay={index * 0.08}>
              <motion.div
                className="glass rounded-2xl overflow-hidden h-full flex flex-col group hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Project Image Placeholder - Responsive height */}
                <div
                  className={`relative h-32 sm:h-40 md:h-48 bg-gradient-to-br ${project.color} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white/80" />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-16 sm:w-20 h-16 sm:h-20 border border-white/20 rounded-full" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-10 sm:w-12 h-10 sm:h-12 border border-white/20 rounded-lg rotate-45" />

                  {/* Award Badge */}
                  {project.award && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-background/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 text-xs sm:text-sm"
                    >
                      <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 flex-shrink-0" />
                      <span className="font-bold hidden xs:inline">
                        {project.award}
                      </span>
                      <span className="font-bold inline xs:hidden">
                        Bal des Projets
                      </span>
                    </motion.div>
                  )}

                  {/* Type Badge */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-background/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                    <span className="text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies Loop - Responsive */}
                  <div className="relative overflow-hidden h-10 sm:h-12 mb-4 flex items-center justify-center">
                    <motion.div
                      className="flex gap-2 sm:gap-3"
                      variants={{
                        animate: {
                          x: ["0%", "-50%"],
                          transition: {
                            x: {
                              repeat: Infinity,
                              repeatType: "loop",
                              duration: 20,
                              ease: "linear",
                            },
                          },
                        },
                      }}
                      animate="animate"
                    >
                      {/* Track 1 */}
                      <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground whitespace-nowrap flex-shrink-0 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Track 2 (duplicate) */}
                      <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                        {project.technologies.map((tech) => (
                          <span
                            key={`duplicate-${tech}`}
                            className="px-2 sm:px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground whitespace-nowrap flex-shrink-0 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Fade left - positionné correctement */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-background via-background/50 to-transparent" />

                    {/* Fade right - positionné correctement */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-background via-background/50 to-transparent" />
                  </div>

                  {/* Links - Responsive buttons */}
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs sm:text-sm group/btn"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 sm:gap-2"
                      >
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:rotate-12 transition-transform" />
                        <span className="hidden sm:inline">
                          GitHub
                        </span>
                        <span className="sm:hidden">Code</span>
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
