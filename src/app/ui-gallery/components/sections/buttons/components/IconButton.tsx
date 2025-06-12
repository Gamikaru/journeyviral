"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import "./IconButton.css";

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "neon" | "glass" | "minimal";
  color?: "cyan" | "pink" | "purple" | "green";
  size?: "small" | "medium" | "large";
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  disabled = false,
  className = "",
  variant = "neon",
  color = "cyan",
  size = "medium",
}) => {
  return (
    <motion.button
      className={`icon-button ${variant} ${color} ${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="icon-bg"></span>
      <span className="icon-border"></span>
      <Icon
        className="icon-content"
        size={size === "small" ? 16 : size === "large" ? 24 : 20}
      />
      <span className="icon-highlight"></span>
    </motion.button>
  );
};

export default IconButton;
