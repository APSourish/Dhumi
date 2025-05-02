import { Sun, Moon } from 'lucide-react';
import Logo from './assets/Logo.png';
import {
  ChevronDownIcon,
  ArrowRight,
  Activity,
  MessageSquare,
  Video,
  Users2,
  LayoutDashboard,
  FileText,
  Zap,
  MenuIcon,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


function SideBar({ onClose, themeToggle, ToggleTheme, setThemeToggle }) {
  const [toggle, setToggle] = useState(false);

  const dropdownItems = [
    { icon: <Activity className="text-red-500" />, text: 'Activity & Post' },
    { icon: <MessageSquare className="text-purple-500" />, text: 'Chats & Teams' },
    { icon: <Video className="text-blue-500" />, text: 'Video & Audio Conferencing' },
    { icon: <Users2 className="text-green-500" />, text: 'Online Meeting' },
    { icon: <LayoutDashboard className="text-yellow-500" />, text: 'White Board' },
    { icon: <FileText className="text-teal-500" />, text: 'Documentation & Collaboration' },
    { icon: <Zap className="text-orange-500" />, text: 'Workflow Automation' },
  ];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 right-0 w-4/5 sm:w-1/2 h-full overflow-auto ${themeToggle ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} z-50 shadow-xl`}
    >
      <div className="flex items-center justify-end px-6 h-20 border-b">
        <X className="cursor-pointer hover:scale-110 transition" onClick={onClose} />
      </div>

      <ul className="flex flex-col gap-6 px-6 py-4 font-medium">
        <motion.li whileHover={{ scale: 1.02 }} className={`cursor-pointer text-gray-500 ${themeToggle ? 'hover:text-white' : 'hover:text-black'} transition`}>Home</motion.li>

        <li>
          <div className={`cursor-pointer group flex items-center justify-between text-gray-500 ${themeToggle ? 'hover:text-white' : 'hover:text-black'} transition`} onClick={() => setToggle(!toggle)}>
            Product & Solutions
            <ChevronDownIcon className={`transition-transform duration-300 ${toggle ? 'rotate-180' : ''}`} />
          </div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 mt-3 gap-3">
                  {dropdownItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-3 p-3 rounded cursor-pointer text-gray-500 ${themeToggle ? 'hover:text-white' : 'hover:text-black'} transition`}
                    >
                      {item.icon}
                      <span className="text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        {['Blog', 'User Guide', 'Videos', 'Contact'].map((label, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.02 }}
            className={`cursor-pointer text-gray-500 ${themeToggle ? 'hover:text-white' : 'hover:text-black'} transition`}
          >
            {label}
          </motion.li>
        ))}

        {/* Mobile Login and Signup */}
        <div className="md:hidden sm:block lg:hidden mt-4 space-y-3">
          <button className="w-full border px-4 py-2 rounded text-sm text-left border-gray-400 text-gray-800 hover:border-black transition">
            Login
          </button>
          <button className="w-full bg-black px-4 py-2 text-white rounded text-sm hover:bg-gray-900 transition flex items-center gap-2">
            Sign-up <ArrowRight size={16} />
          </button>
        </div>
      </ul>
    </motion.div>
  );
}

function NavigationBar({ ToggleTheme }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [themeToggle, setThemeToggle] = useState(false);

  return (
    <nav className={`fixed top-0 w-full ${themeToggle ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md z-50 px-4 sm:px-6`}>
      <div className="flex flex-wrap justify-between items-center h-20">
        <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />

        <ul className="hidden lg:flex gap-6 xl:gap-10 items-center font-medium whitespace-nowrap text-sm xl:text-base">
          <li className={`cursor-pointer text-gray-500 ${themeToggle ? 'hover:text-white' : 'hover:text-black'} transition`}>Home</li>

          <li className={`relative group cursor-pointer text-gray-500 ${themeToggle ? 'hover:text-white' : 'hover:text-black'} transition`}>
            <div className="flex items-center">
              Product & Solutions
              <ChevronDownIcon className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
            </div>
            <div className={`absolute left-0 top-full p-4 pt-10 rounded shadow-lg w-screen max-w-lg sm:max-w-xl xl:max-w-2xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform z-10 pointer-events-none group-hover:pointer-events-auto ${themeToggle ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Activity className="text-red-500" />, text: 'Activity & Post' },
                  { icon: <MessageSquare className="text-purple-500" />, text: 'Chats & Teams' },
                  { icon: <Video className="text-blue-500" />, text: 'Video & Audio Conferencing' },
                  { icon: <Users2 className="text-green-500" />, text: 'Online Meeting' },
                  { icon: <LayoutDashboard className="text-yellow-500" />, text: 'White Board' },
                  { icon: <FileText className="text-teal-500" />, text: 'Documentation & Collaboration' },
                  { icon: <Zap className="text-orange-500" />, text: 'Workflow Automation' },
                ].map((item, index) => (
                  <div key={index} className={`flex items-center gap-4 p-4 hover:${themeToggle ? 'bg-gray-700' : 'bg-gray-100'} rounded transition`}>
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {['Blog', 'User Guide', 'Videos', 'Contact'].map((label, idx) => (
            <li key={idx} className={`cursor-pointer text-gray-500 ${themeToggle ? 'hover:text-white' : 'hover:text-black'} transition`}>
              {label}
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex items-center gap-2">
            <button className={`border px-3 sm:px-4 py-2 rounded text-sm sm:text-base ${themeToggle ? 'border-gray-600 text-white' : 'border-gray-400 text-gray-800'} hover:border-black transition`}>
              Login
            </button>
            <button className="bg-black px-3 sm:px-4 py-2 text-white rounded text-sm sm:text-base hover:bg-gray-900 transition flex items-center gap-2">
              Sign-up <ArrowRight size={16} />
            </button>
          </div>
          <div className="lg:hidden ml-2 cursor-pointer">
            <MenuIcon onClick={() => setToggleMenu(true)} />
          </div>
        </div>
      </div>

      {toggleMenu && <SideBar onClose={() => setToggleMenu(false)} themeToggle={themeToggle} />}

      {/* Theme Toggle Floating Button */}
      <div
        className={`fixed h-8 w-20 rounded-full border flex items-center px-1 cursor-pointer transition-all duration-500 shadow-lg
          ${themeToggle ? 'bg-gradient-to-r from-gray-700 to-black border-gray-600' : 'bg-gradient-to-r from-yellow-300 to-yellow-500 border-yellow-400'}
          top-6 right-20 sm:bottom-10 sm:right-10 sm:top-auto`}
        onClick={() => {
          const tempToggle = themeToggle;
          setThemeToggle(!themeToggle);
          ToggleTheme(!tempToggle);
        }}
      >
        <div className={`h-6 w-6 rounded-full bg-white shadow-lg transform transition-transform duration-500 flex items-center justify-center ${themeToggle ? 'translate-x-12' : 'translate-x-0'}`}>
          {themeToggle ? (
            <Moon className="h-4 w-4 text-gray-800" />
          ) : (
            <Sun className="h-4 w-4 text-yellow-500" />
          )}
        </div>
      </div>

    </nav>
  );
}

export default NavigationBar;
