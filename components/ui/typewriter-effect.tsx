"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(words[currentIndex].text);

    const changeText = () => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    };

    const timer = setTimeout(changeText, 3000); // Duration to show each word before transitioning

    return () => clearTimeout(timer);
  }, [currentIndex, words]);

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold text-center mx-2",
          words[currentIndex].className
        )}
      >
        {text}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className={cn(
            "inline-block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-pink-500",
          )}
        ></motion.span>
      </motion.div>
    </div>
  );
};
