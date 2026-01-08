import { Link } from "react-router-dom";
import LogoImg from "../../assets/file_000000006140720c8faabaf97a58c4cf.png";
import SecondImg from "../../assets/IMG-20251230-WA0018(1).jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">

      {/* ================= MOBILE VIEW ONLY ================= */}
      <div className="block lg:hidden max-w-screen-xl mx-auto px-6 mb-8 flex-col gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center">
  <Link to="/">
    <img src={LogoImg} alt="Logo" className="h-56" />
  </Link>

  <img
    src={SecondImg}
    alt="Secondary Logo"
    className="h-12 mt-3"
  />
</div>


        {/* Catalogue + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center font-poppins">
          {/* Catalogue */}
          <div className="border-b sm:border-b-0 sm:border-r border-crown-gold sm:pr-4 pb-4 sm:pb-0">
            <h2 className="font-bold text-xl mt-16 mb-4 text-crown-gold uppercase tracking-wide">
              Catalogue
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/collections/all?category=Print" className="hover:text-white/80 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/collections/all?category=Print" className="hover:text-white/80 transition">
                  Vietnamese Wigs
                </Link>
              </li>
              <li>
                <Link to="/collections/all?category=Print" className="hover:text-white/80 transition">
                  Peruvian Wigs
                </Link>
              </li>
              <li>
                <Link to="/collections/all?category=Print" className="hover:text-white/80 transition">
                  Pixel Cuts
                </Link>
              </li>
              <li>
                <Link to="/collections/all?category=Print" className="hover:text-white/80 transition">
                  Installations & Customization
                </Link>
              </li>
              <li>
                <Link to="/collections/all?category=Print" className="hover:text-white/80 transition">
                  Wig Wash Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="pt-4 sm:pt-0 sm:pl-4">
            <h2 className="font-bold text-xl mb-4 text-crown-gold uppercase tracking-wide">
              Company
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-white/80 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white/80 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white/80 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact-page" className="hover:text-white/80 transition">
                  Talk To An Expert
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials + Trademark */}
        <div className="flex flex-col items-center mt-6">
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/crownsandmanes" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" className="h-7 w-7" alt="Facebook" />
            </a>
            <a href="https://wa.me/27719945058" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=16733&format=png&color=FFFFFF" className="h-7 w-7" alt="WhatsApp" />
            </a>
            <a href="https://www.tiktok.com/@crownsandmanes" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/tiktok.png" className="h-8 w-8" alt="TikTok" />
            </a>
            <a href="https://www.instagram.com/crowns_and_manes/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" className="h-7 w-7" alt="Instagram" />
            </a>
          </div>
          <p className="text-sm text-gray-400 font-poppins text-center">
            © {new Date().getFullYear()} Crowns And Manes ™. All rights reserved.
          </p>
        </div>
      </div>

      {/* ================= DESKTOP VIEW (EXACTLY AS YOU SENT) ================= */}
      <div className="hidden lg:flex max-w-screen-xl mx-auto px-6 flex-row gap-24">
        {/* Left Side - Logo + Socials */}
        <div className="lg:w-1/2">
           <div className="flex flex-row items-center gap-6">
    <Link to="/">
      <img
        src={LogoImg}
        alt="Logo"
        className="h-56"
      />
    </Link>

    <img
      src={SecondImg}
      alt="Secondary Logo"
      className="h-14 mt-12"
    />
  </div>
          <div className="flex space-x-4 ml-12 mt-5">
            <a href="https://www.facebook.com/crownsandmanes" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" className="h-7 w-7" alt="Facebook" />
            </a>
            <a href="https://wa.me/27719945058" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=16733&format=png&color=FFFFFF" className="h-7 w-7" alt="WhatsApp" />
            </a>
            <a href="https://www.tiktok.com/@crownsandmanes" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/tiktok.png" className="h-8 w-8" alt="TikTok" />
            </a>
            <a href="https://www.instagram.com/crowns_and_manes/" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" className="h-7 w-7" alt="Instagram" />
            </a>
          </div>
          <p className="text-sm text-gray-400 ml-12 mt-6 font-poppins">
            © {new Date().getFullYear()} Crowns And Manes ™. All rights reserved.
          </p>
        </div>

        {/* Right Side - Catalogue + Company */}
        <div className="lg:w-1/2 mt-16 flex justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 text-right font-poppins">
            {/* Catalogue */}
            <div>
              <h2 className="font-bold text-xl mb-6 text-crown-gold uppercase tracking-wide">
                Catalogue
              </h2>
              <ul className="space-y-3">
                <li><Link to="/collections/all?category=Print" className="hover:text-white/80 transition">Products</Link></li>
                <li><Link to="/collections/all?category=Print" className="hover:text-white/80 transition">Vietnamese Wigs</Link></li>
                <li><Link to="/collections/all?category=Signs" className="hover:text-white/80 transition">Peruvian Wigs</Link></li>
                <li><Link to="/collections/all?category=Branding" className="hover:text-white/80 transition">Pixel Cuts</Link></li>
                <li><Link to="/collections/all?category=Paints" className="hover:text-white/80 transition">Installations & Customization</Link></li>
                <li><Link to="/collections/all?category=Paints" className="hover:text-white/80 transition">Wig Wash Services</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="font-bold text-xl mb-6 text-crown-gold uppercase tracking-wide">
                Company
              </h2>
              <ul className="space-y-3">
                <li><Link to="/about-us" className="hover:text-white/80 transition">About Us</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white/80 transition">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions" className="hover:text-white/80 transition">Terms & Conditions</Link></li>
                <li><Link to="/contact-page" className="hover:text-white/80 transition">Talk To An Expert</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
