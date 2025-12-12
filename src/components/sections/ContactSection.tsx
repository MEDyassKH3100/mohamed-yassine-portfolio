import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useEmailJS } from "@/hooks/useEmailJS";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mohamedyassine.khlaf@esprit.tn",
    href: "mailto:mohamedyassine.khlaf@esprit.tn",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+216 95 962 777",
    href: "tel:+21695962777",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Tunisie",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MEDyassKH3100",
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-yassine-khlaf-526ba725b/",
    color: "hover:text-blue-500",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { sendEmail } = useEmailJS(); // ← le hook magique

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await sendEmail(formData);

    if (result.success) {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai rapidement.",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Erreur lors de l'envoi",
        description: result.message,
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Vous avez un projet en tête ou souhaitez discuter ? N'hésitez pas à me contacter.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection delay={0.1} direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Suivez-moi</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className="hidden lg:block relative">
                <div className="absolute -left-4 top-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="relative glass rounded-2xl p-6">
                  <p className="text-lg font-medium mb-2">Disponible pour :</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      Stages et alternances
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      Projets freelance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      Collaborations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glow-sm hover:glow transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
