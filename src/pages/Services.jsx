import React from 'react';

const servicesData = [
  {
    title: 'App Development',
    description:
      'We create sleek, user-friendly mobile and web apps that your customers will love. Our apps are designed to be engaging, intuitive, and to boost your growth.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/web_development.jpg?alt=media&token=db47f651-cb64-4e84-bcb6-7c17179e3f02', // Add the correct image path here
  },
  {
    title: 'Software Consultation',
    description:
      'Need some expert advice? We’ve got you covered. We’ll help you navigate the tech landscape and pick the right tools and strategies to hit your targets.',
    imageSrc: 'software-consultation.png',
  },
  {
    title: 'Software Support',
    description:
      'Our job doesn’t end at launch. We offer full support to keep your software running like a dream. From bug fixes to regular updates, we’re always here for you.',
    imageSrc: 'software-support.png',
  },
  {
    title: 'Project Flexibility',
    description:
      'Big or small, we take them all! We handle projects of any size, scaling our services to meet your unique needs and ensuring top-quality results every time.',
    imageSrc: 'project-flexibility.png',
  },
];

const Services = () => {
  return (
    <div className="text-white py-16 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-center text-4xl font-bold pt-20 mb-12 text-blue-400">What We Do</h2>
        
        {/* Adjusted paragraph with max-width */}
        <p className="text-center text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          At Ruya Solutions, we bring your wildest tech dreams to life. Whether you’re a startup ready to make waves or an established business looking to innovate, our team has got your back. We’re all about delivering top-notch services with a personal touch.
        </p>

        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center md:items-start ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-60 h-60 object-cover mb-4 md:mb-0 md:mr-8 md:ml-8 rounded-lg"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2 leading-relaxed text-blue-500">{service.title}</h3>
                <p className="text-white max-w-lg leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
