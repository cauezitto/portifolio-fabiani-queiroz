import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import fonts from "@/styles/fonts.module.css";
import { Fonts } from "@/styles/types";

interface HeadingProps {
  text?: string;
  color: string;
  fontSize: string;
  textAlign: "center" | "right" | "left";
  fontFamily: Fonts;
  type: "h1" | "h2" | "h3" | "h4";
  fontWeight?: number | string;
  fill?: boolean;
  children?: React.ReactNode;
}

const Heading = ({
  text,
  color,
  fontSize,
  textAlign,
  fontFamily,
  fontWeight,
  type,
  fill,
  children,
}: HeadingProps) => {
  const headingStyle = {
    color,
    fontSize,
    textAlign,
    fontWeight,
  };

  return (
    <div className={styles[fontFamily]}>
      {type == "h1" && (
        <h1
          className={`${fill ? styles.filled : ""} ${fonts[fontFamily]} `}
          style={headingStyle}
        >
          {text && text}
          {children && children}
        </h1>
      )}
      {type == "h2" && (
        <h2
          className={`${fill ? styles.filled : ""} ${fonts[fontFamily]} `}
          style={headingStyle}
        >
          {text && text}
          {children && children}
        </h2>
      )}
      {type == "h3" && (
        <h3
          className={`${fill ? styles.filled : ""} ${fonts[fontFamily]} `}
          style={headingStyle}
        >
          {text && text}
          {children && children}
        </h3>
      )}
      {type == "h4" && (
        <h4
          className={`${fill ? styles.filled : ""} ${fonts[fontFamily]} `}
          style={headingStyle}
        >
          {text && text}
          {children && children}
        </h4>
      )}
    </div>
  );
};

Heading.defaultProps = {
  color: "#000000",
  fontSize: "24px",
  textAlign: "left",
  fontFamily: '"Sansita One", sans-serif',
  type: "h1",
  fontWeight: 300,
};

export default Heading;
