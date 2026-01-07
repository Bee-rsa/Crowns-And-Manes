import React from "react";

const TermsAndConditions = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full -mt-1 flex bg-black flex-col items-center">
      <div className="container mx-auto px-4 py-12 mt-16 max-w-4xl text-white font-poppins">
        <h1 className="text-3xl font-bold mb-6 text-crown-gold">
          Terms and Conditions
        </h1>

        <p className="mb-6 text-sm text-gray-300">
          <strong>Effective Date:</strong> 07 January 2026
        </p>

        <p className="mb-6">
          Welcome to <strong>Crowns and Manes</strong>. By accessing or using our
          website, you agree to be bound by the following Terms and Conditions.
          Please read them carefully before using our services.
        </p>

        {/* 1 */}
        <h2 className="text-2xl font-bold mb-4 text-crown-gold">
          1. About Crowns and Manes
        </h2>
        <p className="mb-6">
          Crowns and Manes is a wig business offering premium wigs, wig-related
          products, and hair services. Our platform allows users to browse
          products, create accounts, and interact with our services online.
        </p>

        {/* 2 */}
        <h2 className="text-2xl font-bold mb-4 text-crown-gold">
          2. Account Registration
        </h2>
        <p className="mb-6">
          To access certain features of our website, users may be required to
          create an account using a valid email address. You agree to provide
          accurate and up-to-date information when registering.
        </p>

        {/* 3 */}
        <h2 className="text-2xl font-bold mb-4 text-crown-gold">
          3. No Payment or Card Details
        </h2>
        <p className="mb-6">
          Crowns and Manes does <strong>not</strong> collect, store, or process
          any card or banking details on this platform. Our website is used for
          browsing products, viewing information, and account access only.
        </p>

        {/* 4 */}
        <h2 className="text-2xl font-bold mb-4 text-crown-gold">
          4. User Responsibilities
        </h2>
        <p className="mb-6">
          You agree to use this website lawfully and respectfully. You must not
          misuse the platform, attempt to gain unauthorized access, or interfere
          with the website’s operation.
        </p>

        {/* 5 */}
        <h2 className="text-2xl font-bold mb-4 text-crown-gold">
          5. Intellectual Property
        </h2>
        <p className="mb-6">
          All content on this website, including images, logos, text, and
          branding, is the property of Crowns and Manes unless otherwise stated.
          You may not copy, reproduce, or distribute any content without written
          permission.
        </p>

        {/* 6 */}
        <h2 className="text-2xl font-bold mb-4 text-crown-gold">
          6. Reviews and Feedback
        </h2>
        <p className="mb-6">
          Users may submit reviews or feedback where available. Reviews must be
          honest, respectful, and relevant. Crowns and Manes reserves the right
          to remove any content deemed inappropriate.
        </p>

        {/* 7 */}
        <h2 className="text-2xl font-bold mb-4 text-crown-gold">
          7. Limitation of Liability
        </h2>
        <p className="mb-6">
          Crowns and Manes is not responsible for any direct or indirect damages
          arising from the use of this website. All services and information are
          provided “as is” without warranties of any kind.
        </p>

        {/* 8 */}
        <h2 className="text-2xl font-bold mb-4 text-crown-gold">
          8. Changes to These Terms
        </h2>
        <p className="mb-6">
          We reserve the right to update or modify these Terms and Conditions at
          any time. Continued use of the website after changes are made
          constitutes acceptance of the updated terms.
        </p>

        {/* 9 */}
        <h2 className="text-2xl font-bold mb-4 text-crown-gold">
          9. Governing Law
        </h2>
        <p className="mb-10">
          These Terms and Conditions are governed by the laws of the Republic of
          South Africa. Any disputes shall be resolved under the jurisdiction of
          South African courts.
        </p>

        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Crowns and Manes ™. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
