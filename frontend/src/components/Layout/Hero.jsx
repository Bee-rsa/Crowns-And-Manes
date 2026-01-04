import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/Hero.jpg";

const Hero = () => {
  return (
    <section className="relative -mt-6">
      {/* ===== Desktop Version ===== */}
      <div className="hidden lg:block h-[600px] relative overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 100%)",
          }}
        />

        <div className="absolute inset-0 flex flex-row items-center justify-center px-6">
          {/* Left - Image */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-1/2 -ml-14 mb-0"
          >
            <img
              src={heroImg}
              alt="Hero"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-1/2 text-left pl-12"
          >
            <h1 className="text-6xl font-bold tracking-tighter font-poppins uppercase mb-4 text-white">
              Premium Human Hair <br /> Wigs in South Africa
            </h1>
            <p className="text-lg mb-6 text-white">
              Explore our vacation-ready outfits with fast worldwide shipping.
              Comfort, style, and quality in every piece.
            </p>
            <Link
              to="/print"
              className="bg-crown-blue text-gray-950 px-6 py-2 rounded-xl text-lg inline-block"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ===== Mobile / Tablet Version ===== */}
      <div className="block lg:hidden relative overflow-hidden">
        {/* Image */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full"
        >
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-[550px] md:h-[650px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)",
          }}
        />

        {/* Text overlay */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-poppins uppercase mb-4 text-white">
            Premium Human Hair <br /> Wigs in South Africa
          </h1>
          <p className="text-sm md:text-lg mb-6 text-white">
            Explore our vacation-ready outfits with fast nationwide shipping.
            Comfort, style, and quality in every piece.
          </p>
          <Link
            to="#"
            className="bg-crown-gold text-gray-950 px-6 py-2 rounded-xl text-lg inline-block"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
