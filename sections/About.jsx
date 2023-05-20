'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| About Multiverse" textStyles="text-center" />
      <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        <span className="font-extrabold text-white">The Multiverse</span> suggests infinite universes, each with unique laws.
        It challenges our
        <span className="font-extrabold text-white"> perception of reality</span> and
        <span className="font-extrabold text-white"> inspires exploration. </span>
        Endless possibilities exist in
        <span className="font-extrabold text-white"> parallel dimensions</span> and alternate timelines.
        It sparks curiosity and fuels the quest for answers about
        <span className="font-extrabold text-white"> our existence.</span>
        The concept fascinates
        <span className="font-extrabold text-white"> scientists and philosophers</span> alike.
        It invites us to ponder the boundless
        <span className="font-extrabold text-white"> nature of the cosmos.</span>
      </motion.p>
    </motion.div>
  </section>
);

export default About;
