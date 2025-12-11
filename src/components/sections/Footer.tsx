import { motion } from "framer-motion";
import { Download, Github, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Expérience", href: "#experience" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-gradient mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Mohamed Yassine Khlaf
            </motion.h3>
            <p className="text-muted-foreground mb-4">
              Software Engineering Student passionné par le développement Full-Stack,
              l'IA et le DevOps.
            </p>
            {/* Download CV Button */}
            <Button asChild variant="outline" className="group">
              <a href="/Mohamed_Yassine_Khlaf_CV.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Télécharger CV
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold mb-4">Connectez-vous</h4>
            <div className="flex gap-3 mb-4">
              <motion.a
                href="https://github.com/MEDyassKH3100"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohamed-yassine-khlaf-526ba725b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:bg-blue-500/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
            <p className="text-sm text-muted-foreground">
              Email: mohamedyassine.khlaf@esprit.tn
            </p>
            <p className="text-sm text-muted-foreground">
              Tél: +216 95 962 777
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Mohamed Yassine Khlaf. Tous droits réservés.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Fait avec <Heart className="h-4 w-4 text-red-500 animate-pulse" /> en Tunisie
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
