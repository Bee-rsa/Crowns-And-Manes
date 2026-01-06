import { useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";
import { useMemo } from "react";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  // Generate a unique reference number for this cart
  const referenceNumber = useMemo(() => {
    return "REF-" + Math.floor(100000 + Math.random() * 900000); // 6-digit random number
  }, []); // regenerate if cart changes

  // Format cart into WhatsApp message
  const formatCartForWhatsApp = () => {
    if (!cart?.products || cart.products.length === 0) return "My cart is empty";

    let message = `Hello, I would like to place an order.\nReference Number: ${referenceNumber}\n\n`;

    cart.products.forEach((product, index) => {
      message += `Product ${index + 1}:\n`;
      message += `Product Name: ${product.name}\n`;
      message += `Description: ${product.description || "N/A"}\n`;
      message += `SKU: ${product.sku || "N/A"}\n`;
      const sizes = product.printOptions?.standardSizes;
      message += `Inches: ${sizes && sizes.length > 0 ? sizes.join(", ") : "N/A"}\n`;
      message += `Price: R${product.price.toFixed(2)}\n`;
      message += `User Email: ${user?.email || "N/A"}\n\n`;
    });

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const whatsappNumber = "+27719945058"; // Replace with your WhatsApp number
    const message = formatCartForWhatsApp();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen -mt-2 bg-black flex items-center justify-center p-6 font-poppins">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side - Payment Details */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-6">Payment Details</h2>
          <p className="text-gray-300 mb-2"><span className="font-semibold text-white">Bank:</span> ABSA</p>
          <p className="text-gray-300 mb-2"><span className="font-semibold text-white">Account Holder:</span> Miss P Xaba</p>
          <p className="text-gray-300 mb-2"><span className="font-semibold text-white">Account Number:</span> 4106079822</p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">Account Type:</span> <span className="font-bold">{referenceNumber}</span>
          </p>
          <p className="text-gray-400 mt-4">
            Please make the payment and then place your order via WhatsApp using the right panel.
          </p>
        </div>

        {/* Right Side - WhatsApp Order */}
        <div className="bg-green-600 p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
          <FaWhatsapp size={60} className="mb-4 text-white" />
          <h2 className="text-3xl font-bold text-white mb-4">Send Order via WhatsApp</h2>
          <p className="text-white mb-6">
            Once you click the button below, your cart details will be sent directly to us on WhatsApp.
          </p>
          <button
            onClick={handleWhatsAppOrder}
            className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center gap-2"
          >
            <FaWhatsapp /> Send Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
