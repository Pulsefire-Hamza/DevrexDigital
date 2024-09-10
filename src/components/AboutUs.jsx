import React from "react";

const AboutUs = () => {
  return (
    <section className="text-white py-20 px-4 bg-transparent">
      <div className="container mx-auto text-center">
        {/* About Us Heading */}
        <h2 className="text-blue-400 font-bold text-4xl mb-6">ABOUT US</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          "Ruya", derived from the Turkish word for "vision", signifies a
          commitment to helping clients achieve their strategic goals through
          innovative technology solutions. At its core, Ruya represents our
          dedication to aligning our expertise with the unique visions of our
          customers. By understanding and integrating their aspirations, we
          create tailored solutions that not only meet their immediate needs but
          also pave the way for their long-term success and growth.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Premium Web Designs */}
        <div className="p-8 rounded-lg text-center bg-transparent">
          <img
            src="frontend-icon.png"
            alt="Premium Web Designs"
            className="mx-auto mb-4 w-24 h-24" // Increased image size
          />
          <h3 className="text-blue-400 font-bold text-xl mb-4">
            Premium Web Designs
          </h3>
          <p className="text-white">
            We craft visually stunning and user-friendly web interfaces.
            Appealing and responsive.
          </p>
        </div>

        {/* Social Media Marketing */}
        <div className="p-8 rounded-lg text-center bg-transparent">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/marketing.png?alt=media&token=0cbfba7b-5cbd-4968-af89-5d3bf9cdef3f"
            alt="Social Media Marketing"
            className="mx-auto mb-4 w-24 h-24" // Increased image size
          />
          <h3 className="text-blue-400 font-bold text-xl mb-4">
            Social Media Marketing
          </h3>
          <p className="text-white">
            Building robust and scalable strategies for enhanced social
            presence and engagement.
          </p>
        </div>

        {/* SEO */}
        <div className="p-8 rounded-lg text-center bg-transparent">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/seo.png?alt=media&token=d3e0cb12-1eb4-4b30-9d04-e6b9a7ddc2a8"
            alt="SEO"
            className="mx-auto mb-4 w-24 h-24" // Increased image size
          />
          <h3 className="text-blue-400 font-bold text-xl mb-4">SEO</h3>
          <p className="text-white">
            Providing comprehensive SEO solutions for better visibility in
            search engine results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
