const FeaturesSection = () => {
  return (
    <section className="bg-black font-poppins -mt-8 py-16 px-4 lg:px-20">
      <h2 className="text-center text-4xl sm:text-5xl font-bold text-crown-gold mb-12">
        How to Order Your Wig
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Block 1 */}
        <div className="bg-transparent p-8 rounded-2xl shadow-2xl text-center hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-crown-gold text-black font-bold text-xl">
              1
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Browse Our Catalogue
          </h3>
          <p className="text-gray-300">
            Explore our wide selection of premium human hair wigs. Find styles that suit your personality, occasion, and desired look.
          </p>
        </div>

        {/* Block 2 */}
        <div className="bg-transparent p-8 rounded-2xl shadow-2xl text-center hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-crown-gold text-black font-bold text-xl">
              2
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Place Your Order
          </h3>
          <p className="text-gray-300">
            Use our app to confirm your order. This only confirms your selection — payment is still required before delivery.
          </p>
        </div>

        {/* Block 3 */}
        <div className="bg-transparent p-8 rounded-2xl shadow-2xl text-center hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-crown-gold text-black font-bold text-xl">
              3
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Order Dispatched
          </h3>
          <p className="text-gray-300">
            Once your payment reflects, your order will be handed to our trusted courier service and delivered safely to your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
