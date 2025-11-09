import { useEffect } from "react";

export default function TallyFormSection() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      className="py-6 md:py-10 lg:py-12 bg-background below-fold-section"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-foreground">
            Get in Touch
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We reply within 2 hours to all Marrakech villa enquiries
          </p>
        </div>
        
        <div className="w-full" data-testid="tally-form-container">
          <iframe
            data-tally-src="https://tally.so/embed/VLE4Za?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
            className="rounded-lg"
            data-testid="tally-form-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
