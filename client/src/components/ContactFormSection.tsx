import ContactForm from "@/components/ContactForm";

export default function ContactFormSection() {
  return (
    <section id="contact" className="py-6 md:py-10 lg:py-12 bg-background below-fold-section">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-foreground">
            Get in Touch
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Have questions about the villa? Send us a message and we'll respond within 24 hours.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
}
