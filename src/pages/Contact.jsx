import React, { useState } from 'react';


const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  
  const handleServiceChange = (event) => {
    const value = event.target.value;
    setSelectedServices((prev) => 
      prev.includes(value) 
        ? prev.filter(service => service !== value) 
        : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value || 'N/A';
    const message = e.target.message.value;
    const services = selectedServices.join(', ');

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AServices: ${services}%0AMessage: ${message}`;
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
            At <a href="https://www.instagram.com/devrexdigital" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition-transform duration-300">Devrex Digital</a>, we don’t just build apps; we build lasting partnerships. We’re pumped to hear about your project and see how we can help you crush your goals. Reach out to us today, and let’s make something amazing happen.
          </p>

          <p className="text-lg mb-6">Please fill in the form.</p>

          <div className="flex items-center mb-6 space-x-4">
            <span className="border-b border-gray-400 flex-grow"></span>
            <span className="text-lg">OR</span>
            <span className="border-b border-gray-400 flex-grow"></span>
          </div>
          <p className="text-lg">
            Send us a message at: 
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devrexdigital@gmail.com&su=Inquiry&body=Hello,%0A%0A" className="text-blue-500">
              devrexdigital@gmail.com
            </a>
          </p>
          
          {/* Fiverr Contact Button */}
          <div className="mt-6">
            <a 
              href="https://www.fiverr.com/your-profile" // Replace with your Fiverr profile link
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
             Order on Fiver
            </a>
          </div>
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
              <label className="block text-sm font-medium">What type of services do you want?</label>
              <div className="space-y-2">
                {['Web Development', 'App Development', 'Marketing', 'SEO'].map(service => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      value={service}
                      onChange={handleServiceChange}
                      className="mr-2"
                    />
                    <label className="text-white">{service}</label>
                  </div>
                ))}
              </div>
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
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
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
