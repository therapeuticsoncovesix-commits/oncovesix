import { motion } from "framer-motion";
import VesicleBackground from "@/components/VesicleBackground";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <VesicleBackground />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 container py-8"
      >
        <div className="text-lg font-semibold tracking-tight text-foreground">
          OncoVesix
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative z-10 container min-h-[80vh] flex flex-col justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary font-medium mb-6 tracking-wide"
          >
            PRECISION ONCOLOGY
          </motion.p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
            Engineered bacteria.
            <br />
            <span className="text-gradient">Targeted delivery.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Building the next generation of tumor-targeting therapeutics through 
            bacteria-exosome hybrid platforms.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* What We're Building */}
      <section className="relative z-10 container py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wide">
            WHAT WE'RE BUILDING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            A modular platform for precision delivery
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            }
            title="Tumor-Homing Bacteria"
            description="Non-pathogenic bacterial strains engineered to selectively colonize and persist within solid tumor microenvironments."
            delay={0}
          />
          <FeatureCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            }
            title="Exosome Conjugation"
            description="Therapeutic cargo packaged in biocompatible exosomes and coupled to bacterial scaffolds for enhanced delivery."
            delay={0.1}
          />
          <FeatureCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            }
            title="Modular Platform"
            description="A flexible architecture enabling rapid iteration across therapeutic payloads and tumor indications."
            delay={0.2}
          />
        </div>
      </section>

      {/* Why It Matters */}
      <section className="relative z-10 container py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-primary font-medium mb-4 tracking-wide">
              WHY IT MATTERS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass rounded-3xl p-10 md:p-14 glow-soft"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground/90">
              Most cancer therapeutics struggle to reach tumors efficiently. 
              <span className="text-gradient"> We're building a biological GPS</span>—leveraging 
              bacteria that naturally home to tumors to deliver concentrated 
              therapeutic payloads exactly where they're needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Status */}
      <section className="relative z-10 container py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-primary font-medium mb-4 tracking-wide">
            CURRENT STATUS
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Preclinical Development
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            OncoVesix is advancing through preclinical research, focusing on bacterial 
            strain optimization, exosome coupling mechanisms, and in vitro validation 
            of our core platform technology.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="relative z-10 container py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-primary font-medium mb-4 tracking-wide">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Let's talk
          </h2>
          <motion.a
            href="mailto:info@oncovesix.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block text-xl md:text-2xl text-foreground hover:text-primary transition-colors duration-300 border-b-2 border-primary/30 hover:border-primary pb-1"
          >
            info@oncovesix.com
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container py-12 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OncoVesix Therapeutics
          </p>
          <p className="text-sm text-muted-foreground">
            Precision-engineered cancer therapeutics
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;