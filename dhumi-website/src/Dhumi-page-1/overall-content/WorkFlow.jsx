import { motion } from "framer-motion";

const workFlow = [
  {
    title: "Approach to Client",
    description:
      "We initiate the process by approaching the client to understand their needs, establish rapport, and set expectations.",
  },
  {
    title: "Analyze Requirements",
    description:
      "Our team works closely with the client to gather and analyze the project requirements to ensure a clear understanding of the objectives.",
  },
  {
    title: "Build Product",
    description:
      "The product development phase begins, where we create the solution based on the defined requirements using agile methodologies.",
  },
  {
    title: "Deliver to Client",
    description:
      "Once the product is built and tested, we deliver the final version to the client, ensuring that all expectations are met.",
  },
  {
    title: "Do Some Changes",
    description:
      "After client feedback, necessary changes and improvements are made to ensure the product aligns with their needs.",
  },
  {
    title: "Review It",
    description:
      "We conduct a thorough review of the product to ensure quality, performance, and that all requirements are fulfilled.",
  },
  {
    title: "Deploy",
    description:
      "The final product is deployed to the production environment, making it available to the end-users.",
  },
];

const fadeScale = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function WorkFlow() {
  return (
    <div className="w-full bg-gradient-to-br from-[#fefcea] to-[#f1daff] text-gray-800 py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700 mb-12"
        >
          Our Workflow Process
        </motion.h1>

        <div className="space-y-12 w-full">
          {workFlow.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="relative bg-gradient-to-r from-purple-100 to-indigo-50 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1.5 duration-300"
            >
              <div className="absolute -top-6 left-6 sm:left-10 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-md">
                {index + 1}
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-700 mt-6 mb-3">
                {step.title}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
