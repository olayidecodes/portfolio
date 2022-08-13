import './Banner.scss'
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={"Victoria"} />
      <BannerRowCenter title={"Olayide"}/>
      <BannerRowBottom title={"Matthews"} />

      
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter) => (
      <motion.span
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className="banner-row">
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
      
    </div>
  );
};

const BannerRowCenter = ({ title}) => {
  return (
    <div className="banner-row center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
        <span className='row-message'>
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </span>
      </motion.div>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className="banner-row bottom">
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

export default Banner;