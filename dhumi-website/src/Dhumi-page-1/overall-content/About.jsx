import React from "react";

const pageContent = [
  {
    imgURL:
      "https://static.vecteezy.com/system/resources/previews/006/901/854/non_2x/business-growth-illustration-vector.jpg",
    description:
      "At Dhumi, we specialize in helping businesses grow through AI-powered digital transformation. Our all-in-one platform offers tools for workflow automation, team collaboration, video conferencing, document management, HR systems, invoice generating, inventory management, lead tracking, and more — all designed to boost productivity and simplify operations.",
  },
  {
    imgURL:
      "https://hipsocial.com/images/social-engagement-screenshot-1.png?v=1691124479409199525",
    description:
      "With over 500+ successful client engagements, we’ve supported startups, enterprises, and manufacturers in adopting smarter, faster ways of working. Our platform ensures seamless communication and collaboration across teams, devices, and time zones.",
  },
  {
    imgURL:
      "https://media.istockphoto.com/id/1640542408/photo/man-using-mobile-phone-with-ai-communicating-and-working-around-the-world-ai-artificial.jpg?s=612x612&w=0&k=20&c=pkW-a-q41K1b1ntNFxZOq00di4VHzV4z-c1YoxBHbUU=",
    description:
      "Through our innovation wing, Dhumi Labs, we also build advanced AI solutions tailored to your needs. These include generative AI marketing, vision-based apps, custom language models, and content creation tools.",
  },
  {
    imgURL:
      "https://www.netsolutions.com/wp-content/uploads/2024/12/CoWin-Crash-Anatomy-of-Building-Scalable-Web-Apps-S.No_86.webp",
    description:
      "Our expert team of designers, engineers, and strategists works closely with clients to build tailored, scalable AI solutions. Whether you're looking to automate your workflow or explore advanced AI technology for business, Dhumi is your trusted partner in driving innovation and growth.",
  },
];

function About({ toggleTheme }) {
  const bgGradient = toggleTheme
    ? "bg-gradient-to-r from-[#0f172a] to-[#1e293b]"
    : "bg-gradient-to-r from-[#fefcea] to-[#f1daff]";
  const textColor = toggleTheme ? "text-gray-200" : "text-gray-800";
  const cardBg = toggleTheme ? "bg-[#1e293b]" : "bg-white";
  const cardText = toggleTheme ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`w-full flex justify-center ${bgGradient} py-16 px-4`}>
      <div className="w-full max-w-screen-lg space-y-16">
        <p className={`text-xl sm:text-xl font-bold text-center leading-relaxed ${textColor}`}>
          Dhumi offers digital products & solutions that help businesses adopt AI faster
          and embrace rapid digital growth. We’ve supported over 50 clients in staying
          adaptable and prepared for the future as technology evolves. Our expertise includes
          consulting on mobile, cloud, AI, and multi-channel digital experiences.
        </p>

        {pageContent.map((item, index) => (
          <div
            key={index}
            className={`sm:sticky sm:top-[170px] z-10 h-auto sm:h-[450px] flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8 p-6 sm:p-8 rounded-xl shadow-lg ${cardBg} transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl ${
              index % 2 === 0 && "sm:flex-row-reverse"
            }`}
          >
            <div className="w-full sm:w-1/2 h-64 sm:h-full">
              <img
                src={item.imgURL}
                alt={`Section ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className={`w-full sm:w-1/2 flex flex-col justify-between ${cardText}`}>
              <p className="text-lg sm:text-xl leading-relaxed line-clamp-6">
                {item.description}
              </p>
              <div className="mt-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 hover:shadow-lg hover:-translate-y-1">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
