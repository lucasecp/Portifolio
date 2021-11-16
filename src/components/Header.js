import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import imageHeader1 from "../assets/img/marginalia-web-programer.png";
import imageHeader2 from "../assets/img/cherry-lunch-at-work-1.png";
import imageHeader3 from "../assets/img/fogg-208.png";
import curriculumPdf from "../assets/img/png2pdf.pdf";
import { FaRegListAlt } from "react-icons/fa";
import { useTheme } from "../context/Theme";

export default () => {
  const { theme } = useTheme();
  const [activePhoto, setActivePhoto] = useState(1);
  
  useEffect(() => {
    const list = document.querySelector(".list");
    const div = document.querySelector(".listBg");

    window.addEventListener("click", (e) => {
      const el = e.target;
      if (!list.classList.contains("active")) {
        return;
      }
      if (el === div) {
        list.classList.remove("active");
      }
    });
    slidePhotos();
  }, []);

  function handleClick() {
    const element = document.querySelector(".list");
    element.classList.toggle("active");
  }

  const slidePhotos = () => {
    setInterval(() => {
      setActivePhoto((prev) => (prev < 3 ? prev + 1 : 1));
    }, 4000);
  };

  return (
    <>
      <nav className=" py-4">
        <div className="container-xl">
          <ul className="d-flex">
            <h1>
              <a href="/">Lucas</a>{" "}
            </h1>
            <div
              className="list"
              onClick={(e) => e.target === e.currentTarget && handleClick()}
            >
              <div>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#projects">Projetos</a>
                </li>
                <li>
                  <a href="#contacts">Contato</a>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <FaBars onClick={handleClick} className="hamburger " />
      </nav>

      <header className={theme === "dark" ? "dark-header" : ""}>
        <div className="container-xl">
          <div className="row ">
            <div className="col-md-7 ">
              <h2>
                Olá, me chamo Lucas. <br />
                Sou desenvolvedor <span> Front-end</span>
              </h2>
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
            <div className="col-md-5 container-img-header">
              <img
                alt="slideImg"
                src={imageHeader1}
                className={activePhoto === 1 && "active"}
              />
              <img
                alt="slideImg"
                src={imageHeader2}
                className={activePhoto === 2 && "active"}
              />
              <img
                alt="slideImg"
                src={imageHeader3}
                className={activePhoto === 3 && "active"}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
