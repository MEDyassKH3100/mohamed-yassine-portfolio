import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Khaled Guedria",
    role: "Encadrant Académique, ESPRIT",
    content:
      "L'équipe PixelMinds a présenté un projet remarquable avec MSAware, qui a remporté le 1er prix lors du Bal des Projets ESPRIT 2025. Leur solution innovante, centrée sur l'utilisateur et intégrant intelligemment l'IA, a particulièrement impressionné le jury par sa qualité technique et son impact potentiel.",
    avatar: "KG",
    rating: 5,
  },
  {
    name: "Walid Ben Henda",
    role: "CEO, Vision Age VFX",
    content:
      "Durant son stage d'ingénieur, Yassine a fait preuve d'une grande autonomie et d'excellentes compétences techniques. L'application IQRAA qu'il a développée est robuste, bien architecturée et répond parfaitement aux besoins.",
    avatar: "WH",
    rating: 5,
  },
  {
    name: "Mohamed Hosni",
    role: "Encadrant de Stage, ESPRIT",
    content:
      "Yassine a démontré une grande autonomie et de solides compétences full-stack mobile durant son stage. Son travail sur la plateforme de chatbot avec intégration Gemini API était rigoureux et de très bonne qualité.",
    avatar: "MH",
    rating: 5,
  },
  {
    name: "Khaoula Barhoumi",
    role: "Chef de Projet, ETC Tunisia",
    content:
      "Yassine possède une rare combinaison de compétences techniques et de soft skills. Sa capacité à comprendre les besoins métier et à les traduire en solutions fonctionnelles est remarquable.",
    avatar: "KB",
    rating: 5,
  },
  {
    name: "Anis Kalboussi",
    role: "Encadrant Académique, ISIGK",
    content:
      "Un étudiant brillant doté d'une grande capacité d'apprentissage et d'une excellente maîtrise technique. Yassine fait preuve d'autonomie, de rigueur et d'un véritable esprit analytique dans la réalisation de ses projets, tout en démontrant de solides compétences en travail d'équipe et en communication.",
    avatar: "KB",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Témoignages</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Ce que disent les personnes avec qui j'ai travaillé.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className="glass rounded-2xl p-6 md:p-8 h-full relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 relative z-10 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
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
