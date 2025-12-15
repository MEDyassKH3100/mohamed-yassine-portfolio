import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeWriterText } from "../TypeWriterText";

export function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container-custom text-center">
        {/* Photo de profil */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Fond bleu / glow - placé derrière l'image (z-0) et plus grand que l'image */}
            <motion.div
              className="absolute -inset-6 z-0 rounded-full bg-gradient-to-r from-primary to-blue-500 opacity-80 filter blur-3xl"
              animate={{ opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Conteneur d'image au-dessus du fond bleu pour éviter la teinte */}
            <div className="relative z-10 w-40 h-40 rounded-full overflow-hidden border-4 border-black/60 shadow-[0_0_40px_rgba(59,130,246,0.18)]">
              <motion.img
                src="/photo-profile.jpg"
                alt="Photo de profil de Mohamed Yassine Khlaf"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.12 }}
                animate={{ scale: 1.02 }}          // Zoom subtil persistant
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Nom */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Mohamed Yassine{" "}
          <span className="text-gradient">Khlaf</span>
        </motion.h1>

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
            Ingénieur logiciel |{" "}
            <span className="text-primary">Développeur Full-Stack</span> |{" "}
            Passionné d'IA et de Vision par Ordinateur
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-3xl mx-auto text-muted-foreground mb-8"
        >
          <TypeWriterText
            text="Étudiant en ingénierie logicielle ponctuel et motivé, passionné par le développement mobile et web. Doté de compétences en leadership grâce à mes activités extrascolaires, je suis ouvert aux opportunités pour contribuer positivement."
            className="text-base md:text-lg leading-relaxed"
          />
        </motion.div>

        {/* Boutons CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="glow-sm hover:glow transition-all duration-300 group"
          >
            <a
              href="https://github.com/MEDyassKH3100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Voir GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <a
              href="https://www.linkedin.com/in/mohamed-yassine-khlaf-526ba725b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Défiler vers la section À propos"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}