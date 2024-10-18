import React from 'react';

const Reviews = () => {
  const clients = [
    {
      image: "https://media-mct1-2.cdn.whatsapp.net/v/t61.24694-24/432389681_1432170784166445_1908271649405264168_n.jpg?ccb=11-4&oh=01_Q5AaIIsMK-LCxNY7WvFiBZeUYSaNyzg6Vsc1mJpidREr6VzU&oe=671A8AD9&_nc_sid=5e03e0&_nc_cat=102",
      name: "Waleed Bhola",
      role: "Owner of BurgerBoys",
      review: "Great service! The team was professional and met all our expectations.",
      link: "https://example.com",
      clientScreenshot: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1c12e.appspot.com/o/pro5.png?alt=media&token=7b06497b-6327-442c-89b3-cad6ce412c16",
      websiteImage: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1c12e.appspot.com/o/Welcome-to-Ruya-Solutions%20(1).png?alt=media&token=edeb2495-db98-4550-890b-d9a0cd6ca6bf"
    },
    // Add more clients as needed
  ];

  return (
    <div className="pt-52 max-w-7xl mx-auto space-y-16">
      {clients.map((client, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start justify-between md:items-center"
        >
          {/* Left Side - Person Info */}
          <div className="flex items-center mb-8 md:mb-0 w-full md:w-1/2">
            <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
              <img
                src={client.image}
                alt={`${client.name}`}
                className="w-full h-full object-cover transition-opacity duration-300"
                loading="lazy" // Lazy loading added
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{client.name}</h3>
              <p className="text-gray-500">{client.role}</p>
              <p className="text-gray-700 mt-2 max-w-xs">
                {client.review}
              </p>
              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                View Website
              </a>
            </div>
          </div>

          {/* Right Side - Larger Images */}
          <div className="flex flex-col md:flex-row w-full md:w-1/2 space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-grow">
              <img
                src={client.clientScreenshot}
                alt="Client Screenshot"
                className="w-full h-60 object-cover rounded-lg shadow-md transition-opacity duration-300"
                loading="lazy" // Lazy loading added
              />
              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-center text-sm py-1 px-2 rounded-md">
                Client Review
              </div>
            </div>
            <div className="relative flex-grow">
              <img
                src={client.websiteImage}
                alt="Website Image"
                className="w-full h-60 object-cover rounded-lg shadow-md transition-opacity duration-300"
                loading="lazy" // Lazy loading added
              />
              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-center text-sm py-1 px-2 rounded-md">
                Website of Client
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
