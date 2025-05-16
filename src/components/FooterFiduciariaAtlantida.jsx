import logoFiduciaria from "../images/fiduciaria-logo.png";
import { TECollapse } from "tw-elements-react";
import { IoLocation } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const FooterFiduciariaAtlantida = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <footer className="bg-secondary-color text-white">
      <div className="container-page py-8">
        <div className="hidden md:flex gap-16 row-gap-4">
          <article className="self-center">
            <img
              decoding="async"
              loading="lazy"
              className="w-52"
              src={logoFiduciaria}
            />
          </article>

          <article>
            <h3 className="font-bold mb-5">Contacto</h3>

            <Link
              className="flex items-center hover:text-gray-400 animation-fade gap-2 text-sm font-light"
              to={`#`}
            >
              <MdEmail />
              info@suratlantida.comº
            </Link>

            <Link
              className="flex items-center hover:text-gray-400 animation-fade gap-2 text-sm font-light"
              to={`https://www.facebook.com/GrupoSurAtlantida`}
            >
              <FaFacebook />
              Facebook
            </Link>

            <Link
              className="flex items-center hover:text-gray-400 animation-fade gap-2 text-sm font-light"
              to={`#`}
            >
              <FaInstagram />
              Instagram
            </Link>

            <Link
              className="flex items-center hover:text-gray-400 animation-fade gap-2 text-sm font-light"
              to={`https://www.linkedin.com/in/grupo-sur-atlántida-87014b271/`}
            >
              <FaLinkedin />
              LinkedIn
            </Link>

            <Link
              className="flex items-center hover:text-gray-400 animation-fade gap-2 text-sm font-light"
              to={`#`}
            >
              <FaTwitter />
              Twitter
            </Link>
          </article>

          <article>
            <h3 className="font-bold mb-5">Dirección</h3>

            <div>
              <p>
                <IoLocation className="inline align-sub" /> Quito
              </p>
              <p className="text-sm font-[100]">
                La Floresta. Andalucía 324 y Francisco Galavis. Edificio
                Atlántida. P.O. Box 170525
              </p>
              <p className="text-sm font-[100]">+593 2 600 46 74</p>
            </div>

            <div className="mt-5">
              <p>
                <IoLocation className="inline align-sub" /> Guayaquil
              </p>
              <p className="text-sm font-[100]">
                Kennedy Norte, Av. Francisco de Orellana, Mz. 111 - Solar 1.
                Edificio World Trade Center, Torre A.
              </p>
              <p className="text-sm font-[100]">+593 4 600 46 74</p>
            </div>
          </article>
        </div>

        {/* Contacto */}
        <div className="md:hidden rounded-none border border-l-0 border-r-0 border-t-0">
          <img
            decoding="async"
            loading="lazy"
            className="w-52 mx-auto md:mb-0 mb-3"
            src={logoFiduciaria}
          />
        </div>

        {/* Contacto */}
        <div className="md:hidden rounded-none border border-l-0 border-r-0 border-t-0">
          <h2 className="mb-0" id="headingTwo">
            <button
              className={`${
                activeElement === "headingTwo" &&
                `text-white font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("headingTwo")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Contacto
              <span
                className={`${
                  activeElement === "headingTwo"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>

          <TECollapse
            show={activeElement === "headingTwo"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
           <Link
              className="flex items-center hover:text-gray-400 animation-fade gap-2 text-sm font-light"
              to={`#`}
            >
              <MdEmail />
              info@suratlantida.comº
            </Link>

            <Link
              className="flex items-center hover:text-gray-400 animation-fade gap-2 text-sm font-light"
              to={`https://www.facebook.com/GrupoSurAtlantida`}
            >
              <FaFacebook />
              Facebook
            </Link>

            <Link
              className="flex items-center hover:text-gray-400 animation-fade gap-2 text-sm font-light"
              to={`#`}
            >
              <FaInstagram />
              Instagram
            </Link>

            <Link
              className="flex items-center hover:text-gray-400 animation-fade gap-2 text-sm font-light"
              to={`https://www.linkedin.com/in/grupo-sur-atlántida-87014b271/`}
            >
              <FaLinkedin />
              LinkedIn
            </Link>

            <Link
              className="flex items-center hover:text-gray-400 animation-fade gap-2 text-sm font-light"
              to={`#`}
            >
              <FaTwitter />
              Twitter
            </Link>

            {/* <h3 className="border-t pt-2 mt-3 font-bold text-sm">
              Quiero hablar con un asesor
            </h3>
            <div className="flex gap-2 items-center">
              <FaWhatsapp className="size-5" />
              <h2 className="text-xl">0999547788</h2>
            </div> */}
          </TECollapse>
        </div>

        {/* Dirección */}
        <div className="md:hidden rounded-none border border-l-0 border-r-0 border-t-0">
          <h2 className="mb-0" id="headingThree">
            <button
              className={`${
                activeElement === "headingThree" &&
                `text-white font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("headingThree")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Dirección
              <span
                className={`${
                  activeElement === "headingThree"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>

          <TECollapse
            show={activeElement === "headingThree"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <p>
                <IoLocation className="inline align-sub" /> Quito
              </p>
              <p className="text-sm font-[100]">
                La Floresta. Andalucía 324 y Francisco Galavis. Edificio
                Atlántida. P.O. Box 170525
              </p>
              <p className="text-sm font-[100]">+593 2 600 46 74</p>
            </div>

            <div className="mt-5">
              <p>
                <IoLocation className="inline align-sub" /> Guayaquil
              </p>
              <p className="text-sm font-[100]">
                Kennedy Norte, Av. Francisco de Orellana, Mz. 111 - Solar 1.
                Edificio World Trade Center, Torre A.
              </p>
              <p className="text-sm font-[100]">+593 4 600 46 74</p>
            </div>
          </TECollapse>
        </div>
      </div>

      {/* Todos los derechos */}
      <div className="py-5 border-t">
        <p className="text-center">
          2025 Grupo Sur Atlántida | Todos los derechos reservados | Política de
          privacidad
        </p>
      </div>
    </footer>
  );
};

export default FooterFiduciariaAtlantida;
