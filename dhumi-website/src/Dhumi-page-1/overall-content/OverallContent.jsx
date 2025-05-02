import { useRef } from "react";
import Activity from "./Activity";
import About from "./About";
import WorkFlow from "./WorkFlow";

function OverallContent({ toggleTheme }) {
  const aboutRef = useRef(null);
  const activityRef = useRef(null);
  const workflowRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`pt-10 ${toggleTheme ? 'bg-gray-900' : 'from-[#fefcea] to-[#f1daff] text-gray-800'}`}>
      {/* Sticky Navigation Bar */}
      <div className="lg:sticky top-23 z-20 lg:w-1/2 md:w-3/4 my-10 sm:w-full px-4 flex flex-col space-y-4">
        <div
          className={`w-full flex items-center justify-between rounded shadow-md h-auto px-4 py-2 transition-all duration-300 ${
            toggleTheme ? 'bg-gray-700' : 'bg-gray-300'
          }`}
        >
          <button
            onClick={() => scrollTo(aboutRef)}
            className={`font-semibold transition duration-200 p-2 sm:px-6 md:px-10 rounded-xl cursor-pointer hover:scale-105 mx-2 focus:outline-none ${
              toggleTheme ? 'text-white bg-gray-600' : 'text-black bg-white'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollTo(activityRef)}
            className={`font-semibold transition duration-200 p-2 sm:px-6 md:px-10 rounded-xl cursor-pointer hover:scale-105 mx-2 focus:outline-none ${
              toggleTheme ? 'text-white bg-gray-600' : 'text-black bg-white'
            }`}
          >
            Activity
          </button>
          <button
            onClick={() => scrollTo(workflowRef)}
            className={`font-semibold transition duration-200 p-2 sm:px-6 md:px-10 rounded-xl cursor-pointer hover:scale-105 mx-2 focus:outline-none ${
              toggleTheme ? 'text-white bg-gray-600' : 'text-black bg-white'
            }`}
          >
            Work Flow
          </button>
        </div>
      </div>

      {/* Main Content Area with refs */}
      <div className="ml-1/4 sm:ml-1/5 md:ml-1/6">
        <div ref={aboutRef}>
          <About toggleTheme={toggleTheme} />
        </div>

        <div ref={activityRef}>
          <Activity />
        </div>

        <div ref={workflowRef} >
          <WorkFlow />
        </div>
      </div>
    </div>
  );
}

export default OverallContent;
