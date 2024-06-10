import React from "react";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";
import Alignments from "@/styles/alignments.module.css";
import directions from "@/styles/directions.module.css";
import breakpoints from "@/styles/breakpoints.module.css";

interface HeaderPropsMargemHorizontalProps {
  image: string;
  title: string;
  start?: string;
  end?: string;
}

const MargemHorizontal = (props: HeaderPropsMargemHorizontalProps) => {
  return (
    <div
      style={{
        height: "100%",
      }}
      className={`${Alignments.center} ${directions.column} ${
        Alignments.gap10
      } ${props.start ? Alignments.spaceBetween : ""}`}
    >
      <Image src={props.image} alt={props.title} width={100} height={100} />
      {props.start && (
        <Paragraph
          fontFamily="Roboto"
          fontWeight={500}
          color="#333237"
          text={props.title}
          textAlign="center"
        />
      )}
      {props.start && (
        <>
          <div className={breakpoints.hideOnMobile}>
            <Paragraph
              fontFamily="Roboto"
              fontWeight={300}
              color="#333237"
              text={
                props.end
                  ? `(${props.start} - ${props.end})`
                  : `(${props.start})`
              }
              textAlign="center"
            />
          </div>

          <div className={breakpoints.hideOnDesktop}>
            <Paragraph
              fontFamily="Roboto"
              fontWeight={300}
              color="#333237"
              fontSize="1.5rem"
              text={
                props.end
                  ? `(${props.start} - ${props.end})`
                  : `(${props.start})`
              }
              textAlign="center"
            />
          </div>
        </>
      )}

      {!props.start && (
        <Paragraph
          fontFamily="Roboto"
          fontWeight={300}
          color="#333237"
          text={props.title}
          textAlign="center"
        />
      )}
    </div>
  );
};
export default MargemHorizontal;
