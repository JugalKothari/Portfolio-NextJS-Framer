"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useAnimation, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [animate, isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
  }: {
    words: {
      text: string;
      className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);
    const [text, setText] = useState("");
    const [subIndex, setSubIndex] = useState(0);
  
    useEffect(() => {
      const handleTyping = () => {
        if (subIndex < words[currentIndex].text.length && !isErasing) {
          setText(words[currentIndex].text.substring(0, subIndex + 1));
          setSubIndex((prev) => prev + 1);
        } else if (isErasing && subIndex > 0) {
          setText(words[currentIndex].text.substring(0, subIndex - 1));
          setSubIndex((prev) => prev - 1);
        } else if (subIndex === words[currentIndex].text.length && !isErasing) {
          setTimeout(() => setIsErasing(true), 1000); // Wait before starting to erase
        } else if (isErasing && subIndex === 0) {
          setIsErasing(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      };
  
      const typingDelay = isErasing ? 30 : 60;
      const timer = setTimeout(handleTyping, typingDelay);
  
      return () => clearTimeout(timer);
    }, [subIndex, isErasing, currentIndex, words]);
  
    return (
      <div className={cn("flex flex-col items-center justify-center", className)}>
        <div
          className={cn(
            "text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold text-center",
            words[currentIndex].className
          )}
        >
          {text}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className={cn("inline-block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500", cursorClassName)}
          ></motion.span>
        </div>
      </div>
    );
  };