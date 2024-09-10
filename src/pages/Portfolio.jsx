import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      name: "Score For Outcome",
      description:
        "Score for outcome is an end-to-end platform for measuring outcome results in patients who go through psychological therapy. The platform boasts a patient management system, data visualization for therapy, and custom outcome form creator for mental health practitioners. This is supplemented by my email and phone notification for clients as well as practitioners.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/software_development.png?alt=media&token=4509c759-8c68-4e0d-8bfc-34d650f0f6a6",
      websiteLink: "https://example.com/score-for-outcome",
    },
    {
      name: "Ar-Rahman Welfare Foundation Canada",
      description:
        "Ar-Rahman Welfare Foundation Canada (AWFCA) is a welfare charity that started out in Ontario, Canada. Their aim is to provide resources and support to those in need, empowering them to overcome poverty and build a better future for themselves and their families. We worked with them a couple years ago to get their website, donation link, and email server working. We also handle their SEO and hosting.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/software_development.png?alt=media&token=4509c759-8c68-4e0d-8bfc-34d650f0f6a6",
      websiteLink: "https://example.com/ar-rahman",
    },
    {
      name: "Devrex Creative",
      description:
        "Devrex creative is a web agency that just started their operations in 2023. We helped them set up initial technological groundwork. We supported them in setting up their development pipelines, IT infrastructure, and a cloud solution for easy hosting. We still do some contract work with them if they require expert support.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/web_development.jpg?alt=media&token=db47f651-cb64-4e84-bcb6-7c17179e3f02",
      websiteLink: "https://example.com/devrex-creative",
    },
  ];

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-lg mb-10 p-6 flex flex-col sm:flex-row items-center"
        >
          <div className="sm:w-1/2 w-full mb-4 sm:mb-0 text-left">
            <h2 className="text-2xl font-bold text-blue-400 mb-2 pt-10">{project.name}</h2>
            <p className="text-white mb-4">{project.description}</p>
            {/* Align content to the left and button to the right */}
            <div className="flex justify-between items-center">
              <span className="invisible">Placeholder</span> {/* Invisible to create space */}
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Website <span className="ml-1">🔗</span>
              </a>
            </div>
          </div>
          <div className="sm:w-1/2 w-full flex justify-center">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full sm:w-2/3 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
