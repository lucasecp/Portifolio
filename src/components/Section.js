import React from "react";
import { useTheme } from "../context/Theme";

export default () => {
  const { theme } = useTheme();

  return (
    <>
      <section
        className={theme === "dark" ? "darkAbout about" : "about"}
        id="about"
      >
        <div className="section-container container-xl">
          <h2>Sobre mim</h2>
          <p>
            Me chamo Lucas, tenho 23 anos, sou formado em Análise e desenvolvimento de
            sistemas. Atuo como desenvolvedor front end criando sistemas
            utilizando React js, Javascript, typescript, HTML, CSS, styled-components,
            Material-UI e Bootstrap.
          </p>
          <p>
            Estou sempre estudando e buscando me atualizar, faço cursos online na
            Udemy e Origamid. Meus principais projetos estão aqui <a href="#projects"> abaixo</a>.
          </p>
        </div>
      </section>
    </>
  );
};
