import About from "../assets/Screenshot_20260103_201127_Chrome.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Animation variants
  const imageVariant = {
    hidden: { x: -100, rotate: -5, opacity: 0 },
    visible: { x: 0, rotate: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const textVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <div className="font-poppins -mt-1 bg-black p-4 md:p-6">
      {/* Container for image + text side by side */}
      <div className="flex flex-col md:flex-row items-start md:items-start -ml-44 mb-6">

        {/* Image on the left */}
        <motion.div
          className="w-full md:w-3/5 h-[500px] flex-shrink-0"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            src={About}
            alt="About Us"
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* Text on the right */}
        <motion.div
          className="w-full md:w-2/5 md:pl-6 mt-6 md:mt-0"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl text-crown-gold font-bold mb-6">
            About Crowns And Manes
          </h1>
          <p className="text-lg text-white mb-4">
            Located in the heart of Pietermaritzburg (PMB), <strong>Philisiwe Xaba Custom Wigs</strong> is your premier destination for high-quality, handcrafted wigs designed to suit every style and personality. Founded by <strong>Philisiwe Xaba</strong>, our mission is to empower individuals to express themselves with confidence and elegance through beautiful, custom-made hair solutions.
          </p>
          
          <div className="mb-6">
            <p className="text-lg text-crown-gold font-bold">Custom Vietnamese Wigs:</p>
            <p className="text-lg text-white mb-4">
              Tailored to your preferences, our wigs use premium Vietnamese hair that is soft, durable, and natural-looking.
            </p>

            <p className="text-lg text-crown-gold font-bold">Pixie Cuts & Styled Wigs:</p>
            <p className="text-lg text-white mb-4">
              Whether you want a bold, chic pixie cut or a versatile layered style, we create wigs that match your desired look perfectly.
            </p>

            <p className="text-lg text-crown-gold font-bold">Installations:</p>
            <p className="text-lg text-white mb-4">
              Our professional installation services ensure a flawless, natural finish for every wig, so you can step out with confidence.
            </p>

            <p className="text-lg text-crown-gold font-bold">Wig Wash & Maintenance Services:</p>
            <p className="text-lg text-white mb-4">
              Keep your wigs looking fresh, healthy, and long-lasting with our specialized cleaning and maintenance treatments.
            </p>
          </div>

          <p className="text-lg text-white mb-4">
            At <strong>Philisiwe Xaba Custom Wigs</strong>, we believe that a great wig does more than enhance your look—it transforms your confidence. Every wig is carefully crafted to meet your individual style needs, ensuring comfort, quality, and a perfect fit.
          </p>
          
          <p className="text-lg text-white mb-4">
            Whether you are seeking a stunning everyday look or a glamorous statement style, we provide personalized consultations and exceptional customer care to bring your vision to life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
