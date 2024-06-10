import React from "react";
import { Fonts } from "@/styles/types";
import fonts from "@/styles/fonts.module.css";
// import styles from "./styles.module.css";

interface HeadingProps {
  text?: string;
  color: string;
  fontSize: string;
  textAlign: "center" | "right" | "left";
  fontFamily: Fonts;
  fontWeight?: number | string;
  children?: React.ReactNode;
  letterSpacing?: number;
}

const Heading = ({
  text,
  color,
  fontSize,
  textAlign,
  fontFamily,
  fontWeight,
  children,
  letterSpacing,
}: HeadingProps) => {
  const headingStyle = {
    color,
    fontSize,
    textAlign,
    fontWeight,
    letterSpacing,
  };

  return (
    <p className={fonts[fontFamily]} style={{ ...headingStyle }}>
      {text && text}
      {children && children}
    </p>
  );
};

Heading.defaultProps = {
  color: "#000000",
  fontSize: "24px",
  textAlign: "left",
  fontFamily: '"Sansita One", sans-serif',
};

export default Heading;
