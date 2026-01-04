const Topbar = () => {
  return (
    <div className="bg-crown-gold text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/crownsandmanes"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF"
              className="h-5 w-5"
              alt="Facebook"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/27719945058"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/?size=100&id=16733&format=png&color=FFFFFF"
              className="h-5 w-5"
              alt="WhatsApp"
            />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@crownsandmanes"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/tiktok.png"
              className="h-7 w-7"
              alt="TikTok"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/crowns_and_manes/"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF"
              className="h-5 w-5"
              alt="Instagram"
            />
          </a>
        </div>

        <div className="text-sm text-center flex-grow">
          <span>We Courier Nationwide - Fast and reliable shipping!</span>
        </div>

        <div className="text-sm hidden md:block">
          <a href="tel:+27719945058" className="hover:text-gray-300">
            +27 ( 71 ) 994-5058
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
