"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import breakpoints from "@/styles/breakpoints.module.css";

interface HeaderProps {
  menuItems: Array<{
    title: string;
    id: string;
  }>;
}

const Header = ({ menuItems }: HeaderProps) => {
  "use client";
  const [activeid, setActiveId] = useState("");
  const [menuState, setMenuState] = useState(false);

  const changeMenu = () => {
    setMenuState(!menuState);
  };

  const updateActiveHash = () => setActiveId(window.location.hash);
  useEffect(() => {
    addEventListener("hashchange", updateActiveHash);
    updateActiveHash();
  }, []);
  return (
    <>
      <div className={breakpoints.hideOnMobile}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className={`${styles.navButton} ${
                  activeid == "#" + item.id ? styles.active : ""
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </header>
      </div>

      <div
        style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        className={breakpoints.hideOnDesktop}
      >
        <div onClick={changeMenu}>
          <img src="/menu.svg" alt="menu hamburguer" />
        </div>
        {menuState && (
          <header className={styles.headerMobile}>
            <div
              onClick={changeMenu}
              style={{
                fontFamily: "Roboto, Sans-Serif",
                fontSize: "3rem",
                // position: "absolute",
                width: "100%",
                textAlign: "right",
                color: "#fff",

                left: 0,
                bottom: 0,
                zIndex: 10,
              }}
            >
              X
            </div>
            <nav className={styles.navMobile}>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  className={`${styles.navButtonMobile} ${
                    activeid == "#" + item.id ? styles.activeMobile : ""
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </header>
        )}
      </div>
    </>
  );
};
export default Header;
