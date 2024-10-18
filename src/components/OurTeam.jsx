import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import only Instagram icon

const teamMembers = [
  {
    name: 'Mudassir',
    role: 'Project Manager',
    image: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/beasta-min.png?alt=media&token=1b9a78c1-fb38-40f1-a8f7-8c154a19b415',
    portfolio: '/',
    insta: 'https://www.instagram.com/abbas.ezi/',
  },
  {
    name: 'Hamza',
    role: 'Lead Developer',
    image: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/hamza-min.png?alt=media&token=9b27277f-7709-40f6-8a49-47ad380950db',
    portfolio: 'https://hamza-dev-bice.vercel.app/',
    insta: 'https://www.instagram.com/humzatariq279/',
  },
  {
    name: 'Abdul-Rehman',
    role: 'Digital Marketing Leader',
    image: 'https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/booma-min.png?alt=media&token=02a12381-0c53-4a4c-90be-34d8c56791cf',
    portfolio: '/',
    insta: 'https://www.instagram.com/abdu_lrehman47/',
  },
];

const OurTeam = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-400 pt-16 pb-10">Devrex Founders</h2>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`p-8 w-80 h-96 rounded-lg border-2 border-gray-600 bg-transparent backdrop-filter backdrop-blur-lg shadow-lg transform transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in`}
            onClick={() => window.open(member.portfolio, '_blank')}
          >
            <div className="relative w-48 h-48 mx-auto mb-4">
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`} // Improved accessibility
                loading="lazy" // Lazy loading for the image
                className="w-full h-full rounded-full border-4 border-blue-400 object-cover shadow-xl transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full border-2 border-blue-600 opacity-70 hover:opacity-100 transition-opacity duration-300 glow-border"></div>
            </div>
            <h3 className="text-2xl font-semibold text-center text-gray-100">
              {member.name}
            </h3>
            <p className="text-center text-gray-400">{member.role}</p>
            <div className="flex justify-center gap-4 mt-4">
              {/* Only Instagram icon and link */}
              <a 
                href={member.insta} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
                className="text-pink-600 hover:text-pink-400 transition-colors duration-300"
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Styles for Animation and Glow */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s forwards;
        }

        .animate-fade-in:nth-child(1) { animation-delay: 0.1s; }
        .animate-fade-in:nth-child(2) { animation-delay: 0.2s; }
        .animate-fade-in:nth-child(3) { animation-delay: 0.3s; }

        .glow-border {
          box-shadow: 0 0 10px rgba(0, 162, 255, 0.7), 0 0 20px rgba(0, 162, 255, 0.7);
          transition: box-shadow 0.3s;
        }

        .glow-border:hover {
          box-shadow: 0 0 20px rgba(0, 162, 255, 1), 0 0 30px rgba(0, 162, 255, 1);
        }

        .hover\:shadow-2xl:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default OurTeam;
