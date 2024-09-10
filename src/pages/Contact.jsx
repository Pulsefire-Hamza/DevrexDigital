import React, { useState } from 'react';

const Contact = () => {
  const [serviceType, setServiceType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value || 'N/A';
    const message = e.target.message.value;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${serviceType}%0AMessage: ${message}`;
    const whatsappNumber = '+923054122637'; // Replace with the doctor's WhatsApp number

    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12">
      <div className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto w-full space-y-6 lg:space-y-0 lg:space-x-20">
        
        {/* Left Section: Text */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl font-bold pt-20 mb-4 whitespace-nowrap">
            Let’s Create Something Awesome Together
          </h2>
          <p className="text-lg mb-4">
            At <span className="text-blue-500">Ruya Solutions</span>, we don’t just build apps; we build lasting partnerships. We’re pumped to hear about your project and see how we can help you crush your goals. Reach out to us today, and let’s make something amazing happen.
          </p>

          <p className="text-lg mb-6">Please fill in the form.</p>

          <div className="flex items-center mb-6 space-x-4">
            <span className="border-b border-gray-400 flex-grow"></span>
            <span className="text-lg">OR</span>
            <span className="border-b border-gray-400 flex-grow"></span>
          </div>

          <p className="text-lg">
            Send us a message at: <span className="text-blue-500">ruyasolutions@gmail.com</span>
          </p>
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-1/2 lg:ml-20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-100 text-black rounded-lg focus:border-gray-400 focus:ring-0"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-100 text-black rounded-lg focus:border-gray-400 focus:ring-0"
                placeholder="john.doe@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone number (optional)</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-100 text-black rounded-lg focus:border-gray-400 focus:ring-0"
                placeholder="123-45-678"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">What type of service do you want?</label>
              <select
                name="service"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-100 text-black rounded-lg focus:border-gray-400 focus:ring-0"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="" className="bg-gray-100 text-black">Select a service</option>
                <option value="App Development" className="bg-gray-100 text-black">App Development</option>
                <option value="Web Development" className="bg-gray-100 text-black">Web Development</option>
                <option value="Marketing" className="bg-gray-100 text-black">Marketing</option>
                <option value="SEO" className="bg-gray-100 text-black">SEO</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Your message</label>
              <textarea
                name="message"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-100 text-black rounded-lg focus:border-gray-400 focus:ring-0"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
