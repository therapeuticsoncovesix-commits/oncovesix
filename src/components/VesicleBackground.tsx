import { motion } from "framer-motion";

interface VesicleProps {
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  opacity: number;
}

const Vesicle = ({ size, x, y, delay, duration, opacity }: VesicleProps) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle at 30% 30%, hsl(175 80% 60% / ${opacity}), hsl(200 80% 50% / ${opacity * 0.5}), transparent 70%)`,
      filter: "blur(1px)",
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const VesicleBackground = () => {
  const vesicles: VesicleProps[] = [
    { size: 300, x: "10%", y: "20%", delay: 0, duration: 8, opacity: 0.15 },
    { size: 200, x: "70%", y: "10%", delay: 1, duration: 10, opacity: 0.12 },
    { size: 150, x: "80%", y: "60%", delay: 2, duration: 7, opacity: 0.1 },
    { size: 100, x: "20%", y: "70%", delay: 0.5, duration: 9, opacity: 0.08 },
    { size: 80, x: "50%", y: "40%", delay: 1.5, duration: 6, opacity: 0.1 },
    { size: 120, x: "35%", y: "80%", delay: 3, duration: 11, opacity: 0.07 },
    { size: 60, x: "60%", y: "75%", delay: 2.5, duration: 8, opacity: 0.12 },
    { size: 180, x: "5%", y: "50%", delay: 0.8, duration: 9, opacity: 0.09 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, hsl(175 60% 30% / 0.15), transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 50%, hsl(200 70% 40% / 0.1), transparent 50%),
            radial-gradient(ellipse 50% 30% at 0% 80%, hsl(175 60% 35% / 0.08), transparent 50%)
          `,
        }}
      />
      
      {/* Vesicles */}
      {vesicles.map((vesicle, index) => (
        <Vesicle key={index} {...vesicle} />
      ))}

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default VesicleBackground;