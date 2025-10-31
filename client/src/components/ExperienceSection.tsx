export default function ExperienceSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
            The Experience
          </h2>
        </div>
        
        <div className="space-y-8 text-lg md:text-xl leading-loose text-foreground">
          <p className="text-center">
            Wake up to <span className="font-semibold text-primary">fresh mint tea by the pool</span>.
          </p>
          
          <p className="text-center">
            Play a padel match before your <span className="font-semibold text-primary">chef-prepared breakfast</span>.
          </p>
          
          <p className="text-center">
            Train in your private gym while your friends shoot hoops.
          </p>
          
          <p className="text-center">
            Watch the <span className="font-semibold text-primary">sunset over the Atlas Mountains</span> — from your heated pool.
          </p>
          
          <div className="pt-8 border-t border-border mt-12">
            <p className="text-center text-2xl md:text-3xl font-serif italic text-card-foreground">
              Everything is handled. From airport pickup to club bookings — we manage it all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
