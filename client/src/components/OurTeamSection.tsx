import { ourTeamContent } from "@/data/villa-content";

export default function OurTeamSection() {
  return (
    <section className="py-6 md:py-10 lg:py-12 px-4 md:px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif font-bold text-xl md:text-3xl lg:text-4xl mb-3 md:mb-6 text-center text-card-foreground">
          {ourTeamContent.sectionTitle}
        </h2>
        <div className="space-y-2 md:space-y-4">
          {ourTeamContent.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2 md:gap-3" data-testid={`benefit-${index}`}>
              <span className="text-lg md:text-2xl flex-shrink-0">✅</span>
              <p 
                className="text-xs md:text-lg text-card-foreground leading-snug md:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: benefit }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
