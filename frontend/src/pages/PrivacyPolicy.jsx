import React from "react";

const Policy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex -mt-1 flex-col items-center bg-black text-white">
      <div className="container mx-auto px-6 py-20 max-w-4xl font-poppins">
        <h1 className="text-3xl font-bold text-crown-gold mb-6">
          Privacy Policy
        </h1>

        <p className="mb-4 text-sm text-gray-300">
          <strong>Effective Date:</strong> 07 January 2026
        </p>

        <p className="mb-6">
          Crowns and Manes (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) values your privacy. This Privacy
          Policy explains how we collect and use limited personal information
          when you use our website.
        </p>

        <h2 className="text-xl font-semibold text-crown-gold mb-3">
          Information We Collect
        </h2>
        <p className="mb-6">
          We only collect your <strong>email address</strong> for the purpose of
          allowing you to create an account and sign in to our platform.
        </p>

        <h2 className="text-xl font-semibold text-crown-gold mb-3">
          What We Do Not Collect
        </h2>
        <ul className="list-disc ml-6 mb-6 text-gray-300">
          <li>Credit or debit card details</li>
          <li>Banking or payment information</li>
          <li>Billing addresses</li>
          <li>Sensitive personal data</li>
        </ul>

        <h2 className="text-xl font-semibold text-crown-gold mb-3">
          How We Use Your Information
        </h2>
        <p className="mb-6">
          Your email address is used solely to:
        </p>
        <ul className="list-disc ml-6 mb-6 text-gray-300">
          <li>Create and manage your account</li>
          <li>Allow you to securely sign in</li>
          <li>Communicate important account-related information</li>
        </ul>

        <h2 className="text-xl font-semibold text-crown-gold mb-3">
          Data Security
        </h2>
        <p className="mb-6">
          We take reasonable steps to protect your information. However, no
          online platform can guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold text-crown-gold mb-3">
          Sharing of Information
        </h2>
        <p className="mb-6">
          We do not sell, rent, or trade your personal information to third
          parties.
        </p>

        <h2 className="text-xl font-semibold text-crown-gold mb-3">
          Changes to This Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>

        <h2 className="text-xl font-semibold text-crown-gold mb-3">
          Contact Us
        </h2>
        <p className="mb-2">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <p className="text-gray-300">
          <strong>Crowns and Manes</strong><br />
          Email: crownsandmanes@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Policy;
