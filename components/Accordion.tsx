"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa"

interface AccordionProps {
  title: string;
  content: string;
  index: number;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border rounded-2xl overflow-hidden mb-4">
      <button
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-200 focus:outline-none"
        onClick={toggleAccordion}
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg font-bold text-gray-500">
            {String(index).padStart(2, "0")}
          </span>
          <span className="text-lg font-medium text-start text-gray-800">{title}</span>
        </div>
        {isOpen ? <FaMinus className="w-4 h-4 text-gray-500" /> : <span className="bg-gray-300 rounded-full p-2 "><FaPlus className="w-4 h-4 text-gray-500" /></span>}
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-4 py-3 text-gray-600 bg-white">{content}</div>
      </motion.div>
    </div>
  );
};

export default Accordion;
