import { useEffect, useRef } from "react";

export default function ContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      className="py-6 md:py-10 lg:py-12 bg-background below-fold-section"
      ref={sectionRef}
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
        
        <div className="rounded-lg overflow-hidden shadow-sm">
          <iframe 
            data-tally-src="https://tally.so/embed/VLE4Za?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="542" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Villa Marrakech Enquiry"
            data-testid="form-tally-contact"
          />
        </div>
      </div>
    </section>
  );
}
