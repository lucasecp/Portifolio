import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";

export default () => {

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

  }, []);

  function handleClick() {
    const element = document.querySelector(".list");
    element.classList.toggle("active");
  }


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
