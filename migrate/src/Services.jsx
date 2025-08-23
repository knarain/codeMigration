import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';


const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Full-day coverage to capture your complete love story, from getting ready to the final dance. Packages are customizable.',
    },
    {
      icon: Camera,
      title: 'Portraits',
      description: 'Engagement, anniversary, and lifestyle sessions. A relaxed experience designed to capture your authentic connection.',
    },
    {
      icon: Users,
      title: 'Editorials',
      description: 'Collaborative projects with brands and publications to create compelling visual narratives with an artistic touch.',
    },
  ];

  const handleInquire = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="services" className="section-padding bg-[#FDFDFD]">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Offerings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing a tailored and personal experience to document your most cherished memories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
              className="text-center p-8 flex flex-col items-center"
            >
              <service.icon className="h-10 w-10 text-gray-700 mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            onClick={handleInquire}
            variant="outline"
            className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-none px-10 py-6 text-sm uppercase tracking-widest"
          >
            Inquire For Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;