import { useEffect, useState, useRef } from "react";
import leftFlower from "./assets/leftFlower.png";
import rightFlower from "./assets/rightFlower.avif";

function Hero({ toggleTheme }) {
  const [showImages, setShowImages] = useState(false);
  const [position, setPosition] = useState(0);
  const dragRef = useRef(null);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [screenWidth,setScreenWidth]=useState(window.innerWidth);

  const displayContent = [
    {
      heading: "Organize work and make work easier",
      content:
        "Simplified application development- Start building application by configuration or use prebuilt templates, and quick deployment",
      imgURL: "https://dhumi.com/assets/img/banner-2.png",
    },
    {
      heading: "Organize work and make work easier",
      content:
        "Dhumi will assist you and your organization transform the way work is done by providing a collaborative workspace",
      imgURL: "https://dhumi.com/assets/img/new-banner.png",
    },
    {
      heading: "Digital solutions that help businesses Grow",
      content:
        "Customized digital solutions that drive measurable business growth through data-driven insights, streamlined operations, and innovative technology",
      imgURL: "https://dhumi.com/assets/img/ai-banner.png",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
      if (trackRef.current && dragRef.current) {
        const trackWidth = trackRef.current.offsetWidth;
        const knobWidth = dragRef.current.offsetWidth;
        setPosition((trackWidth - knobWidth) / 2);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const startDrag = (e) => {
    isDragging.current = true;
  };

  const stopDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (trackRef.current && dragRef.current) {
      const trackWidth = trackRef.current.offsetWidth;
      const knobWidth = dragRef.current.offsetWidth;
      const centerPosition = (trackWidth - knobWidth) / 2;
      const threshold = trackWidth * 0.1;

      if (position > centerPosition + threshold) {
        setAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) =>
            currentIndex < displayContent.length - 1 ? prev + 1 : 0
          );
        }, 350);
      } else if (position < centerPosition - threshold) {
        setAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) =>
            currentIndex > 0 ? prev - 1 : displayContent.length - 1
          );
        }, 350);
      }

      setPosition(centerPosition);
    }
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;

    const track = trackRef.current;
    const knob = dragRef.current;

    const trackRect = track.getBoundingClientRect();
    const clientX = e.type.includes("touch")
      ? e.touches[0].clientX
      : e.clientX;

    let newX = clientX - trackRect.left - knob.offsetWidth / 2;
    const maxX = track.offsetWidth - knob.offsetWidth;

    newX = Math.max(0, Math.min(newX, maxX));
    setPosition(newX);
  };

  // 1024,1224
    useEffect(()=>{
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize",handleResize);
        return ()=> window.removeEventListener("resize",handleResize);
    },[screenWidth])

  return (
    <div
      className={`w-full  ${
        toggleTheme
          ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-r from-[#fefcea] to-[#f1daff] text-gray-800"
      } relative overflow-x-hidden`}
    >
      <img
        src={leftFlower}
        alt="Left Flower"
        className={`absolute -left-10 top-1/2 -translate-y-1/8 -translate-x-1/2 w-1/2 z-10 transition-opacity duration-1500 ${
          showImages ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="w-full lg:mt-30 md:mt-30 md:mb-20 sm:mt-40 my-30 flex justify-center items-center relative px-3 sm:px-6 md:px-10">
        <div
          className={`w-full sm:w-3/4 lg:w-[80%] ${
            toggleTheme
              ? "bg-gray-800/70 text-white"
              : "bg-white/80 text-gray-800"
          } backdrop-blur-md shadow-xl rounded-2xl p-4 sm:p-6 md:p-10 flex flex-col items-center gap-6 sm:gap-8 overflow-hidden`}
        >
          <div
            className={`transition-all duration-700 ease-in-out transform ${
              animating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
            }`}
            onTransitionEnd={() => animating && setAnimating(false)}
          >
            <h2 className="text-center mb-10 text-2xl sm:text-3xl md:text-4xl font-extrabold">
              {displayContent[currentIndex].heading}
            </h2>
            <div className="w-full lg:flex flex-col md:flex-row sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-12">
              <div className="w-full flex justify-center items-center md:mb-10 sm:mb-20">
                <img
                  src={displayContent[currentIndex].imgURL}
                  className="relative max-w-[300px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[400px] transition-transform duration-500 hover:scale-105"
                  alt="Banner"
                />
              </div>
              <div className="text-center w-full md:text-left">
                <p className="text-base sm:text-lg md:text-xl">
                  {displayContent[currentIndex].content}
                </p>
                <div className="mt-6 flex w-full justify-center mt-10">
                  <button className="bg-black text-white p-3 rounded-lg text-lg hover:bg-gray-800 transition duration-300 cursor-pointer">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-16 sm:h-20 px-3 sm:px-4 ${
              toggleTheme
                ? "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 border-gray-400"
                : "bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100 border-gray-300"
            } rounded-full flex items-center relative shadow-inner `}
            ref={trackRef}
            onMouseMove={onDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchMove={onDrag}
            onTouchEnd={stopDrag}
          >
            <div
              ref={dragRef}
              className="w-20 h-10 rounded-full bg-gradient-to-tr from-black via-gray-800 to-black absolute top-1/2 -translate-y-1/2 cursor-grab shadow-lg ring-2 ring-white transition-transform duration-300 hover:scale-110 active:scale-95"
              style={{ left: `${position}px` }}
              onMouseDown={startDrag}
              onTouchStart={startDrag}
            ></div>
          </div>
        </div>
      </div>

      <img
        src={rightFlower}
        alt="Right Flower"
        className={`absolute right-0 top-1/2 -translate-y-3/4 translate-x-3/4 w-1/2 transition-opacity duration-1300 ease-out delay-500 transform ${
          showImages ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      />
    </div>
  );
}

export default Hero;
