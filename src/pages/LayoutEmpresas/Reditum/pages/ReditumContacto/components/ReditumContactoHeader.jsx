import Formulario from "../../../../../../components/Formulario";
import { useState } from "react";

const ReditumContactoHeader = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center items-start md:gap-6 gap-0 md:max-w-none max-w-lg mx-auto">
        <article className="flex-[45%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color text-[1.9rem] leading-[1.3] font-bold family-nunito-semibold">
            Estamos a un mensaje de distancia para
            <span className="md:block inline">
              asesorarlo en su próximo proyecto
            </span>{" "}
          </h1>
          <div className="h-1 w-full bg-primary-color my-5"></div>

          <Formulario setIsLoading={setIsLoading}>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Nombre"
                  name="user_name"
                  type="text"
                  required
                />
              </div>

              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Apellido"
                  type="text"
                  name="sur_name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Teléfono"
                  type="text"
                  name="phone"
                  required
                />
              </div>

              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Email"
                  type="email"
                  name="email_id"
                  required
                />
              </div>
            </div>

            <textarea
              placeholder="Mensaje"
              name="message"
              className="h-36 outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
              required
            ></textarea>

            <div className="text-center mt-14">
              <button
                disabled={isLoading}
                type="submit"
                className={
                  isLoading
                    ? "btn-normal btn-disabled"
                    : "btn-normal button-red-primary"
                }
              >
                {isLoading ? "Cargando..." : "Conoce más"}
              </button>
            </div>
          </Formulario>
        </article>

        <article className="flex-1 mt-5">
          <h3 className="text-secondary-color text-xl family-nunito-black">
            Nuestras oficinas
          </h3>

          <div>
            <h5 className="text-secondary-color font-bold mt-5 mb-2 family-nunito-regular">
              Quito
            </h5>
            <ul className="text-secondary-color">
              <li>La Floresta</li>
              <li> Andalucía 324 y Francisco Galavis</li>
              <li> Edificio Atlántida</li>
              <li> P.O.Box 170525</li>
              <li> +59326004674</li>
            </ul>
          </div>

          <div>
            <h5 className="text-secondary-color font-bold mt-5 mb-2 family-nunito-regular">
              Guayaquil
            </h5>
            <ul className="text-secondary-color">
              <li>Kennedy Norte, Av. Francisco de</li>
              <li>Orellana, Mz. 111 - Solar 1</li>
              <li> Edificio World Trade Center, Torre A</li>
              <li>+59346004674</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ReditumContactoHeader;
