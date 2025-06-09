"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";

interface TransformSupportingTextProps {
  isInView: boolean;
  isLowPerf?: boolean;
}

const TransformSupportingText = memo(function TransformSupportingText({
  isInView,
  isLowPerf = false
}: TransformSupportingTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !isLowPerf;

  const phrases = [
    {
      text: "You paid for \"growth hacks.\"",
      type: "small",
      emphasis: ["\"growth hacks.\""]
    },
    {
      text: "You jumped on trends.",
      type: "small",
      emphasis: ["trends"]
    },
    {
      text: "You followed the playbook.",
      type: "small",
      emphasis: ["playbook"]
    },
    {
      text: "But you're still stuck at 83 views. And your mother's in the comments?",
      type: "punchline",
      emphasis: ["83 views", "mum in the comments"]
    },
    {
      text: "And now... That's why you're here.",
      type: "bridge",
      emphasis: []
    },
    {
      text: "We don't chase virality.",
      type: "impact",
      emphasis: ["don't chase virality"]
    },
    {
      text: "We manufacture it — with receipts to prove it.",
      type: "closer",
      emphasis: ["manufacture it", "receipts to prove it"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldAnimate ? 0.25 : 0.1,
        delayChildren: shouldAnimate ? 0.4 : 0.2
      }
    }
  };

  const phraseVariants = {
    hidden: {
      opacity: 0,
      y: shouldAnimate ? 20 : 10,
      filter: shouldAnimate ? "blur(2px)" : "blur(0px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldAnimate ? 0.6 : 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const renderPhrase = (phrase: typeof phrases[0], index: number) => {
    let styledText = phrase.text;

    // Apply emphasis styling
    phrase.emphasis.forEach(emphasizedWord => {
      const regex = new RegExp(`(${emphasizedWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      styledText = styledText.replace(regex, `<strong class="phrase-emphasis">$1</strong>`);
    });

    return (
      <motion.div
        key={index}
        className={`transform-phrase transform-phrase-${phrase.type}`}
        variants={phraseVariants}
        dangerouslySetInnerHTML={{ __html: styledText }}
      />
    );
  };

  return (
    <motion.div
      className="transform-supporting-text"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {phrases.map((phrase, index) => renderPhrase(phrase, index))}
    </motion.div>
  );
});

export default TransformSupportingText;
