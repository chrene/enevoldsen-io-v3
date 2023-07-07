import Container from './Container';
import NarrowContainer from './NarrowContainer';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="bg-teal-50">
      <Container>
        <NarrowContainer>
          <div className="py-32 px-8">
            <motion.h1
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="text-5xl font-bold leading-snug md:text-6xl md:leading-snug"
            >
              Christian Enevoldsen Freelance Fullstack udvikler
            </motion.h1>
          </div>
        </NarrowContainer>
      </Container>
    </div>
  );
}
