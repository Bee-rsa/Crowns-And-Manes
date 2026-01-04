import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import featured from "../../assets/Screenshot_20260104_023920_Chrome.jpg";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row-reverse bg-neutral-300 rounded-3xl overflow-hidden lg:min-h-[430px]"
        initial={{ y: 100, opacity: 0 }}      // Start 100px below, invisible
        whileInView={{ y: 0, opacity: 1 }}    // Animate to natural position & visible
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of element enters view
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Image (top on mobile, right on desktop) */}
        <div className="lg:w-1/2 relative h-64 sm:h-80 lg:h-auto">
          <img
            src={featured}
            alt="Featured Wig Collection"
            className="w-full h-full object-cover lg:absolute lg:inset-0 lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center text-center lg:text-left">
          <h3 className="text-sm uppercase tracking-widest text-crown-gold mb-3">
            Signature Collection
          </h3>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
            Premium Wigs Designed <br className="hidden lg:block" /> to Elevate Your Look
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Discover expertly crafted human hair wigs made for comfort,
            confidence, and effortless beauty. From everyday elegance to
            statement styles, each piece is designed to feel as natural as it
            looks.
          </p>

          <Link
            to="/collections/all"
            className="inline-flex w-fit mx-auto lg:mx-0 bg-crown-gold text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-400 transition"
          >
            Explore the Collection
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedCollection;
