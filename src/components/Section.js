import React from "react";
import { FaRegListAlt } from "react-icons/fa";
import curriculumPdf from "../assets/img/LucasPereiraPT.pdf";
import imageHeader1 from "../assets/img/avatar.png";
import { useTheme } from "../context/Theme";

export default () => {
  const { theme } = useTheme();

  return (
    <>
      <header className={theme === "dark" ? "dark-header" : ""}>
        <div className="container-xl">
          <div className="row ">
            <div className="col-md-5 container-img-header justify-content-center">
              <img alt="slideImg" src={imageHeader1} className={"active"} />
            </div>
            <div className="col-md-7 about">
              <h2>
                Olá! me chamo Lucas <br />
              </h2>
              <div className="section-container">
                <p>
                  Sou desenvolvedor front end atuando há mais de 3 anos no
                  mercado. Venho construindo, mantendo e desenvolvendo sistemas
                  utilizando as principais ferramentas e tecnologias do mercado.
                  <br/>
                  Trabalhei em um projeto de site chamado Rita Saúde.
                  Por meio dele os clientes 
                  têm acesso a serviços de saúde pelo Brasil.
                  Desenvolvido com React e suas features atuais. 
                  
                </p>
              </div>
              <a
                href={curriculumPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-btn"
              >
                <FaRegListAlt className="mr-1" />
                Download Cv
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
