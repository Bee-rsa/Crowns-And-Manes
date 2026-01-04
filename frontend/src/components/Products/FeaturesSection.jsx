import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="-mt-42 px-4 bg-white h-200px">
      <div className="container mx-auto grid  grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">NATIONAL DELIVERY</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
           Reliable nationwide delivery to ensure your order arrives safely and on time, wherever you are in South Africa.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">PROMOTIONAL BENEFITS</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
           Enjoy exclusive promotions, special offers, and customer-friendly guarantees on selected services.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">SECURE CHECKOUT</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Safe and trusted payment arrangements handled through verified banking channels for your peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
