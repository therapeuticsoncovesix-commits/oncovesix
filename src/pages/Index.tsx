const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container py-8">
        <div className="text-lg font-medium tracking-tight text-foreground">
          OncoVesix Therapeutics
        </div>
      </header>

      {/* Hero */}
      <section className="container py-24 md:py-32">
        <h1 className="max-w-3xl text-3xl font-normal leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Engineering bacteria-exosome hybrids for{" "}
          <span className="text-accent">precise tumor targeting</span>.
        </h1>
      </section>

      {/* What We're Building */}
      <section className="container py-16 md:py-24">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          What We're Building
        </h2>
        <ul className="max-w-2xl space-y-6 text-lg text-foreground/90 md:text-xl">
          <li className="flex items-start gap-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              Non-pathogenic bacteria engineered to selectively colonize solid tumors
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              Exosome payloads carrying therapeutic cargo with programmable release
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              A modular platform for next-generation targeted oncology therapeutics
            </span>
          </li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="container py-16 md:py-24">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Why It Matters
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-relaxed">
          Solid tumors remain difficult to treat effectively. Systemic therapies lack 
          precision, and targeted delivery remains a fundamental challenge. By 
          combining the natural tumor-homing capabilities of certain bacteria with 
          the biocompatibility and cargo capacity of exosomes, we are developing 
          a platform designed to concentrate therapeutics where they are needed most.
        </p>
      </section>

      {/* Current Status */}
      <section className="container py-16 md:py-24">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Current Status
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-relaxed">
          OncoVesix is currently in preclinical research. We are developing and 
          validating our core platform technology, including bacterial strain 
          engineering, exosome conjugation methods, and in vitro efficacy studies.
        </p>
      </section>

      {/* Contact */}
      <section className="container py-16 md:py-24">
        <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </h2>
        <a
          href="mailto:info@oncovesix.com"
          className="text-lg text-accent underline-offset-4 transition-colors hover:underline md:text-xl"
        >
          info@oncovesix.com
        </a>
      </section>

      {/* Footer */}
      <footer className="container py-12 md:py-16">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} OncoVesix Therapeutics. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
