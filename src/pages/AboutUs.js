import React from 'react';
//Page components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';




const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
    </motion.div>
  );
};

export default AboutUs;
