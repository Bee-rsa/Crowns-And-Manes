// ContactPage.jsx
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_47j7o4y", "template_80c8x2c", form.current, {
        publicKey: "62QEvBoAkwjeNxNXX",
      })
      .then(
        () => {
          toast.success("Thank you! Your message has been sent.");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col bg-black -mt-2 -mb-2 w-full font-poppins">
      <ToastContainer />
      <div className="flex flex-col mt-4 mb-16 w-full">
        {/* Top Section */}
        <div className="bg-custom-blue w-full flex items-center justify-center py-12 px-4 sm:px-8">
          <div className="w-full max-w-screen-lg mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl text-crown-gold font-bold mb-4">
              Get in touch with an Expert
            </h2>
            <p className="text-base text-white sm:text-lg mb-8">
              We always love speaking to customers, potential customers, business analysts, and digital freight enthusiasts. 
              To save you some time, check out if any of the links below may help before reaching out to us.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full bg-black flex justify-center items-start py-12 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-auto gap-8">
            
            {/* Left: Contact Info + Banking */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h3 className="text-2xl text-crown-gold font-bold mb-4">Contact Information</h3>
              <p className="text-base text-white sm:text-lg mb-4">
                Do you have any questions? We&apos;re here to help. Reach us through the following ways:
              </p>
              <ul className="list-none space-y-2 mb-6">
                <li className="text-white">
                  <strong>Email:</strong> <br />
                  <a href="mailto:crownsandmanes@gmail.com" className="hover:text-crown-gold">
                    crownsandmanes@gmail.com
                  </a>
                </li>
                <li className="text-white">
                  <strong>Phone:</strong> <br />
                  <a href="tel:+27719945058" className="hover:text-crown-gold">
                    071 994 5058
                  </a> 
                </li>
                <li className="text-white">
                  <strong>Address:</strong> <br />
                  <a
                    href="https://www.google.com/maps/search/Elandskop,+Pietermaritzburg,+Kwa-Zulu+Natal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-crown-gold"
                  >
                    Elandskop, Pietermaritzburg, Kwa-Zulu Natal
                  </a>
                </li>
              </ul>

              <h3 className="text-2xl text-crown-gold font-bold mb-4">Banking Details</h3>
              <ul className="list-none space-y-2">
                <li className="text-white">
                  <strong>Bank:</strong> ABSA
                </li>
                <li className="text-white">
                  <strong>Account Holder:</strong> Miss P Xaba
                </li>
                <li className="text-white">
                  <strong>Account Number:</strong> 4106079822
                </li>
                <li className="text-white">
                  <strong>Account Type:</strong> Cheque Account
                </li>
              </ul>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl text-crown-gold font-bold mb-4">Get in Touch</h3>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 w-full">
                <div>
                  <label htmlFor="user_name" className="block text-white text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                  />
                </div>

                <div>
                  <label htmlFor="cellphone_number" className="block text-white text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="cellphone_number"
                    name="cellphone_number"
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-white text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                  ></textarea>
                </div>

                {/* Buttons row: responsive */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-crown-gold text-white py-2 px-6 rounded-md hover:bg-custom-blue transition duration-200"
                  >
                    Send Message
                  </button>

                  <a
                    href="https://wa.me/27719945058"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-crown-gold text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-200 text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
