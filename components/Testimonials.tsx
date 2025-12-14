import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Lead Designer at Vercel",
    avatar: "SC",
    content: "Aether Glass UI transformed how we approach interface design. The glassmorphism effects are buttery smooth and the component library is incredibly intuitive.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO at DataFlow",
    avatar: "MR",
    content: "We've tried countless UI frameworks, but nothing comes close to Aether's perfect balance of aesthetics and performance. Our users love the modern feel.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Manager at Stripe",
    avatar: "EW",
    content: "The attention to detail is remarkable. Every animation, every blur effect, every gradient has been crafted with precision. This is the future of web design.",
    rating: 5,
  },
  {
    name: "James Park",
    role: "Frontend Dev at Shopify",
    avatar: "JP",
    content: "Implementing Aether in our dashboard reduced our development time by 40%. The components just work, and they look absolutely stunning.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

  return (
    <section id="testimonials" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Innovators</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Join thousands of designers and developers building the future with Aether.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full"
            >
              <GlassCard className="p-8 lg:p-12" intensity="high">
                <div className="flex flex-col items-center text-center">
                  <Quote className="w-12 h-12 text-cyan-400 mb-6 opacity-50" />
                  
                  <p className="text-xl lg:text-2xl text-white font-light leading-relaxed mb-8 max-w-3xl">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-slate-400 text-sm">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 focus-ring"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 focus-ring"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all focus-ring ${
                  index === currentIndex
                    ? 'bg-cyan-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
