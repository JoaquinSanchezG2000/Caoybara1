import React from "react";

const InfoContacto = () => {
  return (
    <div className="container mx-auto py-8 w-[100%] justify-center  mt-[10rem] ">
      <div className="mb-20 flex flex-col items-center justify-center">
              <h2 className="text-[30px] m-10">Nuestras redes y Whatsapp</h2>
              <p className="text-[20px] m-10">Nuestra via mas directa de comunicacion !!</p>
        <div className="  flex justify-around">
                  {" "}
                  
          <img className="w-[5rem] hover:scale-125 cursor-pointer mx-[5rem]" src="/Insta.png" alt="" />
          <img className="w-[5rem] hover:scale-125 cursor-pointer mx-[5rem]" src="/whats.png" alt="" />
        </div>
      </div>
      <div className=" w-[50%] md:w-1/2 mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Formulario de Reclamos</h2>
        <form action="#" method="POST">
          {/* Campo: Nombre */}
          <div className="mb-4">
            <label htmlFor="nombre" className="block font-medium text-gray-700">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Campo: Correo electrónico */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Campo: Asunto */}
          <div className="mb-4">
            <label htmlFor="asunto" className="block font-medium text-gray-700">
              Asunto:
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              required
              className=" px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Campo: Mensaje */}
          <div className="mb-4">
            <label htmlFor="mensaje" className="block font-medium text-gray-700">
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              required
              className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoContacto;
