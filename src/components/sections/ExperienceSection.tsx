import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Vision Age VFX",
    role: "Full-Stack Mobile Developer (Stage Ingénieur)",
    period: "Juillet 2025 - Octobre 2025",
    location: "Tunisie",
    description:
      "Développement de l'application mobile IQRAA - Plateforme complète pour l'apprentissage du Coran.",
    achievements: [
      "Architecture Flutter avec NestJS et Firebase",
      "Fonctionnalités : streaming vidéo, chat en temps réel, géolocalisation, gestion d'événements",
      "API REST documentée avec Swagger",
      "Système de contrôle d'accès basé sur les rôles (RBAC)",
    ],
    technologies: ["Flutter", "NestJS", "Firebase", "Swagger", "RBAC"],
  },
  {
    company: "ESPRIT",
    role: "Full-Stack Mobile Developer (Stage d'été)",
    period: "Juillet 2024 - Septembre 2024",
    location: "Ariana, Tunisie",
    description:
      "Développement d'une plateforme de chatbot pour le service client avec intégration IA.",
    achievements: [
      "Architecture MVC avec Node.js et Express",
      "Base de données MongoDB pour la persistance des données",
      "Application mobile compagnon en Flutter",
      "Intégration de l'API Gemini pour les réponses intelligentes",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Flutter", "Gemini API"],
  },
  {
    company: "ETC Tunisia",
    role: "Full-Stack Web Developer (Stage PFE)",
    period: "Février 2023 - Mai 2023",
    location: "Kairouan, Tunisie",
    description:
      "Conception et développement d'un chatbot intelligent pour l'assistance aux clients.",
    achievements: [
      "Développement backend avec Python, ChatterBot et Flask",
      "Interface utilisateur moderne avec React",
      "Intégration d'algorithmes de traitement du langage naturel",
      "Documentation technique complète",
    ],
    technologies: ["Python", "ChatterBot", "Flask", "React", "NLP"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Expérience</span> Professionnelle
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Mon parcours professionnel à travers différents stages et projets.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
              <motion.div
                className="glass rounded-2xl overflow-hidden card-hover"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-xl md:text-2xl font-bold">{exp.company}</h3>
                      </div>
                      <p className="text-lg text-primary font-medium">{exp.role}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Réalisations clés :</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient border at bottom */}
                <div className="h-1 bg-gradient-to-r from-primary via-blue-500 to-primary" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
