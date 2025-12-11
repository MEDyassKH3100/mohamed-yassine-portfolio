import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur-md opacity-75"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-primary-foreground">
                MY
              </span>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Mohamed Yassine{" "}
          <span className="text-gradient">Khlaf</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
            Software Engineering Student |{" "}
            <span className="text-primary">Full-Stack Developer</span> |{" "}
            AI & Computer Vision Enthusiast
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-2xl mx-auto text-muted-foreground mb-8 text-base md:text-lg"
        >
          Étudiant motivé passionné par le développement mobile/web, l'intelligence artificielle
          et le DevOps. Expériences chez ETC Tunisia et Vision Age VFX.
          Ouvert aux nouvelles opportunités.
        </motion.p>

        {/* CTA Buttons */}
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

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}
