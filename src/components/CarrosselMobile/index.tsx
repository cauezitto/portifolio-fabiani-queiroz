"use client";
import React, { useEffect, useRef, useState } from "react";
import alignments from "@/styles/alignments.module.css";

const mocks = [
  {
    title: "Split Confort",
    print: "/www.splitconfort.com.br_.png",
    link: "https://www.splitconfort.com.br",
  },
  {
    title: "Descomplicacert",
    print: "/descomplicacert.com.br_.png",
    link: "https://www.descomplicacert.com.br",
  },
  {
    title: "Chinês na Real",
    print: "/www.chinesnareal.com.br_mentoria.png",
    link: "https://www.chinesnareal.com.br/mentoria",
  },
  {
    title: "Roady Metais",
    print: "/roadymetais.com.br_.png",
    link: "https://www.roadymetais.com.br",
  },

  {
    title: "Mas Nem Peixe?",
    print: "/mas-nem-peixe.vercel.app_.png",
    link: "https://www.roadymetais.com.br",
  },
];

const Carrossel = ({}) => {
  const scrollRef: any = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const position = scrollRef.current.scrollTop;
      //   setScrollPosition(position);

      itemRefs.current.forEach((itemRef, index) => {
        if (itemRef) {
          const targetPosition = itemRef.getBoundingClientRect().left;
          const containerPosition =
            scrollRef.current.getBoundingClientRect().left;
          const relativePosition = targetPosition - containerPosition;
          //   console.log(itemRef.getBoundingClientRect().left);
          if (
            itemRef.getBoundingClientRect().left > 0 &&
            itemRef.getBoundingClientRect().left < 300
          ) {
            // console.log(
            //   `Element ${mocks[index].title} is at the top of the scroll container!`
            // );
            setActiveIndex(index);
            // Perform your action here
            // console.log(itemRef.getBoundingClientRect().left);
          }
        }
      });
    }
  };
  ("use client");
  useEffect(() => {
    const carrossel: any = scrollRef.current;

    if (carrossel) {
      carrossel?.addEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div>
      <div
        ref={scrollRef}
        id="carrossel"
        style={{
          height: 250,
          display: "block",
          flexDirection: "row",
          overflowY: "hidden",
          scrollbarColor: "none",
          scrollbarWidth: "none",
          resize: "none",
        }}
      >
        <div style={{ display: "flex", width: "fit-content" }}>
          {mocks.map((site, index) => (
            <div
              ref={(el: any) => (itemRefs.current[index] = el)}
              style={{
                width: "70vw",
                position: "relative",
                marginRight: 10,
              }}
            >
              <a
                style={{ position: "relative", width: "100%" }}
                about="blank"
                href={site.link}
              >
                <img
                  src={site.print}
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    height: 200,
                    zIndex: 0,
                    filter: "brightness(50%)",
                  }}
                  alt=""
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 15,
                    left: 10,
                    zIndex: 1,
                    fontSize: "2.5rem",
                    color: "#fff",
                    fontFamily: "Roboto, sans-Serif",
                    fontWeight: "bold",
                  }}
                >
                  {site.title}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div
        className={alignments.center}
        style={{
          display: "flex",
          gap: 5,
        }}
      >
        {mocks.map((site, index) => (
          <div
            style={{
              borderRadius: "50%",
              width: 10,
              height: 10,
              backgroundColor: index == activeIndex ? "#FB8351" : "#D9D9D9",
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Carrossel;
