import About from "../assets/Screenshot_20260103_201127_Chrome.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  const imageVariant = {
    hidden: { x: -100, rotate: -5, opacity: 0 },
    visible: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section className="font-poppins bg-black px-4 py-10 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <motion.div
          className="w-full md:w-3/5 h-[300px] sm:h-[400px] md:h-[500px]"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            src={About}
            alt="About Us"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-2/5 text-center md:text-left"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl sm:text-4xl text-crown-gold font-bold mb-6">
            About Crowns And Manes
          </h1>

          <p className="text-base sm:text-lg text-white mb-4">
            Located in the heart of Pietermaritzburg (PMB),{" "}
            <strong>Philisiwe Xaba Custom Wigs</strong> is your premier destination
            for high-quality, handcrafted wigs designed to suit every style and
            personality.
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <p className="text-crown-gold font-bold">Custom Vietnamese Wigs</p>
              <p className="text-white">
                Premium Vietnamese hair tailored to your preferences.
              </p>
            </div>

            <div>
              <p className="text-crown-gold font-bold">Pixie Cuts & Styled Wigs</p>
              <p className="text-white">
                Chic pixie cuts or layered styles crafted to perfection.
              </p>
            </div>

            <div>
              <p className="text-crown-gold font-bold">Installations</p>
              <p className="text-white">
                Professional installs for a flawless, natural finish.
              </p>
            </div>

            <div>
              <p className="text-crown-gold font-bold">
                Wig Wash & Maintenance
              </p>
              <p className="text-white">
                Specialized treatments to keep wigs fresh and long-lasting.
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-white mb-4">
            Every wig is carefully crafted to ensure comfort, quality, and a
            perfect fit—because confidence starts with how you feel.
          </p>

          <p className="text-base sm:text-lg text-white">
            From everyday elegance to glamorous statements, we bring your vision
            to life with care and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
