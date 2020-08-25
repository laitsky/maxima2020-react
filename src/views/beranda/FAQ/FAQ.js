import React from 'react';
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';
import { AlignMiddle, MxmLogoContainer } from '../../../components';
import { MxmLogoText } from '../../../assets';
import { contents } from './contents';

const FAQ = () => {
  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <AlignMiddle style={{ paddingTop: '2em' }}>
          <motion.div
            initial={{ y: -999, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
          >
            <MxmLogoContainer src={MxmLogoText} alt="Logo MAXIMA" />
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
          >
            <h1
              className="mxm-navy"
              style={{ fontFamily: 'canaro-bold' }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </motion.div>
        </AlignMiddle>
        {contents.map((c, i) => (
          <Accordion key={c.title}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${i}a-content`}
              id={`panel${i}a-header`}
            >
              <Typography>{c.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{c.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
};

export default FAQ;
