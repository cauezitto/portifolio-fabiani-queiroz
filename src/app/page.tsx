import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import MargemHorizontal from "@/components/MergemHorizontal";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import GridItem from "@/components/GridItem";
import alignments from "@/styles/alignments.module.css";
import breakpoints from "@/styles/breakpoints.module.css";
import grid from "@/styles/grid.module.css";
import Carrossel from "@/components/CarrosselMobile";
import DesktopCarrossel from "@/components/CarrosselDesktop";
const empresas = [
  {
    logo: "/sao-cristovao-logo.png",
    nome: `Hospital São Cristovão`,
    inicio: "2018",
    fim: "2019",
  },
  {
    logo: "/amaro-logo.png",
    nome: `AMARO`,
    inicio: "2022",
    fim: "2023",
  },
  {
    logo: "/keepee-logo.png",
    nome: `Keepee`,
    inicio: "2019",
    fim: "2020",
  },
  {
    logo: "/marfrig-logo.png",
    nome: `Marfrig`,
    inicio: "2023",
  },
  {
    logo: "/canon-logo.png",
    nome: `Canon`,
    inicio: "2021",
    fim: "2022",
  },
  {
    logo: "/roady-logo.png",
    nome: `Roady Metais`,
    inicio: "Atualmente",
  },
];

const softwares = [
  {
    nome: "Corel Draw",
    logo: "/corel-logo.png",
  },
  {
    nome: "Blender",
    logo: "/blender-logo.png",
  },
  {
    nome: "Figma",
    logo: "/figma-logo.png",
  },
  {
    nome: "Canva",
    logo: "/canva-logo.png",
  },
  {
    nome: "Photoshop",
    logo: "/photoshop-logo.png",
  },
  {
    nome: "Wordpress",
    logo: "/wordpress-logo.png",
  },
  {
    nome: "Business Suite",
    logo: "/meta-business-logo.png",
  },
  {
    nome: "RD Station",
    logo: "/rdstation-logo.png",
  },
  {
    nome: "Google Ads",
    logo: "/googleads-logo.png",
  },
];

const dobras = [
  {
    title: "Sobre mim",
    id: "sobre",
  },
  {
    title: "Experiências",
    id: "experiencias",
  },
  {
    title: "Serviços realizados",
    id: "servicos",
  },
  {
    title: "Contato",
    id: "contato",
  },
];

export default function Home() {
  return (
    <>
      <main style={{ maxWidth: "" }} className={styles.main}>
        <MargemHorizontal>
          <Header menuItems={dobras} />

          <section
            id="sobre"
            style={{ display: "flex", alignItems: "center", marginTop: 30 }}
            className={`${alignments.center} ${alignments.full} ${alignments.gap100} ${styles.spaceAround} ${breakpoints.columnOnMobile}`}
          >
            <a href="#sobre"></a>
            <div className={breakpoints.hideOnMobile}>
              <Image
                src={"/HeroImage.png"}
                priority={true}
                width={500}
                height={500}
                alt="Foto da fabi com braços crusados e olhar confiante"
              />
            </div>

            <div className={breakpoints.hideOnDesktop}>
              <img
                style={{
                  width: "100%",
                  marginBottom: -70,
                  marginTop: -130,
                }}
                src={"/HeroImage.png"}
                alt="Foto da fabi com braços crusados e olhar confiante"
              />
            </div>

            <div style={{ maxWidth: 550 }}>
              <Heading
                text="Olá!"
                fontFamily="SansitaOne"
                fontWeight="normal"
                color="#2C4D56"
                fontSize="7rem"
                type="h2"
                // fontWeight={600}
              />
              <Paragraph
                fontFamily="Roboto"
                fontWeight={300}
                letterSpacing={2}
                fontSize="1.8rem"
              >
                Meu nome é Fabiani,
                <br />
                sou profissional de marketing digital e web designer. <br />
                Trabalho com a criação de sites,{" "}
                <br className={breakpoints.hideOnMobile} /> gestão de mídias
                sociais, SEO, <br />
                análise de campanhas e gero <br /> resultados para um melhor{" "}
                <br />
                engajamento.
              </Paragraph>
            </div>
          </section>

          <section id="experiencias">
            <div className={breakpoints.hideOnMobile}>
              <div
                style={{
                  marginTop: 50,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <div>
                  <div className={alignments.center}>
                    <Heading
                      text="Onde Trabalhei"
                      fontFamily="Sansita"
                      fill
                      color="#fff"
                      fontSize="3.5rem"
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className={alignments.center}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        rowGap: 50,
                        columnGap: 30,
                      }}
                    >
                      {empresas.map((empresa) => (
                        <div className={alignments.center}>
                          <GridItem
                            key={empresa.nome}
                            title={empresa.nome}
                            image={empresa.logo}
                            start={empresa.inicio}
                            end={empresa.fim}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className={alignments.center}>
                    <Heading
                      text="Softwares"
                      fontFamily="Sansita"
                      fill
                      color="#fff"
                      fontSize="3.5rem"
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className={alignments.center}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        rowGap: 85,
                        columnGap: 10,
                      }}
                    >
                      {softwares.map((software) => (
                        <div className={alignments.center}>
                          <GridItem
                            key={software.nome}
                            title={software.nome}
                            image={software.logo}
                            // start={empresa.inicio}
                            // end={empresa.fim}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={breakpoints.hideOnDesktop}>
              <div
                style={{
                  marginTop: 50,
                  display: "flex",
                  flexDirection: "column",
                  gap: 70,
                }}
              >
                <div>
                  <div
                    style={{ marginBottom: 30 }}
                    className={alignments.center}
                  >
                    <Heading
                      text="Onde Trabalhei"
                      fontFamily="Sansita"
                      fill
                      color="#fff"
                      fontSize="3.5rem"
                    />
                  </div>
                  <br />

                  <div className={alignments.center}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        rowGap: 50,
                        columnGap: 30,
                      }}
                    >
                      {empresas.map((empresa) => (
                        <div
                          style={{ alignItems: "flex-start" }}
                          className={alignments.center}
                        >
                          <GridItem
                            key={empresa.nome}
                            title={empresa.nome}
                            image={empresa.logo}
                            start={empresa.inicio}
                            end={empresa.fim}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    className={alignments.center}
                    style={{ marginBottom: 50 }}
                  >
                    <Heading
                      text="Softwares"
                      fontFamily="Sansita"
                      fill
                      color="#fff"
                      fontSize="3.5rem"
                    />
                  </div>

                  <div className={alignments.center}>
                    <div
                      className={grid.grid2fr}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        rowGap: 85,
                        columnGap: 30,
                      }}
                    >
                      {softwares.map((software) => (
                        <div className={alignments.center}>
                          <GridItem
                            key={software.nome}
                            title={software.nome}
                            image={software.logo}
                            // start={empresa.inicio}
                            // end={empresa.fim}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="#educacao">
            <div className={alignments.center} style={{ marginTop: 50 }}>
              <Heading
                text="Educação"
                fontFamily="Sansita"
                fill
                color="#fff"
                fontSize="3.5rem"
              />
            </div>

            <div className={breakpoints.hideOnMobile}>
              <div className={`${alignments.center}`} style={{ marginTop: 50 }}>
                <img
                  src={"/area-educacao.png"}
                  style={{
                    width: "78%",
                  }}
                  alt={"Cursos e graduações da fabiani"}
                />
              </div>
            </div>
            <div className={breakpoints.hideOnDesktop}>
              <div className={alignments.center} style={{ marginTop: 50 }}>
                <img
                  src={"/formações-mobile.svg"}
                  style={{ width: "100%", marginTop: 50 }}
                  alt={"Cursos e graduações da fabiani"}
                />
              </div>
            </div>
            {/* <div className={breakpoints.hideOnMobile}>
              <a href="/CV-Fabiani-Queiroz-2024.pdf">
                <Image
                  src={"/QR-CODE-CV.png"}
                  width={500}
                  height={300}
                  alt={"QR code para o curriculo da fabiani"}
                />
              </a>
            </div> */}

            <div className={breakpoints.hideOnDesktop}>
              <a href="/CV-Fabiani-Queiroz-2024.pdf">
                <img
                  src={"/QR-CODE-CV-MOBILE.png"}
                  style={{ width: "90%" }}
                  alt={"QR code para o curriculo da fabiani"}
                />
              </a>
            </div>
          </section>
        </MargemHorizontal>

        <div className={breakpoints.hideOnMobile}>
          <div
            style={{
              backgroundColor: "#2C4D56",
              height: 350,
              borderTopLeftRadius: 500,
              borderTopRightRadius: 500,
              marginTop: 90,
            }}
          ></div>
        </div>
        <div className={breakpoints.hideOnDesktop}>
          <div
            style={{
              backgroundColor: "#2C4D56",
              height: 100,
              borderTopLeftRadius: 150,
              borderTopRightRadius: 150,
              marginTop: 30,
            }}
          ></div>
        </div>
        <section
          id="servicos"
          style={{
            backgroundColor: "#2C4D56",
            paddingTop: 10,
            paddingBottom: 50,
          }}
        >
          <MargemHorizontal>
            <div className={breakpoints.hideOnMobile}>
              <div className={alignments.center}>
                <Heading
                  text="Serviços Realizados"
                  fontFamily="SansitaOne"
                  color="#fff"
                  fontSize="8rem"
                  textAlign="center"
                />
              </div>
              <div style={{ marginTop: 250 }} />
            </div>
            <div className={breakpoints.hideOnDesktop}>
              <div className={alignments.center}>
                <Heading
                  text="Serviços Realizados"
                  fontFamily="SansitaOne"
                  color="#fff"
                  fontSize="5rem"
                  textAlign="center"
                />
              </div>
            </div>
          </MargemHorizontal>
          <div className={breakpoints.hideOnDesktop}>
            <Carrossel />
          </div>

          <div className={breakpoints.hideOnMobile}>
            <DesktopCarrossel />
          </div>
          <MargemHorizontal>
            <div
              className={`${alignments.center} ${alignments.spaceAround} ${breakpoints.columnOnMobile}`}
              style={{ marginTop: 50 }}
            >
              <div className={breakpoints.hideOnMobile}>
                <Image
                  src="/resultado-campanha-ads.png"
                  alt="Resultados gerados com camapnha no meta ads"
                  height={600}
                  width={350}
                />
              </div>

              <div
                className={breakpoints.hideOnDesktop}
                style={{ maxWidth: 300 }}
              >
                <Heading
                  text="Resultados Gerados Com o ADS"
                  fontFamily="Roboto"
                  color="#fff"
                  fontSize="5rem"
                  fontWeight={200}
                  textAlign="left"
                />
              </div>

              <div className={breakpoints.hideOnDesktop}>
                <img
                  src="/resultado-campanha-ads.png"
                  alt="Resultados gerados com camapnha no meta ads"
                  style={{ width: "100%" }}
                />
              </div>

              <div
                className={breakpoints.hideOnMobile}
                style={{ maxWidth: 300 }}
              >
                <Heading
                  text="Resultados Gerados Com o ADS"
                  fontFamily="Roboto"
                  color="#fff"
                  fontSize="6rem"
                  fontWeight={200}
                />
              </div>
            </div>
          </MargemHorizontal>
        </section>

        <MargemHorizontal>
          <div id="contato" />
          <div
            style={{
              backgroundColor: "#FB8351",
              marginTop: 60,
              borderRadius: 50,
              padding: "60px 20px",
            }}
          >
            <Heading
              fontFamily="SansitaOne"
              color="#fff"
              fontSize="4rem"
              fontWeight={200}
              textAlign="center"
            >
              Tem alguma ideia de <br /> Projeto?{" "}
              <span style={{ color: "#2C4D56" }}>Vamos conversar!</span>
            </Heading>
            <br />
            <div className={breakpoints.hideOnMobile}>
              <div
                className={`${alignments.center} ${alignments.spaceBetween}`}
                style={{
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: "#fff",
                  height: 90,
                  borderRadius: 50,
                  padding: "0 20px",
                  marginTop: 50,
                }}
              >
                <Image
                  src={"/icone-email.svg"}
                  width={100}
                  height={70}
                  alt="icone de caixa de email"
                />

                <input
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: "2rem",
                    width: "100%",
                    padding: "0 20px",
                    outline: 0,
                  }}
                  placeholder="Digite seu email"
                  type="text"
                />

                <div
                  style={{
                    backgroundColor: "#2C4D56",
                    color: "#fff",
                    cursor: "pointer",
                    padding: "20px 30px",
                    borderRadius: 50,
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "italic",
                    fontSize: "1.5rem",
                  }}
                >
                  Enviar
                </div>
              </div>
            </div>

            <div className={breakpoints.hideOnDesktop}>
              <div
                className={`${alignments.center} ${alignments.spaceBetween} ${breakpoints.columnOnMobile}`}
                style={{
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: "#fff",
                  height: "fit-content",
                  borderRadius: 50,
                  padding: "0 20px",
                  marginTop: 50,
                  paddingBottom: 10,
                  paddingTop: 10,
                  gap: 20,
                }}
              >
                <Image
                  src={"/icone-email.svg"}
                  width={50}
                  height={50}
                  alt="icone de caixa de email"
                />

                <input
                  style={{
                    background: "none",
                    border: "1px solid #fff",
                    borderRadius: 50,
                    color: "#fff",
                    fontSize: "1.2rem",
                    width: "100%",
                    padding: "10px 20px",
                    outline: 0,
                    textAlign: "center",
                  }}
                  placeholder="Digite seu email"
                  type="text"
                />

                <div
                  style={{
                    backgroundColor: "#2C4D56",
                    color: "#fff",
                    cursor: "pointer",
                    padding: "20px 30px",
                    borderRadius: 50,
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Enviar
                </div>
              </div>
            </div>
          </div>
        </MargemHorizontal>
      </main>
      <footer
        // className={alignments.center}
        style={{
          marginTop: 50,
          background: "#ADD4D3",
          // height: 250,
          paddingTop: 20,
          paddingBottom: 10,
        }}
      >
        <MargemHorizontal>
          <div
            className={`${alignments.center} ${alignments.spaceBetween} ${breakpoints.columnOnMobile}`}
            style={{
              width: "100%",
              // marginTop: 50,
              paddingBottom: 50,
              marginBottom: 10,
              borderBottom: "2px solid #2C4D56",
              height: "fit-content",
            }}
          >
            <nav className={breakpoints.columnOnMobile} style={{ gap: 10 }}>
              {dobras.map((dobra) => (
                <a
                  key={dobra.id}
                  href={`#${dobra.id}`}
                  style={{
                    padding: 10,
                    textDecoration: "none",
                    fontFamily: "Roboto, sans-serif",
                    color: "#333237",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "1.7rem",
                    textAlign: "center",
                  }}
                >
                  {dobra.title}
                </a>
              ))}
            </nav>
            <div className={alignments.spaceBetween}>
              <a
                style={{ padding: 10 }}
                href="https://www.linkedin.com/in/fabiani-queiroz/"
              >
                <Image
                  src="/linkedin-icon.svg"
                  alt="icone logo linkedin"
                  height={80}
                  width={80}
                />
              </a>
              <a
                style={{ padding: 10 }}
                href="https://api.whatsapp.com/send?phone=5511994463741&text=Oi Fabi! Gostei muito do seu portifólio e gostaria de saber mais sobre seu trabalho!"
              >
                <Image
                  src="/whatsapp-icon.svg"
                  alt="icone logo linkedin"
                  height={80}
                  width={80}
                />
              </a>
              <a style={{ padding: 10 }} href="fabianisilvaqueiroz@outlook.com">
                <Image
                  src="/gmail-icon.svg"
                  alt="icone logo linkedin"
                  height={80}
                  width={80}
                />
              </a>
            </div>
          </div>
          <span
            style={{
              marginTop: 10,
              paddingTop: 10,
              fontFamily: "Roboto, sans-serif",
              fontStyle: "italic",
              fontSize: "1.3rem",
              fontWeight: 300,
            }}
          >
            copyright 2024 .{" "}
          </span>
          <div className={alignments.center}></div>
        </MargemHorizontal>
      </footer>
    </>
  );
}
