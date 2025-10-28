// src/pages/Terms.tsx
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Layout>
      <div className="mt-0">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[200px] flex items-center"
          style={{
            backgroundImage: `url("https://eyecix.com/html/moverspackers/extra-images/subheader-image.jpg")`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-10">
            {/* Left Side: Text */}
            <div className="text-center lg:text-left lg:w-1/2 text-white">
              <h5 className="text-xl font-semibold tracking-wide uppercase text-white-400">
                TERMS & CONDITIONS
              </h5>

              {/* Link to Home */}
              <h1>
                <Link to="/" className="text-white-500">
                  Homepage
                </Link>{" "}
                / Terms & Conditions
              </h1>
            </div>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-16">
            {/* Heading */}
            <div className="text-center mb-12 relative">
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[120px] md:text-[80px] font-bold text-gray-100">
                01
              </span>
              <h1 className="text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Terms</span>{" "}
                <span className="text-yellow-500">& Conditions</span>
              </h1>
            </div>

            <div className="max-w-4xl mx-auto text-gray-700 space-y-8 leading-relaxed text-sm md:text-base">
              <p>
                Welcome to <strong>DRM Packers & Movers</strong>. By accessing
                and using our website and services, you agree to comply with the
                following Terms and Conditions. Please read these carefully
                before using our platform.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                1. General Information
              </h2>
              <p>
                DRM Packers & Movers provides relocation, packing, and moving
                services across various regions. All information on our website
                is for general informational purposes and is subject to change
                without prior notice.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                2. Booking and Service Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All bookings made through our website or customer service are
                  subject to confirmation.
                </li>
                <li>
                  Service quotations are provided based on the information
                  shared by the client and may change if actual requirements
                  differ.
                </li>
                <li>
                  Payments should be made as per the agreed schedule, and
                  services will commence only after confirmation of payment.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                3. Liability
              </h2>
              <p>
                While we take utmost care in handling your belongings, DRM
                Packers & Movers will not be responsible for loss or damage due
                to unforeseen circumstances such as natural disasters, road
                accidents, or incorrect packing instructions from the client.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                4. User Responsibilities
              </h2>
              <p>
                You agree to provide accurate, complete, and up-to-date
                information during service booking. Misrepresentation of
                details may result in cancellation or additional charges.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                5. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, graphics, logos,
                and design — is the property of DRM Packers & Movers and is
                protected by copyright laws. Unauthorized use or duplication is
                prohibited.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                6. Cancellation & Refund Policy
              </h2>
              <p>
                Cancellation requests must be made at least 48 hours before the
                scheduled moving date. Refunds, if applicable, will be processed
                as per company policy within 7–10 business days.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                7. Privacy Policy
              </h2>
              <p>
                We respect your privacy and ensure that your personal data is
                handled securely. For more details, please refer to our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-yellow-500 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                8. Governing Law
              </h2>
              <p>
                These Terms & Conditions shall be governed by and construed in
                accordance with the laws of India. Any disputes will be
                addressed in the jurisdiction of our registered office.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                9. Contact Information
              </h2>
              <p>
                For questions or concerns regarding these Terms, please contact
                us at:
              </p>
              <ul className="pl-6 list-disc space-y-1">
                <li>Email: info@drmpackersmovers.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: 123 Moving Street, New Delhi, India</li>
              </ul>

              <p className="mt-10 text-gray-600 text-sm">
                Last Updated: October 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Terms;
