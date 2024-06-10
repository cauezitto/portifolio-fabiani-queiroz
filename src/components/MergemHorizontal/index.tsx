import React from "react";
import styles from "./MargemHorinzontal.module.css";

interface HeaderPropsMargemHorizontalProps {
  children: React.ReactNode;
}

const MargemHorizontal = ({ children }: HeaderPropsMargemHorizontalProps) => {
  return <div className={styles.container}>{children}</div>;
};
export default MargemHorizontal;
