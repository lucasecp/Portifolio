import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
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
                  <a href="#projects" onClick={handleClick}>Projetos</a>
                </li>
                <li>
                  <a href="#contacts" onClick={handleClick}>Contato</a>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <FaBars onClick={handleClick} className="hamburger " />
      </nav>
    </>
  );
};
