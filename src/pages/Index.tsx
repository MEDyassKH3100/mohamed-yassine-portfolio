import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mohamed Yassine Khlaf | Software Engineering Student & Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio de Mohamed Yassine Khlaf - Étudiant en ingénierie logicielle à ESPRIT, spécialisé en développement Full-Stack, IA, Computer Vision et DevOps. Découvrez mes projets et expériences."
        />
        <meta
          name="keywords"
          content="Mohamed Yassine Khlaf, développeur, full-stack, AI, computer vision, Flutter, React, NestJS, ESPRIT, Tunisie"
        />
        <meta name="author" content="Mohamed Yassine Khlaf" />
        <meta property="og:title" content="Mohamed Yassine Khlaf | Software Engineering Student" />
        <meta
          property="og:description"
          content="Portfolio de Mohamed Yassine Khlaf - Étudiant en ingénierie logicielle spécialisé en Full-Stack, IA et DevOps."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mohamedyassinekhlaf.dev" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
