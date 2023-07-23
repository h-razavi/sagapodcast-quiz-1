import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  onNext?: () => void;
};

function Button({ children, onNext }: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      transition={{ type: "tween" }}
      className="border-none bg-blue-600 my-6 px-6 py-4 rounded-md hover:bg-blue-400 text-white "
      onClick={onNext}
    >
      {children}
    </motion.button>
  );
}

export default Button;
