
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Faq = () => {
    const faqs = [
  {
    title: "What services do you provide?",
    content: [
      "We offer a complete range of packing and moving services, including home relocation, office shifting, local and long-distance moves, vehicle transportation, and secure storage solutions.",
      "Our team ensures a smooth, safe, and stress-free moving experience tailored to your specific needs."
    ],
  },
  {
    title: "How long does the moving process take?",
    content: [
      "The duration of your move depends on factors like distance, quantity of items, and the type of service chosen. Typically, local moves are completed within a day, while long-distance relocations can take between 3 to 7 days.",
      "Once you share your details, our team provides a clear timeline before the move begins."
    ],
  },
  {
    title: "Are my belongings insured during the move?",
    content: [
      "Yes, we offer full insurance coverage for all moves. This ensures your belongings are protected against any accidental damage or loss during transit.",
      "We also provide an easy claim process for your peace of mind."
    ],
  },
  {
    title: "Do you provide packing materials?",
    content: [
      "Absolutely! We use high-quality packing materials including bubble wrap, sturdy cartons, tapes, and covers to ensure your items are well protected.",
      "Our packing materials are eco-friendly and designed to keep your belongings safe from damage."
    ],
  },
  {
    title: "How can I get a quote?",
    content: [
      "You can easily request a free quote through our website or by calling our support team. Simply provide details about your move, and we’ll send you a customized estimate.",
      "Our pricing is transparent — no hidden charges or last-minute surprises."
    ],
  },
  {
    title: "What safety measures do you follow?",
    content: [
      "We strictly follow safety standards including trained handling, sanitized vehicles, and insured transportation to ensure your items remain secure throughout the journey.",
      "Our staff wear uniforms, use ID cards, and follow a professional code of conduct for your trust and safety."
    ],
  },
];


    // Individual open states for each FAQ
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index); // open/close individually
    };

    return (
        <Layout>
            {/* Adding a slight margin at the top of the page */}
            <div className="mt-0">
                {/* Hero Section */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat h-[150px] lg:h-[200px] flex items-center"
                    style={{ backgroundImage: `url("https://eyecix.com/html/moverspackers/extra-images/subheader-image.jpg")` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="container mx-auto px-4 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                        {/* Left Side: Text */}
                        <div className="text-center lg:text-left lg:w-1/2 text-white">
                            <h5 className="text-lg lg:text-xl font-semibold tracking-wide uppercase text-white">
                                Frequently Asked Questions
                            </h5>

                            {/* Link to Home */}
                            <h1 className="text-base lg:text-lg">
                                <Link to="/" className="text-white">
                                    Homepage
                                </Link>{" "}
                                / FAQ
                            </h1>
                        </div>
                    </div>
                </section>

                <section className="pt-10 lg:pt-16 pb-10 lg:pb-0 bg-white relative">
                    <div className="container mx-auto px-4">
                        {/* Heading */}
                        <div className="text-center mb-8 lg:mb-12 relative">
                            <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[80px] lg:text-[120px] font-bold text-gray-100">
                                01
                            </span>
                            <h1 className="text-2xl lg:text-4xl font-bold relative z-10">
                                <span className="text-gray-900">Frequently Asked Questions</span>
                            </h1>
                        </div>
                        <div className="text-center max-w-xl lg:max-w-2xl mx-auto mb-12 lg:mb-16">
                            <p className="text-gray-600 text-sm lg:text-base">
                                Find answers to the most common questions about our moving and packing services.
                            </p>
                        </div>

                        {/* FAQ Layout */}
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:px-24">
                            {/* FAQ List */}
                            <div className="space-y-4 lg:space-y-8 max-w-xl lg:max-w-none lg:flex-1 mx-auto">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="p-1 bg-slate-800 shadow-lg border border-gray-700 overflow-hidden lg:w-[750px]"
                                    >
                                        {/* Header */}
                                        <div
                                            className="flex items-center gap-3 cursor-pointer p-4 lg:p-1"
                                            onClick={() => toggleCollapse(index)}
                                        >
                                            {openIndex === index ? (
                                                <Minus className="w-5 h-5 text-yellow-500" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-yellow-500" />
                                            )}
                                            <h2 className="text-base lg:text-lg font-semibold text-white">{faq.title}</h2>
                                        </div>

                                        {/* Collapsible Content */}
                                        {openIndex === index && (
                                            <div className="p-4 bg-white text-gray-700 transition-all duration-300 space-y-2">
                                                {faq.content.map((paragraph, i) => (
                                                    <p key={i} className="text-sm lg:text-base">{paragraph}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Side Image */}
                            <div className="flex-1 flex justify-center lg:justify-end">
                                <img
                                    src="https://eyecix.com/html/moverspackers/extra-images/faq-backimg.png"
                                    alt="FAQ Illustration"
                                    className="w-full max-w-[250px] lg:w-[300px] lg:max-w-xs h-auto rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Faq;
