import React from 'react';

const servicesData = [
  {
    title: 'Web Development',
    description:
      'We specialize in creating premium, custom websites designed to elevate your business. Our tailored solutions focus on user experience, modern design, and performance, ensuring your website not only looks great but drives growth and success.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/web_development.jpg?alt=media&token=db47f651-cb64-4e84-bcb6-7c17179e3f02',
  },
  {
    title: 'Digital Marketing',
    description:
      'Boost your online presence with our expert digital marketing solutions. From SEO and social media management to targeted ad campaigns, we help grow your brand, reach the right audience, and achieve measurable business results.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/digital-marketing-with-icons-business-people-min.jpg?alt=media&token=693eed90-9bfe-48bc-9fd3-a02cb0b4897b',
  },
  {
    title: 'App Development',
    description:
      'Transform your ideas into powerful mobile applications with our custom app development services. We build high-performance, user-friendly apps that engage customers, streamline operations, and drive business growth.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/app%20dev%20main.jpg?alt=media&token=19c8d466-3103-4939-9f95-05dc74d3ecff',
  },
  {
    title: 'Project Flexibility',
    description:
      'Big or small, we take them all! We handle projects of any size, scaling our services to meet your unique needs and ensuring top-quality results every time.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/images.png?alt=media&token=887c16c1-1402-42fe-8554-c6f0eb74726a',
  },
  {
    title: 'SEO',
    description:
      'Increase your visibility and drive organic traffic with our expert SEO services. We optimize your website for search engines, ensuring higher rankings, more qualified leads, and sustainable growth for your business.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/What_Are_the_Different_Types_of_SEO.avif?alt=media&token=58649359-ab57-4883-8ce4-071d2c3de9fa',
  },
  {
    title: 'Logo Designs',
    description:
      'Create a lasting impression with our custom logo design services. We craft unique, memorable logos that capture your brand’s essence, helping you stand out and establish a strong identity in your industry.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/logo%20designs.jpg?alt=media&token=23818aff-9009-4cc6-b2ed-37c0466e2985',
  },
  {
    title: 'Video Editing',
    description:
      'Bring your vision to life with our professional video editing services. We create engaging, high-quality videos that captivate your audience, enhance your brand, and communicate your message with impact.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/editing.jpg?alt=media&token=4c277d22-6a73-421f-9e8f-d7f1b6327cb5',
  },
  {
    title: 'Advertising',
    description:
      'Engage your audience with compelling, high-quality content. Our content writing services deliver tailored, SEO-friendly content that communicates your message clearly, boosts brand authority, and drives conversions.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/0Fd4XuQCy1Nbwml843D.png?alt=media&token=91d6c27d-c66a-4460-9201-916bc869c547',
  },
  {
    title: 'Marketing Strategy',
    description:
      'Develop a winning marketing strategy tailored to your business goals. We create data-driven plans that align with your brand, target the right audience, and optimize your efforts for long-term growth and success.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/strategy.jpg?alt=media&token=698683af-c0b2-480c-8163-7baf9a69fff8',
  },
  {
    title: 'Email Marketing',
    description:
      'Reach your audience directly with our targeted email marketing campaigns. We create personalized, engaging content that drives conversions, boosts customer retention, and maximizes your ROI.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/email-marketing.jpeg?alt=media&token=727dc9d9-cd79-4b69-bbb4-5134885a82b7',
  },
  {
    title: 'Web Hosting',
    description:
      'We empower business growth by providing top-notch web hosting services tailored to our clients’ specific needs.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/oie_r8AFgxraOPsj.jpg?alt=media&token=7f043168-5f68-4682-ad51-6a169b10d9ff',
  },
  {
    title: 'Domains',
    description:
      'We provide seamless domain registration and management services to help you secure your online identity.',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/website-hosting-concept-with-domains-min.jpg?alt=media&token=898f1370-cdad-4f6d-a510-4528d13fe4b1',
  },
];

const Services = () => {
  return (
    <div className="text-white py-16 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-center text-4xl font-bold pt-20 mb-12 text-blue-400">What We Do</h2>
        
        <p className="text-center text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          Devrex helps businesses grow through premium coded web development and tailored marketing strategies, driving traffic, engagement, and conversions for maximum success. Our goal is to elevate your digital presence and ensure long-term growth.
        </p>

        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center md:items-start ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/3">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full h-60 object-cover rounded-lg"
                  loading="lazy" // Add lazy loading here
                />
              </div>
              <div className="text-center md:text-left md:w-2/3 md:ml-8">
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
