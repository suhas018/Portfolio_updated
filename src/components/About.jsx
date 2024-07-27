import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Myself, Malakala Suhas Badrinath, currently pursuing 4th-year B.Tech specializing in
        Computer Science Engineering at Vignan's Institute of Information Technology. I have a 
        strong foundation in web development, with expertise in HTML, CSS, JavaScript, and 
        Django, along with skills in Git, UI/UX design. I am passionate 
        about building robust and scalable web applications and continuously expanding my
        knowledge in emerging technologies. My goal is to excel as a full-stack developer and 
        contribute to innovative projects in the tech industry.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>Feel free to connect with me:</p>
        <ul className='list-none'>
          <li>
          Mail : &nbsp;
            <a
              href="mailto:suhas.malakala@gmail.com"
              className='text-blue-500 underline hover:text-blue-700'
            >
             suhas.malakala@gmail.com
            </a>
          </li>
          <li>
            Profile: &nbsp;
            <a
              href="https://www.linkedin.com/in/malakala-suhas-badrinath-355532252/"
              className='text-blue-500 underline hover:text-blue-700'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn Profile
            </a>
          </li>
        </ul>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
