import emailjs from "@emailjs/browser";
import md5 from "md5";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export function useEmailJS() {
  const sendEmail = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      const now = new Date().toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const emailHash = md5(formData.email.trim().toLowerCase()); // ← clé pour Gravatar

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: now,
          emailHash, // ← on l'envoie au template
        }
      );

      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.text || "Erreur" };
    }
  };

  return { sendEmail };
}
