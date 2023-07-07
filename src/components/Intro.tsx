import { motion } from 'framer-motion';
import Container from './Container';
import NarrowContainer from './NarrowContainer';

export default function Intro() {
  return (
    <div>
      <Container>
        <NarrowContainer>
          <div className="py-32 px-8">
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.25, duration: 1 }}
              className="text-2xl leading-relaxed text-gray-600"
            >
              Senior fullstack udvikler og product manager med 8 års erfaring inden for SaaS og
              eCommerce. <br />
              <br />
              Senest har jeg været hos en af Danmarks stærkeste eCommerce brands{' '}
              <a
                href="https://sofacompany.com"
                className="font-bold"
                target="_blank"
                rel="noreferrer"
              >
                SOFACOMPANY
              </a>{' '}
              og tidligere hos
              <a href="https://schodt.dk" className="font-bold" target="_blank" rel="noreferrer">
                {' '}
                SCHØDT A/S
              </a>{' '}
              og{' '}
              <a
                href="https://yourlocal.org"
                className="font-bold"
                target="_blank"
                rel="noreferrer"
              >
                YourLocal
              </a>
              .
            </motion.p>
          </div>
        </NarrowContainer>
      </Container>
    </div>
  );
}
