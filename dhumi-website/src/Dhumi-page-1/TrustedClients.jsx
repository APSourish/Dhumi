import Logo1 from "./assets/1.png";
import Logo2 from "./assets/agc.png";
import Logo3 from "./assets/Definks-JPEG.jpg";
import Logo4 from "./assets/ecoray.jpg";
import Logo5 from "./assets/skyLimit.png";
import Logo6 from "./assets/vgc-fms-.png";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

const clientDetails = [
  {
    logo: Logo1,
    description: "A leading tech innovator specializing in automation and AI solutions.",
    CEO: "Mr. Arjun Mehta",
    CEOimage: "/assets/ceo1.jpg"
  },
  {
    logo: Logo2,
    description: "Advanced Global Corporation provides cutting-edge infrastructure services.",
    CEO: "Ms. Riya Banerjee",
    CEOimage: "/assets/ceo2.jpg"
  },
  {
    logo: Logo3,
    description: "Definks is a cybersecurity company known for enterprise-level protection.",
    CEO: "Mr. Sameer Roy",
    CEOimage: "/assets/ceo3.jpg"
  },
  {
    logo: Logo4,
    description: "Ecoray is focused on sustainable energy and solar technology innovations.",
    CEO: "Ms. Kavya Sharma",
    CEOimage: "/assets/ceo4.jpg"
  },
  {
    logo: Logo5,
    description: "SkyLimit delivers scalable cloud computing and hosting solutions.",
    CEO: "Mr. Arav Patel",
    CEOimage: "/assets/ceo5.jpg"
  },
  {
    logo: Logo6,
    description: "VGC FMS is a facilities management leader driving operational excellence.",
    CEO: "Ms. Tanya Rao",
    CEOimage: "/assets/ceo6.jpg"
  }
];


function TrustedClients({toggleTheme}) {
  const [rate] = useState(Array(5).fill(true));

  return (
    <div
      className={`w-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8  ${
        toggleTheme ? "bg-gray-900 text-white" : "bg-transparent text-gray-800"
      }`}
    >
      <h3 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
        Trusted Clients
      </h3>

      {/* Rating and Community */}
      <div
        className={`flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-5 rounded-3xl shadow-2xl w-full max-w-5xl mb-12 ${
          toggleTheme ? "bg-gray-800 text-white" : "bg-white text-gray-700"
        }`}
      >
        <div className="flex items-center gap-3">
          {rate.map((isFilled, index) => (
            <svg key={index} width="25" height="25" viewBox="0 0 200 200">
              <polygon
                points="100,10 120,75 190,75 135,115 155,180 100,140 45,180 65,115 10,75 80,75"
                fill={isFilled ? (toggleTheme ? "white" : "black") : "gray"}
                stroke="#fbbf24"
                strokeWidth="2"
              />
            </svg>
          ))}
          <span className="font-semibold text-base sm:text-lg ml-2 hover:text-yellow-400 transition duration-200">
            4.9 Rating
          </span>
        </div>

        <div className="flex items-center gap-2 hover:text-yellow-400 transition duration-200 cursor-pointer">
          <User className="w-6 h-6" />
          <h3 className="text-base font-semibold">500+ Growth Community</h3>
        </div>
      </div>

      {/* Client Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 p-6">
        {clientDetails.map((client, index) => (
          <div
            key={index}
            className={`group relative p-6 rounded-3xl shadow-md transition-all duration-500 ease-in-out lg:hover:shadow-2xl lg:hover:-translate-y-50 lg:hover:scale-105 ${
              toggleTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <div className="flex flex-col items-center">
              {/* Logo */}
              <div className="flex items-center justify-center mb-4 transition-transform duration-300 h-20 w-20 lg:group-hover:scale-110 rounded overflow-hidden">
                <img
                  src={client.logo}
                  alt={`Logo of ${client.CEO}`}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Always visible for mobile/tablet */}
              <div
                className={`block lg:hidden mt-4 p-4 rounded-xl shadow-md w-full ${
                  toggleTheme
                    ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white"
                    : "bg-gradient-to-br from-gray-50 to-white text-gray-800"
                }`}
              >
                <p className="text-sm text-center mb-3">{client.description}</p>
                <hr className="border-gray-300 mb-3" />
                <div className="flex flex-col items-center">
                  <img
                    src={client.CEOimage}
                    alt={client.CEO}
                    className="h-14 w-14 rounded-full border-2 border-white shadow-md mb-2"
                  />
                  <h3 className="font-semibold text-sm">{client.CEO}</h3>
                </div>
              </div>

              {/* Hover only for desktop */}
              <div
                className={`absolute hidden lg:block left-0 top-full w-full p-4 mt-2 rounded-xl shadow-lg z-10 opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-2 transition-all duration-500 ease-in-out pointer-events-none lg:group-hover:pointer-events-auto ${
                  toggleTheme
                    ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white"
                    : "bg-gradient-to-br from-gray-50 to-white text-gray-800"
                }`}
              >
                <p className="text-sm text-center mb-3">{client.description}</p>
                <hr className="border-gray-300 mb-3" />
                <div className="flex flex-col items-center">
                  <img
                    src={client.CEOimage}
                    alt={client.CEO}
                    className="h-14 w-14 rounded-full border-2 border-white shadow-md mb-2 hover:ring-4 hover:ring-orange-400 transition-all duration-300"
                  />
                  <h3 className="font-semibold text-sm">{client.CEO}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustedClients;
