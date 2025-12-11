import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  GraduationCap,
  Code,
  Database,
  Wrench,
  Languages,
  Users,
} from "lucide-react";

const education = [
  {
    school: "ESPRIT",
    degree: "Ingénieur en Génie Logiciel",
    period: "2023 - Présent",
    location: "Ariana, Tunisie",
  },
  {
    school: "ISIGK",
    degree: "Licence en Informatique de Gestion",
    period: "2020 - 2023",
    location: "Kairouan, Tunisie",
  },
  {
    school: "Lycée Ibn Khaldoun",
    degree: "Baccalauréat Sciences Expérimentales",
    period: "2016 - 2020",
    location: "Kairouan, Tunisie",
  },
];

const skillCategories = [
  {
    title: "Langages",
    icon: Code,
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C/C++", "Dart", "Swift", "Kotlin"],
  },
  {
    title: "Front-end",
    icon: Code,
    skills: ["React", "Flutter", "Jetpack Compose", "SwiftUI", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Back-end",
    icon: Database,
    skills: ["Spring Boot", "Node.js", "NestJS", "Express", ".NET Core", "Flask"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase", "Supabase"],
  },
  {
    title: "Outils & DevOps",
    icon: Wrench,
    skills: ["Git", "Docker", "GitHub Actions", "Trello", "Notion", "Jira"],
  },
];

const languages = [
  { name: "Arabe", level: "Natif", percentage: 100 },
  { name: "Anglais", level: "Courant", percentage: 90 },
  { name: "Français", level: "Courant", percentage: 85 },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            À <span className="text-gradient">Propos</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Découvrez mon parcours académique, mes compétences techniques et mes expériences de leadership.
          </p>
        </AnimatedSection>

        {/* Education Timeline */}
        <AnimatedSection delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Éducation</h3>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full glow-sm" />
                    
                    <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                      <div className="glass p-6 rounded-xl card-hover">
                        <h4 className="text-xl font-bold text-primary">{item.school}</h4>
                        <p className="font-medium">{item.degree}</p>
                        <p className="text-sm text-muted-foreground">{item.period}</p>
                        <p className="text-sm text-muted-foreground">{item.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Compétences Techniques</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-xl card-hover"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <category.icon className="h-5 w-5 text-primary" />
                    <h4 className="font-bold">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Languages & Leadership */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.3} direction="left">
            <div className="glass p-6 rounded-xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <Languages className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Langues</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-muted-foreground text-sm">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} direction="right">
            <div className="glass p-6 rounded-xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Leadership</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg">Tunivisions</h4>
                  <p className="text-muted-foreground text-sm">2018 - 2023</p>
                  <p className="mt-2 text-muted-foreground">
                    Participation active dans l'organisation d'événements culturels et éducatifs.
                    Développement de compétences en communication, gestion d'équipe et coordination de projets.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
