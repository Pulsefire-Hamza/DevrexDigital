import React, { useState } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      name: "Burger Boys",
      description:
        "We created a modern, user-friendly website for Burger Boys, highlighting their menu, special offers, and an easy online ordering system. The responsive design ensures a seamless experience across all devices, enhancing their online presence and customer engagement.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/BURGER-BOYS-10-17-2024_01_44_AM.png?alt=media&token=5d1770a4-34f9-4fd1-a45f-83b4868de17e",
      websiteLink: "https://www.burgerboyspk.com/",
      category: "Business site",
    },
    {
      name: "Awan Builders & Real-Estate",
      description:
        "We developed a dynamic and professional website for Awan Builders & Real-Estate, enhancing their online presence and showcasing their services and projects. This transformation attracted a broader audience, leading to increased client engagement and business growth.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Awan-Builders-10-17-2024_01_55_AM.png?alt=media&token=c51495d1-f68b-4ec8-be10-bc7e19e012ab",
      websiteLink: "https://awan-builders.vercel.app/",
      category: "Business site",
    },
    {
      name: "RGB Computers & Laptops",
      description:
        "We developed a modern and user-friendly e-commerce store for RGB Computers & Laptops, allowing them to showcase their products effectively and manage sales efficiently. This enhanced their online presence, driving customer engagement and boosting business growth.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/RGB-COMPUTERS-10-17-2024_02_01_AM.png?alt=media&token=eea1a7fb-db8b-4cb6-bca3-a478b85b7931",
      websiteLink: "https://www.rgbcomputerspk.com/",
      category: "Business site",
    },
    {
      name: "Sneaky World",
      description:
        "We developed a sleek and user-friendly website for Sneaky World, a shoe brand, showcasing their products and collections. This improved their online presence, attracting more customers and driving business growth.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/SharedScreenshot.jpg?alt=media&token=c84b2483-09aa-46dc-917c-261be442ba93",
      websiteLink: "/",
      category: "Business site",
    },
    {
      name: "The Trekkerz",
      description:
        "We developed a vibrant and user-friendly website for The Trekkerz, a travel agency, showcasing their travel packages and services. This enhancement improved their online visibility and made it easier for potential customers to explore their offerings.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Responsive-Navigation-Menu-10-17-2024_02_39_AM-min.png?alt=media&token=79b6ad2d-a6ec-4453-a37f-b85001122971",
      websiteLink: "/",
      category: "Business site",
    },
    {
      name: "Ruya Solutions",
      description:
        "We partnered with Ruya Solutions, a software development agency, to create an intuitive and visually appealing UI for their website. This collaboration not only enhanced their online presence but also strengthened our partnership in delivering innovative solutions.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Welcome-to-Ruya-Solutions-10-17-2024_02_45_AM.png?alt=media&token=fac19375-d727-4f45-9c79-05bd7faed305",
      websiteLink: "https://ruyasolutions.vercel.app/",
      category: "Business site",
    },
  
    {
      name: "Client Portfolio",
      description:
        "We designed a professional and engaging website for Client Portfolio, effectively showcasing their work and services. This enhanced their online presence and helped them attract more clients.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Vite-React-10-17-2024_02_33_AM-min.png?alt=media&token=5b8c654c-4b6c-48db-b97d-d575b4f2b0df",
      websiteLink: "https://hamza-dev-bice.vercel.app/",
      category: "Premium portfolios",
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-36 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex justify-end">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mr-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="Business site">Business Sites</option>
          <option value="Premium portfolios">Premium Portfolios</option>
          <option value="Web apps">Web Apps</option>
        </select>
      </div>
      {filteredProjects.length === 0 ? (
        <p className="text-white text-center">No projects found in this category.</p>
      ) : (
        filteredProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg mb-10 p-6 flex flex-col sm:flex-row items-center shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="sm:w-1/2 w-full mb-4 sm:mb-0 text-left">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">{project.name}</h2>
              <p className="text-white mb-4">{project.description}</p>
              <div className="mt-4 mb-4"> {/* Added margin-bottom for spacing */}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-600"
                  >
                    Visit Website 🔗
                  </a>
                )}
              </div>
            </div>
            <div className="sm:w-1/2 w-full">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Portfolio;
